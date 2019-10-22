import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Login } from './login';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes-login',
  templateUrl: './clientes-login.component.html',
  styleUrls: ['./clientes-login.component.css']
})
export class ClientesLoginComponent implements OnInit {

  private login:Login=new Login;

  constructor(
    private loginservice:LoginService,
    private router:Router) { }

  ngOnInit() {
    console.log("Bienvenido")
    if(this.loginservice.isAuthenticated()){
      this.router.navigate(['/clientes'])
      swal.fire("Login","Ya has iniciado sesion","info")
    }
  }

  public iniciarsesion():void{
    this.loginservice.iniciosesion(this.login).subscribe(sesion=>{
      if(sesion.token){
        console.log(sesion.token)
        //let payload=JSON.parse(atob(sesion.token.split(".")[1]))
        //console.log(payload)
        /*swal.fire("Bienvenido",`${payload.usuario}`,"success")
        sessionStorage.setItem("usuario",payload.usuario)
        sessionStorage.setItem("token",sesion.token)
        this.login.role=payload.rol.map(rol=>rol.Role.nombre)
        this.login.role=sesion.token
        console.log(this.login
          )
        sessionStorage.setItem("authentity",payload.rol.map(rol=>rol.Role.nombre))
        console.log(this.login.role);
        this.router.navigate(['/clientes'])
        console.log(this.login)*/
        swal.fire("Bienvenido",`Has iniciado sesion correctamente`,"success")
        this.loginservice.guardaUsuario(sesion.token)
        this.loginservice.guardatoken(sesion.token)
        this.router.navigate(['/clientes'])

      }
      else{
        swal.fire("Usuario o clave incorrectos"," ","error")
        console.log(this.login)
      }


    })
  }

}
