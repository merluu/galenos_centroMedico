import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoListCentroEspeComponent } from './medico-list-centro-espe.component';

describe('MedicoListCentroEspeComponent', () => {
  let component: MedicoListCentroEspeComponent;
  let fixture: ComponentFixture<MedicoListCentroEspeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoListCentroEspeComponent]
    });
    fixture = TestBed.createComponent(MedicoListCentroEspeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
