import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { EventPageComponent } from '../event/containers/event-page/event-page.component';
import { AuthGuard } from './auth.guard';
import { ListEventsComponent } from '../event/containers/list-events/list-events.component';
import { AdminDashboardComponent } from '../admin/containers/admin-dashboard/admin-dashboard.component';


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
        
        
      },  {
    
        path: "admin-dashboard",
        component: AdminDashboardComponent,
        
        
      }
    ]
  } ,
  {
    path: "list-events",
    component: ListEventsComponent,
    
  },
  {
    
    path: "admin-dashboard",
    component: AdminDashboardComponent,
    
    
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
  exports: [RouterModule]
})
export class AuthRouting { }
