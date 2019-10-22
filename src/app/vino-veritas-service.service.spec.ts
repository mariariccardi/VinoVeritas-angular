import { TestBed } from '@angular/core/testing';

import { VinoVeritasServiceService } from './vino-veritas-service.service';

describe('VinoVeritasServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VinoVeritasServiceService = TestBed.get(VinoVeritasServiceService);
    expect(service).toBeTruthy();
  });
});
