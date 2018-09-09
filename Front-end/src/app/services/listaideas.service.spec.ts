import { TestBed, inject } from '@angular/core/testing';

import { ListaideasService } from './listaideas.service';

describe('ListaideasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaideasService]
    });
  });

  it('should be created', inject([ListaideasService], (service: ListaideasService) => {
    expect(service).toBeTruthy();
  }));
});
