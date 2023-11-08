import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarHoraComponent } from './reservar-hora.component';

describe('ReservarHoraComponent', () => {
  let component: ReservarHoraComponent;
  let fixture: ComponentFixture<ReservarHoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservarHoraComponent]
    });
    fixture = TestBed.createComponent(ReservarHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
