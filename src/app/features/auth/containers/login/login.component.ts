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
  errorMessage: string | null = null;
  login(){
    var data = this.loginData;
    
    this._authService.login(data).subscribe(
      (res:any)=>{
        console.log("heey login",res);
        console.log("heey login");
        localStorage.setItem('token',res.token);
        localStorage.setItem('role',res.role);
        this.routeByRole(res.role);    
       // this.router$.navigate(['/list-events']);  
        
      },
      err=>{
        console.log("unauthorized");
        this.errorMessage = "Unauthorized. Invalid username or password.";

      }
    )
  }
  logout(){
    this._authService.logout();
    this.router$.navigate(['/login']);
  }

  routeByRole(role: string){
    
    console.log('rooole',role);
    // ADMIN ORGANIZER USER
    if (role === "Admin"){
      console.log((role === "Admin"));
      console.log('admin entered succeffully');
      this.router$.navigate(['/admin-dashboard']); // PATH NAME
    }
    else if(role === "ORG"){
      this.router$.navigate(['org-dash']); // PATH NAME
    }
    else{
      this.router$.navigate(['Events']); // PATH NAME
    }
  }
 
}
