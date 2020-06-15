import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadesconocidoComponent } from './listadesconocido.component';

describe('ListadesconocidoComponent', () => {
  let component: ListadesconocidoComponent;
  let fixture: ComponentFixture<ListadesconocidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadesconocidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadesconocidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
