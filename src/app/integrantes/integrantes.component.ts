import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/personas';
import { PersonasService } from '../servicios/personas.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent implements OnInit {
  safeSrc: SafeResourceUrl;
  personas:Persona[]=[]
  constructor(public personasService:PersonasService, private sanitizer: DomSanitizer) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/c9F5kMUfFKk");
  }
  ngOnInit(): void {
      this.getPersonas();
      
  }
  getPersonas():void{
    this.personasService.getPersonas().subscribe(response =>{
      const{personas}= response;
      const sanitizador =this.sanitizer;
      personas.forEach(function(value:any, key:any) {
        value.ruta_video=sanitizador.bypassSecurityTrustResourceUrl(value.ruta_video);
      });
      this.personas = personas;
    });
  }
}
