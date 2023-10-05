import { TestBed } from '@angular/core/testing';

import { CreditCardsAdapterService } from './credit-cards-adapter.service';

describe('CreditCardsAdapterService', () => {
  let service: CreditCardsAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardsAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
