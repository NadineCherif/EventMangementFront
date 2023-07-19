import { ExpensesDetails } from 'src/app/Model/ExpensesDetails';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpensesDetailsService } from '../../expenses-details.service';

@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.scss']
})
export class ListerComponent implements OnInit {
    expensesDetail!:ExpensesDetails[];
    constructor(private service:ExpensesDetailsService , private router:Router){

    }
  
  
  ngOnInit(){
    this.service.getAllExpensesDetails()
    .subscribe(data=>{
      this.expensesDetail=data;
    });
  }
  Delete(expensesDetails:ExpensesDetails){
    this.service.deleteExpensesDetail(expensesDetails)
    .subscribe(data=>{
      this.expensesDetail=this.expensesDetail.filter(p=>p!==expensesDetails);
      alert("supprimer");
  })
}
}
