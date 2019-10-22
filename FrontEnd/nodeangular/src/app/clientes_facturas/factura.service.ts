import { Pagos } from './pagos';
import { FacturasCliente } from './facturascliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private facturas:FacturasCliente
  private pagos:Pagos;
  private url:string="http://localhost:3001/factura"
  private url1:string="http://localhost:3001/facturasclientes"
  private url2:string="http://localhost:3001/pagos";

  constructor(private _http:HttpClient) { }

  postFacturas(facturas:FacturasCliente):Observable<any>{
    return this._http.post<any>(this.url,facturas)
  }

  getFacturas(id):Observable<any>{
    return this._http.get<any>(`${this.url1}/${id}`)
  }

  postPago(token:Pagos):Observable<any>{
      return this._http.post<Pagos>(this.url2,token)
  }

}
