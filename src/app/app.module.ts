import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Añadido FormsModule por que sin el no funcionará ngmodel
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorreoComponent } from './Component/correo/correo.component';
import { ListaCorreoComponent } from './Component/lista-correo/lista-correo.component';

@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    ListaCorreoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
