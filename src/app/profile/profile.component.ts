import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../models/personas';
import { PersonasService } from '../servicios/personas.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  personas:Persona[]=[]
  profile:string;
  constructor(private activatedRoute: ActivatedRoute, public personasService:PersonasService) {
    this.profile="";
   }

  ngOnInit(): void {
    this.getPersonas();
    this.activatedRoute.params.subscribe(params =>{
      this.profile = (params['integrante']);
      });
  }
  getPersonas():void{
    this.personasService.getPersonas().subscribe(response =>{
      const{personas}= response;
      this.personas = personas;
    });
  }
}
