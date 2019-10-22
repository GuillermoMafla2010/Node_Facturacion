import { EstudianteService } from './estudiante.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import {HttpClientModule} from '@angular/common/http';

import { CrearEstudianteComponent } from './crear-estudiante/crear-estudiante.component';
import { VerestudianteComponent } from './verestudiante/verestudiante.component';
import { DetalleestudianteComponent } from './detalleestudiante/detalleestudiante.component';
import { CrearfacturaComponent } from './crearfactura/crearfactura.component';
import { ClientesComponent } from './clientes/clientes/clientes.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { DetalleClienteComponent } from './clientes/detalle-cliente/detalle-cliente.component';
import { CrearFacturaClientesComponent } from './clientes_facturas/crear-factura-clientes/crear-factura-clientes.component';
import { ListarProductosComponent } from './clientes_productos/listar-productos/listar-productos.component';
import { ClientesDetalleFacturaComponent } from './clientes-detalle-factura/clientes-detalle-factura.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule,MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {StripeCheckoutModule} from 'ng-stripe-checkout';
import { PagoFacturaComponent } from './clientes-detalle-factura/pago-factura/pago-factura.component';
import { ClientesCategoriasComponent } from './clientes-categorias/clientes-categorias.component';
import { ClientesLoginComponent } from './clientes-login/clientes-login.component';
import { CrearProductosComponent } from './clientes_productos/crear-productos/crear-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    CrearEstudianteComponent,
    VerestudianteComponent,
    DetalleestudianteComponent,
    CrearfacturaComponent,
    ClientesComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    DetalleClienteComponent,
    CrearFacturaClientesComponent,
    ListarProductosComponent,
    ClientesDetalleFacturaComponent,
    PagoFacturaComponent,
    ClientesCategoriasComponent,
    ClientesLoginComponent,
    CrearProductosComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
      MatAutocompleteModule,
      MatInputModule,
      FormsModule,
      ReactiveFormsModule,
      StripeCheckoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
