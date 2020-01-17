import { TestBed } from '@angular/core/testing';

import { CoinspotApiService } from './coinspot-api.service';

describe('CoinspotApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoinspotApiService = TestBed.get(CoinspotApiService);
    expect(service).toBeTruthy();
  });
});
