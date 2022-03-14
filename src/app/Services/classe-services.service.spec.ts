import { TestBed } from '@angular/core/testing';

import { ClasseServicesService } from './classe-services.service';

describe('ClasseServicesService', () => {
  let service: ClasseServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClasseServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
