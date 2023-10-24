import { TestBed } from '@angular/core/testing';

import { ServicioPacienteService } from './servicio-paciente.service';

describe('ServicioPacienteService', () => {
  let service: ServicioPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
