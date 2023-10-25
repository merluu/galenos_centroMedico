import { TestBed } from '@angular/core/testing';

import { ServicioMedicoService } from './servicio-medico.service';

describe('ServicioMedicoService', () => {
  let service: ServicioMedicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioMedicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
