import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './containers/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    
    path: "admin-dashboard",
    component: AdminDashboardComponent,
    
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRouting { }
