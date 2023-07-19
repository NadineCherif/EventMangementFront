import { Component } from '@angular/core';
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
interface loginData {
  email:string;
  password:string;
} 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss']
})
export class LoginComponent {
  constructor(private _authService: AuthService, private router$: Router) {
  }
  loginData: loginData = {
    
    email:'',
    password:'',
    
   
  };
  login(){
    var data = this.loginData;
    
    this._authService.login(data).subscribe(
      (res:any)=>{
        console.log("heey login",res);
        console.log("heey login");
        localStorage.setItem('token',res.token);
        localStorage.setItem('role',res.token);
        this.routeByRole(res.role);      
        
      },
      err=>{
        console.log("unauthorized");

      }
    )
  }

  routeByRole(role: string){
    // ADMIN ORGANIZER USER
    if (role === "ADMIN"){
      this.router$.navigate(['admin-dash']); // PATH NAME
    }
    else if(role === "ORG"){
      this.router$.navigate(['org-dash']); // PATH NAME
    }
    else{
      this.router$.navigate(['Events']); // PATH NAME
    }
  }
 
}
