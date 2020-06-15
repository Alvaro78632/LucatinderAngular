import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Perfil} from '../model/perfil';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
@Injectable({
    providedIn: 'root'
  })
export class ContactoService {

    listacontacto: Perfil[];
    constructor(private http:HttpClient) {}

    public getContacto() {
        return this.http.get<Perfil[]>('http://localhost:8080/contacto/listacontacto');
      }
}
