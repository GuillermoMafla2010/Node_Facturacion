

import { Observable } from 'rxjs';
import {map, startWith, flatMap} from 'rxjs/operators';


/*------Importacion de Servicios prar peticiones HTTP-----*/
import { ProductosService } from './../../clientes_productos/productos.service';
import { FacturasCliente } from '../facturascliente';
import { FacturaService } from './../factura.service';
import { ClienteService } from './../../clientes/cliente.service';
import {DetallefacturaService} from 'src/app/clientes-detalle-factura/detallefactura.service';
import { CategoriaService } from './../../clientes-categorias/categoria.service';
/*--------------------------------------------------*/
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

/*--------------Importacion de Modelos TypeScript-------------*/
import {Cliente} from 'src/app/clientes/cliente';
import {Productos} from 'src/app/clientes_productos/productos';
import {DetalleFactura} from 'src/app/clientes-detalle-factura/detallefactura';
import { Categorias } from '../../clientes-categorias/categorias';
/*-------------------------------------------------------------*/


import {FormControl} from '@angular/forms';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material';



@Component({
  selector: 'app-crear-factura-clientes',
  templateUrl: './crear-factura-clientes.component.html',
  styleUrls: ['./crear-factura-clientes.component.css']
})
export class CrearFacturaClientesComponent implements OnInit {

/*------------Declaracion de clases TS----------------*/
  private cliente:Cliente=new Cliente
  public factura:FacturasCliente=new FacturasCliente
  private cargaproducto:Productos
  private producto:Productos=new Productos;
  private detallefactura:DetalleFactura=new DetalleFactura
  private categorias:Categorias[]

/*---------------------------------------------------*/


private item:FacturasCliente[];
myControl = new FormControl();
filteredOptions: Observable<Productos[]>;
listaproducto:Productos[]=[];
private ids:any[]=[]
private listaCategorias:any[]
private listaCategoriasProductos:any[]

  constructor(
    private categoriaservice:CategoriaService,
    private detallefacturaService:DetallefacturaService,
    private productoService:ProductosService,
    private activatedRoute:ActivatedRoute,
    private clienteService:ClienteService ,
    private facturaServices:FacturaService ,
    private router:Router
    ) { }

  ngOnInit() {


    this.cargarCategorias()
    setTimeout(() => {console.log(this.categorias)}, 1000);

    this.getCliente()

    setTimeout(() => {console.log(this.cliente)}, 5);

    //this.cargarProductos()
    //setTimeout(()=>{; console.log(this.cargaproducto)},1000)

    this.productoService.getProductos().subscribe(productos=>this.listaproducto=productos.producto)


    this.filteredOptions = this.myControl.valueChanges
      .pipe(

        map(value => typeof value === 'string' ? value : value.nombre),
        map(name => name ? this._filter(name) : this.listaproducto.slice())
      );


}

displayFn(producto?: Productos): string | undefined {
  return producto ? producto.nombre : undefined;
}

private _filter(name: string): Productos[] {
  const filterValue = name.toLowerCase();

 // return this.listaproducto.filter(option => option.nombre.toLowerCase().indexOf(filterValue) === 0);
 return this.listaCategoriasProductos.filter(option => option.nombre.toLowerCase().indexOf(filterValue) === 0);
}


  getCliente():void{
    this.activatedRoute.params.subscribe(
      params=>{
        let id=params['id']
        if(id){
          this.clienteService.getClientePorId(id).subscribe(cliente=>this.cliente=cliente.vergas[0])
        }
      }
    )
  }




  cargarCategorias(){
    this.categoriaservice.getCategorias().subscribe(cat=>this.categorias=cat.categorias)
  }


  vercategoria(event){
      let idea=+event.target.value.split(" ")[1];

      this.categoriaservice.getCategoriaPorId(idea).subscribe(item=>{
        console.log(item.categorias[0].Productos);
        this.listaCategoriasProductos=item.categorias[0].Productos
      })

  }


  cargarProductos(){
    this.productoService.getProductos().subscribe(productos=>this.cargaproducto=productos.producto);
  }

  verproducto(event){
    let id=event.target.value.split(":")[1]
    console.log(id);
    //this.idproducto=event.target.value.split(":")[1]
  //this.productoService.getProductosPorId(this.idproducto).subscribe(producto=>{ this.item=producto.producto; console.log(this.item)})
console.log(this.item)
  }

  completaproducto(event){


    //console.log(event)
    this.productoService.buscarProducto(event.target.value).subscribe(producto=>{console.log(producto.busqueda); })
  }

  lineaproducto:FacturasCliente[]=[]

  seleccionarProducto(event:MatAutocompleteSelectedEvent){
    let producto=event.option.value




     console.log(producto)
    if(this.existeItem(producto.id)){
      this.incrementaCantidad(producto.id)
      //this.lineaproducto.push(producto)
    }else{

      let nuevoItem=new DetalleFactura()
      let arrays=new DetalleFactura();
    nuevoItem.producto=producto;

    this.factura.items.push(nuevoItem)
      //console.log(this.factura.items)


    }
this.ids=this.factura.items.map(productos=>productos.producto.id)
//console.log(this.ids)


  }

  existeItem(id:number):boolean{
    let existe=false;
    this.factura.items.forEach((item:DetalleFactura)=>{
      if(id===item.producto.id){
        existe=true
      }
    })
    return existe
  }

  incrementaCantidad(id:number){
    //this.lineaproducto=this.lineaproducto.map(item=>{if(id===item.id){++item.cantidad}return item})
  this.factura.items=this.factura.items.map((item:DetalleFactura)=>{
    if(id===item.producto.id)
    {++item.cantidad}return item})
  }


  cambiaPrecio(event,identificador){
    let cantidad:number=event.target.value as number
    //this.listaproducto.map((item:Productos)=>{console.log(item);if(item.id===identificador){item.cantidad=cantidad}return item })
    this.factura.items=this.factura.items.map(item=>{if(identificador===item.producto.id){item.cantidad=cantidad; console.log(typeof item.cantidad)}return item})
  }

  eliminaProducto(id){
    this.factura.items=this.factura.items.filter(item=>id!==item.producto.id)
    console.log(this.factura.items)
  }





  enviarFactura(){

    /*  this.factura.clienteid=this.cliente.id
     let facturaid:number
     let productoid:number
     //this.detallefactura.productoid=this.producto.id;

     this.facturaServices.postFacturas(this.factura).subscribe(factura=>{
      this.detallefactura.facturaid=factura.factura.id
     })




     console.log(facturaid)
     console.log(this.detallefactura)
     setTimeout(()=>(this.detallefacturaService.postdetallefactura(this.detallefactura).subscribe(response=>alert("Factura Creada"))),1000) */
     this.factura.clienteid=this.cliente.id



     //this.detallefactura.facturaid
     this.facturaServices.postFacturas(this.factura).subscribe(exito=>{
          console.log(exito)
          this.detallefactura.facturaid=exito.factura.id
         this.factura.items.map(item=>{


           this.detallefactura.productoid=item.producto.id;
           this.detallefactura.cantidad=item.cantidad as number;
           console.log(this.detallefactura.cantidad)
           this.detallefacturaService.postdetallefactura(this.detallefactura).subscribe(exito=>console.log(exito))}
         )})

         }

/* aumentarinput:string[]=[]

  vernumber(event){
   // console.log(event.target.value)


    this.aumentarinput.push(event.target.value)
    console.log(this.aumentarinput)
  } */

}
