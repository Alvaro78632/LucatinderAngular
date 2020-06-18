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

  //Metodo que obtiene una lista con las poblaciones disponibles de la aplicacion
  public getPoblaciones() {
      return this.http.get<Poblacion[]>('http://localhost:8080/poblacion/listado');
    }
}
