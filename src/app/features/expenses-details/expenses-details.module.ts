import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ExpensesDetailsComponent } from './containers/expenses-details/expenses-details.component';
import { ListerComponent } from './crud/lister/lister.component';
import { AddComponent } from './crud/add/add.component';
import { EditComponent } from './crud/edit/edit.component';
import { DeleteComponent } from './crud/delete/delete.component';
import { HttpClientModule } from '@angular/common/http';
import { ExpensesDetailsRouting } from './expenses-details-routing';
import { FormsModule } from '@angular/forms';
import { ExpensesDetailsService } from './expenses-details.service';



@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    DeleteComponent,
    ListerComponent,
  
    
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule   ,
    ExpensesDetailsRouting,
  ],
  providers:[ExpensesDetailsService]
})

export class ExpensesDetailsModule { }
