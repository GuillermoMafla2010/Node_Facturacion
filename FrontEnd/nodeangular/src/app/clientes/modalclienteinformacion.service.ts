import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalclienteinformacionService {

  constructor() { }

  modal:boolean=false;

  abrirModal(){
    this.modal=true
  }

  cerrarModal(){
    this.modal=false
  }
}
