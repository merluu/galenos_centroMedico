import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoCancelarDisponibilidadComponent } from './medico-cancelar-disponibilidad.component';

describe('MedicoCancelarDisponibilidadComponent', () => {
  let component: MedicoCancelarDisponibilidadComponent;
  let fixture: ComponentFixture<MedicoCancelarDisponibilidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoCancelarDisponibilidadComponent]
    });
    fixture = TestBed.createComponent(MedicoCancelarDisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
