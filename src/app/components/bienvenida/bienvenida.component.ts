import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      //COMPRUEBA EN EL LOCAL STORAGE QUE EXISTE EL PERFIL ESTA LOGEADO, SINO ES REDIRIGIDO AL LOGIN
      if (!localStorage.getItem("perfilLoggeado")){
      alert("¡Tu, fuera, no te cueles lechon!")
      window.location.href="/";
    }
  }
}