import { Component, OnInit } from '@angular/core';
import { FinancialReport } from 'src/app/Model/FinancialReport';
import { FinancialReportsService } from '../financial-reports.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addreport',
  templateUrl: './addreport.component.html',
  styleUrls: ['./addreport.component.scss']
})
export class AddreportComponent implements OnInit{

  financialReport: FinancialReport = new FinancialReport();
  submitted = false;

  constructor(private financialReportsService: FinancialReportsService, 
    private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }


  
  onSubmit() {
    this.financialReportsService.createFinancialReport(this.financialReport).subscribe(
      response => {
        console.log('Rapport ajouté avec succès', response);
        this.toastr.success('Votre rapport est ajouté avec succès', 'Succès', {
        // Réinitialisez les champs du formulaire ou effectuez toute autre action nécessaire
      });
      this.router.navigate(['/rapp/listrapp']);

    },
      error => {
        console.error('Une erreur s\'est produite lors de l\'ajout du rapport', error);
        this.toastr.error('Une erreur s\'est produite lors de l\'ajout du rapport', 'Erreur');
        // Affichez un message d'erreur à l'utilisateur ou effectuez toute autre action nécessaire
      }
    );
  }
  
  }
  

 

