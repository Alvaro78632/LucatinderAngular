import { Injectable } from '@angular/core';
import { Descarte } from '../model/descarte';
import { Perfil } from '../model/perfil';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DescarteService {
  perfil:Perfil;
  descarte:Descarte;
  listadescarte: Perfil[];

  constructor(private http:HttpClient) { }

  //Metodo que obtiene la lista de descartes del perfil loggeado
  public getDescarte() {
    this.perfil=JSON.parse(localStorage.getItem("perfilLoggeado"));
    console.log(this.perfil);
      return this.http.get<Perfil[]>('http://localhost:8080/descarte/listadescarte/'+this.perfil.nickName);
    }

    //Este metodo recibe un perfil que ha recibido dislike del perfil loggeado y
    // permite acceder a la funcion "dislike" del controlador REST
  public darDislike(nickname:string){
    this.perfil=JSON.parse(localStorage.getItem("perfilLoggeado"));

    this.descarte = {
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
      console.log(this.descarte);
      return this.http.post<Descarte>('http://localhost:8080/Dislike',this.descarte);
  }

}
