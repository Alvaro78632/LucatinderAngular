import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacontactoComponent } from './listacontacto.component';

describe('ListacontactoComponent', () => {
  let component: ListacontactoComponent;
  let fixture: ComponentFixture<ListacontactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacontactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
