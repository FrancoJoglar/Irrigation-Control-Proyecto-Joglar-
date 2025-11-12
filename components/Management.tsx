import React, { useState } from 'react';
import { Equipment, SectorInfo } from '../types';
import { PlusIcon, TrashIcon, EditIcon, SaveIcon, CloseIcon } from './Icons';

interface ManagementProps {
  initialRequesters: string[];
  initialEquipment: Equipment[];
  initialFertilizers: string[];
  onSave: (requesters: string[], equipment: Equipment[], fertilizers: string[]) => void;
  onCancel: () => void;
}

const Management: React.FC<ManagementProps> = ({ initialRequesters, initialEquipment, initialFertilizers, onSave, onCancel }) => {
  const [activeTab, setActiveTab] = useState<'requesters' | 'equipment' | 'fertilizers'>('requesters');
  
  const [requesters, setRequesters] = useState<string[]>(initialRequesters);
  const [newRequester, setNewRequester] = useState('');

  const [equipment, setEquipment] = useState<Equipment[]>(initialEquipment);
  const [editingEquipmentName, setEditingEquipmentName] = useState<string | null>(null);
  const [editedEquipmentData, setEditedEquipmentData] = useState<Equipment | null>(null);

  const [fertilizers, setFertilizers] = useState<string[]>(initialFertilizers);
  const [newFertilizer, setNewFertilizer] = useState('');

  const handleAddRequester = () => {
    const trimmedRequester = newRequester.trim();
    if (trimmedRequester && !requesters.includes(trimmedRequester)) {
      setRequesters([...requesters, trimmedRequester]);
      setNewRequester('');
    }
  };

  const handleDeleteRequester = (requesterToDelete: string) => {
    setRequesters(requesters.filter(r => r !== requesterToDelete));
  };
  
  const handleStartEditEquipment = (equip: Equipment) => {
    setEditingEquipmentName(equip.name);
    setEditedEquipmentData(JSON.parse(JSON.stringify(equip))); // Deep copy to avoid direct mutation
  };

  const handleCancelEditEquipment = () => {
    setEditingEquipmentName(null);
    setEditedEquipmentData(null);
  };
  
  const handleUpdateEquipment = () => {
    if (!editedEquipmentData) return;

    const newEquipmentList = equipment.map(e => 
        e.name === editingEquipmentName ? editedEquipmentData : e
    );
    setEquipment(newEquipmentList);
    handleCancelEditEquipment();
  };

  const handleEquipmentDataChange = (field: 'name', value: string) => {
      if (!editedEquipmentData) return;
      setEditedEquipmentData({...editedEquipmentData, [field]: value});
  };

  const handleSectorChange = (index: number, field: 'id' | 'nominalFlow', value: string | number) => {
    if (!editedEquipmentData) return;
    const newSectors = [...editedEquipmentData.sectors];
    const sector = { ...newSectors[index], [field]: value };
    newSectors[index] = sector;
    setEditedEquipmentData({ ...editedEquipmentData, sectors: newSectors });
  };
  
  const handleAddSector = () => {
    if (!editedEquipmentData) return;
    const newSectors: SectorInfo[] = [...editedEquipmentData.sectors, {id: '', nominalFlow: 0}];
    setEditedEquipmentData({...editedEquipmentData, sectors: newSectors});
  };

  const handleRemoveSector = (index: number) => {
    if (!editedEquipmentData) return;
    const newSectors = editedEquipmentData.sectors.filter((_, i) => i !== index);
    setEditedEquipmentData({...editedEquipmentData, sectors: newSectors});
  };

  const handleDeleteEquipment = (equipmentNameToDelete: string) => {
    setEquipment(equipment.filter(e => e.name !== equipmentNameToDelete));
  };
  
  const handleAddFertilizer = () => {
    const trimmedFertilizer = newFertilizer.trim();
    if (trimmedFertilizer && !fertilizers.includes(trimmedFertilizer)) {
      setFertilizers([...fertilizers, trimmedFertilizer]);
      setNewFertilizer('');
    }
  };

  const handleDeleteFertilizer = (fertilizerToDelete: string) => {
    setFertilizers(fertilizers.filter(f => f !== fertilizerToDelete));
  };

  const handleSave = () => {
    onSave(requesters, equipment, fertilizers);
  };

  return (
    <main className="container mx-auto p-4 md:p-6">
      <div className="bg-base-200 shadow-lg rounded-xl p-4 md:p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-base-content mb-6">Gestión de Datos</h2>

        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-6" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('requesters')}
              className={`${
                activeTab === 'requesters'
                  ? 'border-brand-primary text-brand-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Solicitantes
            </button>
            <button
              onClick={() => setActiveTab('equipment')}
              className={`${
                activeTab === 'equipment'
                  ? 'border-brand-primary text-brand-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Equipos y Sectores
            </button>
             <button
              onClick={() => setActiveTab('fertilizers')}
              className={`${
                activeTab === 'fertilizers'
                  ? 'border-brand-primary text-brand-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Fertilizantes
            </button>
          </nav>
        </div>

        {activeTab === 'requesters' && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Lista de Solicitantes</h3>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newRequester}
                onChange={(e) => setNewRequester(e.target.value)}
                placeholder="Nuevo solicitante"
                className="flex-grow bg-base-300 border border-gray-300 rounded-md p-2 focus:ring-brand-primary focus:border-brand-primary"
              />
              <button onClick={handleAddRequester} className="flex items-center gap-1 bg-brand-primary hover:bg-brand-secondary text-white font-bold py-2 px-4 rounded-lg">
                <PlusIcon className="h-5 w-5"/> Añadir
              </button>
            </div>
            <ul className="space-y-2">
              {requesters.map((r) => (
                <li key={r} className="bg-base-300 p-3 rounded-md flex justify-between items-center">
                  <span>{r}</span>
                  <button onClick={() => handleDeleteRequester(r)} className="p-2 text-red-500 hover:text-red-600 transition" aria-label={`Eliminar a ${r}`}>
                    <TrashIcon />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {activeTab === 'fertilizers' && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Lista de Fertilizantes</h3>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newFertilizer}
                onChange={(e) => setNewFertilizer(e.target.value)}
                placeholder="Nuevo fertilizante"
                className="flex-grow bg-base-300 border border-gray-300 rounded-md p-2 focus:ring-brand-primary focus:border-brand-primary"
              />
              <button onClick={handleAddFertilizer} className="flex items-center gap-1 bg-brand-primary hover:bg-brand-secondary text-white font-bold py-2 px-4 rounded-lg">
                <PlusIcon className="h-5 w-5"/> Añadir
              </button>
            </div>
            <ul className="space-y-2">
              {fertilizers.map((f) => (
                <li key={f} className="bg-base-300 p-3 rounded-md flex justify-between items-center">
                  <span>{f}</span>
                  <button onClick={() => handleDeleteFertilizer(f)} className="p-2 text-red-500 hover:text-red-600 transition" aria-label={`Eliminar ${f}`}>
                    <TrashIcon />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'equipment' && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Lista de Equipos</h3>
             {/* TODO: Add a form to create new equipment */}
            <div className="space-y-3">
              {equipment.map((e) => (
                <div key={e.name} className="bg-base-300 p-4 rounded-lg">
                  {editingEquipmentName === e.name && editedEquipmentData ? (
                    // EDITING VIEW
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Nombre del Equipo</label>
                        <input
                          type="text"
                          value={editedEquipmentData.name}
                          onChange={ev => handleEquipmentDataChange('name', ev.target.value)}
                          className="w-full bg-base-100 border border-gray-300 rounded-md p-2 mt-1 focus:ring-brand-primary"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Sectores</label>
                        <div className="space-y-2 mt-1">
                          {editedEquipmentData.sectors.map((sector, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <input
                                type="text"
                                placeholder="ID"
                                value={sector.id}
                                onChange={ev => handleSectorChange(index, 'id', ev.target.value)}
                                className="w-1/3 bg-base-100 border border-gray-300 rounded-md p-2"
                              />
                              <input
                                type="number"
                                placeholder="Caudal (m³/h)"
                                value={sector.nominalFlow}
                                onChange={ev => handleSectorChange(index, 'nominalFlow', parseFloat(ev.target.value) || 0)}
                                className="w-2/3 bg-base-100 border border-gray-300 rounded-md p-2"
                              />
                              <button onClick={() => handleRemoveSector(index)} className="p-2 text-red-500 hover:text-red-600 transition" aria-label="Eliminar sector">
                                <TrashIcon />
                              </button>
                            </div>
                          ))}
                        </div>
                        <button onClick={handleAddSector} className="mt-2 flex items-center gap-2 text-sm text-brand-primary hover:text-brand-secondary font-semibold">
                          <PlusIcon /> Agregar Sector
                        </button>
                      </div>
                      <div className="flex justify-end gap-2">
                        <button onClick={handleCancelEditEquipment} className="p-2 text-gray-500 hover:text-gray-700 transition"><CloseIcon /></button>
                        <button onClick={handleUpdateEquipment} className="p-2 text-green-500 hover:text-green-600 transition"><SaveIcon /></button>
                      </div>
                    </div>
                  ) : (
                    // STATIC VIEW
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-base-content">{e.name}</p>
                        <p className="text-sm text-gray-500">
                            Sectores: {e.sectors.map(s => `${s.id} (${s.nominalFlow} m³/h)`).join(', ')}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                         <button onClick={() => handleStartEditEquipment(e)} className="p-2 text-blue-500 hover:text-blue-600 transition" aria-label={`Editar ${e.name}`}>
                            <EditIcon />
                        </button>
                        <button onClick={() => handleDeleteEquipment(e.name)} className="p-2 text-red-500 hover:text-red-600 transition" aria-label={`Eliminar ${e.name}`}>
                          <TrashIcon />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-gray-200 flex justify-end gap-3">
            <button onClick={onCancel} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg">Volver</button>
            <button onClick={handleSave} className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-2 px-4 rounded-lg">Guardar Cambios</button>
        </div>

      </div>
    </main>
  );
};

export default Management;