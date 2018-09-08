import { TestBed, inject } from '@angular/core/testing';

import { CrearRetoService } from './crear-reto.service';

describe('CrearRetoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearRetoService]
    });
  });

  it('should be created', inject([CrearRetoService], (service: CrearRetoService) => {
    expect(service).toBeTruthy();
  }));
});
