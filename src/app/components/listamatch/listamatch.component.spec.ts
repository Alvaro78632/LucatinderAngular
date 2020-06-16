import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListamatchComponent } from './listamatch.component';

describe('ListamatchComponent', () => {
  let component: ListamatchComponent;
  let fixture: ComponentFixture<ListamatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListamatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListamatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
