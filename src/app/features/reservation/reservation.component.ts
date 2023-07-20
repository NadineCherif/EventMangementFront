import { Component, OnInit } from '@angular/core';
import { ServiceReservationService } from './service-reservation.service';
import { HttpClient } from '@angular/common/http';
import { Reservation } from 'src/app/shared/models/Reservation';
import { Router } from '@angular/router';
import { EventService } from '../event/event.service';
import { Evenement } from 'src/app/shared/models/Evenement';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
constructor(private reservationservice: ServiceReservationService,private eventService:EventService, private router: Router){}
reservationId!: number;
  eventName!: string;

listReservation: any; 
ngOnInit(){
console.log("reservation");
this.reservationservice.getReservations().subscribe(r => {this.listReservation = r;
   console.log(this.listReservation)});
 
}
fetchEventName(reservationId: number) {
  this.reservationservice.getEventByReservationId(reservationId)
    .subscribe(
      (data:Evenement) => {
        this.eventName = data.nameEvent;
      },
      (error) => {
        console.log('Une erreur s\'est produite lors de la récupération du nom de l\'événement : ', error);
      }
    );
}
}