import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from '../../model/perfil';
import { DescarteService } from '../../service/descarte.service';
@Component({
  selector: 'app-listadescarte',
  templateUrl: './listadescarte.component.html',
  styleUrls: ['./listadescarte.component.css']
})
export class ListadescarteComponent implements OnInit {

  listadescarte: Perfil[];

  constructor(private router: Router, private descarteService: DescarteService) { }

  ngOnInit(): void {
    //COMPRUEBA EN EL LOCAL STORAGE QUE EXISTE EL PERFIL ESTA LOGEADO, SINO ES REDIRIGIDO AL LOGIN
    if (!localStorage.getItem("perfilLoggeado")){
      alert("¡Tu, fuera, no te cueles lechon!")
      window.location.href="/";
    }

    //PIDE AL SERVICIO DESCARTE LA LISTA DE DESCARTES
    this.descarteService.getDescarte()
    .subscribe(data => {
      console.log(data);
      this.listadescarte = data;
    });
  }

}
