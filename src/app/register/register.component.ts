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
      avatar: new FormControl({value: '', disabled: true}),
      nombre: new FormControl('',[Validators.required, Validators.pattern ("^[A-Za-zá-úÁ-Úä-üÄ-Ü ]+$")]),
      nick: new FormControl('',[Validators.required]),
      main: new FormControl('',[Validators.required]),
      edad: new FormControl('',[Validators.required, Validators.pattern("^[0-9]{1,2}")]),
      video: new FormControl('',[Validators.required]),
      rango: new FormControl('',[Validators.required]),
      division: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required/**, Validators.pattern("^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$")*/]),
      confirmpassword: new FormControl('', [Validators.required /**, Validators.pattern("^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$")*/]),
    })
  }
  ngOnInit(): void {
    
  }
  postPersona(){
    this.personasService.postPersona(this.formulario.value)
  }
  submit(){
    if(this.formulario.valid==false){
      window.alert("Datos incorrectos");
    }
    else{
      if(this.formulario.value.password==this.formulario.value.confirmpassword){
        this.postPersona();
        this.personasService.crearCookies(this.formulario.value.email);
        window.location.replace('/');
      }
      else{
        window.alert("Las contraseñas no coinciden");
      }
    }
    
  }
}
