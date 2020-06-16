import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


//IMPORTAMOS LOS COMPONENTES NECESARIOS 
import { ListapoblacionComponent } from './components/listapoblacion/listapoblacion.component';
import { AltausuarioComponent } from './components/altausuario/altausuario.component';
import { ListacontactoComponent } from './components/listacontacto/listacontacto.component';
import { PerfilService } from './service/perfil.service';
import { PoblacionService } from './service/poblacion.service'; 
import { LoginService } from './service/login.service';
import { LoginComponent } from './components/login/login.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactoService} from "./service/contacto.service";
import { ListadesconocidoComponent } from './components/listadesconocido/listadesconocido.component';
import { ListadescarteComponent } from './components/listadescarte/listadescarte.component';
import { DescarteService } from './service/descarte.service';
import { ListamatchComponent } from './components/listamatch/listamatch.component';

@NgModule({
  declarations: [
    AppComponent,
    
    ListacontactoComponent,
    ListapoblacionComponent,
    AltausuarioComponent,
    MenuComponent,
    LoginComponent,
    BienvenidaComponent,
    ListadesconocidoComponent,
    ListadescarteComponent,
    ListamatchComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PerfilService,PoblacionService,LoginService,ContactoService,DescarteService],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
