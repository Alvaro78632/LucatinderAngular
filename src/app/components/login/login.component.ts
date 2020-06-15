import { Component, OnInit } from '@angular/core';
import { Perfil} from '../../model/perfil';
import { PerfilService} from '../../service/perfil.service';
import { LoginService} from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public perfilLogged: Perfil;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private perfilService: PerfilService) { }

  //Al arrancar compruebo si ya hay perfil almacenado
  ngOnInit(): void {
  }
  //Tener en cuenta la passwor (usarla en el futuro)
  logIn(nickName: string, password: string, event: Event) {
    event.preventDefault(); 
    
    this.loginService.login(nickName).subscribe(
      res => {
        console.log("--- LoginComponent > ngOnInit > getUserLoggedIn: ¿Hay usuario?");
        console.log(res);
        if (res.password == password) {
          let u: Perfil = this.perfilService.emptyPerfil(); //GENERAR PERFIL VACIO
          u.nickName = nickName;                            //LE PONEMOS EL NICKNAME
          this.perfilService.setPerfilLoggedIn(u);          //ADD PERFIL AL LOCALSTORAGE
          //ENTRARA A BIENVENIDA
          this.router.navigateByUrl('/bienvenida');
        }else{
          alert("La contraseña no es correcta");
        }
      },
      error => {
        console.error(error);
      }
    );
  }

 
  /*
  navigate() {
    console.log("--- LoginComponent > navigate >>>> recargando página");
    //this.router.navigateByUrl('/home');
    //No es muy elegante porque recarga la pagina.. no la modifica
    window.location.href="http://localhost:4200/addPerfil";
  }
*/
}
