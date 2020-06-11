import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Perfil } from "../model/perfil"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http:HttpClient) { }

  public addPerfil(perfil: Perfil):Observable<Perfil>{
    console.log("linea 13  perfil.service"+ perfil);
    return this.http.post<Perfil>('http://localhost:8080/addPerfil', perfil);
  }

  
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
}
