import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Evenement } from 'src/app/shared/models/Evenement';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private backendUrl = 'http://localhost:8088/EventManagement/Event'; // Remplacez l'URL par celle de votre backend


  private _openHttpClient: HttpClient; // FOR REQUESTS WITHOUT TOKEN
  constructor(private http: HttpClient, private handler$: HttpBackend) {
    this._openHttpClient = new HttpClient(handler$);
  }

  addEvent(event: Evenement): Observable<any> {
    return this.http.post<any>(`${this.backendUrl}/add-Event`, event);
  }
  
  
  createEvent(data: any){
    return this.http.post("",data);
  }

  getEvents(){
    return this._openHttpClient.get('http://localhost:8088/EventManagement/Event/retrieve-all-Events');
  }
  deleteEvent(){
    return this._openHttpClient.delete('http://localhost:8088/EventManagement/Event/delete');
  }

  /*getEventNameById(eventId: number): Observable<any> {
    const url = `${this.backendUrl}/getName/${eventId}`;
    return this.http.get<any>(url);
  }*/
}
