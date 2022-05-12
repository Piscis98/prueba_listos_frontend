import { TestBed } from '@angular/core/testing';

import { AcronimeService } from './acronime.service';

describe('AcronimeService', () => {
  let service: AcronimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcronimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
