import { Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

   cliente:Cliente=new Cliente
  constructor(private clienteservice:ClienteService,private _router:Router) { }

  ngOnInit() {
  }

  postFormulario(){
  this.clienteservice.postClientes(this.cliente).subscribe(cliente=>{this._router.navigate(['/clientes'])})
  }

}
