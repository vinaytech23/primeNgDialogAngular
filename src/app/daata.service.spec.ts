import { TestBed } from '@angular/core/testing';

import { DaataService } from './daata.service';

describe('DaataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaataService = TestBed.get(DaataService);
    expect(service).toBeTruthy();
  });
});
