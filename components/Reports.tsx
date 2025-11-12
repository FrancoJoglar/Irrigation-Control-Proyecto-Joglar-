import React, { useState, useMemo } from 'react';
import { IrrigationRequest, TaskStatus, Equipment } from '../types';

interface ReportsProps {
    requests: IrrigationRequest[];
    equipmentList: Equipment[];
    fertilizersList: string[];
    onBack: () => void;
}

const Reports: React.FC<ReportsProps> = ({ requests, equipmentList, fertilizersList, onBack }) => {
    // State for filters
    const [filterEquipment, setFilterEquipment] = useState('');
    const [filterSector, setFilterSector] = useState('');
    const [filterFertilizer, setFilterFertilizer] = useState('');

    // Memoize the base data: completed fertigation requests, sorted by most recent
    const fertigationRequests = useMemo(() => {
        return requests
            .filter(req => req.isFertigation)
            .sort((a, b) => new Date(b.irrigationDate).getTime() - new Date(a.irrigationDate).getTime());
    }, [requests]);

    // Memoize the filtered data based on UI state
    const filteredData = useMemo(() => {
        return fertigationRequests
            .filter(req => filterEquipment ? req.irrigationSystem === filterEquipment : true)
            .filter(req => filterSector ? req.sector === filterSector : true)
            .filter(req => filterFertilizer ? req.fertilizers.some(f => f.name === filterFertilizer) : true);
    }, [fertigationRequests, filterEquipment, filterSector, filterFertilizer]);

    // Memoize available sectors for the filter dropdown based on selected equipment
    const availableSectors = useMemo(() => {
        if (!filterEquipment) return [];
        const selectedEquipment = equipmentList.find(e => e.name === filterEquipment);
        return selectedEquipment?.sectors || [];
    }, [filterEquipment, equipmentList]);

    const handleClearFilters = () => {
        setFilterEquipment('');
        setFilterSector('');
        setFilterFertilizer('');
    };

    const hasData = fertigationRequests.length > 0;

    return (
        <main className="container mx-auto p-4 md:p-6">
            <div className="bg-base-200 shadow-lg rounded-xl p-4 md:p-6 border border-gray-200">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-base-content">Análisis de Fertirriegos</h2>
                    <button onClick={onBack} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg">
                        Volver
                    </button>
                </div>

                {hasData ? (
                    <>
                        {/* Filter Section */}
                        <div className="mb-6 p-4 bg-base-100 rounded-lg border border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                                <div className="flex flex-col">
                                    <label htmlFor="reportFilterEquipment" className="text-sm font-semibold text-gray-700 mb-1">Equipo</label>
                                    <select
                                        id="reportFilterEquipment"
                                        value={filterEquipment}
                                        onChange={(e) => {
                                            setFilterEquipment(e.target.value);
                                            setFilterSector(''); // Reset sector when equipment changes
                                        }}
                                        className="bg-base-300 border border-gray-300 rounded-md p-2 text-base-content focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition w-full"
                                    >
                                        <option value="">Todos los equipos</option>
                                        {equipmentList.map(e => <option key={e.name} value={e.name}>{e.name}</option>)}
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="reportFilterSector" className="text-sm font-semibold text-gray-700 mb-1">Sector</label>
                                    <select
                                        id="reportFilterSector"
                                        value={filterSector}
                                        onChange={(e) => setFilterSector(e.target.value)}
                                        disabled={!filterEquipment}
                                        className="bg-base-300 border border-gray-300 rounded-md p-2 text-base-content focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition w-full disabled:bg-gray-200"
                                    >
                                        <option value="">Todos los sectores</option>
                                        {availableSectors.map(s => <option key={s.id} value={s.id}>Sector {s.id}</option>)}
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="reportFilterFertilizer" className="text-sm font-semibold text-gray-700 mb-1">Fertilizante</label>
                                    <select
                                        id="reportFilterFertilizer"
                                        value={filterFertilizer}
                                        onChange={(e) => setFilterFertilizer(e.target.value)}
                                        className="bg-base-300 border border-gray-300 rounded-md p-2 text-base-content focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition w-full"
                                    >
                                        <option value="">Cualquier fertilizante</option>
                                        {fertilizersList.sort().map(f => <option key={f} value={f}>{f}</option>)}
                                    </select>
                                </div>
                                <button onClick={handleClearFilters} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md transition h-10">
                                    Limpiar Filtros
                                </button>
                            </div>
                        </div>

                        {/* Table Section */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-base-200 border-separate" style={{ borderSpacing: '0' }}>
                                <thead className="bg-base-300">
                                    <tr>
                                        <th className="sticky top-0 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 bg-base-300">Fecha Riego</th>
                                        <th className="sticky top-0 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 bg-base-300">Equipo</th>
                                        <th className="sticky top-0 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 bg-base-300">Sector</th>
                                        <th className="sticky top-0 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 bg-base-300">Fertilizantes Aplicados</th>
                                        <th className="sticky top-0 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 bg-base-300">Fecha Completado Fert.</th>
                                        <th className="sticky top-0 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 bg-base-300">Solicitante</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {filteredData.length > 0 ? filteredData.map(req => (
                                        <tr key={req.id} className="hover:bg-base-100">
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{req.irrigationDate}</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{req.irrigationSystem}</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{req.sector}</td>
                                            <td className="px-4 py-3 text-sm text-gray-500">
                                                <ul className="space-y-1">
                                                    {req.fertilizers.map(f => (
                                                        <li key={f.id}>{`${f.name}: ${f.quantity.toLocaleString()} ${f.unit}`}</li>
                                                    ))}
                                                </ul>
                                            </td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{req.fertigationCompletionDate || 'N/A'}</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{req.requesterName}</td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan={6} className="text-center py-10 px-4 text-gray-500">
                                                No se encontraron registros con los filtros seleccionados.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-10 px-4">
                        <p className="text-gray-600 text-lg">No hay datos de fertirriego completados para mostrar.</p>
                        <p className="text-gray-500 mt-2">Complete algunas solicitudes con fertilizantes para ver el reporte aquí.</p>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Reports;