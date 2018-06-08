import { TestBed, inject } from '@angular/core/testing';

import { RdCompilerService } from './rd-compiler.service';

describe('RdCompilerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RdCompilerService]
    });
  });

  it('should be created', inject([RdCompilerService], (service: RdCompilerService) => {
    expect(service).toBeTruthy();
  }));
});
