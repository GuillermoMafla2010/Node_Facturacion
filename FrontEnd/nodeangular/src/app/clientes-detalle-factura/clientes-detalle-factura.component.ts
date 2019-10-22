//import { isDimensionToken, isIdentToken } from './../../../html2canvas/src/css/syntax/parser';
import { Pagos } from './../clientes_facturas/pagos';

import { DetallefacturaService } from './detallefactura.service';
import { Productos } from 'src/app/clientes_productos/productos';
import { Cliente } from './../clientes/cliente';
import { Facturas } from './../Facturas';

import { FacturaService } from './../clientes_facturas/factura.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {DetalleFactura} from './detallefactura';
import {StripeCheckoutLoader, StripeCheckoutHandler} from 'ng-stripe-checkout';
import * as $ from 'jquery';
import * as jspdf from 'jspdf';

//declare var StripeCheckout: StripeCheckoutStatic;

@Component({
  selector: 'app-clientes-detalle-factura',
  templateUrl: './clientes-detalle-factura.component.html',
  styleUrls: ['./clientes-detalle-factura.component.css']
})
export class ClientesDetalleFacturaComponent implements OnInit {


public handler:any
public cadena:string
public cliente:Cliente
public facturas:Facturas
public detallefacturas:DetalleFactura
public producto:Productos
public pagos:Pagos=new Pagos
private stripeCheckoutHandler: StripeCheckoutHandler;
  constructor(private activatedRoute:ActivatedRoute,
              private router:Router,
              private facturaservice:FacturaService,
              private stripeCheckoutLoader: StripeCheckoutLoader
              ) { }

  ngOnInit() {
      this.getFacturas();
     setTimeout(()=>(console.log(this.detallefacturas)),5)


     this.stripeCheckoutLoader.createHandler({
      key: 'pk_test_n2wO9yGrgvXnndFxRI4Fv2K900uWrfQFwn',
      token: (token) => {
        this.pagos.id=token.id;
        this.pagos.email=token.email
        console.log(token)
          // Do something with the token...
         this.facturaservice.postPago(this.pagos).subscribe(exito=>{
           console.log(this.pagos)
         })


      }
  }).then((handler: StripeCheckoutHandler) => {
      this.stripeCheckoutHandler = handler;
  });



     /* this.handler = StripeCheckout.configure({

      key: 'pk_test_n2wO9yGrgvXnndFxRI4Fv2K900uWrfQFwn',
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      token: function(token) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for u
this.cadena=token.id
this.pagos=token
console.log(this.cadena)
console.log(this.pagos)





      }

    }); */
  }


  exportar(){


var doc=new jspdf();

doc.fromHTML($('#nuevopdf').get(0),20,20,{
  'width':250
})

doc.save('a4.pdf')


  }


  getFacturas():void{
    this.activatedRoute.params.subscribe(params=>{
      let id= params['id']
      this.facturaservice.getFacturas(id).subscribe(productos=>{
        console.log(productos);
        this.cliente=productos.factura.Cliente
        this.facturas=productos.factura
        this.detallefacturas=productos.factura.DetalleFacturas
       ////// this.detallefacturas.verproducto=productos.factura.DetalleFacturas.map(productos=>productos.Producto)

      })
    })

  }


  public pago() {
    this.stripeCheckoutHandler.open({
        amount: 1500,
        currency: 'USD',
    });
}

public onClickCancel() {
    // If the window has been opened, this is how you can close it:
    this.stripeCheckoutHandler.close();
}
}



