import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/personas';
import { PersonasService } from '../servicios/personas.service';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  formulario: FormGroup;
  validE:boolean;
  validP:boolean;
  constructor(public personasService:PersonasService, private cookieService: CookieService, public router: Router) { 
    this.email="";
    this.password="";
    this.validE=false;
    this.validP=false;
    this.formulario=new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$")]),
      password: new FormControl('', [Validators.required]),
    })
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
  submit(){
    if(this.formulario.valid==false){
      if(this.formulario.controls['email'].valid==false){
        this.validE=true;
      }
      if(this.formulario.controls['password'].valid==false){
        this.validP=true;
      }
    }
    else{
      this.personas.forEach((key : any, val: any) => {
        if (this.formulario.value.email==key["email"]){
          if (this.formulario.value.password==key["pass"]){
            this.personasService.crearCookies(this.formulario.value.email);
          }
        }
      })
      if (this.cookieService.get('User')){
        this.router.navigateByUrl('/');
        window.location.replace('./');
      }
      else{
        window.alert("Usuario o contraseña incorrectos")
      }
    }
  }
}
