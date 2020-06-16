import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from '../../model/contacto';
import { ContactoService } from '../../service/contacto.service';

@Component({
  selector: 'app-listamatch',
  templateUrl: './listamatch.component.html',
  styleUrls: ['./listamatch.component.css']
})
export class ListamatchComponent implements OnInit {

  constructor(private router: Router, private contactoService: ContactoService) { }

  listamatch:Contacto[];
  
  ngOnInit(): void {
    this.contactoService.getMatch()
    .subscribe(data => {
      console.log(data);
      this.listamatch = data;
    });
  }

}
