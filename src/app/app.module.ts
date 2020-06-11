import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//IMPORTAMOS LOS COMPONENTES NECESARIOS 

import { ListapoblacionComponent } from '../components/listapoblacion/listapoblacion.component';
import { AltausuarioComponent } from '../components/altausuario/altausuario.component';
import { ListacontactoComponent } from '../components/listacontacto/listacontacto.component';
import { PerfilService } from '../service/perfil.service';
import { PoblacionService } from '../service/poblacion.service'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    
    ListacontactoComponent,
    ListapoblacionComponent,
    AltausuarioComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PerfilService,PoblacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
