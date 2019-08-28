import { TestBed } from '@angular/core/testing';

import { PeoplelistService } from './peoplelist.service';

describe('PeoplelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeoplelistService = TestBed.get(PeoplelistService);
    expect(service).toBeTruthy();
  });
});
