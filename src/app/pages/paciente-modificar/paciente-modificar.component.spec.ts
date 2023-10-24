import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteModificarComponent } from './paciente-modificar.component';

describe('PacienteModificarComponent', () => {
  let component: PacienteModificarComponent;
  let fixture: ComponentFixture<PacienteModificarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteModificarComponent]
    });
    fixture = TestBed.createComponent(PacienteModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
