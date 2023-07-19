import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FinancialReport } from 'src/app/Model/FinancialReport';
import { FinancialReportsService } from '../financial-reports.service';

@Component({
  selector: 'app-editreport',
  templateUrl: './editreport.component.html',
  styleUrls: ['./editreport.component.scss']
})
export class EditreportComponent implements OnInit{
  report: FinancialReport = new FinancialReport();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reportService: FinancialReportsService
  ) {}

  ngOnInit(): void {
    const reportId = this.route.snapshot.params['reportId'];
    this.getFinancialReports(reportId);
  }

  getFinancialReports(reportId: number): void {
    this.reportService.getReportById(reportId)
      .subscribe(report => {
        this.report = report;
      });
}
updateReport(): void {
  this.reportService.updateReport(this.report)
    .subscribe(() => {
      this.router.navigate(['/list-reports']);
    });
}
}