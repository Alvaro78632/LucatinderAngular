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

    //listacontacto: Perfil[];
    perfil:Perfil;
    contacto: Contacto;
    listamatch: Contacto[];
    constructor(private http:HttpClient) {}


    //Este metodo permite obtener la lista de contactos del perfil loggeado
    public getContacto() {
      this.perfil=JSON.parse(localStorage.getItem("perfilLoggeado"));
      console.log(this.perfil);
        return this.http.get<Perfil[]>('http://localhost:8080/contacto/listacontacto/'+this.perfil.nickName);
      }

      //Este metodo recibe un perfil que ha recibido like del perfil loggeado y
      // permite acceder a la funcion "like" del controlador REST
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

    //Este metodo permite obtener la lista de matches del perfil loggeado
    public getMatch() {
      this.perfil=JSON.parse(localStorage.getItem("perfilLoggeado"));
      console.log(this.perfil);
        return this.http.get<Contacto[]>('http://localhost:8080/perfil/match/'+this.perfil.nickName);
      }
    
}
