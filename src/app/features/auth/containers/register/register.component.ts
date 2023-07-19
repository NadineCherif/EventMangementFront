import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
interface User {
  firstname: string;
  lastname:string;
  phoneNumber:number;
  email:string;
  password:string;
  role:string;
 
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit  {
  private _openHttpClient: HttpClient;
  constructor(private http: HttpClient, private handler$: HttpBackend,private _authService: AuthService, private router$: Router) {
    this._openHttpClient = new HttpClient(handler$);
  }
  user: User = {
    firstname: '',
    lastname:'',
    phoneNumber: 0,
    email:'',
    password:'',
    role:'',
   
  };
  ngOnInit(): void {
    console.log("holaa");
  }

  register(){
    //return this._openHttpClient.post("",registerData);
   var registerData=this.user;
   console.log(registerData)
   // return this._openHttpClient.post("",);
   this._authService.register(this.user ).subscribe(
    (res:any)=>{
      localStorage.setItem('token',res.token);
      localStorage.setItem('role',res.token);
      console.log(localStorage);
     // next:()=>{this._router.navigate(['products'])},
    //  this.routeByRole(res.role);
    this.router$.navigate(['login']);
    },
    err=>{

    }
  )
    
    //console.log("data:",firstname)
  }


}
