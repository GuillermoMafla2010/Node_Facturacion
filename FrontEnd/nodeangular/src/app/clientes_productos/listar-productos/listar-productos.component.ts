import { ProductosService } from './../productos.service';
import { Component, OnInit } from '@angular/core';
import {Productos} from '../productos';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {


  private productos:Productos
  constructor(private productoservice:ProductosService) { }

  ngOnInit() {
    this.getTodosProductos()


  }

  getTodosProductos(){
    this.productoservice.getProductos().subscribe(productos=>{

      this.productos=productos.producto
      console.log(this.productos)
    })
  }



}
