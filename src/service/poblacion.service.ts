import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Poblacion } from '../model/poblacion';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PoblacionService {

  poblaciones : Poblacion[];
  constructor(private http:HttpClient) { }

  //Crear el servicio REST que responda a esta peticion
  //private userUrl = 'http://localhost:8080/PONER RUTA';

  public getPoblaciones() {
      return this.http.get<Poblacion[]>('http://localhost:8080/poblacion/listado');
    }
}
