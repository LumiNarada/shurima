import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/personas';
import { PersonasService } from '../servicios/personas.service';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent implements OnInit {
  personas:Persona[]=[]
  constructor(public personasService:PersonasService) {
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
}
