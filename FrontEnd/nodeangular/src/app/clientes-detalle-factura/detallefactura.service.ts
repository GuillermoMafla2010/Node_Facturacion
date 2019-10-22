import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DetalleFactura} from './detallefactura';




@Injectable({
  providedIn: 'root'
})
export class DetallefacturaService {

  constructor( private http:HttpClient) { }
  private detallefactura:DetalleFactura
  private url:string="http://localhost:3001/detallefactura"

  postdetallefactura(detallefactura:DetalleFactura):Observable<any>{
    return this.http.post<any>(this.url,detallefactura)
  }
}
