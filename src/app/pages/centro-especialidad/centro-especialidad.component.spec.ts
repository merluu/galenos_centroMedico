import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroEspecialidadComponent } from './centro-especialidad.component';

describe('CentroEspecialidadComponent', () => {
  let component: CentroEspecialidadComponent;
  let fixture: ComponentFixture<CentroEspecialidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentroEspecialidadComponent]
    });
    fixture = TestBed.createComponent(CentroEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
