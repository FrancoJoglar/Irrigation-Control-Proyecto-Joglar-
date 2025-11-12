import React, { useState, useMemo, useCallback } from 'react';
import SideMenu from './components/Header'; // Header is now repurposed as SideMenu
import FilterBar from './components/FilterBar';
import IrrigationRequestList from './components/IrrigationRequestList';
import IrrigationRequestForm from './components/IrrigationRequestForm';
import Management from './components/Management';
import Reports from './components/Reports';
import { IrrigationRequest, Equipment, TaskStatus } from './types';
import { 
  MOCK_REQUESTS,
  INITIAL_REQUESTERS,
  INITIAL_IRRIGATION_EQUIPMENT,
  INITIAL_FERTILIZERS
} from './constants';
import { PlusIcon, ClipboardListIcon, DropletIcon, CheckIcon, ExportIcon, ChartIcon, LeafIcon, AlertTriangleIcon } from './components/Icons';

declare const XLSX: any;

type View = 'dashboard' | 'management' | 'reports';
type MenuView = 'all' | 'completed' | 'scheduled' | 'requested' | 'pending';

// --- Summary Components ---
const SummaryCard: React.FC<{ icon: React.ReactNode; title: string; value: string; color: string }> = ({ icon, title, value, color }) => {
    return (
        <div className="bg-base-200 p-4 rounded-lg shadow-md flex items-center gap-4 border-l-4" style={{ borderColor: color }}>
            <div className="p-3 rounded-full" style={{ backgroundColor: `${color}20`}}>
                {icon}
            </div>
            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <p className="text-2xl font-bold text-base-content">{value}</p>
            </div>
        </div>
    );
};

const SummaryDashboard: React.FC<{ requests: IrrigationRequest[] }> = ({ requests }) => {
    const totalRequests = requests.length;
    
    const totalWater = requests.reduce((sum, req) => {
        if (req.irrigationStatus === TaskStatus.COMPLETED) {
            return sum + req.totalWaterApplied;
        }
        return sum;
    }, 0);

    const completedIrrigation = requests.filter(req => req.irrigationStatus === TaskStatus.COMPLETED).length;
    const totalFertigation = requests.filter(req => req.isFertigation).length;

    return (
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SummaryCard 
                icon={<ClipboardListIcon className="text-blue-500" />}
                title="Solicitudes Totales"
                value={totalRequests.toLocaleString()}
                color="#3b82f6" // blue-500
            />
            <SummaryCard 
                icon={<DropletIcon className="text-sky-500" />}
                title="Agua Aplicada (m³)"
                value={totalWater.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                color="#0ea5e9" // sky-500
            />
            <SummaryCard 
                icon={<CheckIcon className="text-green-500 h-6 w-6" />}
                title="Riegos Completados"
                value={completedIrrigation.toLocaleString()}
                color="#22c55e" // green-500
            />
            <SummaryCard 
                icon={<LeafIcon className="text-teal-500 h-6 w-6" />}
                title="Total Fertirriegos"
                value={totalFertigation.toLocaleString()}
                color="#14b8a6" // teal-500
            />
        </div>
    );
};
// --- End Summary Components ---

// --- Modals ---
const DeleteConfirmationModal: React.FC<{
  request: IrrigationRequest | null;
  onConfirm: () => void;
  onClose: () => void;
}> = ({ request, onConfirm, onClose }) => {
  if (!request) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="delete-modal-title">
      <div className="bg-base-200 rounded-lg shadow-xl w-full max-w-md" onClick={e => e.stopPropagation()}>
        <div className="p-6">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                <AlertTriangleIcon className="h-6 w-6 text-red-600"/>
            </div>
            <h3 id="delete-modal-title" className="text-lg leading-6 font-medium text-gray-900 mt-3">
              Confirmar Eliminación
            </h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-gray-500">
                ¿Estás seguro de que quieres eliminar la solicitud de riego del <span className="font-semibold">{request.irrigationDate}</span> en el sector <span className="font-semibold">{request.sector}</span>?
              </p>
              <p className="text-xs text-gray-400 mt-2">Esta acción no se puede deshacer.</p>
            </div>
          </div>
        </div>
        <div className="bg-base-300 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-2">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={onConfirm}
          >
            Eliminar
          </button>
           <button
            type="button"
            onClick={onClose}
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
// --- End Modals ---


function App() {
  // State for master data
  const [requesters, setRequesters] = useState<string[]>(INITIAL_REQUESTERS);
  const [equipmentList, setEquipmentList] = useState<Equipment[]>(INITIAL_IRRIGATION_EQUIPMENT);
  const [fertilizersList, setFertilizersList] = useState<string[]>(INITIAL_FERTILIZERS);
  
  // State for requests and UI
  const [requests, setRequests] = useState<IrrigationRequest[]>(MOCK_REQUESTS);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingRequest, setEditingRequest] = useState<IrrigationRequest | null>(null);
  const [activeView, setActiveView] = useState<View>('dashboard');
  const [activeMenu, setActiveMenu] = useState<MenuView>('all');
  const [requestToDelete, setRequestToDelete] = useState<IrrigationRequest | null>(null);

  // State for filters
  const [filterDate, setFilterDate] = useState('');
  const [filterEquipment, setFilterEquipment] = useState('');
  const [filterSector, setFilterSector] = useState('');
  const [filterRequester, setFilterRequester] = useState('');
  const [filterFertilizer, setFilterFertilizer] = useState('');

  const handleClearFilters = useCallback(() => {
    setFilterDate('');
    setFilterEquipment('');
    setFilterSector('');
    setFilterRequester('');
    setFilterFertilizer('');
  }, []);

  const filteredRequests = useMemo(() => {
    let baseRequests: IrrigationRequest[];
    switch (activeMenu) {
        case 'completed':
            baseRequests = requests.filter(req => req.irrigationStatus === TaskStatus.COMPLETED);
            break;
        case 'scheduled':
            baseRequests = requests.filter(req => req.irrigationStatus === TaskStatus.SCHEDULED);
            break;
        case 'requested':
            baseRequests = requests.filter(req => req.irrigationStatus === TaskStatus.REQUESTED);
            break;
        case 'pending':
            baseRequests = requests.filter(req => req.irrigationStatus === TaskStatus.PENDING);
            break;
        case 'all':
        default:
            baseRequests = requests;
            break;
    }

    return baseRequests
      .filter(req => filterDate ? req.irrigationDate === filterDate : true)
      .filter(req => filterEquipment ? req.irrigationSystem === filterEquipment : true)
      .filter(req => filterSector ? req.sector === filterSector : true)
      .filter(req => filterRequester ? req.requesterName === filterRequester : true)
      .filter(req => filterFertilizer ? req.fertilizers.some(f => f.name === filterFertilizer) : true)
      .sort((a, b) => new Date(b.irrigationDate).getTime() - new Date(a.irrigationDate).getTime());
  }, [requests, activeMenu, filterDate, filterEquipment, filterSector, filterRequester, filterFertilizer]);

    const handleExportToExcel = useCallback(() => {
    if (filteredRequests.length === 0) {
        alert("No hay datos filtrados para exportar.");
        return;
    }

    // Create a map of fertilizer names to their units for accurate column headers.
    const fertilizerUnits = new Map<string, string>();
    requests.forEach(req => {
        if (req.isFertigation) {
            req.fertilizers.forEach(fert => {
                if (!fertilizerUnits.has(fert.name)) {
                    fertilizerUnits.set(fert.name, fert.unit);
                }
            });
        }
    });

    // Use the master list of fertilizers to define the columns for consistency.
    const fertilizerColumns = fertilizersList;
    
    // Create headers with units for clarity, e.g., "Urea (kg)" or "Ácido Fosfórico (L)"
    const fertilizerHeadersWithUnits = fertilizerColumns.map(fertName => {
        const unit = fertilizerUnits.get(fertName) || 'kg'; // Default to 'kg' if not found
        return `${fertName} (${unit})`;
    });

    const dataToExport = filteredRequests.map(req => {
      // Base row data
      const row: { [key: string]: any } = {
        'Fecha': req.irrigationDate,
        'Solicitante': req.requesterName,
        'Equipo': req.irrigationSystem,
        'Sector': req.sector,
        'Duración (hrs)': req.durationHours,
        'Agua Aplicada (m³)': req.totalWaterApplied,
        'Estado Riego': req.irrigationStatus,
        'Fertirriego': req.isFertigation ? 'Sí' : 'No',
        'Notas': req.notes || '',
      };

      // Initialize all fertilizer columns with 0
      fertilizerHeadersWithUnits.forEach(header => {
        row[header] = 0;
      });

      // Populate with actual quantities for the request's fertilizers
      if (req.isFertigation) {
          req.fertilizers.forEach(f => {
              // Reconstruct the header name using the fertilizer's own unit to match
              const headerName = `${f.name} (${f.unit})`;
              if (fertilizerHeadersWithUnits.includes(headerName)) {
                  row[headerName] = f.quantity;
              }
          });
      }
      
      return row;
    });

    // Define the exact order of headers for the Excel sheet
    const headerOrder = [
        'Fecha', 'Solicitante', 'Equipo', 'Sector', 'Duración (hrs)', 
        'Agua Aplicada (m³)', 'Estado Riego', 'Fertirriego',
        ...fertilizerHeadersWithUnits, // Place fertilizer columns after main data
        'Notas'
    ];
    
    const worksheet = XLSX.utils.json_to_sheet(dataToExport, { header: headerOrder });
    
    // Auto-size columns for better readability
    const columnWidths = headerOrder.map((key) => {
      const headerLength = key.length;
      const maxLength = Math.max(
        ...dataToExport.map(item => String(item[key] || '').length)
      );
      return { wch: Math.max(headerLength, maxLength) + 2 };
    });

    worksheet['!cols'] = columnWidths;

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Solicitudes');

    XLSX.writeFile(workbook, `Reporte_Riego_${new Date().toISOString().split('T')[0]}.xlsx`);
  }, [filteredRequests, fertilizersList, requests]);

  const handleOpenForm = (request: IrrigationRequest | null = null) => {
    setEditingRequest(request);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setEditingRequest(null);
    setIsFormOpen(false);
  };

  const handleFormSubmit = (requestData: Omit<IrrigationRequest, 'id'> | IrrigationRequest) => {
    if ('id' in requestData) {
      // Editing existing request
      setRequests(requests.map(r => r.id === requestData.id ? requestData : r));
    } else {
      // Adding new request
      const newRequest: IrrigationRequest = {
        ...requestData,
        id: `req_${Date.now()}`,
      };
      setRequests([newRequest, ...requests]);
    }
    handleCloseForm();
  };
  
  const handleTaskStatusChange = (id: string, newStatus: TaskStatus) => {
    setRequests(requests.map(r => {
      if (r.id === id) {
        return { ...r, irrigationStatus: newStatus };
      }
      return r;
    }));
  };
  
  const handleOpenDeleteModal = (request: IrrigationRequest) => {
    setRequestToDelete(request);
  };

  const handleConfirmDelete = () => {
      if (!requestToDelete) return;
      setRequests(requests.filter(r => r.id !== requestToDelete.id));
      setRequestToDelete(null);
  };


  const handleSaveManagementData = (
    updatedRequesters: string[],
    updatedEquipment: Equipment[],
    updatedFertilizers: string[]
  ) => {
    setRequesters(updatedRequesters);
    setEquipmentList(updatedEquipment);
    setFertilizersList(updatedFertilizers);
    setActiveView('dashboard');
  };

  const dashboardTitles: { [key in MenuView]: string } = {
    all: 'Todas las Solicitudes',
    requested: 'Nuevas Solicitudes',
    scheduled: 'Riegos Programados',
    pending: 'Riegos Pendientes de Completar',
    completed: 'Historial de Riegos Completados',
  };

  const renderContent = () => {
    switch (activeView) {
      case 'management':
        return (
          <Management
            initialRequesters={requesters}
            initialEquipment={equipmentList}
            initialFertilizers={fertilizersList}
            onSave={handleSaveManagementData}
            onCancel={() => setActiveView('dashboard')}
          />
        );
      case 'reports':
        return <Reports 
            requests={requests} 
            equipmentList={equipmentList} 
            fertilizersList={fertilizersList} 
            onBack={() => setActiveView('dashboard')} 
        />;
      case 'dashboard':
      default:
        return (
          <main className="flex-1 overflow-y-auto container mx-auto p-4 md:p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-base-content">
                {dashboardTitles[activeMenu]}
              </h2>
              <div className="flex items-center gap-2">
                 <button
                  onClick={() => setActiveView('reports')}
                  className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg transition"
                  title="Analizar uso de fertilizantes por sector"
                >
                  <ChartIcon className="h-5 w-5"/>
                  Fertilizantes
                </button>
                 <button
                  onClick={handleExportToExcel}
                  disabled={filteredRequests.length === 0}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                  title="Exportar la vista actual a Excel"
                >
                  <ExportIcon />
                  Exportar
                </button>
                <button 
                  onClick={() => handleOpenForm()}
                  className="flex items-center gap-2 bg-brand-primary hover:bg-brand-secondary text-white font-bold py-2 px-4 rounded-lg transition"
                >
                  <PlusIcon />
                  Nueva Solicitud
                </button>
              </div>
            </div>

            <SummaryDashboard requests={filteredRequests} />

            <FilterBar 
              filterDate={filterDate}
              onDateChange={setFilterDate}
              filterEquipment={filterEquipment}
              onEquipmentChange={setFilterEquipment}
              filterSector={filterSector}
              onSectorChange={setFilterSector}
              equipmentList={equipmentList}
              requesters={requesters}
              fertilizersList={fertilizersList}
              filterRequester={filterRequester}
              onRequesterChange={setFilterRequester}
              filterFertilizer={filterFertilizer}
              onFertilizerChange={setFilterFertilizer}
              onClearFilters={handleClearFilters}
            />

            <IrrigationRequestList 
              requests={filteredRequests}
              onEdit={handleOpenForm}
              onTaskStatusChange={handleTaskStatusChange}
              onDelete={handleOpenDeleteModal}
            />
          </main>
        );
    }
  };

  return (
    <div className="flex h-screen bg-base-100 text-base-content">
      <SideMenu 
        activeMenu={activeMenu}
        activeView={activeView}
        onSelectMenu={(menu) => {
            setActiveView('dashboard');
            setActiveMenu(menu);
        }}
        onShowManagement={() => setActiveView('management')}
        onShowReports={() => setActiveView('reports')}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        {renderContent()}
      </div>
      <IrrigationRequestForm
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        onSubmit={handleFormSubmit}
        initialData={editingRequest}
        requesters={requesters}
        equipment={equipmentList}
        fertilizersList={fertilizersList}
        allRequests={requests}
      />
      <DeleteConfirmationModal
        request={requestToDelete}
        onClose={() => setRequestToDelete(null)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}

export default App;
