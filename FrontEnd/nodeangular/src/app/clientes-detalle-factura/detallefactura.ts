import { Productos } from './../clientes_productos/productos';


export class DetalleFactura {
  productoid:any;
  facturaid:number;
  producto:Productos;
  cantidad:number;

  verproducto:Productos[]

  public calcularImporte():number{
    return this.cantidad*this.producto.precio
  }

}
