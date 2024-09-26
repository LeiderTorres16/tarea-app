import { Person } from "./person.model";

export interface Task {
    id: number;
    titulo: string;
    fechaLimite: Date;
    personas: Person[];
    completed: boolean;
    status: 'pendiente' | 'en_progreso' | 'completada';
  }