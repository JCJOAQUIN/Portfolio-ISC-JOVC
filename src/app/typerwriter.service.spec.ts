import { TestBed } from '@angular/core/testing';

import { TyperwriterService } from './typerwriter.service';

describe('TyperwriterService', () => {
  let service: TyperwriterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TyperwriterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
