import { Component, EventEmitter, Inject, Output } from '@angular/core';

import { FactureService } from 'src/app/features/facture/facture.service';
import { Facture } from 'src/app/shared/models/Facture';
import { Statut } from 'src/app/shared/models/Evenement';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

const ELEMENT_DATA: Facture[] = [
  {
    idfacture: 1,
    refFacture: 'refFacture1',
    dateFacture: new Date(),
    estPayee: true,
    datePaiement: new Date(),
    montantPaye: 100,
    event: 1
  },
  {
    idfacture: 2,
    refFacture: 'refFacture2',
    dateFacture: new Date(),
    estPayee: true,
    datePaiement: new Date(),
    montantPaye: 200,
    event: 2
  },
  {
    idfacture: 3,
    refFacture: 'refFacture3',
    dateFacture: new Date(),
    estPayee: true,
    datePaiement: new Date(),
    montantPaye: 300,
    event: 3
  },
];


@Component({
  selector: 'app-facture-page',
  templateUrl: './facture-page.component.html',
  styleUrls: ['./facture-page.component.scss'],
})
export class FacturePageComponent {

  displayedColumns: string[] = ['idfacture', 'refFacture', 'dateFacture', 'estPayee', 'datePaiement', 'montantPaye', 'event'];
  dataSource = ELEMENT_DATA;
  dataToSave:Facture = new Facture();

  constructor(private factureService: FactureService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.factureService.getFactures().subscribe(
      (response: any) => {
        console.log(response);
        this.dataSource = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
    console.log(this.dataSource);
  }

  ClickaddButton() {
    console.log('ClickaddButton');
    const dialogRef = this.dialog.open(FactureDialog, {
      data: this.dataToSave,
      height: '500px',
      width: '800px',
    });

    dialogRef.componentInstance.factureSaved.subscribe((formData: Facture) => {
      // Call your save function here and handle the response
      this.saveFacture(formData);
    });

  }


  saveFacture(formData: Facture) {
    console.log('saveFacture', formData);
           const dialogRef = this.dialog.getDialogById('facture-dialog');
          if(dialogRef){
            dialogRef.close();
          }
    // this.factureService.addFacture(formData).subscribe(
    //   (response) => {
    //     // If the response is 200, close the dialog
    //     if (response.status === 200) {
    //       const dialogRef = this.dialog.getDialogById('facture-dialog');
    //       if(dialogRef){
    //         dialogRef.close();
    //       }
    //     }
    //     // If the response is not 200, keep the dialog open
    //     else {
    //       console.error('Failed to save facture:', response);
    //     }
    //   },
    //   (error) => {
    //     console.error('Failed to save facture:', error);
    //   }
    // );
  }
  deleteFacture(idfacture: number) {
    this.factureService.deleteFacture(idfacture).subscribe(
      (response: any) => {
        console.log(response);
        this.ngOnInit();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  updateFacture(facture: Facture) {
    this.factureService.updateFacture(facture).subscribe(
      (response: any) => {
        console.log(response);
        this.ngOnInit();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


}

@Component({
  selector: 'facture-dialog',
  templateUrl: 'facture-dialog.html',
  styleUrls: ['./facture-page.component.scss'],
})
export class FactureDialog {

  @Output() factureSaved = new EventEmitter<Facture>();
  constructor(
    public dialogRef: MatDialogRef<FactureDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Facture) { }

  onSaveClick(): void {
    // Get the form data here
    const formData: Facture = {
      idfacture: 0,
      refFacture: 'refFacture1',
      dateFacture: new Date(),
      estPayee: true,
      datePaiement: new Date(),
      montantPaye: 100,
      event: 1
    };

    // Emit an event with the form data
    this.factureSaved.emit(formData);
  }

}