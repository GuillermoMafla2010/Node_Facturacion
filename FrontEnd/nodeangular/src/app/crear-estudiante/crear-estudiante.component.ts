import { EstudianteService } from './../estudiante.service';
import { Estudiantes } from './../estudiantes';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2';




@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls:['./crear-estudiante.component.css']

})
export class CrearEstudianteComponent implements OnInit {

  private fotoSeleccionada:File
  public estudiante:Estudiantes=new Estudiantes;

  constructor(private estudianteservice:EstudianteService,private router:Router) {

  }

  ngOnInit() {
  }

  public crear(){


    this.estudianteservice.postEstudiante(this.estudiante).subscribe(resp=>{
      console.log(resp)
      this.router.navigate(['/estudiantes'])
        swal.fire('Nuevo Cliente',`Se creo el usuario ${resp.mensaje.nombre}`,'success')
    })
  }


  seleccionarFoto(event){
    this.fotoSeleccionada=event.target.files[0]
    console.log(this.fotoSeleccionada);
  }


}
