import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/features/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private _authService: AuthService, private router$: Router) {
  }
  logout(){
    this._authService.logout();
    this.router$.navigate(['/login']);
  }

}
