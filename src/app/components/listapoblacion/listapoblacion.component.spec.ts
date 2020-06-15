import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapoblacionComponent } from './listapoblacion.component';

describe('ListapoblacionComponent', () => {
  let component: ListapoblacionComponent;
  let fixture: ComponentFixture<ListapoblacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListapoblacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapoblacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
