import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasLibresComponent } from './ideas-libres.component';

describe('IdeasLibresComponent', () => {
  let component: IdeasLibresComponent;
  let fixture: ComponentFixture<IdeasLibresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeasLibresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasLibresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
