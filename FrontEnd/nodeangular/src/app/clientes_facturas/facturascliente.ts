import {DetalleFactura} from '../clientes-detalle-factura/detallefactura';
import {Productos} from '../clientes_productos/productos';
import {Cliente} from '../clientes/cliente';



export class FacturasCliente{
  id:number;
  nombre:string;
  clienteid:number;
  items:DetalleFactura[]=[];
  total:number;


  calcularGranTotal():number{
    this.total=0;
    this.items.forEach(item=>{
      this.total=this.total+item.calcularImporte()
    })

    return this.total
  }
}
