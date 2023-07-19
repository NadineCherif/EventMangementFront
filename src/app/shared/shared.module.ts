import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/Home/home-page/home-page.component';
import { AboutComponent } from './components/AboutUs/about/about.component';
import { SponsorsComponent } from './components/Sponsors/sponsors/sponsors.component';
import { ContactComponent } from './components/ContactUs/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { PopComponent } from './components/pop/pop/pop.component';
import { ExpensesDetailsComponent } from '../features/expenses-details/containers/expenses-details/expenses-details.component';
import { RouterModule } from '@angular/router';
import { FinancialReportsComponent } from '../features/financial-reports/containers/financial-reports/financial-reports.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutComponent,
    SponsorsComponent,
    ContactComponent,
    PopComponent,
    ExpensesDetailsComponent,
    FinancialReportsComponent
    
    
 ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class SharedModule { }
