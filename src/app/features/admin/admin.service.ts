import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient} from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private _openHttpClient: HttpClient;
    constructor(private http: HttpClient, private handler$: HttpBackend) {
      this._openHttpClient = new HttpClient(handler$);
    }
    getUsers(){
        return this._openHttpClient.get("http://localhost:8088/EventManagement/User/getAllUsers");
      }
}  