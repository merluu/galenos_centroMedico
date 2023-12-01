import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarReservaPacienteComponent } from './cancelar-reserva-paciente.component';

describe('CancelarReservaPacienteComponent', () => {
  let component: CancelarReservaPacienteComponent;
  let fixture: ComponentFixture<CancelarReservaPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelarReservaPacienteComponent]
    });
    fixture = TestBed.createComponent(CancelarReservaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
