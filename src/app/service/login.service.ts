import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Perfil} from "../model/perfil";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  //Metodo que permite loggearse al perfil en caso de que exista en la base de datos
  login(nickName:string) {
    return this.http.get<Perfil>( "http://localhost:8080/perfil/"+nickName);     
  }
}
