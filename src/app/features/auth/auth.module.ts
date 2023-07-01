import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRouting } from './auth-routing';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRouting,
  ]
})
export class AuthModule { }
