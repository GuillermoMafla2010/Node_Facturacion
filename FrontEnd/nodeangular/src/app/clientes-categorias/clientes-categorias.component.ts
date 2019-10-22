import  swal  from 'sweetalert2';
import { CategoriaService } from './categoria.service';
import { Categorias } from './categorias';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-clientes-categorias',
  templateUrl: './clientes-categorias.component.html',
  styleUrls: ['./clientes-categorias.component.css']
})
export class ClientesCategoriasComponent implements OnInit {

  private categorias:Categorias=new Categorias
  private totalcategorias:Categorias[]
  constructor(
    private categoriaservice:CategoriaService
  ) { }



  ngOnInit() {
    this.todasCategorias()
  }

  postCategoria(){
    this.categoriaservice.postcategorias(this.categorias).subscribe(categoria=>{

      swal.fire("Categoria Creada",`Se creo la categoria llamada ${categoria.categoria.nombre}`,"success")
      this.categoriaservice.notificar.emit(categoria)
    })


  }


  todasCategorias(){
    this.categoriaservice.getCategorias().subscribe(

      categorias=>{
        this.totalcategorias=categorias.categorias
        console.log(categorias)
      }

    )

    this.categoriaservice.notificar.subscribe(cat=>{
     console.log(cat.categoria.nombre)
    this.totalcategorias.push(cat.categoria)
    })
  }



}
