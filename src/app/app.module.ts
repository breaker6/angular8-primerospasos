import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Añadido FormsModule por que sin el no funcionará ngmodel
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorreoComponent } from './Component/correo/correo.component';
import { ListaCorreoComponent } from './Component/lista-correo/lista-correo.component';
import { NuevoCorreoComponent } from './Component/nuevo-correo/nuevo-correo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    ListaCorreoComponent,
    NuevoCorreoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
