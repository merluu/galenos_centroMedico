import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoAgregarDisponibilidadComponent } from './medico-agregar-disponibilidad.component';

describe('MedicoAgregarDisponibilidadComponent', () => {
  let component: MedicoAgregarDisponibilidadComponent;
  let fixture: ComponentFixture<MedicoAgregarDisponibilidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoAgregarDisponibilidadComponent]
    });
    fixture = TestBed.createComponent(MedicoAgregarDisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
