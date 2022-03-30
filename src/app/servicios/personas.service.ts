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
    return this.http.post<any>(this.baseUrl,data, {headers}).subscribe(
      (data:any)=>{
        console.log(data)
      }
    )
  }
  eliminarCookies(){
    this.cookieService.delete("User")
    this.cookieService.delete("Pass")
  }
  crearCookies(email:string, password:string){
    this.cookieService.set('User', email);
    this.cookieService.set('Pass', password);
  }
}
