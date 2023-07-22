import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Your logic to check if the user is logged in or not
    // For example, you can check if a user is stored in local storage or a service
    if (localStorage.getItem('token')){}
    const isLoggedIn = localStorage.getItem('token');
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}