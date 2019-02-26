import { TestBed } from '@angular/core/testing';

import { FetchServService } from './fetch-serv.service';

describe('FetchServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchServService = TestBed.get(FetchServService);
    expect(service).toBeTruthy();
  });
});
