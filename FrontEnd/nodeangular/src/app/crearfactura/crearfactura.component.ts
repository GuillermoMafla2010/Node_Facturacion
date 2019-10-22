import { EstudianteService } from './../estudiante.service';
import { ActivatedRoute } from '@angular/router';
import { Facturas } from './../Facturas';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-crearfactura',
  templateUrl: './crearfactura.component.html',
  styleUrls: ['./crearfactura.component.css']
})
export class CrearfacturaComponent implements OnInit {


  private facturas:Facturas=new Facturas;
  private id:number
  constructor(private activatedRoute:ActivatedRoute, private estudianteservice:EstudianteService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(factura=>{
      this.id=factura.id

    })
  }


  subirfactura(){
      this.estudianteservice.subirfactura(this.id,this.facturas).subscribe(()=>console.log(this.id,this.facturas))
  }


}
