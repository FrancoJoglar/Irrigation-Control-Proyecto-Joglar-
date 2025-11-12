// FIX: Defined and exported necessary types to resolve module errors.
// The original file had constant definitions and a circular import, causing errors across the app.
export enum TaskStatus {
  REQUESTED = 'REQUESTED',
  SCHEDULED = 'SCHEDULED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  PENDING = 'PENDING',
  NOT_APPLICABLE = 'NOT_APPLICABLE',
  UNDETERMINED = 'UNDETERMINED',
}

export interface Fertilizer {
  id: string;
  name: string;
  quantity: number;
  unit: string;
}

export interface SectorInfo {
  id: string;
  nominalFlow: number;
}

export interface Equipment {
  name: string;
  sectors: SectorInfo[];
}

export interface IrrigationRequest {
  id: string;
  requesterName: string;
  sector: string;
  irrigationSystem: string;
  irrigationDate: string;
  durationHours: number;
  isFertigation: boolean;
  fertilizers: Fertilizer[];
  irrigationStatus: TaskStatus;
  fertigationStatus: TaskStatus;
  notes?: string;
  totalWaterApplied: number;
  fertigationCompletionDate?: string;
}
