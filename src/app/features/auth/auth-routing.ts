import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { EventPageComponent } from '../event/containers/event-page/event-page.component';


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
  } ,
  {
    path: "Events",
    component: EventPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
  exports: [RouterModule]
})
export class AuthRouting { }
