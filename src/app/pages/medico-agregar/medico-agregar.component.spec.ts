import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoAgregarComponent } from './medico-agregar.component';

describe('MedicoAgregarComponent', () => {
  let component: MedicoAgregarComponent;
  let fixture: ComponentFixture<MedicoAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoAgregarComponent]
    });
    fixture = TestBed.createComponent(MedicoAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
