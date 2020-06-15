import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contacto } from '../model/contacto';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
@Injectable({
    providedIn: 'root'
  })
export class ContactoService {

    constructor(private http:HttpClient) {}

    //Crear el servicio REST que responda a esta peticion
    private userUrl = 'http://localhost:8080/PONER RUTA';

    public getContacto() {
        return this.http.get<Contacto[]>(this.userUrl);
      }
}
