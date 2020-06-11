import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListacontactoComponent } from '../components/listacontacto/listacontacto.component';
import { ListapoblacionComponent} from '../components/listapoblacion/listapoblacion.component';

const routes: Routes = [
  { 
    path: 'contactos', 
    component: ListacontactoComponent
  },
  {
    path: 'listapoblacion',
    component: ListapoblacionComponent
 }
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }