import { TestBed } from '@angular/core/testing';

import { DataBagService } from './data-bag.service';

describe('DataBagService', () => {
  let service: DataBagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
