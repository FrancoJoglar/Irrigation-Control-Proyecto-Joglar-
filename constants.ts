import { IrrigationRequest, TaskStatus, Equipment } from './types';

export const INITIAL_REQUESTERS: string[] = [
    'Juan Pérez',
    'Ana Gómez',
    'Carlos Ruiz',
    'Maria Lopez',
    'Pedro Martinez',
];

export const INITIAL_FERTILIZERS: string[] = [
    'Nitrato de Calcio',
    'Nitrato de Potasio',
    'Nitrato de Amonio',
    'Fosfato Monoamónico',
    'Sulfato de Magnesio',
    'Sulfato de Zinc',
    'Cloruro de Potasio',
    'Urea',
    'Ácido Fosfórico',
    'Ácido Bórico',
];

export const INITIAL_IRRIGATION_EQUIPMENT: Equipment[] = [
    { name: 'Equipo 1', sectors: [{id: '1', nominalFlow: 158}, {id: '2', nominalFlow: 161.7}, {id: '3', nominalFlow: 158.2}, {id: '4', nominalFlow: 166.5}, {id: '5', nominalFlow: 173.3}] },
    { name: 'Equipo 2', sectors: [{id: '1', nominalFlow: 225.2}, {id: '2', nominalFlow: 227.3}, {id: '3', nominalFlow: 226}, {id: '4', nominalFlow: 217.4}, {id: '5', nominalFlow: 215.9}] },
    { name: 'Equipo 3', sectors: [{id: '1', nominalFlow: 169.7}, {id: '2', nominalFlow: 162.8}, {id: '3', nominalFlow: 162.7}, {id: '4', nominalFlow: 151.2}, {id: '5', nominalFlow: 161.3}] },
    { name: 'Equipo 4', sectors: [{id: '1', nominalFlow: 93.9}, {id: '2', nominalFlow: 135.4}, {id: '3', nominalFlow: 132.9}, {id: '4', nominalFlow: 132.7}, {id: '5', nominalFlow: 122.1}] },
    { name: 'Equipo 5', sectors: [{id: '1', nominalFlow: 163.5}, {id: '2', nominalFlow: 164.3}, {id: '3', nominalFlow: 163.5}, {id: '4', nominalFlow: 163.8}, {id: '5', nominalFlow: 171.8}] },
    { name: 'Equipo 6', sectors: [{id: '1', nominalFlow: 110.1}, {id: '2', nominalFlow: 100.4}, {id: '3', nominalFlow: 125.3}, {id: '4', nominalFlow: 125.1}, {id: '5', nominalFlow: 110.8}] },
    { name: 'Equipo 7', sectors: [{id: '1', nominalFlow: 45.6}, {id: '2', nominalFlow: 42.6}, {id: '3', nominalFlow: 43.7}, {id: '4', nominalFlow: 47.5}, {id: '5', nominalFlow: 46.6}] },
    { name: 'Equipo 9', sectors: [{id: '1', nominalFlow: 76.7}, {id: '2', nominalFlow: 64.8}, {id: '3', nominalFlow: 75.3}, {id: '4', nominalFlow: 96.4}] },
    { name: 'Equipo 10', sectors: [{id: '1', nominalFlow: 102.9}, {id: '2', nominalFlow: 128.9}, {id: '3', nominalFlow: 129.8}, {id: '4', nominalFlow: 119.7}, {id: '5', nominalFlow: 113.2}, {id: '6', nominalFlow: 114}] },
    { name: 'Equipo 11', sectors: [{id: '1', nominalFlow: 125.5}, {id: '2', nominalFlow: 110.8}, {id: '3', nominalFlow: 113.3}, {id: '4', nominalFlow: 113.9}, {id: '5', nominalFlow: 120.4}] },
    { name: 'Equipo 12', sectors: [{id: '1', nominalFlow: 158.9}, {id: '2', nominalFlow: 192.6}, {id: '3', nominalFlow: 189.5}, {id: '5', nominalFlow: 158.1}, {id: '6', nominalFlow: 155.6}, {id: '7', nominalFlow: 145.1}, {id: '8', nominalFlow: 154}] },
    { name: 'Equipo 13', sectors: [{id: '1', nominalFlow: 136.6}, {id: '2', nominalFlow: 145.5}, {id: '3', nominalFlow: 115.6}, {id: '4', nominalFlow: 125}, {id: '5', nominalFlow: 120.1}, {id: '6', nominalFlow: 136.6}] },
    { name: 'Equipo 14', sectors: [{id: '1', nominalFlow: 100.5}, {id: '2', nominalFlow: 116.9}, {id: '3', nominalFlow: 111.1}, {id: '4', nominalFlow: 103.9}, {id: '5', nominalFlow: 77.2}] },
    { name: 'Equipo 15', sectors: [{id: '1', nominalFlow: 116.7}, {id: '2', nominalFlow: 89.8}, {id: '3', nominalFlow: 73.6}, {id: '4', nominalFlow: 113.6}, {id: '5', nominalFlow: 111.2}] },
    { name: 'Equipo 16', sectors: [{id: '1', nominalFlow: 87.7}, {id: '2', nominalFlow: 92.1}, {id: '3', nominalFlow: 95.9}, {id: '4', nominalFlow: 79.6}, {id: '5', nominalFlow: 88.4}] },
    { name: 'Equipo 17', sectors: [{id: '1', nominalFlow: 94.5}, {id: '2', nominalFlow: 60}, {id: '3', nominalFlow: 105}, {id: '4', nominalFlow: 102.9}, {id: '5', nominalFlow: 68.9}] },
    { name: 'Equipo 18', sectors: [{id: '1', nominalFlow: 129.2}, {id: '2', nominalFlow: 222.5}, {id: '3', nominalFlow: 105.4}, {id: '4', nominalFlow: 115}, {id: '5', nominalFlow: 60.2}] },
    { name: 'Equipo 19', sectors: [{id: '1', nominalFlow: 180.7}, {id: '2', nominalFlow: 162.6}, {id: '3', nominalFlow: 183.6}, {id: '4', nominalFlow: 186.6}, {id: '5', nominalFlow: 180}, {id: '6', nominalFlow: 161.7}] },
    { name: 'Equipo 20', sectors: [{id: '1', nominalFlow: 123.9}, {id: '2', nominalFlow: 101.7}, {id: '3', nominalFlow: 124.9}, {id: '4', nominalFlow: 90.1}] },
    { name: 'Equipo 21', sectors: [{id: '1', nominalFlow: 140}, {id: '2', nominalFlow: 140.4}, {id: '3', nominalFlow: 145}, {id: '4', nominalFlow: 143.4}] },
    { name: 'Equipo 22', sectors: [{id: '1', nominalFlow: 81.1}, {id: '2', nominalFlow: 92.9}, {id: '3', nominalFlow: 76.9}, {id: '4', nominalFlow: 94.5}, {id: '5', nominalFlow: 81.8}] },
];

export const TASK_STATUS_OPTIONS = [
  { value: TaskStatus.REQUESTED, label: 'Solicitado', color: 'bg-blue-500' },
  { value: TaskStatus.SCHEDULED, label: 'Programado', color: 'bg-purple-500' },
  { value: TaskStatus.PENDING, label: 'Pendiente', color: 'bg-yellow-500' },
  { value: TaskStatus.COMPLETED, label: 'Completado', color: 'bg-green-500' },
  { value: TaskStatus.CANCELLED, label: 'Cancelado', color: 'bg-gray-500' },
  { value: TaskStatus.NOT_APPLICABLE, label: 'No Aplica', color: 'bg-gray-300' },
  { value: TaskStatus.UNDETERMINED, label: 'Por Determinar', color: 'bg-gray-400' },
];

export const MOCK_REQUESTS: IrrigationRequest[] = [
  // September 2023
  { id: '1', requesterName: 'Juan Pérez', sector: '1', irrigationSystem: 'Equipo 1', irrigationDate: '2023-09-05', durationHours: 4, isFertigation: true, fertilizers: [{ id: 'f1', name: 'Nitrato de Calcio', quantity: 50, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, notes: 'Inicio de temporada', totalWaterApplied: 632 },
  { id: '2', requesterName: 'Ana Gómez', sector: '3', irrigationSystem: 'Equipo 2', irrigationDate: '2023-09-08', durationHours: 5, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 1130 },
  { id: '3', requesterName: 'Carlos Ruiz', sector: '2', irrigationSystem: 'Equipo 5', irrigationDate: '2023-09-12', durationHours: 3.5, isFertigation: true, fertilizers: [{ id: 'f2', name: 'Ácido Fosfórico', quantity: 25, unit: 'L' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 575.05 },
  { id: '4', requesterName: 'Maria Lopez', sector: '4', irrigationSystem: 'Equipo 10', irrigationDate: '2023-09-18', durationHours: 6, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 718.2 },
  { id: '5', requesterName: 'Pedro Martinez', sector: '1', irrigationSystem: 'Equipo 9', irrigationDate: '2023-09-25', durationHours: 4, isFertigation: true, fertilizers: [{ id: 'f3', name: 'Urea', quantity: 100, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 306.8 },

  // October 2023
  { id: '6', requesterName: 'Juan Pérez', sector: '2', irrigationSystem: 'Equipo 1', irrigationDate: '2023-10-02', durationHours: 4.5, isFertigation: true, fertilizers: [{ id: 'f4', name: 'Nitrato de Potasio', quantity: 75, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 727.65 },
  { id: '7', requesterName: 'Ana Gómez', sector: '5', irrigationSystem: 'Equipo 12', irrigationDate: '2023-10-10', durationHours: 7, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 1106.7 },
  { id: '8', requesterName: 'Carlos Ruiz', sector: '3', irrigationSystem: 'Equipo 19', irrigationDate: '2023-10-15', durationHours: 5, isFertigation: true, fertilizers: [{ id: 'f5', name: 'Sulfato de Magnesio', quantity: 40, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 918 },
  { id: '9', requesterName: 'Maria Lopez', sector: '1', irrigationSystem: 'Equipo 21', irrigationDate: '2023-10-22', durationHours: 3, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 420 },
  { id: '10', requesterName: 'Pedro Martinez', sector: '4', irrigationSystem: 'Equipo 3', irrigationDate: '2023-10-28', durationHours: 6, isFertigation: true, fertilizers: [{ id: 'f6', name: 'Fosfato Monoamónico', quantity: 60, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 907.2 },

  // November 2023
  { id: '11', requesterName: 'Juan Pérez', sector: '5', irrigationSystem: 'Equipo 4', irrigationDate: '2023-11-04', durationHours: 5.5, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 671.55 },
  { id: '12', requesterName: 'Ana Gómez', sector: '1', irrigationSystem: 'Equipo 18', irrigationDate: '2023-11-09', durationHours: 4, isFertigation: true, fertilizers: [{ id: 'f7', name: 'Nitrato de Calcio', quantity: 80, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 516.8 },
  { id: '13', requesterName: 'Carlos Ruiz', sector: '2', irrigationSystem: 'Equipo 11', irrigationDate: '2023-11-16', durationHours: 6, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 664.8 },
  { id: '14', requesterName: 'Maria Lopez', sector: '3', irrigationSystem: 'Equipo 7', irrigationDate: '2023-11-21', durationHours: 2.5, isFertigation: true, fertilizers: [{ id: 'f8', name: 'Ácido Fosfórico', quantity: 20, unit: 'L' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 109.25 },
  { id: '15', requesterName: 'Pedro Martinez', sector: '6', irrigationSystem: 'Equipo 13', irrigationDate: '2023-11-28', durationHours: 5, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 683 },
  { id: '16', requesterName: 'Juan Pérez', sector: '1', irrigationSystem: 'Equipo 5', irrigationDate: '2023-11-30', durationHours: 4, isFertigation: true, fertilizers: [{ id: 'f1', name: 'Nitrato de Calcio', quantity: 50, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, notes: 'Repetir aplicación de Calcio', totalWaterApplied: 654 },

  // December 2023
  { id: '17', requesterName: 'Ana Gómez', sector: '4', irrigationSystem: 'Equipo 15', irrigationDate: '2023-12-05', durationHours: 7, isFertigation: true, fertilizers: [{ id: 'f9', name: 'Nitrato de Potasio', quantity: 100, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 795.2 },
  { id: '18', requesterName: 'Carlos Ruiz', sector: '2', irrigationSystem: 'Equipo 16', irrigationDate: '2023-12-12', durationHours: 4.5, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 414.45 },
  { id: '19', requesterName: 'Maria Lopez', sector: '5', irrigationSystem: 'Equipo 17', irrigationDate: '2023-12-18', durationHours: 5, isFertigation: true, fertilizers: [{ id: 'f10', name: 'Urea', quantity: 120, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 344.5 },
  { id: '20', requesterName: 'Pedro Martinez', sector: '1', irrigationSystem: 'Equipo 20', irrigationDate: '2023-12-26', durationHours: 6.5, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 805.35 },
  { id: '21', requesterName: 'Juan Pérez', sector: '3', irrigationSystem: 'Equipo 1', irrigationDate: '2023-12-30', durationHours: 4, isFertigation: true, fertilizers: [{ id: 'f11', name: 'Sulfato de Magnesio', quantity: 50, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 632.8 },

  // January 2024
  { id: '22', requesterName: 'Ana Gómez', sector: '4', irrigationSystem: 'Equipo 22', irrigationDate: '2024-01-03', durationHours: 5, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 472.5 },
  { id: '23', requesterName: 'Carlos Ruiz', sector: '2', irrigationSystem: 'Equipo 2', irrigationDate: '2024-01-08', durationHours: 6, isFertigation: true, fertilizers: [{ id: 'f12', name: 'Fosfato Monoamónico', quantity: 70, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 1363.8 },
  { id: '24', requesterName: 'Maria Lopez', sector: '1', irrigationSystem: 'Equipo 3', irrigationDate: '2024-01-14', durationHours: 4, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 678.8 },
  { id: '25', requesterName: 'Pedro Martinez', sector: '3', irrigationSystem: 'Equipo 6', irrigationDate: '2024-01-20', durationHours: 5.5, isFertigation: true, fertilizers: [{ id: 'f13', name: 'Nitrato de Potasio', quantity: 80, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 689.15 },
  { id: '26', requesterName: 'Juan Pérez', sector: '5', irrigationSystem: 'Equipo 11', irrigationDate: '2024-01-25', durationHours: 4, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 481.6 },
  { id: '27', requesterName: 'Ana Gómez', sector: '1', irrigationSystem: 'Equipo 14', irrigationDate: '2024-01-30', durationHours: 7, isFertigation: true, fertilizers: [{ id: 'f14', name: 'Nitrato de Calcio', quantity: 90, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 703.5 },

  // February 2024
  { id: '28', requesterName: 'Carlos Ruiz', sector: '8', irrigationSystem: 'Equipo 12', irrigationDate: '2024-02-02', durationHours: 6, isFertigation: true, fertilizers: [{ id: 'f15', name: 'Urea', quantity: 150, unit: 'kg' }, { id: 'f16', name: 'Ácido Fosfórico', quantity: 30, unit: 'L' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 924 },
  { id: '29', requesterName: 'Maria Lopez', sector: '3', irrigationSystem: 'Equipo 9', irrigationDate: '2024-02-07', durationHours: 4, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 301.2 },
  { id: '30', requesterName: 'Pedro Martinez', sector: '2', irrigationSystem: 'Equipo 18', irrigationDate: '2024-02-13', durationHours: 5.5, isFertigation: true, fertilizers: [{ id: 'f17', name: 'Sulfato de Magnesio', quantity: 60, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 1223.75 },
  { id: '31', requesterName: 'Juan Pérez', sector: '6', irrigationSystem: 'Equipo 19', irrigationDate: '2024-02-19', durationHours: 5, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 808.5 },
  { id: '32', requesterName: 'Ana Gómez', sector: '4', irrigationSystem: 'Equipo 21', irrigationDate: '2024-02-25', durationHours: 3.5, isFertigation: true, fertilizers: [{ id: 'f18', name: 'Fosfato Monoamónico', quantity: 50, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 501.9 },
  { id: '33', requesterName: 'Carlos Ruiz', sector: '1', irrigationSystem: 'Equipo 1', irrigationDate: '2024-02-28', durationHours: 4, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 632 },

  // March 2024
  { id: '34', requesterName: 'Maria Lopez', sector: '5', irrigationSystem: 'Equipo 2', irrigationDate: '2024-03-01', durationHours: 6, isFertigation: true, fertilizers: [{ id: 'f19', name: 'Nitrato de Potasio', quantity: 120, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 1295.4 },
  { id: '35', requesterName: 'Pedro Martinez', sector: '3', irrigationSystem: 'Equipo 4', irrigationDate: '2024-03-05', durationHours: 5, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 664.5 },
  { id: '36', requesterName: 'Juan Pérez', sector: '2', irrigationSystem: 'Equipo 7', irrigationDate: '2024-03-09', durationHours: 3, isFertigation: true, fertilizers: [{ id: 'f20', name: 'Nitrato de Calcio', quantity: 40, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 127.8 },
  { id: '37', requesterName: 'Ana Gómez', sector: '1', irrigationSystem: 'Equipo 15', irrigationDate: '2024-03-12', durationHours: 6, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 700.2 },
  { id: '38', requesterName: 'Carlos Ruiz', sector: '4', irrigationSystem: 'Equipo 10', irrigationDate: '2024-03-15', durationHours: 5.5, isFertigation: true, fertilizers: [{ id: 'f21', name: 'Urea', quantity: 100, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 658.35 },
  { id: '39', requesterName: 'Maria Lopez', sector: '3', irrigationSystem: 'Equipo 16', irrigationDate: '2024-03-18', durationHours: 4.5, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.SCHEDULED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 431.55 },
  { id: '40', requesterName: 'Pedro Martinez', sector: '1', irrigationSystem: 'Equipo 12', irrigationDate: '2024-03-20', durationHours: 7, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.SCHEDULED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 1112.3 },
  { id: '41', requesterName: 'Juan Pérez', sector: '5', irrigationSystem: 'Equipo 19', irrigationDate: '2024-03-22', durationHours: 5, isFertigation: true, fertilizers: [{ id: 'f22', name: 'Sulfato de Magnesio', quantity: 50, unit: 'kg' }], irrigationStatus: TaskStatus.REQUESTED, fertigationStatus: TaskStatus.REQUESTED, totalWaterApplied: 900 },
  { id: '42', requesterName: 'Ana Gómez', sector: '2', irrigationSystem: 'Equipo 22', irrigationDate: '2024-03-25', durationHours: 4, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.REQUESTED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 371.6 },
  { id: '43', requesterName: 'Carlos Ruiz', sector: '1', irrigationSystem: 'Equipo 20', irrigationDate: '2024-03-28', durationHours: 6, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.REQUESTED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 743.4 },
  { id: '44', requesterName: 'Juan Pérez', sector: '1', irrigationSystem: 'Equipo 5', irrigationDate: '2024-01-15', durationHours: 4, isFertigation: true, fertilizers: [{ id: 'f23', name: 'Fosfato Monoamónico', quantity: 65, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 654 },
  { id: '45', requesterName: 'Ana Gómez', sector: '1', irrigationSystem: 'Equipo 5', irrigationDate: '2024-02-10', durationHours: 3, isFertigation: true, fertilizers: [{ id: 'f24', name: 'Nitrato de Potasio', quantity: 70, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 490.5 },
  { id: '46', requesterName: 'Carlos Ruiz', sector: '4', irrigationSystem: 'Equipo 9', irrigationDate: '2023-09-30', durationHours: 5, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 482 },
  { id: '47', requesterName: 'Maria Lopez', sector: '4', irrigationSystem: 'Equipo 9', irrigationDate: '2023-10-05', durationHours: 5, isFertigation: true, fertilizers: [{ id: 'f25', name: 'Urea', quantity: 90, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 482 },
  { id: '48', requesterName: 'Pedro Martinez', sector: '2', irrigationSystem: 'Equipo 12', irrigationDate: '2023-11-15', durationHours: 6, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 1155.6 },
  { id: '49', requesterName: 'Juan Pérez', sector: '2', irrigationSystem: 'Equipo 12', irrigationDate: '2023-11-25', durationHours: 6.5, isFertigation: true, fertilizers: [{ id: 'f26', name: 'Nitrato de Calcio', quantity: 100, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.COMPLETED, totalWaterApplied: 1251.9 },
  { id: '50', requesterName: 'Ana Gómez', sector: '3', irrigationSystem: 'Equipo 1', irrigationDate: '2024-03-10', durationHours: 3.5, isFertigation: true, fertilizers: [{ id: 'f27', name: 'Fosfato Monoamónico', quantity: 30, unit: 'kg' }], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.PENDING, notes: 'Revisar presión de goteros antes de iniciar.', totalWaterApplied: 553.7 },
  { id: '51', requesterName: 'Carlos Ruiz', sector: '3', irrigationSystem: 'Equipo 1', irrigationDate: '2024-03-11', durationHours: 4, isFertigation: false, fertilizers: [], irrigationStatus: TaskStatus.COMPLETED, fertigationStatus: TaskStatus.NOT_APPLICABLE, totalWaterApplied: 632.8 },
  // --- START GENERATED DATA ---
  {
    id: "52",
    requesterName: "Pedro Martinez",
    sector: "1",
    irrigationSystem: "Equipo 13",
    irrigationDate: "2024-03-01",
    durationHours: 5.9,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_52_0",
        name: "Nitrato de Amonio",
        quantity: 110,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 805.94,
    fertigationCompletionDate: "2024-03-01"
  },
  {
    id: "53",
    requesterName: "Carlos Ruiz",
    sector: "1",
    irrigationSystem: "Equipo 13",
    irrigationDate: "2024-03-01",
    durationHours: 3.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_53_0",
        name: "Nitrato de Amonio",
        quantity: 56,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.PENDING,
    totalWaterApplied: 505.42,
    fertigationCompletionDate: undefined
  },
  {
    id: "54",
    requesterName: "Carlos Ruiz",
    sector: "4",
    irrigationSystem: "Equipo 10",
    irrigationDate: "2024-03-01",
    durationHours: 7.4,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 885.78,
    fertigationCompletionDate: undefined
  },
  {
    id: "55",
    requesterName: "Carlos Ruiz",
    sector: "1",
    irrigationSystem: "Equipo 17",
    irrigationDate: "2024-03-01",
    durationHours: 7.4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_55_0",
        name: "Nitrato de Calcio",
        quantity: 23,
        unit: "kg"
      },
      {
        id: "f_gen_55_1",
        name: "Urea",
        quantity: 50,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 699.3,
    fertigationCompletionDate: "2024-03-01"
  },
  {
    id: "56",
    requesterName: "Carlos Ruiz",
    sector: "5",
    irrigationSystem: "Equipo 4",
    irrigationDate: "2024-03-01",
    durationHours: 4,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 488.4,
    fertigationCompletionDate: undefined
  },
  {
    id: "57",
    requesterName: "Ana Gómez",
    sector: "5",
    irrigationSystem: "Equipo 12",
    irrigationDate: "2024-03-01",
    durationHours: 2.2,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 347.82,
    fertigationCompletionDate: undefined
  },
  {
    id: "58",
    requesterName: "Carlos Ruiz",
    sector: "2",
    irrigationSystem: "Equipo 6",
    irrigationDate: "2024-03-01",
    durationHours: 5,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_58_0",
        name: "Urea",
        quantity: 47,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 502,
    fertigationCompletionDate: "2024-03-01"
  },
  {
    id: "59",
    requesterName: "Juan Pérez",
    sector: "1",
    irrigationSystem: "Equipo 20",
    irrigationDate: "2024-03-01",
    durationHours: 6.3,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_59_0",
        name: "Nitrato de Amonio",
        quantity: 78,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 780.57,
    fertigationCompletionDate: "2024-03-01"
  },
  {
    id: "60",
    requesterName: "Pedro Martinez",
    sector: "2",
    irrigationSystem: "Equipo 12",
    irrigationDate: "2024-03-02",
    durationHours: 2,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 385.2,
    fertigationCompletionDate: undefined
  },
  {
    id: "61",
    requesterName: "Maria Lopez",
    sector: "4",
    irrigationSystem: "Equipo 10",
    irrigationDate: "2024-03-02",
    durationHours: 4.5,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_61_0",
        name: "Nitrato de Amonio",
        quantity: 49,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.PENDING,
    totalWaterApplied: 538.65,
    fertigationCompletionDate: undefined
  },
  {
    id: "62",
    requesterName: "Ana Gómez",
    sector: "3",
    irrigationSystem: "Equipo 16",
    irrigationDate: "2024-03-02",
    durationHours: 3.4,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 326.06,
    fertigationCompletionDate: undefined
  },
  {
    id: "63",
    requesterName: "Carlos Ruiz",
    sector: "1",
    irrigationSystem: "Equipo 11",
    irrigationDate: "2024-03-02",
    durationHours: 5.9,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 740.45,
    fertigationCompletionDate: undefined
  },
  {
    id: "64",
    requesterName: "Carlos Ruiz",
    sector: "3",
    irrigationSystem: "Equipo 14",
    irrigationDate: "2024-03-02",
    durationHours: 5.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_64_0",
        name: "Sulfato de Zinc",
        quantity: 30,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 633.27,
    fertigationCompletionDate: "2024-03-02"
  },
  {
    id: "65",
    requesterName: "Juan Pérez",
    sector: "5",
    irrigationSystem: "Equipo 22",
    irrigationDate: "2024-03-02",
    durationHours: 4.1,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_65_0",
        name: "Sulfato de Magnesio",
        quantity: 30,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 335.38,
    fertigationCompletionDate: "2024-03-02"
  },
  {
    id: "66",
    requesterName: "Juan Pérez",
    sector: "5",
    irrigationSystem: "Equipo 14",
    irrigationDate: "2024-03-02",
    durationHours: 7.8,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 602.16,
    fertigationCompletionDate: undefined
  },
  {
    id: "67",
    requesterName: "Maria Lopez",
    sector: "2",
    irrigationSystem: "Equipo 19",
    irrigationDate: "2024-03-03",
    durationHours: 5.9,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_67_0",
        name: "Urea",
        quantity: 78,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 959.34,
    fertigationCompletionDate: "2024-03-03"
  },
  {
    id: "68",
    requesterName: "Juan Pérez",
    sector: "5",
    irrigationSystem: "Equipo 14",
    irrigationDate: "2024-03-03",
    durationHours: 2.5,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 193,
    fertigationCompletionDate: undefined
  },
  {
    id: "69",
    requesterName: "Carlos Ruiz",
    sector: "1",
    irrigationSystem: "Equipo 14",
    irrigationDate: "2024-03-03",
    durationHours: 4.2,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 422.1,
    fertigationCompletionDate: undefined
  },
  {
    id: "70",
    requesterName: "Ana Gómez",
    sector: "5",
    irrigationSystem: "Equipo 22",
    irrigationDate: "2024-03-03",
    durationHours: 6.1,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_70_0",
        name: "Nitrato de Calcio",
        quantity: 113,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 498.98,
    fertigationCompletionDate: "2024-03-03"
  },
  {
    id: "71",
    requesterName: "Juan Pérez",
    sector: "3",
    irrigationSystem: "Equipo 13",
    irrigationDate: "2024-03-03",
    durationHours: 7.3,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_71_0",
        name: "Fosfato Monoamónico",
        quantity: 56,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 843.88,
    fertigationCompletionDate: "2024-03-03"
  },
  {
    id: "72",
    requesterName: "Juan Pérez",
    sector: "2",
    irrigationSystem: "Equipo 14",
    irrigationDate: "2024-03-03",
    durationHours: 3.7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 432.53,
    fertigationCompletionDate: undefined
  },
  {
    id: "73",
    requesterName: "Ana Gómez",
    sector: "5",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-03",
    durationHours: 6,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_73_0",
        name: "Nitrato de Calcio",
        quantity: 99,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.PENDING,
    totalWaterApplied: 1039.8,
    fertigationCompletionDate: undefined
  },
  {
    id: "74",
    requesterName: "Maria Lopez",
    sector: "2",
    irrigationSystem: "Equipo 16",
    irrigationDate: "2024-03-04",
    durationHours: 3.6,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_74_0",
        name: "Nitrato de Potasio",
        quantity: 62,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 331.56,
    fertigationCompletionDate: "2024-03-04"
  },
  {
    id: "75",
    requesterName: "Pedro Martinez",
    sector: "3",
    irrigationSystem: "Equipo 15",
    irrigationDate: "2024-03-04",
    durationHours: 7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_75_0",
        name: "Cloruro de Potasio",
        quantity: 56,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 515.2,
    fertigationCompletionDate: "2024-03-04"
  },
  {
    id: "76",
    requesterName: "Ana Gómez",
    sector: "5",
    irrigationSystem: "Equipo 19",
    irrigationDate: "2024-03-04",
    durationHours: 7.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_76_0",
        name: "Nitrato de Potasio",
        quantity: 47,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 1386,
    fertigationCompletionDate: "2024-03-04"
  },
  {
    id: "77",
    requesterName: "Ana Gómez",
    sector: "1",
    irrigationSystem: "Equipo 22",
    irrigationDate: "2024-03-04",
    durationHours: 2.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_77_0",
        name: "Fosfato Monoamónico",
        quantity: 108,
        unit: "kg"
      },
      {
        id: "f_gen_77_1",
        name: "Ácido Bórico",
        quantity: 90,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 218.97,
    fertigationCompletionDate: "2024-03-04"
  },
  {
    id: "78",
    requesterName: "Maria Lopez",
    sector: "3",
    irrigationSystem: "Equipo 20",
    irrigationDate: "2024-03-04",
    durationHours: 4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_78_0",
        name: "Nitrato de Amonio",
        quantity: 78,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 499.6,
    fertigationCompletionDate: "2024-03-04"
  },
  {
    id: "79",
    requesterName: "Carlos Ruiz",
    sector: "2",
    irrigationSystem: "Equipo 12",
    irrigationDate: "2024-03-04",
    durationHours: 5,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_79_0",
        name: "Nitrato de Amonio",
        quantity: 56,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 963,
    fertigationCompletionDate: "2024-03-04"
  },
  {
    id: "80",
    requesterName: "Ana Gómez",
    sector: "1",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-05",
    durationHours: 3.4,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 537.2,
    fertigationCompletionDate: undefined
  },
  {
    id: "81",
    requesterName: "Ana Gómez",
    sector: "3",
    irrigationSystem: "Equipo 11",
    irrigationDate: "2024-03-05",
    durationHours: 5.7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 645.81,
    fertigationCompletionDate: undefined
  },
  {
    id: "82",
    requesterName: "Ana Gómez",
    sector: "3",
    irrigationSystem: "Equipo 9",
    irrigationDate: "2024-03-05",
    durationHours: 3,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_82_0",
        name: "Nitrato de Calcio",
        quantity: 38,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 225.9,
    fertigationCompletionDate: "2024-03-05"
  },
  {
    id: "83",
    requesterName: "Pedro Martinez",
    sector: "3",
    irrigationSystem: "Equipo 21",
    irrigationDate: "2024-03-05",
    durationHours: 6.8,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 986,
    fertigationCompletionDate: undefined
  },
  {
    id: "84",
    requesterName: "Carlos Ruiz",
    sector: "2",
    irrigationSystem: "Equipo 17",
    irrigationDate: "2024-03-05",
    durationHours: 5.4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_84_0",
        name: "Nitrato de Calcio",
        quantity: 105,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.PENDING,
    totalWaterApplied: 324,
    fertigationCompletionDate: undefined
  },
  {
    id: "85",
    requesterName: "Carlos Ruiz",
    sector: "1",
    irrigationSystem: "Equipo 15",
    irrigationDate: "2024-03-05",
    durationHours: 3.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_85_0",
        name: "Ácido Bórico",
        quantity: 101,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 431.79,
    fertigationCompletionDate: "2024-03-05"
  },
  {
    id: "86",
    requesterName: "Juan Pérez",
    sector: "1",
    irrigationSystem: "Equipo 4",
    irrigationDate: "2024-03-06",
    durationHours: 3.4,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 319.26,
    fertigationCompletionDate: undefined
  },
  {
    id: "87",
    requesterName: "Ana Gómez",
    sector: "1",
    irrigationSystem: "Equipo 11",
    irrigationDate: "2024-03-06",
    durationHours: 6.3,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_87_0",
        name: "Fosfato Monoamónico",
        quantity: 97,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 790.65,
    fertigationCompletionDate: "2024-03-06"
  },
  {
    id: "88",
    requesterName: "Carlos Ruiz",
    sector: "3",
    irrigationSystem: "Equipo 6",
    irrigationDate: "2024-03-06",
    durationHours: 2.2,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_88_0",
        name: "Cloruro de Potasio",
        quantity: 81,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 275.66,
    fertigationCompletionDate: "2024-03-06"
  },
  {
    id: "89",
    requesterName: "Pedro Martinez",
    sector: "5",
    irrigationSystem: "Equipo 3",
    irrigationDate: "2024-03-06",
    durationHours: 6.8,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 1096.84,
    fertigationCompletionDate: undefined
  },
  {
    id: "90",
    requesterName: "Juan Pérez",
    sector: "5",
    irrigationSystem: "Equipo 17",
    irrigationDate: "2024-03-06",
    durationHours: 7.4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_90_0",
        name: "Nitrato de Calcio",
        quantity: 85,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 509.86,
    fertigationCompletionDate: "2024-03-06"
  },
  {
    id: "91",
    requesterName: "Ana Gómez",
    sector: "3",
    irrigationSystem: "Equipo 7",
    irrigationDate: "2024-03-06",
    durationHours: 7.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_91_0",
        name: "Nitrato de Calcio",
        quantity: 38,
        unit: "kg"
      },
      {
        id: "f_gen_91_1",
        name: "Sulfato de Zinc",
        quantity: 90,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 336.49,
    fertigationCompletionDate: "2024-03-06"
  },
  {
    id: "92",
    requesterName: "Carlos Ruiz",
    sector: "1",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-06",
    durationHours: 3.7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 584.6,
    fertigationCompletionDate: undefined
  },
  {
    id: "93",
    requesterName: "Maria Lopez",
    sector: "2",
    irrigationSystem: "Equipo 13",
    irrigationDate: "2024-03-07",
    durationHours: 6.8,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 989.4,
    fertigationCompletionDate: undefined
  },
  {
    id: "94",
    requesterName: "Carlos Ruiz",
    sector: "3",
    irrigationSystem: "Equipo 12",
    irrigationDate: "2024-03-07",
    durationHours: 7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_94_0",
        name: "Sulfato de Magnesio",
        quantity: 90,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 1326.5,
    fertigationCompletionDate: "2024-03-07"
  },
  {
    id: "95",
    requesterName: "Carlos Ruiz",
    sector: "3",
    irrigationSystem: "Equipo 15",
    irrigationDate: "2024-03-07",
    durationHours: 7.3,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_95_0",
        name: "Nitrato de Amonio",
        quantity: 113,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 537.28,
    fertigationCompletionDate: "2024-03-07"
  },
  {
    id: "96",
    requesterName: "Pedro Martinez",
    sector: "1",
    irrigationSystem: "Equipo 16",
    irrigationDate: "2024-03-07",
    durationHours: 4.1,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 359.57,
    fertigationCompletionDate: undefined
  },
  {
    id: "97",
    requesterName: "Ana Gómez",
    sector: "5",
    irrigationSystem: "Equipo 16",
    irrigationDate: "2024-03-07",
    durationHours: 4.8,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_97_0",
        name: "Nitrato de Potasio",
        quantity: 114,
        unit: "kg"
      },
      {
        id: "f_gen_97_1",
        name: "Nitrato de Calcio",
        quantity: 57,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.UNDETERMINED,
    totalWaterApplied: 424.32,
    fertigationCompletionDate: undefined
  },
  {
    id: "98",
    requesterName: "Carlos Ruiz",
    sector: "4",
    irrigationSystem: "Equipo 3",
    irrigationDate: "2024-03-07",
    durationHours: 4.3,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 650.16,
    fertigationCompletionDate: undefined
  },
  {
    id: "99",
    requesterName: "Carlos Ruiz",
    sector: "5",
    irrigationSystem: "Equipo 11",
    irrigationDate: "2024-03-07",
    durationHours: 3.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_99_0",
        name: "Nitrato de Potasio",
        quantity: 23,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 445.48,
    fertigationCompletionDate: "2024-03-07"
  },
  {
    id: "100",
    requesterName: "Juan Pérez",
    sector: "5",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-08",
    durationHours: 7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 1213.1,
    fertigationCompletionDate: undefined
  },
  {
    id: "101",
    requesterName: "Maria Lopez",
    sector: "2",
    irrigationSystem: "Equipo 3",
    irrigationDate: "2024-03-08",
    durationHours: 5.9,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_101_0",
        name: "Sulfato de Zinc",
        quantity: 91,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 960.52,
    fertigationCompletionDate: "2024-03-08"
  },
  {
    id: "102",
    requesterName: "Juan Pérez",
    sector: "5",
    irrigationSystem: "Equipo 22",
    irrigationDate: "2024-03-08",
    durationHours: 3.8,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_102_0",
        name: "Ácido Bórico",
        quantity: 32,
        unit: "kg"
      },
      {
        id: "f_gen_102_1",
        name: "Nitrato de Calcio",
        quantity: 97,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 310.84,
    fertigationCompletionDate: "2024-03-08"
  },
  {
    id: "103",
    requesterName: "Carlos Ruiz",
    sector: "2",
    irrigationSystem: "Equipo 4",
    irrigationDate: "2024-03-08",
    durationHours: 3.4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_103_0",
        name: "Sulfato de Zinc",
        quantity: 44,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 460.36,
    fertigationCompletionDate: "2024-03-08"
  },
  {
    id: "104",
    requesterName: "Carlos Ruiz",
    sector: "4",
    irrigationSystem: "Equipo 22",
    irrigationDate: "2024-03-08",
    durationHours: 2.2,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 207.9,
    fertigationCompletionDate: undefined
  },
  {
    id: "105",
    requesterName: "Carlos Ruiz",
    sector: "1",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-08",
    durationHours: 3.2,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_105_0",
        name: "Urea",
        quantity: 62,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 505.6,
    fertigationCompletionDate: "2024-03-08"
  },
  {
    id: "106",
    requesterName: "Carlos Ruiz",
    sector: "1",
    irrigationSystem: "Equipo 2",
    irrigationDate: "2024-03-08",
    durationHours: 3,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_106_0",
        name: "Ácido Fosfórico",
        quantity: 99,
        unit: "L"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 675.6,
    fertigationCompletionDate: "2024-03-08"
  },
  {
    id: "107",
    requesterName: "Juan Pérez",
    sector: "2",
    irrigationSystem: "Equipo 2",
    irrigationDate: "2024-03-09",
    durationHours: 6,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_107_0",
        name: "Nitrato de Calcio",
        quantity: 113,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 1363.8,
    fertigationCompletionDate: "2024-03-09"
  },
  {
    id: "108",
    requesterName: "Pedro Martinez",
    sector: "3",
    irrigationSystem: "Equipo 15",
    irrigationDate: "2024-03-09",
    durationHours: 2,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_108_0",
        name: "Cloruro de Potasio",
        quantity: 42,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 147.2,
    fertigationCompletionDate: "2024-03-09"
  },
  {
    id: "109",
    requesterName: "Maria Lopez",
    sector: "1",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-09",
    durationHours: 5.9,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_109_0",
        name: "Fosfato Monoamónico",
        quantity: 39,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.UNDETERMINED,
    totalWaterApplied: 932.2,
    fertigationCompletionDate: undefined
  },
  {
    id: "110",
    requesterName: "Carlos Ruiz",
    sector: "1",
    irrigationSystem: "Equipo 13",
    irrigationDate: "2024-03-09",
    durationHours: 2.6,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_110_0",
        name: "Sulfato de Magnesio",
        quantity: 23,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 355.16,
    fertigationCompletionDate: "2024-03-09"
  },
  {
    id: "111",
    requesterName: "Ana Gómez",
    sector: "3",
    irrigationSystem: "Equipo 6",
    irrigationDate: "2024-03-09",
    durationHours: 3.7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 463.61,
    fertigationCompletionDate: undefined
  },
  {
    id: "112",
    requesterName: "Pedro Martinez",
    sector: "2",
    irrigationSystem: "Equipo 11",
    irrigationDate: "2024-03-09",
    durationHours: 7.4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_112_0",
        name: "Urea",
        quantity: 31,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 819.92,
    fertigationCompletionDate: "2024-03-09"
  },
  {
    id: "113",
    requesterName: "Maria Lopez",
    sector: "5",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-09",
    durationHours: 5.4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_113_0",
        name: "Cloruro de Potasio",
        quantity: 86,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 935.82,
    fertigationCompletionDate: "2024-03-09"
  },
  {
    id: "114",
    requesterName: "Carlos Ruiz",
    sector: "3",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-10",
    durationHours: 7.1,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 1123.22,
    fertigationCompletionDate: undefined
  },
  {
    id: "115",
    requesterName: "Juan Pérez",
    sector: "3",
    irrigationSystem: "Equipo 16",
    irrigationDate: "2024-03-10",
    durationHours: 3.7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 354.83,
    fertigationCompletionDate: undefined
  },
  {
    id: "116",
    requesterName: "Ana Gómez",
    sector: "1",
    irrigationSystem: "Equipo 22",
    irrigationDate: "2024-03-10",
    durationHours: 2.2,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_116_0",
        name: "Sulfato de Magnesio",
        quantity: 105,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 178.42,
    fertigationCompletionDate: "2024-03-10"
  },
  {
    id: "117",
    requesterName: "Maria Lopez",
    sector: "4",
    irrigationSystem: "Equipo 3",
    irrigationDate: "2024-03-10",
    durationHours: 7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_117_0",
        name: "Nitrato de Calcio",
        quantity: 78,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 1058.4,
    fertigationCompletionDate: "2024-03-10"
  },
  {
    id: "118",
    requesterName: "Ana Gómez",
    sector: "5",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-10",
    durationHours: 3.6,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_118_0",
        name: "Nitrato de Calcio",
        quantity: 52,
        unit: "kg"
      },
      {
        id: "f_gen_118_1",
        name: "Sulfato de Magnesio",
        quantity: 108,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 623.88,
    fertigationCompletionDate: "2024-03-10"
  },
  {
    id: "119",
    requesterName: "Carlos Ruiz",
    sector: "1",
    irrigationSystem: "Equipo 14",
    irrigationDate: "2024-03-11",
    durationHours: 7.4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_119_0",
        name: "Nitrato de Potasio",
        quantity: 89,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 743.7,
    fertigationCompletionDate: "2024-03-11"
  },
  {
    id: "120",
    requesterName: "Pedro Martinez",
    sector: "4",
    irrigationSystem: "Equipo 20",
    irrigationDate: "2024-03-11",
    durationHours: 5,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_120_0",
        name: "Nitrato de Potasio",
        quantity: 118,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 450.5,
    fertigationCompletionDate: "2024-03-11"
  },
  {
    id: "121",
    requesterName: "Ana Gómez",
    sector: "3",
    irrigationSystem: "Equipo 19",
    irrigationDate: "2024-03-11",
    durationHours: 7.3,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_121_0",
        name: "Ácido Fosfórico",
        quantity: 110,
        unit: "L"
      },
      {
        id: "f_gen_121_1",
        name: "Urea",
        quantity: 116,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 1340.28,
    fertigationCompletionDate: "2024-03-11"
  },
  {
    id: "122",
    requesterName: "Juan Pérez",
    sector: "3",
    irrigationSystem: "Equipo 13",
    irrigationDate: "2024-03-11",
    durationHours: 4.1,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_122_0",
        name: "Ácido Bórico",
        quantity: 32,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 473.96,
    fertigationCompletionDate: "2024-03-11"
  },
  {
    id: "123",
    requesterName: "Ana Gómez",
    sector: "2",
    irrigationSystem: "Equipo 11",
    irrigationDate: "2024-03-11",
    durationHours: 7.9,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 875.32,
    fertigationCompletionDate: undefined
  },
  {
    id: "124",
    requesterName: "Ana Gómez",
    sector: "1",
    irrigationSystem: "Equipo 22",
    irrigationDate: "2024-03-11",
    durationHours: 7.9,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 640.69,
    fertigationCompletionDate: undefined
  },
  {
    id: "125",
    requesterName: "Ana Gómez",
    sector: "1",
    irrigationSystem: "Equipo 16",
    irrigationDate: "2024-03-11",
    durationHours: 7.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_125_0",
        name: "Fosfato Monoamónico",
        quantity: 40,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 675.29,
    fertigationCompletionDate: "2024-03-11"
  },
  {
    id: "126",
    requesterName: "Carlos Ruiz",
    sector: "5",
    irrigationSystem: "Equipo 17",
    irrigationDate: "2024-03-11",
    durationHours: 2.1,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 144.69,
    fertigationCompletionDate: undefined
  },
  {
    id: "127",
    requesterName: "Maria Lopez",
    sector: "2",
    irrigationSystem: "Equipo 21",
    irrigationDate: "2024-03-12",
    durationHours: 5.9,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 828.36,
    fertigationCompletionDate: undefined
  },
  {
    id: "128",
    requesterName: "Pedro Martinez",
    sector: "5",
    irrigationSystem: "Equipo 17",
    irrigationDate: "2024-03-12",
    durationHours: 3.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_128_0",
        name: "Nitrato de Calcio",
        quantity: 115,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 254.93,
    fertigationCompletionDate: "2024-03-12"
  },
  {
    id: "129",
    requesterName: "Ana Gómez",
    sector: "1",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-12",
    durationHours: 2.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_129_0",
        name: "Urea",
        quantity: 105,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 426.6,
    fertigationCompletionDate: "2024-03-12"
  },
  {
    id: "130",
    requesterName: "Juan Pérez",
    sector: "1",
    irrigationSystem: "Equipo 15",
    irrigationDate: "2024-03-12",
    durationHours: 5.3,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_130_0",
        name: "Cloruro de Potasio",
        quantity: 56,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.PENDING,
    totalWaterApplied: 618.51,
    fertigationCompletionDate: undefined
  },
  {
    id: "131",
    requesterName: "Juan Pérez",
    sector: "1",
    irrigationSystem: "Equipo 14",
    irrigationDate: "2024-03-12",
    durationHours: 3.7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 371.85,
    fertigationCompletionDate: undefined
  },
  {
    id: "132",
    requesterName: "Juan Pérez",
    sector: "2",
    irrigationSystem: "Equipo 2",
    irrigationDate: "2024-03-12",
    durationHours: 3,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_132_0",
        name: "Urea",
        quantity: 97,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.UNDETERMINED,
    totalWaterApplied: 681.9,
    fertigationCompletionDate: undefined
  },
  {
    id: "133",
    requesterName: "Juan Pérez",
    sector: "3",
    irrigationSystem: "Equipo 22",
    irrigationDate: "2024-03-12",
    durationHours: 5.3,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_133_0",
        name: "Ácido Bórico",
        quantity: 113,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 407.57,
    fertigationCompletionDate: "2024-03-12"
  },
  {
    id: "134",
    requesterName: "Maria Lopez",
    sector: "1",
    irrigationSystem: "Equipo 12",
    irrigationDate: "2024-03-12",
    durationHours: 7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_134_0",
        name: "Sulfato de Magnesio",
        quantity: 88,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 1112.3,
    fertigationCompletionDate: "2024-03-12"
  },
  {
    id: "135",
    requesterName: "Ana Gómez",
    sector: "5",
    irrigationSystem: "Equipo 15",
    irrigationDate: "2024-03-13",
    durationHours: 2.5,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 278,
    fertigationCompletionDate: undefined
  },
  {
    id: "136",
    requesterName: "Carlos Ruiz",
    sector: "3",
    irrigationSystem: "Equipo 2",
    irrigationDate: "2024-03-13",
    durationHours: 4.5,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 1017,
    fertigationCompletionDate: undefined
  },
  {
    id: "137",
    requesterName: "Ana Gómez",
    sector: "2",
    irrigationSystem: "Equipo 17",
    irrigationDate: "2024-03-13",
    durationHours: 7.5,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_137_0",
        name: "Sulfato de Magnesio",
        quantity: 38,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 450,
    fertigationCompletionDate: "2024-03-13"
  },
  {
    id: "138",
    requesterName: "Juan Pérez",
    sector: "3",
    irrigationSystem: "Equipo 11",
    irrigationDate: "2024-03-13",
    durationHours: 2.2,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 249.26,
    fertigationCompletionDate: undefined
  },
  {
    id: "139",
    requesterName: "Carlos Ruiz",
    sector: "5",
    irrigationSystem: "Equipo 15",
    irrigationDate: "2024-03-13",
    durationHours: 6.8,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_139_0",
        name: "Nitrato de Calcio",
        quantity: 42,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 756.16,
    fertigationCompletionDate: "2024-03-13"
  },
  {
    id: "140",
    requesterName: "Ana Gómez",
    sector: "2",
    irrigationSystem: "Equipo 15",
    irrigationDate: "2024-03-13",
    durationHours: 7.4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_140_0",
        name: "Nitrato de Calcio",
        quantity: 78,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 664.52,
    fertigationCompletionDate: "2024-03-13"
  },
  {
    id: "141",
    requesterName: "Pedro Martinez",
    sector: "5",
    irrigationSystem: "Equipo 2",
    irrigationDate: "2024-03-13",
    durationHours: 4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_141_0",
        name: "Nitrato de Potasio",
        quantity: 49,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 863.6,
    fertigationCompletionDate: "2024-03-13"
  },
  {
    id: "142",
    requesterName: "Ana Gómez",
    sector: "2",
    irrigationSystem: "Equipo 16",
    irrigationDate: "2024-03-14",
    durationHours: 7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_142_0",
        name: "Cloruro de Potasio",
        quantity: 38,
        unit: "kg"
      },
      {
        id: "f_gen_142_1",
        name: "Nitrato de Calcio",
        quantity: 36,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 644.7,
    fertigationCompletionDate: "2024-03-14"
  },
  {
    id: "143",
    requesterName: "Ana Gómez",
    sector: "2",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-14",
    durationHours: 6.8,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_143_0",
        name: "Sulfato de Magnesio",
        quantity: 79,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 1099.56,
    fertigationCompletionDate: "2024-03-14"
  },
  {
    id: "144",
    requesterName: "Carlos Ruiz",
    sector: "5",
    irrigationSystem: "Equipo 14",
    irrigationDate: "2024-03-14",
    durationHours: 4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_144_0",
        name: "Nitrato de Potasio",
        quantity: 56,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 308.8,
    fertigationCompletionDate: "2024-03-14"
  },
  {
    id: "145",
    requesterName: "Maria Lopez",
    sector: "2",
    irrigationSystem: "Equipo 15",
    irrigationDate: "2024-03-14",
    durationHours: 5.4,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 484.92,
    fertigationCompletionDate: undefined
  },
  {
    id: "146",
    requesterName: "Juan Pérez",
    sector: "1",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-14",
    durationHours: 5.5,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_146_0",
        name: "Ácido Fosfórico",
        quantity: 105,
        unit: "L"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 869,
    fertigationCompletionDate: "2024-03-14"
  },
  {
    id: "147",
    requesterName: "Ana Gómez",
    sector: "5",
    irrigationSystem: "Equipo 3",
    irrigationDate: "2024-03-14",
    durationHours: 2.5,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_147_0",
        name: "Sulfato de Zinc",
        quantity: 48,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 403.25,
    fertigationCompletionDate: "2024-03-14"
  },
  {
    id: "148",
    requesterName: "Carlos Ruiz",
    sector: "3",
    irrigationSystem: "Equipo 22",
    irrigationDate: "2024-03-15",
    durationHours: 6.8,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 522.92,
    fertigationCompletionDate: undefined
  },
  {
    id: "149",
    requesterName: "Ana Gómez",
    sector: "3",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-15",
    durationHours: 4.6,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_149_0",
        name: "Fosfato Monoamónico",
        quantity: 62,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 727.72,
    fertigationCompletionDate: "2024-03-15"
  },
  {
    id: "150",
    requesterName: "Maria Lopez",
    sector: "3",
    irrigationSystem: "Equipo 12",
    irrigationDate: "2024-03-15",
    durationHours: 3.7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 701.15,
    fertigationCompletionDate: undefined
  },
  {
    id: "151",
    requesterName: "Ana Gómez",
    sector: "4",
    irrigationSystem: "Equipo 20",
    irrigationDate: "2024-03-15",
    durationHours: 5,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 450.5,
    fertigationCompletionDate: undefined
  },
  {
    id: "152",
    requesterName: "Carlos Ruiz",
    sector: "2",
    irrigationSystem: "Equipo 22",
    irrigationDate: "2024-03-15",
    durationHours: 6.3,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 585.27,
    fertigationCompletionDate: undefined
  },
  {
    id: "153",
    requesterName: "Pedro Martinez",
    sector: "3",
    irrigationSystem: "Equipo 2",
    irrigationDate: "2024-03-15",
    durationHours: 2.2,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_153_0",
        name: "Fosfato Monoamónico",
        quantity: 110,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 497.2,
    fertigationCompletionDate: "2024-03-15"
  },
  {
    id: "154",
    requesterName: "Carlos Ruiz",
    sector: "1",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-15",
    durationHours: 7.3,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_154_0",
        name: "Fosfato Monoamónico",
        quantity: 48,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 1153.4,
    fertigationCompletionDate: "2024-03-15"
  },
  {
    id: "155",
    requesterName: "Pedro Martinez",
    sector: "1",
    irrigationSystem: "Equipo 21",
    irrigationDate: "2024-03-15",
    durationHours: 4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_155_0",
        name: "Sulfato de Magnesio",
        quantity: 56,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.UNDETERMINED,
    totalWaterApplied: 560,
    fertigationCompletionDate: undefined
  },
  {
    id: "156",
    requesterName: "Juan Pérez",
    sector: "2",
    irrigationSystem: "Equipo 13",
    irrigationDate: "2024-03-16",
    durationHours: 3.7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 538.35,
    fertigationCompletionDate: undefined
  },
  {
    id: "157",
    requesterName: "Maria Lopez",
    sector: "2",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-16",
    durationHours: 7.9,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_157_0",
        name: "Ácido Bórico",
        quantity: 99,
        unit: "kg"
      },
      {
        id: "f_gen_157_1",
        name: "Sulfato de Magnesio",
        quantity: 105,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 1277.43,
    fertigationCompletionDate: "2024-03-16"
  },
  {
    id: "158",
    requesterName: "Juan Pérez",
    sector: "1",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-16",
    durationHours: 6.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_158_0",
        name: "Nitrato de Calcio",
        quantity: 89,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.PENDING,
    totalWaterApplied: 1058.6,
    fertigationCompletionDate: undefined
  },
  {
    id: "159",
    requesterName: "Carlos Ruiz",
    sector: "5",
    irrigationSystem: "Equipo 17",
    irrigationDate: "2024-03-16",
    durationHours: 2.2,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 151.58,
    fertigationCompletionDate: undefined
  },
  {
    id: "160",
    requesterName: "Maria Lopez",
    sector: "1",
    irrigationSystem: "Equipo 11",
    irrigationDate: "2024-03-16",
    durationHours: 7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 878.5,
    fertigationCompletionDate: undefined
  },
  {
    id: "161",
    requesterName: "Maria Lopez",
    sector: "1",
    irrigationSystem: "Equipo 22",
    irrigationDate: "2024-03-16",
    durationHours: 4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_161_0",
        name: "Cloruro de Potasio",
        quantity: 86,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 324.4,
    fertigationCompletionDate: "2024-03-16"
  },
  {
    id: "162",
    requesterName: "Carlos Ruiz",
    sector: "5",
    irrigationSystem: "Equipo 17",
    irrigationDate: "2024-03-16",
    durationHours: 3,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_162_0",
        name: "Nitrato de Calcio",
        quantity: 101,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 206.7,
    fertigationCompletionDate: "2024-03-16"
  },
  {
    id: "163",
    requesterName: "Carlos Ruiz",
    sector: "5",
    irrigationSystem: "Equipo 19",
    irrigationDate: "2024-03-16",
    durationHours: 6.8,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 1224,
    fertigationCompletionDate: undefined
  },
  {
    id: "164",
    requesterName: "Juan Pérez",
    sector: "2",
    irrigationSystem: "Equipo 15",
    irrigationDate: "2024-03-17",
    durationHours: 2.2,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 197.56,
    fertigationCompletionDate: undefined
  },
  {
    id: "165",
    requesterName: "Maria Lopez",
    sector: "1",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-17",
    durationHours: 2.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_165_0",
        name: "Nitrato de Potasio",
        quantity: 97,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 426.6,
    fertigationCompletionDate: "2024-03-17"
  },
  {
    id: "166",
    requesterName: "Ana Gómez",
    sector: "3",
    irrigationSystem: "Equipo 14",
    irrigationDate: "2024-03-17",
    durationHours: 6.3,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 699.93,
    fertigationCompletionDate: undefined
  },
  {
    id: "167",
    requesterName: "Maria Lopez",
    sector: "3",
    irrigationSystem: "Equipo 9",
    irrigationDate: "2024-03-17",
    durationHours: 2,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_167_0",
        name: "Urea",
        quantity: 60,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 150.6,
    fertigationCompletionDate: "2024-03-17"
  },
  {
    id: "168",
    requesterName: "Maria Lopez",
    sector: "1",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-17",
    durationHours: 7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 1106,
    fertigationCompletionDate: undefined
  },
  {
    id: "169",
    requesterName: "Ana Gómez",
    sector: "1",
    irrigationSystem: "Equipo 7",
    irrigationDate: "2024-03-17",
    durationHours: 7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_169_0",
        name: "Ácido Bórico",
        quantity: 105,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.PENDING,
    totalWaterApplied: 319.2,
    fertigationCompletionDate: undefined
  },
  {
    id: "170",
    requesterName: "Juan Pérez",
    sector: "2",
    irrigationSystem: "Equipo 21",
    irrigationDate: "2024-03-18",
    durationHours: 3.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_170_0",
        name: "Fosfato Monoamónico",
        quantity: 110,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 519.48,
    fertigationCompletionDate: "2024-03-18"
  },
  {
    id: "171",
    requesterName: "Juan Pérez",
    sector: "3",
    irrigationSystem: "Equipo 10",
    irrigationDate: "2024-03-18",
    durationHours: 2.7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 350.46,
    fertigationCompletionDate: undefined
  },
  {
    id: "172",
    requesterName: "Maria Lopez",
    sector: "2",
    irrigationSystem: "Equipo 12",
    irrigationDate: "2024-03-18",
    durationHours: 6.8,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_172_0",
        name: "Nitrato de Calcio",
        quantity: 56,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 1309.68,
    fertigationCompletionDate: "2024-03-18"
  },
  {
    id: "173",
    requesterName: "Pedro Martinez",
    sector: "2",
    irrigationSystem: "Equipo 14",
    irrigationDate: "2024-03-18",
    durationHours: 2.2,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 257.18,
    fertigationCompletionDate: undefined
  },
  {
    id: "174",
    requesterName: "Juan Pérez",
    sector: "2",
    irrigationSystem: "Equipo 22",
    irrigationDate: "2024-03-18",
    durationHours: 2,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 185.8,
    fertigationCompletionDate: undefined
  },
  {
    id: "175",
    requesterName: "Juan Pérez",
    sector: "1",
    irrigationSystem: "Equipo 6",
    irrigationDate: "2024-03-18",
    durationHours: 5.9,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_175_0",
        name: "Nitrato de Calcio",
        quantity: 50,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 649.59,
    fertigationCompletionDate: "2024-03-18"
  },
  {
    id: "176",
    requesterName: "Juan Pérez",
    sector: "3",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-18",
    durationHours: 6.8,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_176_0",
        name: "Cloruro de Potasio",
        quantity: 52,
        unit: "kg"
      },
      {
        id: "f_gen_176_1",
        name: "Nitrato de Calcio",
        quantity: 62,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 1075.76,
    fertigationCompletionDate: "2024-03-18"
  },
  {
    id: "177",
    requesterName: "Ana Gómez",
    sector: "1",
    irrigationSystem: "Equipo 11",
    irrigationDate: "2024-03-19",
    durationHours: 4.1,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 514.55,
    fertigationCompletionDate: undefined
  },
  {
    id: "178",
    requesterName: "Carlos Ruiz",
    sector: "1",
    irrigationSystem: "Equipo 2",
    irrigationDate: "2024-03-19",
    durationHours: 5.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_178_0",
        name: "Cloruro de Potasio",
        quantity: 90,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 1283.64,
    fertigationCompletionDate: "2024-03-19"
  },
  {
    id: "179",
    requesterName: "Pedro Martinez",
    sector: "2",
    irrigationSystem: "Equipo 13",
    irrigationDate: "2024-03-19",
    durationHours: 3.4,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 494.7,
    fertigationCompletionDate: undefined
  },
  {
    id: "180",
    requesterName: "Juan Pérez",
    sector: "5",
    irrigationSystem: "Equipo 13",
    irrigationDate: "2024-03-19",
    durationHours: 7.9,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 948.79,
    fertigationCompletionDate: undefined
  },
  {
    id: "181",
    requesterName: "Pedro Martinez",
    sector: "3",
    irrigationSystem: "Equipo 2",
    irrigationDate: "2024-03-19",
    durationHours: 3.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_181_0",
        name: "Nitrato de Calcio",
        quantity: 47,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 836.2,
    fertigationCompletionDate: "2024-03-19"
  },
  {
    id: "182",
    requesterName: "Maria Lopez",
    sector: "1",
    irrigationSystem: "Equipo 2",
    irrigationDate: "2024-03-19",
    durationHours: 2.5,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_182_0",
        name: "Nitrato de Potasio",
        quantity: 97,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 563,
    fertigationCompletionDate: "2024-03-19"
  },
  {
    id: "183",
    requesterName: "Juan Pérez",
    sector: "1",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-19",
    durationHours: 3,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_183_0",
        name: "Nitrato de Potasio",
        quantity: 79,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 474,
    fertigationCompletionDate: "2024-03-19"
  },
  {
    id: "184",
    requesterName: "Maria Lopez",
    sector: "2",
    irrigationSystem: "Equipo 12",
    irrigationDate: "2024-03-20",
    durationHours: 2.2,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_184_0",
        name: "Urea",
        quantity: 62,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 423.72,
    fertigationCompletionDate: "2024-03-20"
  },
  {
    id: "185",
    requesterName: "Carlos Ruiz",
    sector: "3",
    irrigationSystem: "Equipo 15",
    irrigationDate: "2024-03-20",
    durationHours: 7.3,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_185_0",
        name: "Nitrato de Potasio",
        quantity: 90,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 537.28,
    fertigationCompletionDate: "2024-03-20"
  },
  {
    id: "186",
    requesterName: "Juan Pérez",
    sector: "1",
    irrigationSystem: "Equipo 16",
    irrigationDate: "2024-03-20",
    durationHours: 2.3,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_186_0",
        name: "Fosfato Monoamónico",
        quantity: 29,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 201.71,
    fertigationCompletionDate: "2024-03-20"
  },
  {
    id: "187",
    requesterName: "Pedro Martinez",
    sector: "1",
    irrigationSystem: "Equipo 19",
    irrigationDate: "2024-03-20",
    durationHours: 3.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_187_0",
        name: "Fosfato Monoamónico",
        quantity: 30,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 668.59,
    fertigationCompletionDate: "2024-03-20"
  },
  {
    id: "188",
    requesterName: "Pedro Martinez",
    sector: "2",
    irrigationSystem: "Equipo 14",
    irrigationDate: "2024-03-20",
    durationHours: 3.7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 432.53,
    fertigationCompletionDate: undefined
  },
  {
    id: "189",
    requesterName: "Carlos Ruiz",
    sector: "2",
    irrigationSystem: "Equipo 2",
    irrigationDate: "2024-03-20",
    durationHours: 7.3,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 1659.29,
    fertigationCompletionDate: undefined
  },
  {
    id: "190",
    requesterName: "Carlos Ruiz",
    sector: "2",
    irrigationSystem: "Equipo 14",
    irrigationDate: "2024-03-21",
    durationHours: 7.2,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 841.68,
    fertigationCompletionDate: undefined
  },
  {
    id: "191",
    requesterName: "Ana Gómez",
    sector: "5",
    irrigationSystem: "Equipo 13",
    irrigationDate: "2024-03-21",
    durationHours: 2.2,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 264.22,
    fertigationCompletionDate: undefined
  },
  {
    id: "192",
    requesterName: "Maria Lopez",
    sector: "5",
    irrigationSystem: "Equipo 16",
    irrigationDate: "2024-03-21",
    durationHours: 5.4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_192_0",
        name: "Nitrato de Calcio",
        quantity: 110,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.PENDING,
    totalWaterApplied: 477.36,
    fertigationCompletionDate: undefined
  },
  {
    id: "193",
    requesterName: "Carlos Ruiz",
    sector: "4",
    irrigationSystem: "Equipo 22",
    irrigationDate: "2024-03-21",
    durationHours: 5.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_193_0",
        name: "Sulfato de Magnesio",
        quantity: 62,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 538.65,
    fertigationCompletionDate: "2024-03-21"
  },
  {
    id: "194",
    requesterName: "Ana Gómez",
    sector: "1",
    irrigationSystem: "Equipo 15",
    irrigationDate: "2024-03-21",
    durationHours: 7.4,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 863.58,
    fertigationCompletionDate: undefined
  },
  {
    id: "195",
    requesterName: "Carlos Ruiz",
    sector: "3",
    irrigationSystem: "Equipo 18",
    irrigationDate: "2024-03-21",
    durationHours: 5.8,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_195_0",
        name: "Nitrato de Potasio",
        quantity: 113,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 611.32,
    fertigationCompletionDate: "2024-03-21"
  },
  {
    id: "196",
    requesterName: "Maria Lopez",
    sector: "4",
    irrigationSystem: "Equipo 16",
    irrigationDate: "2024-03-21",
    durationHours: 5.7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 453.72,
    fertigationCompletionDate: undefined
  },
  {
    id: "197",
    requesterName: "Maria Lopez",
    sector: "2",
    irrigationSystem: "Equipo 18",
    irrigationDate: "2024-03-21",
    durationHours: 7.4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_197_0",
        name: "Nitrato de Amonio",
        quantity: 110,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 1646.5,
    fertigationCompletionDate: "2024-03-21"
  },
  {
    id: "198",
    requesterName: "Carlos Ruiz",
    sector: "4",
    irrigationSystem: "Equipo 19",
    irrigationDate: "2024-03-22",
    durationHours: 7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 1306.2,
    fertigationCompletionDate: undefined
  },
  {
    id: "199",
    requesterName: "Maria Lopez",
    sector: "3",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-22",
    durationHours: 2.4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_199_0",
        name: "Nitrato de Amonio",
        quantity: 60,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 379.68,
    fertigationCompletionDate: "2024-03-22"
  },
  {
    id: "200",
    requesterName: "Carlos Ruiz",
    sector: "1",
    irrigationSystem: "Equipo 11",
    irrigationDate: "2024-03-22",
    durationHours: 2.2,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 276.1,
    fertigationCompletionDate: undefined
  },
  {
    id: "201",
    requesterName: "Maria Lopez",
    sector: "3",
    irrigationSystem: "Equipo 11",
    irrigationDate: "2024-03-22",
    durationHours: 7.4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_201_0",
        name: "Nitrato de Amonio",
        quantity: 115,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 838.42,
    fertigationCompletionDate: "2024-03-22"
  },
  {
    id: "202",
    requesterName: "Carlos Ruiz",
    sector: "5",
    irrigationSystem: "Equipo 15",
    irrigationDate: "2024-03-22",
    durationHours: 4.1,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 455.92,
    fertigationCompletionDate: undefined
  },
  {
    id: "203",
    requesterName: "Maria Lopez",
    sector: "3",
    irrigationSystem: "Equipo 13",
    irrigationDate: "2024-03-22",
    durationHours: 5,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_203_0",
        name: "Nitrato de Calcio",
        quantity: 25,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.UNDETERMINED,
    totalWaterApplied: 578,
    fertigationCompletionDate: undefined
  },
  {
    id: "204",
    requesterName: "Carlos Ruiz",
    sector: "5",
    irrigationSystem: "Equipo 15",
    irrigationDate: "2024-03-22",
    durationHours: 5,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_204_0",
        name: "Sulfato de Magnesio",
        quantity: 112,
        unit: "kg"
      },
      {
        id: "f_gen_204_1",
        name: "Nitrato de Potasio",
        quantity: 90,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 556,
    fertigationCompletionDate: "2024-03-22"
  },
  {
    id: "205",
    requesterName: "Pedro Martinez",
    sector: "1",
    irrigationSystem: "Equipo 13",
    irrigationDate: "2024-03-23",
    durationHours: 7.1,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 969.86,
    fertigationCompletionDate: undefined
  },
  {
    id: "206",
    requesterName: "Ana Gómez",
    sector: "5",
    irrigationSystem: "Equipo 2",
    irrigationDate: "2024-03-23",
    durationHours: 4.1,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_206_0",
        name: "Sulfato de Magnesio",
        quantity: 118,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 885.19,
    fertigationCompletionDate: "2024-03-23"
  },
  {
    id: "207",
    requesterName: "Pedro Martinez",
    sector: "2",
    irrigationSystem: "Equipo 16",
    irrigationDate: "2024-03-23",
    durationHours: 5.8,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 534.18,
    fertigationCompletionDate: undefined
  },
  {
    id: "208",
    requesterName: "Carlos Ruiz",
    sector: "3",
    irrigationSystem: "Equipo 11",
    irrigationDate: "2024-03-23",
    durationHours: 3.7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 419.21,
    fertigationCompletionDate: undefined
  },
  {
    id: "209",
    requesterName: "Juan Pérez",
    sector: "1",
    irrigationSystem: "Equipo 22",
    irrigationDate: "2024-03-23",
    durationHours: 2.5,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_209_0",
        name: "Nitrato de Calcio",
        quantity: 42,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 202.75,
    fertigationCompletionDate: "2024-03-23"
  },
  {
    id: "210",
    requesterName: "Ana Gómez",
    sector: "2",
    irrigationSystem: "Equipo 12",
    irrigationDate: "2024-03-23",
    durationHours: 3.4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_210_0",
        name: "Nitrato de Calcio",
        quantity: 90,
        unit: "kg"
      },
      {
        id: "f_gen_210_1",
        name: "Sulfato de Magnesio",
        quantity: 62,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 654.84,
    fertigationCompletionDate: "2024-03-23"
  },
  {
    id: "211",
    requesterName: "Ana Gómez",
    sector: "5",
    irrigationSystem: "Equipo 2",
    irrigationDate: "2024-03-23",
    durationHours: 4.1,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_211_0",
        name: "Fosfato Monoamónico",
        quantity: 23,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 885.19,
    fertigationCompletionDate: "2024-03-23"
  },
  {
    id: "212",
    requesterName: "Pedro Martinez",
    sector: "5",
    irrigationSystem: "Equipo 17",
    irrigationDate: "2024-03-24",
    durationHours: 5,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_212_0",
        name: "Ácido Fosfórico",
        quantity: 38,
        unit: "L"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 344.5,
    fertigationCompletionDate: "2024-03-24"
  },
  {
    id: "213",
    requesterName: "Maria Lopez",
    sector: "5",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-24",
    durationHours: 2.4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_213_0",
        name: "Sulfato de Magnesio",
        quantity: 21,
        unit: "kg"
      },
      {
        id: "f_gen_213_1",
        name: "Ácido Bórico",
        quantity: 89,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 415.92,
    fertigationCompletionDate: "2024-03-24"
  },
  {
    id: "214",
    requesterName: "Ana Gómez",
    sector: "2",
    irrigationSystem: "Equipo 11",
    irrigationDate: "2024-03-24",
    durationHours: 6.8,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_214_0",
        name: "Cloruro de Potasio",
        quantity: 52,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.PENDING,
    totalWaterApplied: 753.44,
    fertigationCompletionDate: undefined
  },
  {
    id: "215",
    requesterName: "Pedro Martinez",
    sector: "3",
    irrigationSystem: "Equipo 13",
    irrigationDate: "2024-03-24",
    durationHours: 7.1,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_215_0",
        name: "Nitrato de Calcio",
        quantity: 90,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 820.76,
    fertigationCompletionDate: "2024-03-24"
  },
  {
    id: "216",
    requesterName: "Carlos Ruiz",
    sector: "4",
    irrigationSystem: "Equipo 10",
    irrigationDate: "2024-03-24",
    durationHours: 6.9,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_216_0",
        name: "Nitrato de Calcio",
        quantity: 78,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 825.93,
    fertigationCompletionDate: "2024-03-24"
  },
  {
    id: "217",
    requesterName: "Pedro Martinez",
    sector: "1",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-24",
    durationHours: 3,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 474,
    fertigationCompletionDate: undefined
  },
  {
    id: "218",
    requesterName: "Carlos Ruiz",
    sector: "1",
    irrigationSystem: "Equipo 14",
    irrigationDate: "2024-03-24",
    durationHours: 7.4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_218_0",
        name: "Nitrato de Calcio",
        quantity: 113,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 743.7,
    fertigationCompletionDate: "2024-03-24"
  },
  {
    id: "219",
    requesterName: "Maria Lopez",
    sector: "1",
    irrigationSystem: "Equipo 18",
    irrigationDate: "2024-03-24",
    durationHours: 4.1,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_219_0",
        name: "Urea",
        quantity: 55,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 529.72,
    fertigationCompletionDate: "2024-03-24"
  },
  {
    id: "220",
    requesterName: "Carlos Ruiz",
    sector: "2",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-24",
    durationHours: 7.2,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_220_0",
        name: "Nitrato de Potasio",
        quantity: 23,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 1164.24,
    fertigationCompletionDate: "2024-03-24"
  },
  {
    id: "221",
    requesterName: "Maria Lopez",
    sector: "1",
    irrigationSystem: "Equipo 15",
    irrigationDate: "2024-03-25",
    durationHours: 3.4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_221_0",
        name: "Nitrato de Calcio",
        quantity: 56,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 396.78,
    fertigationCompletionDate: "2024-03-25"
  },
  {
    id: "222",
    requesterName: "Pedro Martinez",
    sector: "2",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-25",
    durationHours: 2.4,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 388.08,
    fertigationCompletionDate: undefined
  },
  {
    id: "223",
    requesterName: "Maria Lopez",
    sector: "4",
    irrigationSystem: "Equipo 22",
    irrigationDate: "2024-03-25",
    durationHours: 5,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_223_0",
        name: "Ácido Bórico",
        quantity: 38,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 472.5,
    fertigationCompletionDate: "2024-03-25"
  },
  {
    id: "224",
    requesterName: "Juan Pérez",
    sector: "4",
    irrigationSystem: "Equipo 21",
    irrigationDate: "2024-03-25",
    durationHours: 7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_224_0",
        name: "Fosfato Monoamónico",
        quantity: 99,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 1003.8,
    fertigationCompletionDate: "2024-03-25"
  },
  {
    id: "225",
    requesterName: "Pedro Martinez",
    sector: "5",
    irrigationSystem: "Equipo 17",
    irrigationDate: "2024-03-25",
    durationHours: 5.9,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_225_0",
        name: "Cloruro de Potasio",
        quantity: 23,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 406.51,
    fertigationCompletionDate: "2024-03-25"
  },
  {
    id: "226",
    requesterName: "Juan Pérez",
    sector: "1",
    irrigationSystem: "Equipo 14",
    irrigationDate: "2024-03-25",
    durationHours: 4.1,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 412.05,
    fertigationCompletionDate: undefined
  },
  {
    id: "227",
    requesterName: "Maria Lopez",
    sector: "2",
    irrigationSystem: "Equipo 2",
    irrigationDate: "2024-03-25",
    durationHours: 7.4,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 1682.02,
    fertigationCompletionDate: undefined
  },
  {
    id: "228",
    requesterName: "Carlos Ruiz",
    sector: "1",
    irrigationSystem: "Equipo 16",
    irrigationDate: "2024-03-26",
    durationHours: 4.3,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_228_0",
        name: "Sulfato de Magnesio",
        quantity: 110,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 377.11,
    fertigationCompletionDate: "2024-03-26"
  },
  {
    id: "229",
    requesterName: "Pedro Martinez",
    sector: "3",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-26",
    durationHours: 6.8,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_229_0",
        name: "Sulfato de Magnesio",
        quantity: 38,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.UNDETERMINED,
    totalWaterApplied: 1075.76,
    fertigationCompletionDate: undefined
  },
  {
    id: "230",
    requesterName: "Pedro Martinez",
    sector: "1",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-26",
    durationHours: 7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_230_0",
        name: "Nitrato de Calcio",
        quantity: 113,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 1106,
    fertigationCompletionDate: "2024-03-26"
  },
  {
    id: "231",
    requesterName: "Ana Gómez",
    sector: "5",
    irrigationSystem: "Equipo 15",
    irrigationDate: "2024-03-26",
    durationHours: 6.8,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 756.16,
    fertigationCompletionDate: undefined
  },
  {
    id: "232",
    requesterName: "Pedro Martinez",
    sector: "1",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-26",
    durationHours: 7.4,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 1169.2,
    fertigationCompletionDate: undefined
  },
  {
    id: "233",
    requesterName: "Carlos Ruiz",
    sector: "1",
    irrigationSystem: "Equipo 15",
    irrigationDate: "2024-03-26",
    durationHours: 3.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_233_0",
        name: "Nitrato de Potasio",
        quantity: 97,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 431.79,
    fertigationCompletionDate: "2024-03-26"
  },
  {
    id: "234",
    requesterName: "Ana Gómez",
    sector: "1",
    irrigationSystem: "Equipo 17",
    irrigationDate: "2024-03-26",
    durationHours: 7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_234_0",
        name: "Fosfato Monoamónico",
        quantity: 29,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 661.5,
    fertigationCompletionDate: "2024-03-26"
  },
  {
    id: "235",
    requesterName: "Juan Pérez",
    sector: "4",
    irrigationSystem: "Equipo 14",
    irrigationDate: "2024-03-27",
    durationHours: 3.4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_235_0",
        name: "Nitrato de Amonio",
        quantity: 105,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.PENDING,
    totalWaterApplied: 353.26,
    fertigationCompletionDate: undefined
  },
  {
    id: "236",
    requesterName: "Carlos Ruiz",
    sector: "3",
    irrigationSystem: "Equipo 16",
    irrigationDate: "2024-03-27",
    durationHours: 5,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 479.5,
    fertigationCompletionDate: undefined
  },
  {
    id: "237",
    requesterName: "Ana Gómez",
    sector: "5",
    irrigationSystem: "Equipo 17",
    irrigationDate: "2024-03-27",
    durationHours: 2.1,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_237_0",
        name: "Fosfato Monoamónico",
        quantity: 88,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 144.69,
    fertigationCompletionDate: "2024-03-27"
  },
  {
    id: "238",
    requesterName: "Carlos Ruiz",
    sector: "3",
    irrigationSystem: "Equipo 13",
    irrigationDate: "2024-03-27",
    durationHours: 3,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 346.8,
    fertigationCompletionDate: undefined
  },
  {
    id: "239",
    requesterName: "Carlos Ruiz",
    sector: "5",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-27",
    durationHours: 2.2,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_239_0",
        name: "Nitrato de Amonio",
        quantity: 99,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 381.26,
    fertigationCompletionDate: "2024-03-27"
  },
  {
    id: "240",
    requesterName: "Ana Gómez",
    sector: "5",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-27",
    durationHours: 7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 1213.1,
    fertigationCompletionDate: undefined
  },
  {
    id: "241",
    requesterName: "Carlos Ruiz",
    sector: "2",
    irrigationSystem: "Equipo 18",
    irrigationDate: "2024-03-27",
    durationHours: 5.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_241_0",
        name: "Cloruro de Potasio",
        quantity: 113,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 1268.25,
    fertigationCompletionDate: "2024-03-27"
  },
  {
    id: "242",
    requesterName: "Juan Pérez",
    sector: "2",
    irrigationSystem: "Equipo 9",
    irrigationDate: "2024-03-28",
    durationHours: 7.4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_242_0",
        name: "Urea",
        quantity: 40,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 479.52,
    fertigationCompletionDate: "2024-03-28"
  },
  {
    id: "243",
    requesterName: "Carlos Ruiz",
    sector: "1",
    irrigationSystem: "Equipo 20",
    irrigationDate: "2024-03-28",
    durationHours: 5,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_243_0",
        name: "Urea",
        quantity: 90,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 619.5,
    fertigationCompletionDate: "2024-03-28"
  },
  {
    id: "244",
    requesterName: "Carlos Ruiz",
    sector: "2",
    irrigationSystem: "Equipo 12",
    irrigationDate: "2024-03-28",
    durationHours: 3.7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 712.62,
    fertigationCompletionDate: undefined
  },
  {
    id: "245",
    requesterName: "Pedro Martinez",
    sector: "4",
    irrigationSystem: "Equipo 21",
    irrigationDate: "2024-03-28",
    durationHours: 2,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_245_0",
        name: "Nitrato de Amonio",
        quantity: 110,
        unit: "kg"
      },
      {
        id: "f_gen_245_1",
        name: "Nitrato de Potasio",
        quantity: 56,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.PENDING,
    totalWaterApplied: 286.8,
    fertigationCompletionDate: undefined
  },
  {
    id: "246",
    requesterName: "Carlos Ruiz",
    sector: "4",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-28",
    durationHours: 3.6,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 599.4,
    fertigationCompletionDate: undefined
  },
  {
    id: "247",
    requesterName: "Juan Pérez",
    sector: "1",
    irrigationSystem: "Equipo 7",
    irrigationDate: "2024-03-28",
    durationHours: 6.3,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_247_0",
        name: "Nitrato de Calcio",
        quantity: 105,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 287.28,
    fertigationCompletionDate: "2024-03-28"
  },
  {
    id: "248",
    requesterName: "Pedro Martinez",
    sector: "2",
    irrigationSystem: "Equipo 2",
    irrigationDate: "2024-03-28",
    durationHours: 3,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_248_0",
        name: "Nitrato de Calcio",
        quantity: 56,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 681.9,
    fertigationCompletionDate: "2024-03-28"
  },
  {
    id: "249",
    requesterName: "Carlos Ruiz",
    sector: "1",
    irrigationSystem: "Equipo 22",
    irrigationDate: "2024-03-29",
    durationHours: 7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_249_0",
        name: "Ácido Bórico",
        quantity: 25,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 567.7,
    fertigationCompletionDate: "2024-03-29"
  },
  {
    id: "250",
    requesterName: "Carlos Ruiz",
    sector: "3",
    irrigationSystem: "Equipo 2",
    irrigationDate: "2024-03-29",
    durationHours: 2.2,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_250_0",
        name: "Urea",
        quantity: 90,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 497.2,
    fertigationCompletionDate: "2024-03-29"
  },
  {
    id: "251",
    requesterName: "Carlos Ruiz",
    sector: "2",
    irrigationSystem: "Equipo 14",
    irrigationDate: "2024-03-29",
    durationHours: 6.8,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_251_0",
        name: "Nitrato de Amonio",
        quantity: 62,
        unit: "kg"
      },
      {
        id: "f_gen_251_1",
        name: "Nitrato de Calcio",
        quantity: 38,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.SCHEDULED,
    fertigationStatus: TaskStatus.SCHEDULED,
    totalWaterApplied: 794.92,
    fertigationCompletionDate: undefined
  },
  {
    id: "252",
    requesterName: "Maria Lopez",
    sector: "5",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-29",
    durationHours: 2.7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 467.91,
    fertigationCompletionDate: undefined
  },
  {
    id: "253",
    requesterName: "Ana Gómez",
    sector: "1",
    irrigationSystem: "Equipo 11",
    irrigationDate: "2024-03-29",
    durationHours: 3.7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.SCHEDULED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 464.35,
    fertigationCompletionDate: undefined
  },
  {
    id: "254",
    requesterName: "Ana Gómez",
    sector: "2",
    irrigationSystem: "Equipo 12",
    irrigationDate: "2024-03-29",
    durationHours: 4.1,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.REQUESTED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 789.66,
    fertigationCompletionDate: undefined
  },
  {
    id: "255",
    requesterName: "Pedro Martinez",
    sector: "1",
    irrigationSystem: "Equipo 12",
    irrigationDate: "2024-03-30",
    durationHours: 7.4,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.SCHEDULED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 1175.86,
    fertigationCompletionDate: undefined
  },
  {
    id: "256",
    requesterName: "Carlos Ruiz",
    sector: "1",
    irrigationSystem: "Equipo 16",
    irrigationDate: "2024-03-30",
    durationHours: 5,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_256_0",
        name: "Urea",
        quantity: 115,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.SCHEDULED,
    fertigationStatus: TaskStatus.SCHEDULED,
    totalWaterApplied: 438.5,
    fertigationCompletionDate: undefined
  },
  {
    id: "257",
    requesterName: "Maria Lopez",
    sector: "3",
    irrigationSystem: "Equipo 12",
    irrigationDate: "2024-03-30",
    durationHours: 3.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_257_0",
        name: "Nitrato de Calcio",
        quantity: 88,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.REQUESTED,
    fertigationStatus: TaskStatus.REQUESTED,
    totalWaterApplied: 701.15,
    fertigationCompletionDate: undefined
  },
  {
    id: "258",
    requesterName: "Carlos Ruiz",
    sector: "3",
    irrigationSystem: "Equipo 22",
    irrigationDate: "2024-03-30",
    durationHours: 7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.SCHEDULED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 538.3,
    fertigationCompletionDate: undefined
  },
  {
    id: "259",
    requesterName: "Juan Pérez",
    sector: "1",
    irrigationSystem: "Equipo 19",
    irrigationDate: "2024-03-30",
    durationHours: 2.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_259_0",
        name: "Nitrato de Potasio",
        quantity: 23,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 487.89,
    fertigationCompletionDate: "2024-03-30"
  },
  {
    id: "260",
    requesterName: "Pedro Martinez",
    sector: "2",
    irrigationSystem: "Equipo 15",
    irrigationDate: "2024-03-30",
    durationHours: 5,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.REQUESTED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 449,
    fertigationCompletionDate: undefined
  },
  {
    id: "261",
    requesterName: "Ana Gómez",
    sector: "5",
    irrigationSystem: "Equipo 14",
    irrigationDate: "2024-03-30",
    durationHours: 4,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 308.8,
    fertigationCompletionDate: undefined
  },
  {
    id: "262",
    requesterName: "Pedro Martinez",
    sector: "1",
    irrigationSystem: "Equipo 2",
    irrigationDate: "2024-03-30",
    durationHours: 2.5,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 563,
    fertigationCompletionDate: undefined
  },
  {
    id: "263",
    requesterName: "Pedro Martinez",
    sector: "2",
    irrigationSystem: "Equipo 16",
    irrigationDate: "2024-03-31",
    durationHours: 4.1,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_263_0",
        name: "Nitrato de Calcio",
        quantity: 79,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.REQUESTED,
    fertigationStatus: TaskStatus.REQUESTED,
    totalWaterApplied: 377.61,
    fertigationCompletionDate: undefined
  },
  {
    id: "264",
    requesterName: "Juan Pérez",
    sector: "1",
    irrigationSystem: "Equipo 12",
    irrigationDate: "2024-03-31",
    durationHours: 3.7,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_264_0",
        name: "Urea",
        quantity: 113,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 587.93,
    fertigationCompletionDate: "2024-03-31"
  },
  {
    id: "265",
    requesterName: "Ana Gómez",
    sector: "3",
    irrigationSystem: "Equipo 11",
    irrigationDate: "2024-03-31",
    durationHours: 5,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.SCHEDULED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 566.5,
    fertigationCompletionDate: undefined
  },
  {
    id: "266",
    requesterName: "Carlos Ruiz",
    sector: "4",
    irrigationSystem: "Equipo 14",
    irrigationDate: "2024-03-31",
    durationHours: 7.3,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 758.47,
    fertigationCompletionDate: undefined
  },
  {
    id: "267",
    requesterName: "Ana Gómez",
    sector: "2",
    irrigationSystem: "Equipo 18",
    irrigationDate: "2024-03-31",
    durationHours: 7.4,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_267_0",
        name: "Nitrato de Potasio",
        quantity: 38,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.SCHEDULED,
    fertigationStatus: TaskStatus.SCHEDULED,
    totalWaterApplied: 1646.5,
    fertigationCompletionDate: undefined
  },
  {
    id: "268",
    requesterName: "Carlos Ruiz",
    sector: "2",
    irrigationSystem: "Equipo 14",
    irrigationDate: "2024-03-31",
    durationHours: 4.1,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_268_0",
        name: "Nitrato de Potasio",
        quantity: 57,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.REQUESTED,
    fertigationStatus: TaskStatus.REQUESTED,
    totalWaterApplied: 479.29,
    fertigationCompletionDate: undefined
  },
  {
    id: "269",
    requesterName: "Carlos Ruiz",
    sector: "2",
    irrigationSystem: "Equipo 1",
    irrigationDate: "2024-03-31",
    durationHours: 3,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_269_0",
        name: "Ácido Bórico",
        quantity: 113,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.COMPLETED,
    fertigationStatus: TaskStatus.COMPLETED,
    totalWaterApplied: 485.1,
    fertigationCompletionDate: "2024-03-31"
  },
  {
    id: "270",
    requesterName: "Juan Pérez",
    sector: "1",
    irrigationSystem: "Equipo 14",
    irrigationDate: "2024-03-31",
    durationHours: 3.7,
    isFertigation: false,
    fertilizers: [],
    irrigationStatus: TaskStatus.SCHEDULED,
    fertigationStatus: TaskStatus.NOT_APPLICABLE,
    totalWaterApplied: 371.85,
    fertigationCompletionDate: undefined
  },
  {
    id: "271",
    requesterName: "Juan Pérez",
    sector: "5",
    irrigationSystem: "Equipo 13",
    irrigationDate: "2024-03-31",
    durationHours: 6.8,
    isFertigation: true,
    fertilizers: [
      {
        id: "f_gen_271_0",
        name: "Cloruro de Potasio",
        quantity: 44,
        unit: "kg"
      }
    ],
    irrigationStatus: TaskStatus.REQUESTED,
    fertigationStatus: TaskStatus.REQUESTED,
    totalWaterApplied: 816.68,
    fertigationCompletionDate: undefined
  }
];