import { TestBed } from '@angular/core/testing';

import { AlmacenamientoStorageService } from './almacenamiento-storage.service';

describe('AlmacenamientoStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlmacenamientoStorageService = TestBed.get(AlmacenamientoStorageService);
    expect(service).toBeTruthy();
  });
});
