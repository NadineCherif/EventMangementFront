import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:8088/EventManagement/Event'; // Remplacez l'URL par celle de votre backend


  private _openHttpClient: HttpClient; // FOR REQUESTS WITHOUT TOKEN
  constructor(private http: HttpClient, private handler$: HttpBackend) {
    this._openHttpClient = new HttpClient(handler$);
  }
  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.baseUrl}`, event);
  }

  createEvent(data: any){
    return this.http.post("",data);
  }

  getEvents(){
    this._openHttpClient.get('htpp:localhost:8088/EventManagement/Event/retrieve-all-Events');
  }
}
