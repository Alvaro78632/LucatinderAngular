import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from '../../model/contacto';
import { ContactoService } from '../../service/contacto.service';

@Component({
  selector: 'app-listamatch',
  templateUrl: './listamatch.component.html',
  styleUrls: ['./listamatch.component.css']
})
export class ListamatchComponent implements OnInit {

  constructor(private router: Router, private contactoService: ContactoService) { }

  listamatch:Contacto[];
  
  ngOnInit(): void {
    //COMPRUEBA EN EL LOCAL STORAGE QUE EXISTE EL PERFIL ESTA LOGEADO, SINO ES REDIRIGIDO AL LOGIN
    if (!localStorage.getItem("perfilLoggeado")){
      alert("¡Tu, fuera, no te cueles lechon!")
      window.location.href="/";
    }

    //PIDE AL SERVICIO CONTACTO LA LISTA DE MATCHES
    this.contactoService.getMatch()
    .subscribe(data => {
      console.log(data);
      this.listamatch = data;
    });
  }

}
