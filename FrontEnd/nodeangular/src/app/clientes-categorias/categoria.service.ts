import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categorias } from './categorias';
import { Injectable , EventEmitter} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private _notificar=new EventEmitter<any>()
  categoria:Categorias
  url:string="http://localhost:3001/categorias"

  constructor(private http:HttpClient) { }

  get notificar():EventEmitter<any>{
    return this._notificar
  }

  getCategorias():Observable<any>{
    return this.http.get<any>(this.url)
  }

  getCategoriaPorId(id:number):Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`)
  }

  postcategorias(categoria:Categorias):Observable<any>{
    return this.http.post<any>(this.url,categoria)
  }

}
