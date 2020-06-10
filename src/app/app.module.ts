import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltausuarioComponent } from '../components/altausuario/altausuario.component';

//Hola (Miguel)
//HOLA SERGIO
//Hola Nino
@NgModule({
  declarations: [
    AppComponent,
    AltausuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
