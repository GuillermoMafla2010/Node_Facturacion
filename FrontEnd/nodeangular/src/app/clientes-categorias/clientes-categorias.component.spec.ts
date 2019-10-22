import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesCategoriasComponent } from './clientes-categorias.component';

describe('ClientesCategoriasComponent', () => {
  let component: ClientesCategoriasComponent;
  let fixture: ComponentFixture<ClientesCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
