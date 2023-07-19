import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/Model/api.response';
import { FinancialReport } from 'src/app/Model/FinancialReport';

@Injectable({
  providedIn: 'root'
})
export class FinancialReportsService {


  constructor(private http: HttpClient) { }
  private baseUrl ='http://localhost:8080/EventManagement/financialReports';
  
  getFinancialReports(): Observable<FinancialReport[]> {
    return this.http.get<FinancialReport[]>(this.baseUrl);
  }
  
  getReportById(reportId: number): Observable<FinancialReport> {
    const url = `${this.baseUrl}/${reportId}`;
    return this.http.get<FinancialReport>(url);
  }
 
  updateReport(report: FinancialReport): Observable<any> {
    const url = `${this.baseUrl}/${report.ReportId}`;
    return this.http.put(url, report);
  }
  
  createFinancialReport(financialReport: FinancialReport): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, financialReport);
  }

  updateEmployee(ReportId: number, financialReport: FinancialReport): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + financialReport.ReportId, financialReport);
  }

  deleteFinancialReport 
    (ReportId: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + 1);
  }
  getEmployeeById(ReportId: number): Observable<any> {
    return this.http.get(this.baseUrl + ReportId);
  }

 
}
