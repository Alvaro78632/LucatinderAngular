import { Component, OnInit } from '@angular/core';
import { Perfil } from '../../model/perfil';
import { PerfilService} from '../../service/perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  listaDesconocidosGenero: Perfil[];

  constructor( 
    private router: Router,
    private perfilService: PerfilService) { }

  ngOnInit(): void {
      //COMPRUEBA EN EL LOCAL STORAGE QUE EXISTE EL PERFIL ESTA LOGEADO, SINO ES REDIRIGIDO AL LOGIN
      if (!localStorage.getItem("perfilLoggeado")){
      alert("¡Tu, fuera, no te cueles lechon!")
      window.location.href="/";
    }
  }

  //METODO QUE ELIMINA LA SESION Y LE MUESTRA UN MENSAJE 
  logOut(event: Event) {
    event.preventDefault();
    this.perfilService.destroyPerfilLogged();
    console.log("--- LoginComponent > logOut >>>> saliendo");
    alert("Se ha cerrado la session");
    this.router.navigateByUrl('/');
  }
}
