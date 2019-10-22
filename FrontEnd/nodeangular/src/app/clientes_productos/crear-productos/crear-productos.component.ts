import { Categorias } from '../../clientes-categorias/categorias';
import { CategoriaService } from './../../clientes-categorias/categoria.service';
import { Productos } from 'src/app/clientes_productos/productos';
import { ProductosService } from './../productos.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'
import * as $ from 'jquery';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent implements OnInit {

  private productos:Productos=new Productos
  private categorias:Categorias[]
  private foto:File

  constructor(
    private productoservice:ProductosService,
    private categoriaservice:CategoriaService
    ) { }

  ngOnInit() {
    this.obtenerCategorias()

  }

  obtenerCategorias(){
    this.categoriaservice.getCategorias().subscribe(categoria=>{
      this.categorias=categoria.categorias
      console.log(categoria)
    })
  }

  postProducto(){
    this.productoservice.postProductos(this.productos.id,this.productos.nombre,this.productos.precio,this.productos.categoriaid,this.foto).subscribe(
      producto=>{
        console.log(producto)
        console.log(this.productos)
        swal.fire("Producto Creado",`Se agrego correctamente el producto ${producto.detalle.nombre}`,"success")
      }
    )
  }

fotoseleccionada(e){
  this.foto=(e.target.files[0])
  console.log(this.foto)



}



}
