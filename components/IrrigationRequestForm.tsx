import React, { useState, useEffect, useMemo } from 'react';
import { IrrigationRequest, Fertilizer, TaskStatus, Equipment } from '../types';
import { PlusIcon, TrashIcon, LeafIcon } from './Icons';

interface IrrigationRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (request: Omit<IrrigationRequest, 'id'> | IrrigationRequest) => void;
  initialData?: IrrigationRequest | null;
  requesters: string[];
  equipment: Equipment[];
  fertilizersList: string[];
  allRequests: IrrigationRequest[];
}

const getInitialFormData = (requesters: string[], equipment: Equipment[]): Omit<IrrigationRequest, 'id'> => {
  const firstEquipment = equipment[0];
  const firstSector = firstEquipment?.sectors[0];
  const initialFlow = firstSector?.nominalFlow || 0;
  const isFertigation = false;

  return {
    requesterName: requesters[0] || '',
    sector: firstSector?.id || '',
    irrigationSystem: firstEquipment?.name || '',
    irrigationDate: new Date().toISOString().split('T')[0],
    durationHours: 1,
    isFertigation,
    fertilizers: [],
    irrigationStatus: TaskStatus.REQUESTED,
    fertigationStatus: isFertigation ? TaskStatus.REQUESTED : TaskStatus.NOT_APPLICABLE,
    notes: '',
    totalWaterApplied: initialFlow * 1,
  };
};

const SectorHistory: React.FC<{ history: IrrigationRequest[] }> = ({ history }) => {
    if (history.length === 0) {
        return (
            <div className="md:col-span-2 mt-2 p-3 bg-base-300 rounded-lg border border-dashed border-gray-300 text-center">
                <p className="text-sm text-gray-500">No hay riegos completados recientes para este sector.</p>
            </div>
        );
    }

    return (
        <div className="md:col-span-2 mt-2 p-4 bg-base-300 rounded-lg border border-gray-200">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Historial Reciente del Sector</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
                {history.map(req => (
                    <div key={req.id} className="text-xs p-2 bg-base-100 rounded shadow-sm">
                        <p className="font-bold text-gray-800">{new Date(req.irrigationDate + 'T00:00:00').toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                        {req.isFertigation && req.fertilizers.length > 0 ? (
                            <ul className="text-gray-600">
                                {req.fertilizers.map(f => (
                                    <li key={f.id} className="flex items-center gap-1">
                                        <LeafIcon className="h-3 w-3 text-green-600"/>
                                        <span>{f.name}: <strong>{f.quantity} {f.unit}</strong></span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500 italic">Solo riego (sin fertilizantes).</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const IrrigationRequestForm: React.FC<IrrigationRequestFormProps> = ({ isOpen, onClose, onSubmit, initialData, requesters, equipment, fertilizersList, allRequests }) => {
  const [formData, setFormData] = useState<Omit<IrrigationRequest, 'id'>>(getInitialFormData(requesters, equipment));

  const availableSectors = useMemo(() => {
    return equipment.find(eq => eq.name === formData.irrigationSystem)?.sectors || [];
  }, [formData.irrigationSystem, equipment]);

  const sectorHistory = useMemo(() => {
    if (!formData.irrigationSystem || !formData.sector) {
        return [];
    }
    return allRequests
        .filter(req => 
            req.irrigationSystem === formData.irrigationSystem &&
            req.sector === formData.sector &&
            req.irrigationStatus === TaskStatus.COMPLETED &&
            (!initialData || req.id !== initialData.id)
        )
        .sort((a, b) => new Date(b.irrigationDate).getTime() - new Date(a.irrigationDate).getTime())
        .slice(0, 5);
  }, [formData.irrigationSystem, formData.sector, allRequests, initialData]);

  useEffect(() => {
    const selectedEquipment = equipment.find(e => e.name === formData.irrigationSystem);
    const selectedSector = selectedEquipment?.sectors.find(s => s.id === formData.sector);
    const nominalFlow = selectedSector?.nominalFlow || 0;
    const duration = formData.durationHours || 0;
    const total = nominalFlow * duration;
    setFormData(prev => ({ ...prev, totalWaterApplied: total }));
  }, [formData.irrigationSystem, formData.sector, formData.durationHours, equipment]);


  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData(getInitialFormData(requesters, equipment));
    }
  }, [initialData, isOpen, requesters, equipment]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({ 
            ...prev,
            isFertigation: checked, 
            fertilizers: checked ? prev.fertilizers : [],
            fertigationStatus: checked ? TaskStatus.REQUESTED : TaskStatus.NOT_APPLICABLE
        }));
    } else if (name === 'irrigationSystem') {
        const selectedEquipment = equipment.find(eq => eq.name === value);
        const firstSectorId = selectedEquipment?.sectors[0]?.id || '';
        setFormData(prev => ({ 
            ...prev,
            irrigationSystem: value,
            sector: firstSectorId
        }));
    } else {
        setFormData(prev => ({ ...prev, [name]: type === 'number' ? parseFloat(value) : value }));
    }
  };

  const handleFertilizerChange = (index: number, field: 'name' | 'quantity' | 'unit', value: string | number) => {
    const newFertilizers = [...formData.fertilizers];
    newFertilizers[index] = { ...newFertilizers[index], [field]: value };
    setFormData(prev => ({ ...prev, fertilizers: newFertilizers }));
  };

  const addFertilizer = () => {
    setFormData(prev => ({
      ...prev,
      fertilizers: [...prev.fertilizers, { id: `new_${Date.now()}`, name: fertilizersList[0] || '', quantity: 0, unit: 'kg' }],
    }));
  };

  const removeFertilizer = (index: number) => {
    setFormData(prev => ({
      ...prev,
      fertilizers: prev.fertilizers.filter((_, i) => i !== index),
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.requesterName) {
        alert("Por favor, seleccione un solicitante.");
        return;
    }
    if (initialData) {
        onSubmit({ ...formData, id: initialData.id });
    } else {
        onSubmit(formData);
    }
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="form-title">
      <div className="bg-base-200 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            <h2 id="form-title" className="text-2xl font-bold mb-6 text-base-content">{initialData ? 'Editar Solicitud' : 'Nueva Solicitud de Riego'}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="requesterName" className="block text-sm font-medium text-gray-700 mb-1">Nombre del Solicitante</label>
                <select id="requesterName" name="requesterName" value={formData.requesterName} onChange={handleChange} className="w-full bg-base-300 border border-gray-300 rounded-md p-2 focus:ring-brand-primary focus:border-brand-primary" required>
                    <option value="" disabled>Seleccione un solicitante</option>
                    {requesters.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
               <div>
                <label htmlFor="irrigationSystem" className="block text-sm font-medium text-gray-700 mb-1">Equipo de Riego</label>
                <select id="irrigationSystem" name="irrigationSystem" value={formData.irrigationSystem} onChange={handleChange} className="w-full bg-base-300 border border-gray-300 rounded-md p-2 focus:ring-brand-primary focus:border-brand-primary">
                  {equipment.map(eq => <option key={eq.name} value={eq.name}>{eq.name}</option>)}
                </select>
              </div>
               <div>
                <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">Sector</label>
                <select id="sector" name="sector" value={formData.sector} onChange={handleChange} className="w-full bg-base-300 border border-gray-300 rounded-md p-2 focus:ring-brand-primary focus:border-brand-primary" required>
                  {availableSectors.map(s => <option key={s.id} value={s.id}>Sector {s.id}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="irrigationDate" className="block text-sm font-medium text-gray-700 mb-1">Fecha de Riego</label>
                <input id="irrigationDate" type="date" name="irrigationDate" value={formData.irrigationDate} onChange={handleChange} className="w-full bg-base-300 border border-gray-300 rounded-md p-2 focus:ring-brand-primary focus:border-brand-primary" required />
              </div>
              
              <SectorHistory history={sectorHistory} />

              <div>
                <label htmlFor="durationHours" className="block text-sm font-medium text-gray-700 mb-1">Duración (horas)</label>
                <input id="durationHours" type="number" name="durationHours" value={formData.durationHours} onChange={handleChange} min="0.1" step="0.1" className="w-full bg-base-300 border border-gray-300 rounded-md p-2 focus:ring-brand-primary focus:border-brand-primary" required />
              </div>
              <div className="flex flex-col justify-end">
                <div className="bg-base-300 p-2 rounded-md text-center">
                    <span className="text-sm font-medium text-gray-600">Total de agua a aplicar:</span>
                    <p className="font-bold text-lg text-base-content">{formData.totalWaterApplied.toFixed(2)} m³</p>
                </div>
              </div>
               <div className="md:col-span-2">
                 <label htmlFor="isFertigation" className="flex items-center gap-2 cursor-pointer">
                    <input id="isFertigation" type="checkbox" name="isFertigation" checked={formData.isFertigation} onChange={handleChange} className="h-5 w-5 rounded text-brand-primary bg-gray-200 border-gray-300 focus:ring-brand-secondary" />
                    <span className="text-sm font-medium text-gray-700">Incluir Fertirriego</span>
                </label>
              </div>
            </div>

            {formData.isFertigation && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Fertilizantes</h3>
                {formData.fertilizers.map((fert, index) => (
                  <div key={fert.id} className="grid grid-cols-1 sm:grid-cols-[1fr,auto,auto,auto] items-center gap-2 mb-2">
                    <select value={fert.name} onChange={e => handleFertilizerChange(index, 'name', e.target.value)} className="w-full bg-base-300 border border-gray-300 rounded-md p-2 focus:ring-brand-primary" required>
                        <option value="" disabled>Seleccione un fertilizante</option>
                        {fertilizersList.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                    <input type="number" placeholder="Cantidad" value={fert.quantity} onChange={e => handleFertilizerChange(index, 'quantity', parseFloat(e.target.value) || 0)} className="w-full sm:w-24 bg-base-300 border border-gray-300 rounded-md p-2 focus:ring-brand-primary" required />
                    <input type="text" placeholder="Unidad" value={fert.unit} onChange={e => handleFertilizerChange(index, 'unit', e.target.value)} className="w-full sm:w-20 bg-base-300 border border-gray-300 rounded-md p-2 focus:ring-brand-primary" required />
                    <button type="button" onClick={() => removeFertilizer(index)} className="p-2 text-red-500 hover:text-red-600 transition justify-self-end sm:justify-self-center" aria-label="Eliminar fertilizante">
                        <TrashIcon />
                    </button>
                  </div>
                ))}
                <button type="button" onClick={addFertilizer} className="mt-2 flex items-center gap-2 text-sm text-brand-primary hover:text-brand-secondary font-semibold">
                  <PlusIcon /> Agregar Fertilizante
                </button>
              </div>
            )}
            
            <div className="mt-6">
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Notas Adicionales</label>
              <textarea id="notes" name="notes" value={formData.notes ?? ''} onChange={handleChange} rows={3} className="w-full bg-base-300 border border-gray-300 rounded-md p-2 focus:ring-brand-primary focus:border-brand-primary"></textarea>
            </div>

          </div>
          <div className="bg-base-300 p-4 flex justify-end gap-3">
            <button type="button" onClick={onClose} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg">Cancelar</button>
            <button type="submit" className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-2 px-4 rounded-lg">{initialData ? 'Guardar Cambios' : 'Crear Solicitud'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IrrigationRequestForm;
