import { LoginService } from './clientes-login/login.service';
import { Login } from './clientes-login/login';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Facturacion Electronica';
  titulo:string
  login:Login
  estado:boolean=true
  constructor(private router:Router , private loginservice:LoginService){}
  ngOnInit() {

  }

  logout(){
    this.loginservice.logout()
    swal.fire("Logout","Has cerrado sesion","info")
    this.router.navigate(["/login"])

  }

}

