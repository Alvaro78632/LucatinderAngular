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
    //COMPRUEBA EN EL LOCAL STORAGE QUE EXISTE EL PERFIL ESTA LOGEADO, SINO ES REDIRIGIDO AL LOGIN
    if (!localStorage.getItem("perfilLoggeado")){
      alert("¡Tu, fuera, no te cueles lechon!")
      window.location.href="/";
    }

    //PIDE AL SERVICIO PERFIL LA LISTA DE GENTE DESCONOCIDA
    this.perfilService.getListaDesconocido()
    .subscribe(data => {
      console.log(data);
      this.listaDesconocido=data;
    });
  }

  //METODO QUE PERMITE DAR LIKE A UN PERFIL DESCONOCIDO
  //PASANDO AL SERVICIO CONTACTO EL NICKNAME DEL PERFIL QUE RECIVE EL LIKE
    public darLike(nickname:string, event: Event):void{
    this.contactoService.darlike(nickname)
    .subscribe(data => {
      console.log(data);
      window.location.reload();
    });

  }
  
  //METODO QUE PERMITE DAR DISLIKE A UN PERFIL DESCONOCIDO
  //PASANDO AL SERVICIO DESCARTE EL NICKNAME DEL PERFIL QUE RECIVE EL DISLIKE
  public darDislike(nickname:string, event: Event):void{
    this.descarteService.darDislike(nickname)
    .subscribe(data => {
      console.log(data);
      window.location.reload();
    
    });

  }
}
