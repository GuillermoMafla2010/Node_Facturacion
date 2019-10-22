import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import {Cliente} from '../cliente';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente:Cliente=new Cliente
  constructor(private clienteService:ClienteService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.getCliente()
    setTimeout(() => {
      console.log(this.cliente)
    }, 5);
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

  actualizar(){
    this.clienteService.putClientes(this.cliente).subscribe(clientes=>this.router.navigate(["/clientes"]));
  }


}
