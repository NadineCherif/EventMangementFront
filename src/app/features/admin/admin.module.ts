import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './containers/admin-dashboard/admin-dashboard.component';
import {AdminRouting} from "./admin-routing";



@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRouting
  ]
})
export class AdminModule { 
  //cmnt
}
