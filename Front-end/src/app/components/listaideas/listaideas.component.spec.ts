import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaideasComponent } from './listaideas.component';

describe('ListaideasComponent', () => {
  let component: ListaideasComponent;
  let fixture: ComponentFixture<ListaideasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaideasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaideasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
