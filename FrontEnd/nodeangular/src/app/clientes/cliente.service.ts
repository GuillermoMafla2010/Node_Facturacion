import { LoginService } from './../clientes-login/login.service';
import { Cliente } from './cliente';
import { Injectable } from '@angular/core';
import {of , Observable, throwError} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  constructor(private _http:HttpClient,private loginservice:LoginService) { }

  private url:string="http://localhost:3001/personas";


  getClientes():Observable<any>{
    return this._http.get<any>(this.url,{headers:this.loginservice.agregarAuthorizationHeader()})

    .pipe(catchError(e=>{
      if (this.loginservice.noAutorizado(e)){
        return throwError(e)
      }
    }))
  }

  postClientes(cliente:Cliente):Observable<any>{
    return this._http.post<any>(this.url,cliente)
  }

  getClientePorId(id):Observable<any>{
    return this._http.get<any>(`${this.url}/${id}`)
  }

  putClientes(cliente:Cliente):Observable<any>{
    return this._http.put<any>(`${this.url}/${cliente.id}`,cliente)
  }

  deleteClientes(id:number):Observable<any>{
    return this._http.delete(`${this.url}/${id}`)
  }
}
