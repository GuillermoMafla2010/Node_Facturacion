import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesDetalleFacturaComponent } from './clientes-detalle-factura.component';

describe('ClientesDetalleFacturaComponent', () => {
  let component: ClientesDetalleFacturaComponent;
  let fixture: ComponentFixture<ClientesDetalleFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesDetalleFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesDetalleFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
