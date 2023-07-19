import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/components/Home/home-page/home-page.component';
import { AboutComponent } from './shared/components/AboutUs/about/about.component';
import { SponsorsComponent } from './shared/components/Sponsors/sponsors/sponsors.component';
import { ContactComponent } from './shared/components/ContactUs/contact/contact.component';
import { ExpensesDetailsComponent } from './features/expenses-details/containers/expenses-details/expenses-details.component';
import { PopComponent } from './shared/components/pop/pop/pop.component';
import { ListerComponent } from './features/expenses-details/crud/lister/lister.component';
import { AddComponent } from './features/expenses-details/crud/add/add.component';
import { FinancialReportsComponent } from './features/financial-reports/containers/financial-reports/financial-reports.component';
import { AddreportComponent } from './features/financial-reports/addreport/addreport.component';

const routes: Routes = [
  
  {
  path: "Home",
  component: HomePageComponent,
},
{
  path: "About",
  component: AboutComponent,
},
{ path: "Sponsors",
component: SponsorsComponent,
},
{ path: "Contact",
component: ContactComponent
},

{ path: "exp",
component: ExpensesDetailsComponent
},
{ path: "pp",
component: PopComponent
},
{ path: "rapp",
component: FinancialReportsComponent
},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
