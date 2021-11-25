import { TestBed } from '@angular/core/testing';

import { CrudMesaService } from './crud-mesa.service';

describe('CrudMesaService', () => {
  let service: CrudMesaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudMesaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
