import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialReportsComponent } from './containers/financial-reports/financial-reports.component';
import { FinancialReportsRouting } from './financial-reports-routing';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddreportComponent } from './addreport/addreport.component';
import { UpdatereportComponent } from './updatereport/updatereport.component';
import { DeletereportComponent } from './deletereport/deletereport.component';
import { EditreportComponent } from './editreport/editreport.component';
import { ListreportComponent } from './listreport/listreport.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AddreportComponent,
    UpdatereportComponent,
    DeletereportComponent,
    EditreportComponent,
    ListreportComponent,
    
  ],
  imports: [
    CommonModule,
    FinancialReportsRouting,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ToastrModule.forRoot({timeOut: 500,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,}),
    BrowserAnimationsModule,

    
  
  ]
})
export class FinancialReportsModule { }
