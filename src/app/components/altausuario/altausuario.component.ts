  import { Component, OnInit } from '@angular/core';
  import { Perfil} from '../../model/perfil';
  import { PerfilService} from '../../service/perfil.service';
  import { PoblacionService} from '../../service/poblacion.service';
  import { Router } from '@angular/router';
  import { Poblacion} from '../../model/poblacion';
@Component({
  selector: 'app-altausuario',
  templateUrl: './altausuario.component.html',
  styleUrls: ['./altausuario.component.css']
})
export class AltausuarioComponent implements OnInit {

  perfil:Perfil;
  listaPoblacion:Poblacion[];

  constructor(private perfilService: PerfilService,
    private router: Router,private poblacionService:PoblacionService) { }

  ngOnInit(): void {
    this.perfil = this.perfilService.emptyPerfil();
    this.poblacionService.getPoblaciones()
    .subscribe(data => {
      console.log(data);
      this.listaPoblacion=data;
    });
  }
  
  Addperfil():void{
    console.log("linea 30 componente altausuario" + this.perfil);
    this.perfilService.addPerfil(this.perfil)
    .subscribe(data => {
      console.log("Todo OK");
    });
    this.perfil = this.perfilService.emptyPerfil();
  }

}
