import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  baseUrl = environment.baseUrl;

  constructor( public http:HttpClient) { }

  getPersonas(){
    return this.http.get<any>(this.baseUrl);
  }

}
