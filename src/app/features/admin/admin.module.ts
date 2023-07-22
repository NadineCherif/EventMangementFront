
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRouting } from './admin-routing';
import { AdminDashboardComponent } from './containers/admin-dashboard/admin-dashboard.component';




@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
   
    AdminRouting,
    CommonModule,   
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { 
  //cmnt
}
