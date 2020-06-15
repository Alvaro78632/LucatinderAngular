import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {Perfil} from '../../model/perfil';
import {PerfilService} from '../../service/perfil.service';
import {ContactoService} from '../../service/contacto.service'

@Component({
  selector: 'app-listadesconocido',
  templateUrl: './listadesconocido.component.html',
  styleUrls: ['./listadesconocido.component.css']
})
export class ListadesconocidoComponent implements OnInit {

  listaDesconocido: Perfil[];
  

  constructor(private router: Router, private perfilService: PerfilService, private contactoService: ContactoService ) { }

  ngOnInit(): void {
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

}
