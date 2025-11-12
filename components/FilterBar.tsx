
import React, { useMemo, useState } from 'react';
import { Equipment } from '../types';
import { FilterIcon } from './Icons';
import { TASK_STATUS_OPTIONS } from '../constants';


interface FilterBarProps {
  filterDate: string;
  onDateChange: (date: string) => void;
  filterEquipment: string;
  onEquipmentChange: (equipment: string) => void;
  filterSector: string;
  onSectorChange: (sector: string) => void;
  equipmentList: Equipment[];
  requesters: string[];
  fertilizersList: string[];
  filterRequester: string;
  onRequesterChange: (requester: string) => void;
  filterFertilizer: string;
  onFertilizerChange: (fertilizer: string) => void;
  onClearFilters: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  filterDate, onDateChange,
  filterEquipment, onEquipmentChange,
  filterSector, onSectorChange,
  equipmentList, 
  requesters,
  fertilizersList,
  filterRequester, onRequesterChange,
  filterFertilizer, onFertilizerChange,
  onClearFilters
}) => {

  const [showAdvanced, setShowAdvanced] = useState(false);

  const availableSectors = useMemo(() => {
    if (!filterEquipment) return [];
    const selectedEquipment = equipmentList.find(e => e.name === filterEquipment);
    return selectedEquipment?.sectors || [];
  }, [filterEquipment, equipmentList]);

  return (
    <div className="mb-6 p-4 bg-base-200 rounded-lg border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        
        {/* Date Filter */}
        <div className="flex flex-col">
          <label htmlFor="filterDate" className="text-sm font-semibold text-gray-700 mb-1">
            Fecha
          </label>
          <input
            type="date"
            id="filterDate"
            value={filterDate}
            onChange={(e) => onDateChange(e.target.value)}
            className="bg-base-300 border border-gray-300 rounded-md p-2 text-base-content focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition w-full"
          />
        </div>

        {/* Equipment Filter */}
        <div className="flex flex-col">
          <label htmlFor="filterEquipment" className="text-sm font-semibold text-gray-700 mb-1">
            Equipo
          </label>
          <select
            id="filterEquipment"
            value={filterEquipment}
            onChange={(e) => onEquipmentChange(e.target.value)}
            className="bg-base-300 border border-gray-300 rounded-md p-2 text-base-content focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition w-full"
          >
            <option value="">Todos los equipos</option>
            {equipmentList.map(e => <option key={e.name} value={e.name}>{e.name}</option>)}
          </select>
        </div>

        {/* More Filters Button */}
        <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-secondary text-white font-bold py-2 px-4 rounded-md transition h-10"
        >
            <FilterIcon />
            {showAdvanced ? 'Ocultar Filtros' : 'Más Filtros'}
        </button>
        
        {/* Clear Button */}
        <button
          onClick={onClearFilters}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md transition h-10"
        >
          Limpiar Filtros
        </button>
      </div>

      {showAdvanced && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end pt-4 mt-4 border-t border-gray-200">
            {/* Sector Filter */}
            <div className="flex flex-col">
                <label htmlFor="filterSector" className="text-sm font-semibold text-gray-700 mb-1">
                    Sector
                </label>
                <select
                    id="filterSector"
                    value={filterSector}
                    onChange={(e) => onSectorChange(e.target.value)}
                    className="bg-base-300 border border-gray-300 rounded-md p-2 text-base-content focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition w-full"
                    disabled={!filterEquipment}
                >
                    <option value="">Todos los sectores</option>
                    {availableSectors.map(s => <option key={s.id} value={s.id}>Sector {s.id}</option>)}
                </select>
            </div>
            {/* Requester Filter */}
            <div className="flex flex-col">
                <label htmlFor="filterRequester" className="text-sm font-semibold text-gray-700 mb-1">
                    Solicitante
                </label>
                <select
                    id="filterRequester"
                    value={filterRequester}
                    onChange={(e) => onRequesterChange(e.target.value)}
                    className="bg-base-300 border border-gray-300 rounded-md p-2 text-base-content focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition w-full"
                >
                    <option value="">Todos los solicitantes</option>
                    {requesters.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
            </div>
             {/* Fertilizer Filter */}
            <div className="flex flex-col">
                <label htmlFor="filterFertilizer" className="text-sm font-semibold text-gray-700 mb-1">
                    Fertilizante
                </label>
                <select
                    id="filterFertilizer"
                    value={filterFertilizer}
                    onChange={(e) => onFertilizerChange(e.target.value)}
                    className="bg-base-300 border border-gray-300 rounded-md p-2 text-base-content focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition w-full"
                >
                    <option value="">Cualquier fertilizante</option>
                    {fertilizersList.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
            </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;