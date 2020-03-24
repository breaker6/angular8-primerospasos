import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Añadido FormsModule por que sin el no funcionará ngmodel
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorreoComponent } from './Component/correo/correo.component';
import { ListaCorreoComponent } from './Component/lista-correo/lista-correo.component';
import { NuevoCorreoComponent } from './Component/nuevo-correo/nuevo-correo.component';
import { AvisosComponent } from './Component/avisos/avisos.component';
import { CorreosRecibidosComponent } from './Views/correos-recibidos/correos-recibidos.component';

@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    ListaCorreoComponent,
    NuevoCorreoComponent,
    AvisosComponent,
    CorreosRecibidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
