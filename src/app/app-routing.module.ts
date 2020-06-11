import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListacontactoComponent } from '../components/listacontacto/listacontacto.component'
  
import { ListapoblacionComponent} from '../components/listapoblacion/listapoblacion.component';
import { AltausuarioComponent } from '../components/altausuario/altausuario.component';


const routes: Routes = [
  { path: 'listapoblacion',
    component: ListapoblacionComponent
  },
  {path: 'listacontacto', 
  component: ListacontactoComponent 
  },
  {path: 'addPerfil', 
  component: AltausuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }