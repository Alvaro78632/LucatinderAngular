import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {Perfil} from '../../model/perfil';
import {PerfilService} from '../../service/perfil.service';
import {ContactoService} from '../../service/contacto.service'
import { DescarteService } from 'src/app/service/descarte.service';

@Component({
  selector: 'app-listadesconocido',
  templateUrl: './listadesconocido.component.html',
  styleUrls: ['./listadesconocido.component.css']
})
export class ListadesconocidoComponent implements OnInit {

  listaDesconocido: Perfil[];
  

  constructor(private router: Router, private perfilService: PerfilService, private contactoService: ContactoService, private descarteService: DescarteService) { }

  ngOnInit(): void {
    if (!localStorage.getItem("perfilLoggeado")){
      alert("¡Tu, fuera, no te cueles lechon!")
      window.location.href="/";
    }

    this.perfilService.getListaDesconocido()
    .subscribe(data => {
      console.log(data);
      this.listaDesconocido=data;
    });
  }

  public darLike(nickname:string, event: Event):void{
    this.contactoService.darlike(nickname)
    .subscribe(data => {
      console.log(data);
      window.location.reload();
    });

  }

  public darDislike(nickname:string, event: Event):void{
    this.descarteService.darDislike(nickname)
    .subscribe(data => {
      console.log(data);
      window.location.reload();
    });

  }
}
