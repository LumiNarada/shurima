import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/personas';
import { PersonasService } from '../servicios/personas.service';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formulario: FormGroup;
  respuesta:string ="";
  constructor(public personasService:PersonasService, private cookieService: CookieService, public router: Router) { 
    this.formulario=new FormGroup({
      avatar: new FormControl('',[Validators.required]),
      nombre: new FormControl('',[Validators.required]),
      nick: new FormControl('',[Validators.required]),
      main: new FormControl('',[Validators.required]),
      edad: new FormControl('',[Validators.required]),
      video: new FormControl('',[Validators.required]),
      rango: new FormControl('',[Validators.required]),
      division: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$")]),
      password: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern("^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$")]),
      confirmpassword: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern("^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$")]),
    })
  }
  ngOnInit(): void {
    
  }
  postPersona(){
    this.personasService.postPersona(this.formulario.value)
  }
  submit(){
    if(this.formulario.valid==false){
      window.alert("Datos incorrectos")
    }
    else{
      this.postPersona();
    }
  }
}
