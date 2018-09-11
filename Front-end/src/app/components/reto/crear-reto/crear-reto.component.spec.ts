import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRetoComponent } from './crear-reto.component';

describe('CrearRetoComponent', () => {
  let component: CrearRetoComponent;
  let fixture: ComponentFixture<CrearRetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearRetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
