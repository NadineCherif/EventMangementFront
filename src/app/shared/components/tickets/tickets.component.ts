import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {

  constructor(private http: HttpClient) { }
  
  getAllTickets(){
    return this.http.get('http://localhost:8089/Ticket/api/Tickets/retrieveAllTickets');
  }

  getTicketById(id: number) {
    return this.http.get('/http://localhost:8089/Ticket/api/Tickets/get/{id}');
  }

  createTicket(ticket: any) {
    return this.http.post('/http://localhost:8089/Ticket/api/Tickets/addTicket', ticket);
  }

  updateTicket(ticketId: number, ticket: any) {
    return this.http.put('/http://localhost:8089/Ticket/api/Tickets/updateTicket', ticket);
  }

  deleteTicket(ticketId: number) {
    return this.http.delete('/http://localhost:8089/Ticket/api/Tickets/deleteTicket/{id}');
  }


}




