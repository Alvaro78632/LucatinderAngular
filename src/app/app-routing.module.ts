import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListacontactoComponent } from './components/listacontacto/listacontacto.component'
  
import { ListapoblacionComponent} from './components/listapoblacion/listapoblacion.component';
import { AltausuarioComponent } from './components/altausuario/altausuario.component';
import { LoginComponent } from './components/login/login.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListadesconocidoComponent} from './components/listadesconocido/listadesconocido.component';


const routes: Routes = [
  { path: 'listapoblacion',
    component: ListapoblacionComponent
  },
  {path: 'listacontacto', 
  component: ListacontactoComponent 
  },
  {path: 'listadesconocido', 
  component: ListadesconocidoComponent 
  },
  {path: 'addPerfil', 
  component: AltausuarioComponent
  },
  {path: 'login', 
  component: LoginComponent
  },
  {path: '', 
  component: LoginComponent
  },
  {path: 'bienvenida', 
  component: BienvenidaComponent,
  children: [
    { path: '', component: MenuComponent, pathMatch: 'full'},
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }