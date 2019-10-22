import { Facturas } from './../Facturas';
import { ModalService } from './../modal.service';
import { Estudiantes } from './../estudiantes';
import { EstudianteService } from './../estudiante.service';
import { Component, OnInit } from '@angular/core';

import swal from 'sweetalert2'

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html'

})
export class EstudiantesComponent implements OnInit {

  estudiante:Estudiantes[];

  estudiantemodal:Estudiantes

  constructor(private estudianteservice:EstudianteService , private modal:ModalService) { }

  ngOnInit() {

    this.estudianteservice.getEstudiantes().subscribe(estudiante=>{
      this.estudiante=estudiante.estudiante
    });




    setTimeout(()=>{
      console.log(this.estudiante)

    },200)


  }


  abrirModal(estudiante:Estudiantes){
    this.modal.abrirModal();
    this.estudiantemodal=estudiante

  }

  borrar(estudiante:Estudiantes){
    swal.fire({
      title: `Deseas eliminar a ${estudiante.nombre}`,
      text: "Serà eliminado permanentemente",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.estudianteservice.borrarEstudiante(estudiante.id).subscribe(

          response=>{
            console.log(estudiante)
            this.estudiante=this.estudiante.filter(cli => cli !== estudiante)

          }
      )

      swal.fire(
        'Eliminado',
        'El registro fue eliminado',
        'success'
      )
      }
    })






  }



}
