import { ModalService } from './../modal.service';
import { Estudiantes } from './../estudiantes';
import { EstudianteService } from './../estudiante.service';
import { Component, OnInit , Input } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-detalleestudiante',
  templateUrl: './detalleestudiante.component.html',
  styleUrls: ['./detalleestudiante.component.css']

})
export class DetalleestudianteComponent implements OnInit {

  @Input() estudiante:Estudiantes
  private fotoSeleccionada:File;
  constructor(private _activatedrouted:ActivatedRoute , private estudianteservice:EstudianteService , public modalService:ModalService) { }



  ngOnInit() {

    /* this._activatedrouted.params.subscribe(params=>{
        let id=params.id;
        if(id){
          this.estudianteservice.getEstudiantePorId(id).subscribe(estudiantes=>{
            console.log(estudiantes)
            this.estudiante=estudiantes.estudiante[0]
          })
        }
    })
  } */
  }
  cerrarModal(){
    this.modalService.cerrarModal()
    console.log(this.estudiante.Facturas)

  }

  seleccionarFoto(event){
    this.fotoSeleccionada=event.target.files[0]
    console.log(this.fotoSeleccionada)
  }


    subirFoto(){
        console.log(this.estudiante.id)
        if(!this.fotoSeleccionada){
          console.log("No se subio una foto")
        }

        this.estudianteservice.actualizarfoto(this.fotoSeleccionada,this.estudiante.id).subscribe(()=>console.log(`Imagen Subida ${this.estudiante.id} ${this.fotoSeleccionada}`) )
    }





}
