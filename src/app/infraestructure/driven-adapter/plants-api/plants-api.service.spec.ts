import { TestBed } from '@angular/core/testing';

import { PlantsApiService } from './plants-api.service';

describe('PlantsApiService', () => {
  let service: PlantsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
