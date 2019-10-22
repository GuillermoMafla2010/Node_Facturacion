import { Login } from './../../clientes-login/login';
import { ClienteService } from './../cliente.service';
import { Component, OnInit , Input} from '@angular/core';
import {Cliente} from '../cliente';
import {ModalclienteinformacionService} from '../modalclienteinformacion.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  login:Login
  cliente:Cliente[]
  clienteseleccionado:Cliente;
  constructor(private clienteservice:ClienteService , private modal:ModalclienteinformacionService) { }

  ngOnInit() {


    this.getClientes()
    setTimeout(()=>{console.log(this.cliente);console.log(sessionStorage.getItem("usuario"))},4000)
  }

  getClientes(){
    this.clienteservice.getClientes().subscribe(cliente=>this.cliente=cliente.vergas);
  }

  borrar(cliente:Cliente){
    this.clienteservice.deleteClientes(cliente.id).subscribe(response=>this.cliente=this.cliente.filter(cli=>cli!==cliente))
  }

  abrirModal(cliente:Cliente){
  this.modal.abrirModal()
  this.clienteseleccionado=cliente
  console.log("Listo para el modal")
  }

}
