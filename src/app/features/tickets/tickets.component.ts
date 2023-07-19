import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from 'src/app/shared/models/Ticket';
import { TicketServiceService } from './ticket-service.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {

  constructor(private ticketService : TicketServiceService) { 
  }
  
listTicket: any; 
ngOnInit(){
console.log("YEES");
this.ticketService.getAllTickets().subscribe(t => {this.listTicket = t;
   console.log(this.listTicket)});
}

 /*  getAllTickets(){
    return this.http.get('http://localhost:8088/EventManagement/api/Tickets/retrieveAllTickets');
  }

  getTicketById(id: number) {
    return this.http.get(`http://localhost:8088/EventManagement/api/Tickets/get/${id}`);
  }

  createTicket(ticket: any) {
    return this.http.post('http://localhost:8088/EventManagement/api/Tickets/addTicket', ticket);
  }

  updateTicket(ticketId: number, ticket: any) {
    return this.http.put(`http://localhost:8088/EventManagement/api/Tickets/updateTicket/${ticketId}`, ticket);
  }

  deleteTicket(ticketId: number) {
    return this.http.delete(`http://localhost:8088/EventManagement/api/Tickets/deleteTicket/${ticketId}`);
  } */
}







