import { Component, OnInit , Input } from '@angular/core';
import {Cliente} from '../cliente';
import {ModalclienteinformacionService} from '../modalclienteinformacion.service';


@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.css']
})
export class DetalleClienteComponent implements OnInit {

  @Input() cliente:Cliente
  constructor(private modal:ModalclienteinformacionService) { }

  ngOnInit() {
  }

  cerrarModal(){
    this.modal.cerrarModal()
  }

}
