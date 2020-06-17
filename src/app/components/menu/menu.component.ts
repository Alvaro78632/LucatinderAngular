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
    if (!localStorage.getItem("perfilLoggeado")){
      alert("¡Tu, fuera, no te cueles lechon!")
      window.location.href="/";
    }
  }

  logOut(event: Event) {
    event.preventDefault();
    this.perfilService.destroyPerfilLogged();
    console.log("--- LoginComponent > logOut >>>> saliendo");
    alert("Se ha cerrado la session");
    this.router.navigateByUrl('/');
  }
  


}
