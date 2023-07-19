import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialReportsComponent } from './containers/financial-reports/financial-reports.component';
import { AddreportComponent } from './addreport/addreport.component';
import { UpdatereportComponent } from './updatereport/updatereport.component';
import { ListerComponent } from '../expenses-details/crud/lister/lister.component';
import { ListreportComponent } from './listreport/listreport.component';
import { EditreportComponent } from './editreport/editreport.component';
import { DeletereportComponent } from './deletereport/deletereport.component';
import { ToastrService } from 'ngx-toastr';

const routes: Routes = [
  {
    path: "rapp",
    children:[
      {
        //  auth/add
        path: "addrapp",
        component: AddreportComponent,
      },
      {
        //  auth/lister
        path: "listrapp",
        component: ListreportComponent,
        
        
      },
  { path: 'delete-report/:id', component: DeletereportComponent },
    ]
    
  },
  { path: 'edit/:ReportId', component: EditreportComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FinancialReportsRouting { 

}