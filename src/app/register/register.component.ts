import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/personas';
import { PersonasService } from '../servicios/personas.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;

  personas:Persona[]=[]

  password: string;
  confirm: string;
  constructor(public personasService:PersonasService) { 
    this.email="";
    this.password="";
    this.confirm="";
  }
  ngOnInit(): void {
      this.getPersonas();
  }

  getPersonas():void{
    this.personasService.getPersonas().subscribe(response =>{
      const{personas}= response;
      this.personas = personas;
    });
  }

  submit(){
    window.alert( this.email + this.password + this.confirm)
  }
}
