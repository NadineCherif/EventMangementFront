import { HttpClient, HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../admin.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit  {
  private _openHttpClient: HttpClient;
  constructor(private http: HttpClient, private handler$: HttpBackend,private _authService: AuthService, private router$: Router) {
    this._openHttpClient = new HttpClient(handler$);
  }
  listUsers : any ; 
  ngOnInit(): void {
    this._authService.getUsers().subscribe(d => {this.listUsers = d;
      console.log(this.listUsers)});
  }
  
  

}
