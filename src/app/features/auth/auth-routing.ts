import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';

const routes: Routes = [
  {
    path: "auth",
    children:[
      {
        //  auth/login
        path: "login",
        component: LoginComponent,
      },
      {
        //  auth/register
        path: "register",
        component: RegisterComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRouting { }
