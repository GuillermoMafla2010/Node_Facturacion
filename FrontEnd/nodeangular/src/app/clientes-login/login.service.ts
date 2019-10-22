import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from './login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import swal from 'sweetalert2'



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private login:Login
  private _login:Login
  private _token:string

  private url:string="http://localhost:3001/ejemplo"
  private http_headers=new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient , private router:Router ) { }

  iniciosesion(login:Login):Observable<any>{
    return this.http.post<any>(this.url,login)
  }

  noAutorizado(e):boolean{
   if(e.status==401){
     if(this.isAuthenticated()){
       this.logout()
     }
     this.router.navigate(["/login"])
   return true
   }



   if(e.status==403){
     this.router.navigate(['/login'])
     swal.fire("Acceso Denegado","No tienes acceso a este recurso","warning")
     return true
   }

     return false
  }

  agregarAuthorizationHeader(){

    let token=this.token

    if(token!=null){
        return this.http_headers.append('token',token)
    }

    if(token==null){
      return this.http_headers
    }
  }


  obtenerdatostoken(sesiontoken:string){
    if(sesiontoken!=null){
      return JSON.parse(atob(sesiontoken.split(".")[1]))
    }

    return null
  }


  guardaUsuario(sesiontoken){

    let payload=this.obtenerdatostoken(sesiontoken)
    this._login=new Login();
    this._login.nombre=payload.usuario,
    this._login.role=payload.rol.map(nombre=>nombre.Role.nombre)
    sessionStorage.setItem("usuario",JSON.stringify(this._login))


  }

  guardatoken(sesiontoken){
    this._token=sesiontoken
    sessionStorage.setItem("token",this._token)

  }

  public get token():string{
    if(this._token!=null){
      return this._token
    }
    else if(this._token==null && sessionStorage.getItem("token")!=null){
      this._token=sessionStorage.getItem("token")
      return this._token
    }
  }

  public get loginn():Login{
    if(this._login!=null){
      return this._login
    }
    else if(this._login==null && sessionStorage.getItem("usuario")!=null){
      this._login=JSON.parse(sessionStorage.getItem("usuario") )
      return this._login
    }
  }

  isAuthenticated():boolean{
    let payload=this.obtenerdatostoken(this.token) // llama al get token no al _token de tipo string

    if(payload!=null && payload.usuario && payload.usuario.length>0){
      return true
    }

    return false
  }


  logout():void{
    this._token=null
    this._login=null;
    sessionStorage.clear()
  }




}

