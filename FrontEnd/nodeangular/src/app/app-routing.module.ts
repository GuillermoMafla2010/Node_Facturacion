import { ClientesCategoriasComponent } from './clientes-categorias/clientes-categorias.component';
import { CrearProductosComponent } from './clientes_productos/crear-productos/crear-productos.component';
import { ClientesLoginComponent } from './clientes-login/clientes-login.component';
import { Login } from './clientes-login/login';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { ClientesComponent } from './clientes/clientes/clientes.component';
import { CrearfacturaComponent } from './crearfactura/crearfactura.component';
import { DetalleestudianteComponent } from './detalleestudiante/detalleestudiante.component';
import { VerestudianteComponent } from './verestudiante/verestudiante.component';
import { CrearEstudianteComponent } from './crear-estudiante/crear-estudiante.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import {CrearClienteComponent} from './clientes/crear-cliente/crear-cliente.component';
import {CrearFacturaClientesComponent} from './clientes_facturas/crear-factura-clientes/crear-factura-clientes.component';
import {ClientesDetalleFacturaComponent} from './clientes-detalle-factura/clientes-detalle-factura.component';
import {ListarProductosComponent} from './clientes_productos/listar-productos/listar-productos.component';



const routes: Routes = [
  {path:'estudiantes',component:EstudiantesComponent },
  {path:'crear',component:CrearEstudianteComponent},
  {path:'ver/:id' ,component:VerestudianteComponent},
  {path:'detalle/:id' ,component:DetalleestudianteComponent},
  {path:'factura/:id' ,component:CrearfacturaComponent},
  {path:'clientes',component:ClientesComponent},
  {path:"nuevocliente",component:CrearClienteComponent},
  {path:"editarcliente/:id",component:EditarClienteComponent},
  {path:"crearfactura/:id",component:CrearFacturaClientesComponent},
  {path:"verfactura/:id",component:ClientesDetalleFacturaComponent},
  {path:"login",component:ClientesLoginComponent},
  {path:"nuevoproducto",component:CrearProductosComponent},
  {path:"nuevacategoria",component:ClientesCategoriasComponent},
  {path:"todosproductos",component:ListarProductosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
