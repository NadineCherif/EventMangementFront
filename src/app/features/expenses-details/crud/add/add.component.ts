import { ExpensesDetails } from 'src/app/Model/ExpensesDetails';
import { Component } from '@angular/core';
import { ExpensesDetailsService } from '../../expenses-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  expensesDetail: ExpensesDetails = new ExpensesDetails();
  

  constructor(private router:Router, private service:ExpensesDetailsService){

  }
  ngOnInit(){}

  save() {
    this.service.createExpensesDetail(this.expensesDetail)
      .subscribe(data => {
        alert("hello!!");
        this.router.navigate(["lister"]);
      });
  }
}  

