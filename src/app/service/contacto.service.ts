import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Perfil} from '../model/perfil';

import { Contacto } from '../model/contacto';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
@Injectable({
    providedIn: 'root'
  })
export class ContactoService {

    listacontacto: Perfil[];
    perfil:Perfil;
    contacto: Contacto;
    constructor(private http:HttpClient) {}

    

    public getContacto() {
      this.perfil=JSON.parse(localStorage.getItem("perfilLoggeado"));
      console.log(this.perfil);
        return this.http.get<Perfil[]>('http://localhost:8080/contacto/listacontacto/'+this.perfil.nickName);
      }

    public darlike(nickname:string){
      this.perfil=JSON.parse(localStorage.getItem("perfilLoggeado"));
      

      this.contacto = {
          nickname1: {
                    nickName:this.perfil.nickName ,
                    password: '',
                    edad: 0,
                    genero:'',
                    poblacion:{
                      idPoblacion:0,
                      nombrePoblacion:''
                    },
                    descripcion:null,
                    foto:null
            },
            nickname2: {
                    nickName: nickname,
                    password: '',
                    edad: 0,
                    genero:'',
                    poblacion:{
                      idPoblacion:0,
                      nombrePoblacion:''
                    },
                    descripcion:null,
                    foto:null
            }
        };
        console.log(this.contacto);
        return this.http.post<Contacto>('http://localhost:8080/like',this.contacto);
    }

    
}
