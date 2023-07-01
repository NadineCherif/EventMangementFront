import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _openHttpClient: HttpClient;
  constructor(private http: HttpClient, private handler$: HttpBackend) {
    this._openHttpClient = new HttpClient(handler$);
  }


  login(loginData: {email: string, password: string}){
    return this._openHttpClient.post("",loginData);
  }
}
