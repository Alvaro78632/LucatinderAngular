import { Component, OnInit } from '@angular/core';

import { PoblacionService} from '../../service/poblacion.service';
import { Router } from '@angular/router';
import { Poblacion} from '../../model/poblacion';
import { Perfil} from '../../model/perfil';
import { PerfilService} from '../../service/perfil.service';

//ESTE COMPONENTE ESTA EN DESARROLLO
//PERMITIRA FILTRAR LAS BUSQUEDAS DE PERFILES POR POBLACION Y GENERO

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
    //COMPRUEBA EN EL LOCAL STORAGE QUE EXISTE EL PERFIL ESTA LOGEADO, SINO ES REDIRIGIDO AL LOGIN
    if (!localStorage.getItem("perfilLoggeado")){
      alert("¡Tu, fuera, no te cueles lechon!")
      window.location.href="/";
    }

    //GENERA UN PERFIL VACIO Y PIE LA LISTA DE LAS POBLACIONES AL SERVICIO POBLACION SERVICE
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
