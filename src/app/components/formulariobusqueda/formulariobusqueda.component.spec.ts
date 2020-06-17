import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariobusquedaComponent } from './formulariobusqueda.component';

describe('FormulariobusquedaComponent', () => {
  let component: FormulariobusquedaComponent;
  let fixture: ComponentFixture<FormulariobusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariobusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariobusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
