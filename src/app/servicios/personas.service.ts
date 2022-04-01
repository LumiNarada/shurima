import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from "ngx-cookie-service";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  baseUrl = environment.baseUrl;

  constructor( private http:HttpClient, private cookieService: CookieService) { }

  getPersonas(){
    return this.http.get<any>(this.baseUrl);
  }
  postPersona(data:any){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.post<any>(this.baseUrl,data, {headers}).subscribe(
      (data:any)=>{
        console.log("Okay");
      }
    )
  }
  eliminarCookies(){
    this.cookieService.delete("User")
  }
  crearCookies(email:string){
    this.cookieService.set('User', email);
  }
}
