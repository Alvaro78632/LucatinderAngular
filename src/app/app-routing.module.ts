import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//IMPORTACIONES NUESTRAS
import { ListapoblacionComponent} from '../components/listapoblacion/listapoblacion.component';


const routes: Routes = [
  { path: 'listapoblacion',
    component: ListapoblacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
