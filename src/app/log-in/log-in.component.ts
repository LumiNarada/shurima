import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/personas';
import { PersonasService } from '../servicios/personas.service';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  datos:any

  email: string;
  password: string;


  personas:Persona[]=[]


  constructor(public personasService:PersonasService, private cookieService: CookieService, public router: Router) { 
    this.email="";
    this.password="";
    //this.cookieService.delete("User");
  }
  ngOnInit(): void {
      this.getPersonas();
      this.datos=[];
  }

  getPersonas():void{
    this.personasService.getPersonas().subscribe(response =>{
      const{personas}= response;
      this.personas = personas;
    });
  }

  submit(formValues:any,){
    this.datos=formValues;
    this.personas.forEach((key : any, val: any) => {
      if (this.datos.email==key["email"]){
        if (this.datos.password==key["pass"]){
          this.cookieService.set('User', this.email);
          this.cookieService.set('Pass', this.password);
        }
      }
    })
    if (this.cookieService.get('User')){
      this.router.navigateByUrl('/');
    }
    else{
      window.alert("Usuario o contraseña incorrectos")
    }
  }
}
