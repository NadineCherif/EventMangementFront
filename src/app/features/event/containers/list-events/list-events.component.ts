import { Component } from '@angular/core';
import { EventService } from '../../event.service';
import { Evenement } from 'src/app/shared/models/Evenement';
import { Reservation } from 'src/app/shared/models/Reservation';
import { ServiceReservationService } from 'src/app/features/reservation/service-reservation.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent {
constructor(private eventService : EventService,private _openService: ServiceReservationService){}
listEvent : any ; 
reservation : Reservation = new Reservation();
showMessage : boolean = false;
id!:number;
listevent:Evenement[]=[];
message : string = "";
ngOnInit(){
console.log("salem");
this.eventService.getEvents().subscribe(d => {this.listEvent = d;
console.log(this.listEvent)});


this.eventService.deleteEvent().subscribe(e => {this.listEvent =e;
})



}
/*makeReservation(id:number) {
  const reservation1: Reservation = { Reservtid: null };
  this._openService.makeReservation(id,reservation1)
    .subscribe(
      () => {
        this.showMessage = true;
        this.message = "Reservation ajouté avec succès";
        this.reservation = new Reservation();

      },
      (error: any) => {
        this.showMessage = true;
        this.message = "Erreur lors de l'ajout de reservation";
        console.error("Erreur lors de l'ajout de reservation ", error);
      }
    );*/
    
  onReserve(event: Evenement) {
    console.log("nadine") ;
       // Collecte des informations supplémentaires pour la réservation (tel que montré dans les réponses précédentes)

    // Soumission de la réservation en utilisant le service de réservation
    this._openService.makeReservation(event.id,this.reservation).subscribe(
      (createdReservation) => {
        // Gérer la réservation réussie ici (par exemple, afficher une confirmation, rediriger vers une page de confirmation, etc.)
        console.log('Réservation réussie !', createdReservation);

      },
      (error) => {
        // Gérer les erreurs de réservation ici (par exemple, afficher un message d'erreur, etc.)
        console.error('Erreur lors de la réservation :', error);
      }
      
    );
}
}
