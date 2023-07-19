import { Component } from '@angular/core';
import { EventService } from '../../event.service';
import { Evenement } from 'src/app/shared/models/Evenement';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent {
constructor(private eventService : EventService){}
listEvent : any ; 
ngOnInit(){
console.log("salem");
this.eventService.getEvents().subscribe(d => {this.listEvent = d;
console.log(this.listEvent)});


this.eventService.deleteEvent().subscribe(e => {this.listEvent =e;
})



}
}
