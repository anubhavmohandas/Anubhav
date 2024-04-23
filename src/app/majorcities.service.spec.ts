import { TestBed } from '@angular/core/testing';

import { MajorcitiesService } from './majorcities.service';

describe('MajorcitiesService', () => {
  let service: MajorcitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MajorcitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
