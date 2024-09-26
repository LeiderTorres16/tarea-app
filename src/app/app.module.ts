import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTareaComponent } from './components/lista-tarea/lista-tarea.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListaTareaComponent,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
