import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFacturaClientesComponent } from './crear-factura-clientes.component';

describe('CrearFacturaClientesComponent', () => {
  let component: CrearFacturaClientesComponent;
  let fixture: ComponentFixture<CrearFacturaClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearFacturaClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFacturaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
