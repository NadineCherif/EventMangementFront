import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListerComponent } from './crud/lister/lister.component';
import { AddComponent } from './crud/add/add.component';

const routes: Routes = [
   {
    path: "exp",
    children:[
      {
        //  auth/add
        path: "add",
        component: AddComponent,
      },
      {
        //  auth/lister
        path: "lister",
        component: ListerComponent,
        
        
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ExpensesDetailsRouting { }
