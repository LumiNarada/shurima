import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { PersonasService } from '../servicios/personas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public personasService:PersonasService, private cookieService: CookieService) {

  }
    
  ngOnInit(): void {
    this.verificarSesion();
  }

  verificarSesion (){
    if (this.cookieService.get('User')){
      const open: any = document.querySelector("#open");
      open.classList.add("no-visible")
      const close: any = document.querySelector("#close");
      close.classList.remove("no-visible")
      const perfil: any = document.querySelector("#perfil");
      perfil.classList.remove("no-visible")
      const registrate: any = document.querySelector("#registrate");
      registrate.classList.add("no-visible")
    }
    else{
      const open: any = document.querySelector("#open");
      open.classList.remove("no-visible")
      const close: any = document.querySelector("#close");
      close.classList.add("no-visible")
      const perfil: any = document.querySelector("#perfil");
      perfil.classList.add("no-visible")
      const registrate: any = document.querySelector("#registrate");
      registrate.classList.remove("no-visible")
    }
  }
  
  cerrarSesion(){
    const open: any = document.querySelector("#open");
    open.classList.remove("no-visible")
    const close: any = document.querySelector("#close");
    close.classList.add("no-visible")
    const perfil: any = document.querySelector("#perfil");
    perfil.classList.add("no-visible")
    const registrate: any = document.querySelector("#registrate");
    registrate.classList.remove("no-visible")
    this.personasService.eliminarCookies();
  }

  perfil(){
    window.location.replace('/integrantes/'+this.cookieService.get('User'));
  }
}
