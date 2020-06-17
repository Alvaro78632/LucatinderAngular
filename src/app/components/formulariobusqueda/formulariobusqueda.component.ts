import { Component, OnInit } from '@angular/core';

import { PoblacionService} from '../../service/poblacion.service';
import { Router } from '@angular/router';
import { Poblacion} from '../../model/poblacion';
import { Perfil} from '../../model/perfil';
import { PerfilService} from '../../service/perfil.service';


@Component({
  selector: 'app-formulariobusqueda',
  templateUrl: './formulariobusqueda.component.html',
  styleUrls: ['./formulariobusqueda.component.css']
})
export class FormulariobusquedaComponent implements OnInit {

  perfil:Perfil;
  perfil2:Perfil;

  listaPoblacion:Poblacion[];
  listaDesconocido: Perfil[];

    constructor(
      private router: Router,
      private poblacionService:PoblacionService,
      private perfilService: PerfilService) { }

  ngOnInit(): void {
    if (!localStorage.getItem("perfilLoggeado")){
      alert("¡Tu, fuera, no te cueles lechon!")
      window.location.href="/";
    }

    this.perfil = this.perfilService.emptyPerfil();
    this.poblacionService.getPoblaciones()
    .subscribe(data => {
      console.log(data);
      this.listaPoblacion=data;
    });
  }

  //METODO MIRARLO CON ANTONIO
  buscarDesconocidos(): void{
    if (this.perfil.genero == 'Todo') window.location.href="/listadesconocido";
    else{
      this.perfil2=JSON.parse(localStorage.getItem('perfilLoggeado'));
      this.perfil.nickName = this.perfil2.nickName;
      this.perfilService.getListaDesconocidoGenero(this.perfil)
      .subscribe(data => {
        this.listaDesconocido=data;
      });

    }
  }

}
