import { TestBed, inject } from '@angular/core/testing';

import { MortgageService } from './mortgage.service';

describe('MortgageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MortgageService]
    });
  });

  it('should be created', inject([MortgageService], (service: MortgageService) => {
    expect(service).toBeTruthy();
  }));
});
