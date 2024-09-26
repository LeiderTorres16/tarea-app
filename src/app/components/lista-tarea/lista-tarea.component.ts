import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-lista-tarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-tarea.component.html',
  styleUrls: ['./lista-tarea.component.css']
})
export class ListaTareaComponent {
  
  constructor( private taskService: TaskService) {
   
  }


  tasks: Task[] = this.taskService.obtenerTareas();

  filtro: 'todas' | 'completadas' | 'pendientes' = 'todas';

  cambiarFiltro(estado: 'todas' | 'completadas' | 'pendientes') {
    this.filtro = estado;
  }

  get tareasFiltradas(): Task[] {
    if (this.filtro === 'completadas') {
      return this.tasks.filter(tarea => tarea.completed);
    }
    if (this.filtro === 'pendientes') {
      return this.tasks.filter(tarea => !tarea.completed);
    }
    return this.tasks;
  }

  markAsCompleted(task: Task) {
    task.completed = true;
  }

  deleteTask(id: number) {
    this.taskService.eliminarTarea(id);
    this.tasks = this.taskService.obtenerTareas();
  }
}
