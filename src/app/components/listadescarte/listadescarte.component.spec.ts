import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadescarteComponent } from './listadescarte.component';

describe('ListadescarteComponent', () => {
  let component: ListadescarteComponent;
  let fixture: ComponentFixture<ListadescarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadescarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadescarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
