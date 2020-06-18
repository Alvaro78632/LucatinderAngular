import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Perfil } from "../model/perfil"
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  public isPerfilLoggedIn:boolean;
  public perfilLogged:Perfil;
  perfiles: Perfil[];
  perfil2:Perfil;

  constructor(private http:HttpClient) { 
    this.isPerfilLoggedIn = false; 
  }

  //Metodo que guarda el perfil en el local storage al loggearse y le permite continuar en 
  //la aplicacion
  setPerfilLoggedIn(perfil:Perfil) {
    this.isPerfilLoggedIn = true;
    this.perfilLogged = perfil;
    console.log("--- Perfil.service > setPerfilLoggedIn::  guardo Perfil");
    localStorage.setItem('perfilLoggeado', JSON.stringify(perfil));
  
  }

  //Metodo que permite recuperar el perfil loggeado
  getPerfilLoggedIn() {
    console.log("--- Perfil.service > getPerfilLoggedIn::  recupero Perfil");
  	return JSON.parse(localStorage.getItem('perfilLoggeado'));
  }

  //Metodo que elimina el perfil loggeado del local storage
  destroyPerfilLogged(){
    this.isPerfilLoggedIn = false;
    console.log("---Perfil.service > destroPerfilLogged::  destruyoPerfil");
    localStorage.removeItem('perfilLoggeado');
  }

  //Metodo da de alta un perfil en la base de datos
  public addPerfil(perfil: Perfil):Observable<Perfil>{
    console.log("linea 13  perfil.service"+ perfil);
    return this.http.post<Perfil>('http://localhost:8080/addPerfil', perfil);
  }

  //Metodo que genera un perfil vacio
  emptyPerfil(): Perfil {
    let perfil: Perfil;

    perfil = {
      nickName: '',
      password: '',
      edad: 0,
      genero:'',
      poblacion:{
        idPoblacion:0,
        nombrePoblacion:''
      },
      descripcion:null,
      foto:null
    };
    return perfil;
  }

  //Metodo que devuelve una lista de perfiles que no han recibido "like" ni "dislike" por
  //el perfil loggeado
  public getListaDesconocido(){
    this.perfil2=JSON.parse(localStorage.getItem('perfilLoggeado'));
    return this.http.get<Perfil[]>('http://localhost:8080/perfil/listadesconocido/'+this.perfil2.nickName);
  }
}
