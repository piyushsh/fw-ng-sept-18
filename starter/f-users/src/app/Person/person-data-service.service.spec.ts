import { TestBed } from '@angular/core/testing';

import { PersonDataServiceService } from './person-data-service.service';

describe('PersonDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonDataServiceService = TestBed.get(PersonDataServiceService);
    expect(service).toBeTruthy();
  });
});
