import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tareas: Task[] = [{
    id: 1,
    titulo: "Desarrollar módulo de autenticación",
    fechaLimite: new Date('2024-10-15'),
    completed: false,
    status: 'pendiente',
    personas: [
      {
        id: 1,
        nombre: "Juan Pérez",
        edad: 28,
        habilidades: ["Angular", "TypeScript", "Autenticación"]
      },
      {
        id: 2,
        nombre: "Maria Pérez",
        edad: 28,
        habilidades: ["Angular", "TypeScript", "Autenticación"]
      }
    ]
  },];

  constructor() { }

  agregarTarea(tarea: Task) {
    this.tareas.push(tarea);
  }

  obtenerTareas() {
    return this.tareas;
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }

}