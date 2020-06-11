import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Poblacion } from '../../model/poblacion';
import { PoblacionService } from '../../service/poblacion.service';

@Component({
  selector: 'app-listapoblacion',
  templateUrl: './listapoblacion.component.html',
  styleUrls: ['./listapoblacion.component.css']
})
export class ListapoblacionComponent implements OnInit {

  listaPoblacion: Poblacion[];
  constructor(private router: Router, private poblacionService: PoblacionService) { }

  ngOnInit(): void {
    this.poblacionService.getPoblaciones()
    .subscribe(data => {
      this.listaPoblacion=data;
    });
  };

}
