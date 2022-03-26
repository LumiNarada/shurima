import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/personas';
import { PersonasService } from '../servicios/personas.service'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email: string;

  personas:Persona[]=[]

  /**password: string;**/
  constructor(public personasService:PersonasService) { 
    this.email="";
    /**this.password="";**/
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
    window.alert( this.email/** + this.password **/)
  }
}
