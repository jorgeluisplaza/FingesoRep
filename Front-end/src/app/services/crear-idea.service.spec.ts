import { TestBed, inject } from '@angular/core/testing';

import { CrearIdeaService } from './crear-idea.service';

describe('CrearIdeaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearIdeaService]
    });
  });

  it('should be created', inject([CrearIdeaService], (service: CrearIdeaService) => {
    expect(service).toBeTruthy();
  }));
});
