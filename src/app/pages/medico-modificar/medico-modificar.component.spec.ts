import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoModificarComponent } from './medico-modificar.component';

describe('MedicoModificarComponent', () => {
  let component: MedicoModificarComponent;
  let fixture: ComponentFixture<MedicoModificarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoModificarComponent]
    });
    fixture = TestBed.createComponent(MedicoModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
