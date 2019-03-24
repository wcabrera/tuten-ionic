import { TestBed } from '@angular/core/testing';

import { PeticionesHttpService } from './peticiones-http.service';

describe('PeticionesHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeticionesHttpService = TestBed.get(PeticionesHttpService);
    expect(service).toBeTruthy();
  });
});
