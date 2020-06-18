import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Perfil } from '../../model/perfil';
import { ContactoService } from '../../service/contacto.service';

@Component({
  selector: 'app-listacontacto',
  templateUrl: './listacontacto.component.html',
  styleUrls: ['./listacontacto.component.css']
})
export class ListacontactoComponent implements OnInit {

  listacontacto: Perfil[];

  constructor(private router: Router, private contactoService: ContactoService) { }

  ngOnInit(): void {
    //COMPRUEBA EN EL LOCAL STORAGE QUE EXISTE EL PERFIL ESTA LOGEADO, SINO ES REDIRIGIDO AL LOGIN
    if (!localStorage.getItem("perfilLoggeado")){
      alert("¡Tu, fuera, no te cueles lechon!")
      window.location.href="/";
    }

    //PIDE AL SERVICIO CONTACTO LA LISTA DE CONTACTOS
    this.contactoService.getContacto()
      .subscribe(data => {
        this.listacontacto = data;
      });
  };
}
