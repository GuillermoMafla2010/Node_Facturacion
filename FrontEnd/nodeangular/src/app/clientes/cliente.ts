import {FacturasCliente} from '../clientes_facturas/facturascliente';



export class Cliente{
  id:number;
  nombre:string;
  createdAt:Date;
  updatedAt:Date;
  facturas:FacturasCliente

}
