import { Observable } from 'rxjs';
import { Productos } from './productos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }
  private url:string="http://localhost:3001/producto"
  private url1:string="http://localhost:3001/productos"
  private url2:string="http://localhost:3001/verfoto"
  private productos:Productos;

getProductos():Observable<any>{
  return this.http.get<any>(this.url1)
}

postProductos(id,nombre,precio,categoriaid,archivo:File):Observable<any>{
  let formData=new FormData()
  formData.append("id",id)
  formData.append("nombre",nombre);
  formData.append("precio",precio);
  formData.append("categoriaid",categoriaid);
  formData.append("archivo",archivo)
  return this.http.post<any>(this.url1,formData);
}

getProductosPorId(id):Observable<any>{
  return this.http.get<any>(`${this.url}/${id}`)
}

buscarProducto(termino):Observable<any>{
  return this.http.get<any>(`${this.url1}/${termino}`)
}

verimagen(id:number):Observable<any>{
  return this.http.get<any>(`${this.url2}/${id}`)
}


}
