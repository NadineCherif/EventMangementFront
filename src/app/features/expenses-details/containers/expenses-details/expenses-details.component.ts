import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-expenses-details',
  templateUrl: './expenses-details.component.html',
  styleUrls: ['./expenses-details.component.scss']
})
export class ExpensesDetailsComponent {
  constructor(private router: Router) { }


  Liste() {
    this.router.navigate(['exp/lister']);
  }
  add() {
    this.router.navigate(['exp/add']);
  }
}
