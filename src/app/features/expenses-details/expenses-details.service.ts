import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpensesDetails } from 'src/app/Model/ExpensesDetails';

@Injectable({
  providedIn: 'root'
})
export class ExpensesDetailsService {
  constructor(private http:HttpClient) { }

  Url='http://localhost:8088/EventManagement/ExpensesDetails';

  getAllExpensesDetails(): Observable<ExpensesDetails[]> {
    return this.http.get<ExpensesDetails[]>(this.Url);
  }
  createExpensesDetail(ExpensesDetails:ExpensesDetails)
  { return this.http.post<ExpensesDetails>(this.Url,ExpensesDetails); } 
  deleteExpensesDetail(expensesDetails:ExpensesDetails)
  {
    return this.http.delete<ExpensesDetails>(this.Url+"/"+expensesDetails.ExpensesDetailId);
  }
  
  }
