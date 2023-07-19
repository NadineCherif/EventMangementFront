import { Component } from '@angular/core';
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss']
})
export class LoginComponent {
  constructor(private _authService: AuthService, private router$: Router) {
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
      this.router$.navigate(['home']); // PATH NAME
    }
  }
  login(){
    const data= {
      email: "bejaouiOussama@gmail.com",
      password: "IIIII"
    }
    this._authService.login(data).subscribe(
      (res:any)=>{
        localStorage.setItem('token',res.token);
        localStorage.setItem('role',res.token);
        this.routeByRole(res.role);
      },
      err=>{

      }
    )
  }
}
