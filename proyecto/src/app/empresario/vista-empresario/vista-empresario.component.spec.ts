import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEmpresarioComponent } from './vista-empresario.component';

describe('VistaEmpresarioComponent', () => {
  let component: VistaEmpresarioComponent;
  let fixture: ComponentFixture<VistaEmpresarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaEmpresarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEmpresarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
