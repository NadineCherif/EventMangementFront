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
  logout() {
    return this._openHttpClient.post("http://localhost:8088/EventManagement/api/v1/auth/logout", {}).subscribe(
      () => {
        // Logout successful, perform client-side logout actions
        this.clearUserData();
        
        // Redirect to the login page or any other desired route
        // You can use Angular Router for navigation
      },
      (error) => {
        console.error('Logout failed:', error);
        // Handle logout error, if needed
      }
    );
  }

  private clearUserData() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    // Clear any other user-related data if necessary
    // ...
  }
  getUsers(){
    return this._openHttpClient.get("http://localhost:8088/EventManagement/User/getAllUsers");
  }

 
}
