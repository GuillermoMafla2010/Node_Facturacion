import { Facturas } from './Facturas';
import { Injectable } from '@angular/core';
import {of , Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Estudiantes} from '../app/estudiantes';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

// tslint:disable-next-line:whitespace
  // tslint:disable-next-line:no-inferrable-types
  private url: string = 'http://localhost:3001/personas';
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }


  getEstudiantes(): Observable<any> {

    return this._http.get<any>(`${this.url}`);
  }

  // tslint:disable-next-line:typedef-whitespace
  postEstudiante(estudiante:Estudiantes):Observable<any>{


    return this._http.post<any>(this.url,estudiante)
  }

  getEstudiantePorId(id):Observable<any>{

    return this._http.get<any>(`${this.url}/${id}`);
  }

  actualizarEstudiante(estudiante:Estudiantes):Observable<any>{
    return this._http.put<any>(`${this.url}/${estudiante.id}`,estudiante);
  }

  borrarEstudiante(id:number):Observable<any>{
    return this._http.delete<any>(`${this.url}/${id}`)
  }

  actualizarfoto(archivo:File,id):Observable<any>{

    let formData=new FormData();
    formData.append("id",id);
    formData.append("archivo",archivo)

    return this._http.put<any>(`http://localhost:3000/foto/${id}`,formData)
  }

  subirfactura(id:number,factura:Facturas):Observable<any>{

    return this._http.post<any>(`http://localhost:3000/factura/${id}`,factura);
  }


}
