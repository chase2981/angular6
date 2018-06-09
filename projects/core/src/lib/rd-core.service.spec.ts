import { TestBed, inject } from '@angular/core/testing';

import { RdCoreService } from './rd-core.service';

describe('RdCoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RdCoreService]
    });
  });

  it('should be created', inject([RdCoreService], (service: RdCoreService) => {
    expect(service).toBeTruthy();
  }));
});
