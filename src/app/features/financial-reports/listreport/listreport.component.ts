import { FinancialReportsService } from './../financial-reports.service';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiResponse } from 'src/app/Model/api.response';
import { Router } from '@angular/router';
import { FinancialReport } from 'src/app/Model/FinancialReport';

@Component({
  selector: 'app-listreport',
  templateUrl: './listreport.component.html',
  styleUrls: ['./listreport.component.scss']
})
export class ListreportComponent implements OnInit{
  reports: FinancialReport[] = [];
  toastr: any;

  constructor(private reportService: FinancialReportsService, private router:Router) {}

  ngOnInit(): void {
    this.getFinancialReports();
  }

  getFinancialReports(): void {
    this.reportService.getFinancialReports()
      .subscribe(reports => {
        this.reports = reports;
      });
  }

  updateReport(report: FinancialReport): void {
    this.router.navigate(['/edit', report.ReportId]);
  }


  
  deleteFinancialReport(reportId: number) {
    this.reportService.deleteFinancialReport(reportId).pipe(
      catchError(error => {
        console.error('Une erreur s\'est produite lors de la suppression du rapport', error);
        // Faites les actions nécessaires en cas d'erreur, par exemple afficher un message d'erreur
        return throwError(error); // Renvoyer l'erreur pour que le subscribe suivant puisse également la gérer
      })
    ).subscribe(
      response => {
        console.log('Rapport supprimé avec succès', response);
        // Effectuez les actions nécessaires après la suppression réussie du rapport
      }
    );
  
  
  
      this.router.navigate(['/rapp/listrapp']);}
  }
 

