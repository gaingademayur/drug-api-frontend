import { TestBed } from '@angular/core/testing';

import { DrugDataService } from './drug-data.service';

describe('DrugDataService', () => {
  let service: DrugDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrugDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
