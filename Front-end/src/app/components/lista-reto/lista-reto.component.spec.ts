import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRetoComponent } from './lista-reto.component';

describe('ListaRetoComponent', () => {
  let component: ListaRetoComponent;
  let fixture: ComponentFixture<ListaRetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
