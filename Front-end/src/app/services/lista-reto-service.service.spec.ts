import { TestBed, inject } from '@angular/core/testing';

import { ListaRetoServiceService } from './lista-reto-service.service';

describe('ListaRetoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaRetoServiceService]
    });
  });

  it('should be created', inject([ListaRetoServiceService], (service: ListaRetoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
