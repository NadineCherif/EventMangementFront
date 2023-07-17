import { HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/shared/models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {
  private backendUrl = 'http://localhost:8088/EventManagement/Ticket';
  private _openHttpClient: HttpClient; 

  constructor(private http: HttpClient, private handler$: HttpBackend) {
    this._openHttpClient = new HttpClient(handler$);
  }

 
  getAllTickets(){
    return this._openHttpClient.get('http://localhost:8088/EventManagement/api/Tickets/retrieveAllTickets');
  }

  
}
