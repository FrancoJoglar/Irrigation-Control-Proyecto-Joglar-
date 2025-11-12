import React, { useState } from 'react';
import { IrrigationRequest, TaskStatus } from '../types';
import { TASK_STATUS_OPTIONS } from '../constants';
import { EditIcon, TrashIcon, ChevronDownIcon, ChevronUpIcon, LeafIcon, CheckIcon } from './Icons';

interface IrrigationRequestListProps {
  requests: IrrigationRequest[];
  onEdit: (request: IrrigationRequest) => void;
  onTaskStatusChange: (id: string, newStatus: TaskStatus) => void;
  onDelete: (request: IrrigationRequest) => void;
}

const RequestCard: React.FC<{ 
    request: IrrigationRequest; 
    onEdit: (request: IrrigationRequest) => void; 
    onTaskStatusChange: (id: string, newStatus: TaskStatus) => void;
    onDelete: (request: IrrigationRequest) => void;
}> = ({ request, onEdit, onTaskStatusChange, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isCancelled = request.irrigationStatus === TaskStatus.CANCELLED;

  const getStatusColor = (status: TaskStatus) => {
    return TASK_STATUS_OPTIONS.find(s => s.value === status)?.color || 'bg-gray-500';
  };
  
  const statusSelector = () => {
    const status = request.irrigationStatus;
    return (
        <div className="flex-1 min-w-[120px]">
            <select
                value={status}
                onChange={(e) => onTaskStatusChange(request.id, e.target.value as TaskStatus)}
                disabled={isCancelled}
                className={`w-full px-2 py-1 text-xs font-semibold text-white rounded-md appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary ${getStatusColor(status)}`}
                style={{ 
                    WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none', 
                    paddingRight: '1.5rem', 
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, 
                    backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '0.8em' 
                }}
                aria-label="Cambiar estado de riego"
            >
                {TASK_STATUS_OPTIONS.map(opt => (
                    opt.value === TaskStatus.NOT_APPLICABLE || opt.value === TaskStatus.UNDETERMINED ? null :
                    <option key={opt.value} value={opt.value} className="text-black bg-white">
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
  };
  
  const fertilizerDetails = request.isFertigation && request.fertilizers.length > 0 && (
    <div className="text-xs text-gray-500 mt-1 flex flex-col">
        {request.fertilizers.map(f => (
            <span key={f.id} className="flex items-center gap-1">
                <LeafIcon className="h-3 w-3 text-green-500" />
                {f.name} ({f.quantity} {f.unit})
            </span>
        ))}
    </div>
  );

  return (
    <div className={`bg-base-200 border border-gray-200 rounded-lg shadow-sm mb-4 p-4 transition-all ease-in-out duration-300 ${isCancelled ? 'opacity-60' : ''}`}>
        <div className={`grid grid-cols-2 gap-4 md:hidden ${isCancelled ? 'line-through text-gray-500' : ''}`}>
            <div><strong className="text-gray-500 block">Fecha:</strong> {request.irrigationDate}</div>
            <div><strong className="text-gray-500 block">Sector:</strong> {request.sector}</div>
            <div><strong className="text-gray-500 block">Equipo:</strong> {request.irrigationSystem}</div>
            <div><strong className="text-gray-500 block">Duración:</strong> {request.durationHours} hrs</div>
            <div><strong className="text-gray-500 block">Total m³:</strong> {request.totalWaterApplied.toFixed(2)}</div>
            <div className="col-span-2">
                <strong className="text-gray-500">Solicitante:</strong> {request.requesterName}
            </div>
             {request.isFertigation && request.fertilizers.length > 0 && (
                <div className="col-span-2">
                    <strong className="text-gray-500 block">Fertilizantes:</strong>
                    <div className="text-sm flex flex-col gap-1 mt-1">
                        {request.fertilizers.map(f => <span key={f.id}>- {f.name} ({f.quantity} {f.unit})</span>)}
                    </div>
                </div>
            )}
            <div className="col-span-2 mt-2">
                <strong className="text-gray-500 block mb-1">Estado Riego:</strong>
                {statusSelector()}
            </div>
        </div>

        <div className={`hidden md:grid md:grid-cols-12 items-center gap-4 ${isCancelled ? 'line-through text-gray-500' : ''}`}>
            <div className="md:col-span-2">{request.irrigationDate}</div>
            <div className="md:col-span-1">{request.sector}</div>
            <div className="md:col-span-2">{request.irrigationSystem}</div>
            <div className="md:col-span-1 text-center">{request.durationHours} hrs</div>
            <div className="md:col-span-1 text-center font-medium">{request.totalWaterApplied.toFixed(2)}</div>
            <div className="md:col-span-2">
                <span>{request.requesterName}</span>
                {fertilizerDetails}
            </div>
            <div className="md:col-span-2">
              {statusSelector()}
            </div>
            <div className="md:col-span-1 flex justify-end items-center gap-1">
                 <button onClick={() => setIsExpanded(!isExpanded)} className="p-2 text-gray-400 hover:text-brand-primary transition" title="Ver/Ocultar Notas">
                    {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </button>
                {!isCancelled && (
                    <>
                        <button onClick={() => onEdit(request)} className="p-2 text-blue-500 hover:text-blue-600 transition" title="Editar"><EditIcon /></button>
                        <button onClick={() => onDelete(request)} className="p-2 text-red-500 hover:text-red-600 transition" title="Eliminar"><TrashIcon /></button>
                    </>
                )}
            </div>
        </div>
        
        {isExpanded && (
             <div className="mt-4 pt-4 border-t border-gray-200">
                {request.notes && (
                    <div>
                        <h4 className="font-semibold text-gray-600">Notas:</h4>
                        <p className="text-gray-500 whitespace-pre-wrap">{request.notes}</p>
                    </div>
                )}
                 {!request.notes && (
                     <p className="text-gray-500">No hay notas adicionales.</p>
                )}
             </div>
        )}

         <div className="md:hidden mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
            <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-1 text-sm text-brand-primary hover:underline">
                {isExpanded ? 'Ocultar Notas' : 'Ver Notas'}
                {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
            {!isCancelled && (
                 <div className="flex items-center gap-2">
                    <button onClick={() => onEdit(request)} className="p-2 text-blue-500 hover:text-blue-600 transition" title="Editar"><EditIcon /></button>
                    <button onClick={() => onDelete(request)} className="p-2 text-red-500 hover:text-red-600 transition" title="Eliminar"><TrashIcon /></button>
                </div>
            )}
        </div>
    </div>
  );
}


const IrrigationRequestList: React.FC<IrrigationRequestListProps> = ({ requests, onEdit, onTaskStatusChange, onDelete }) => {
  return (
    <div className="overflow-x-auto">
        <div className="hidden md:grid md:grid-cols-12 gap-4 text-sm font-bold text-gray-600 border-b border-gray-200 pb-2 mb-4 px-4">
            <div className="md:col-span-2">Fecha</div>
            <div className="md:col-span-1">Sector</div>
            <div className="md:col-span-2">Equipo</div>
            <div className="md:col-span-1 text-center">Duración</div>
            <div className="md:col-span-1 text-center">Total m³</div>
            <div className="md:col-span-2">Solicitante y Fertilizantes</div>
            <div className="md:col-span-2">Estado</div>
            <div className="md:col-span-1 text-right">Acciones</div>
        </div>
        <div>
            {requests.map(request => (
                <RequestCard key={request.id} request={request} onEdit={onEdit} onTaskStatusChange={onTaskStatusChange} onDelete={onDelete} />
            ))}
        </div>
    </div>
  );
};

export default IrrigationRequestList;