import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Task } from '../../models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css'],
})
export class CrearTareaComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      titulo: ['', Validators.required],
      fechaLimite: ['', Validators.required],
      personas: this.fb.array([]),
      completed: [false],
    });
  }

  tasks: Task[] = this.taskService.obtenerTareas();

  get personas(): FormArray {
    return this.taskForm.get('personas') as FormArray;
  }

  addPerson() {
    const personForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.min(5)]],
      edad: ['', [Validators.required, Validators.min(18)]],
      habilidades: this.fb.array([this.fb.control('', Validators.required)]),
    });
    this.personas.push(personForm);
  }

  removePerson(index: number) {
    this.personas.removeAt(index);
  }

  getSkills(personIndex: number): FormArray {
    return this.personas.at(personIndex).get('habilidades') as FormArray;
  }

  addSkill(personIndex: number) {
    this.getSkills(personIndex).push(this.fb.control('', Validators.required));
  }

  removeSkill(personIndex: number, skillIndex: number) {
    this.getSkills(personIndex).removeAt(skillIndex);
  }

  onSubmit() {
    if (this.taskForm.invalid) {
      alert('Hay errores en el formulario. Por favor, revisa los campos.');
      return;
    }

    const newTask: Task = {
      ...this.taskForm.value,
      id: Math.floor(Math.random() * 1000),
    };
    this.taskService.agregarTarea(newTask);
    this.taskForm.reset();
    this.personas.clear();
    console.log('Tarea creada:', newTask);
  }
}
