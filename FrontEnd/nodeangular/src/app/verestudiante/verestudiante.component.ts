import { EstudianteService } from './../estudiante.service';
import { Estudiantes } from './../estudiantes';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-verestudiante',
  templateUrl: './verestudiante.component.html',

})
export class VerestudianteComponent implements OnInit {

  estudiante:Estudiantes
  constructor(private router:Router,private rutas:ActivatedRoute , private estudianteservice:EstudianteService) { }

  ngOnInit() {
    this.cargarCliente();
  }

  cargarCliente():void{
    this.rutas.params.subscribe(params=>{
      let id= params['id']
      console.log(id)
      if(id){
         this.estudianteservice.getEstudiantePorId(id).subscribe(estudiantes=>{
           this.estudiante=estudiantes.estudiante[0]
           console.log(estudiantes.estudiante[0])
         })

      }
    })

//console.log(estudiantes.estudiante[0])
  }


  actualizar(){
      this.estudianteservice.actualizarEstudiante(this.estudiante).subscribe(resp=>{

        this.router.navigate(['/estudiantes'])
        swal.fire('Estudiante Actualizado',`Se actualizo a ${this.estudiante.nombre}`,'info');
      })
  }

}
