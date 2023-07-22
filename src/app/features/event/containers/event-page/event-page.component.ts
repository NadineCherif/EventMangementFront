import { Component, OnInit } from '@angular/core';
import {OpenService} from "../../../../shared/services/open.service";
import { Evenement } from 'src/app/shared/models/Evenement';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/features/event/event.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {
event : Evenement = new Evenement();
message : string = "";
showMessage : boolean = false;
events : Evenement[] = [] ;
    constructor(private _openService: EventService, private router: Router) {
    /*private emailService EmailService) {*/
   // this.getEvent();
    }
    ngOnInit(): void {
    
      
    }
    /*submitForm() {
      // Vérifier si le formulaire est valide
      if (!this.event.nameEvent) {
        // Gérer le cas où le formulaire n'est pas valide
        console.log("Veuillez saisir un titre d'événement valide.");
        return;
      }
    }*/
    addEvent() {
      this._openService.addEvent(this.event)
        .subscribe(
          () => {
            this.showMessage = true;
            this.message = "Événement ajouté avec succès";
            console.log('evenement ajouté avcec succès');
           // this.sendEmailToAdmin();
            this.getEvent();
          },
          (error: any) => {
            this.showMessage = true;
            this.message = "Erreur lors de l'ajout de l'événement";
            console.error("Erreur lors de l'ajout de l'événement :", error);
          }
        );
      this.event = new Evenement();
      //console.log(this.event)
    }
    
    /*sendEmailToAdmin(){
     this.emailService.sendEmailToAdmin(this.event)
     .then(()=> {
     console.log('E-mail enoviyé a l\'administrateur avec succès');
     })
     .catch((error : any) => {
     console.error('Erreur lors de l\'envoi de l\'e-mail à l\'administrateur', error);
     });
    }*/

    getEvent(){
      this._openService.getEvents();
    }
}
