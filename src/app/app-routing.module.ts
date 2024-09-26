import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTareaComponent } from './components/lista-tarea/lista-tarea.component';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: ListaTareaComponent },
  { path: 'create-task', component: CrearTareaComponent },
  { path: '**', redirectTo: '/tasks' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
