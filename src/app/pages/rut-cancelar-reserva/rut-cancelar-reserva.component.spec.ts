import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutCancelarReservaComponent } from './rut-cancelar-reserva.component';

describe('RutCancelarReservaComponent', () => {
  let component: RutCancelarReservaComponent;
  let fixture: ComponentFixture<RutCancelarReservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutCancelarReservaComponent]
    });
    fixture = TestBed.createComponent(RutCancelarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
