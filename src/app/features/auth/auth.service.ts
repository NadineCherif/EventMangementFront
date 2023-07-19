import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient} from "@angular/common/http";
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _openHttpClient: HttpClient;
  constructor(private http: HttpClient, private handler$: HttpBackend) {
    this._openHttpClient = new HttpClient(handler$);
  }

 
  login(loginData: {email: string, password: string}){
    return this._openHttpClient.post("http://localhost:8088/EventManagement/api/v1/auth/authenticate",loginData);
  }
  register(registerData:{ firstname: string,  lastname:string,  phoneNumber: number,  email:string,  password:string,  role:string,})
  {
    return this._openHttpClient.post("http://localhost:8088/EventManagement/api/v1/auth/register",registerData);
  }

 
}
