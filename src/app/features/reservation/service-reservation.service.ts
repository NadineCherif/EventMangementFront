import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpBackend } from '@angular/common/http';
import { Reservation } from 'src/app/shared/models/Reservation';
import { Evenement } from 'src/app/shared/models/Evenement';
@Injectable({
  providedIn: 'root'
})
export class ServiceReservationService {
 // private backendUrl = 'http://localhost:8088/EventManagement/Resservation';
  private apiUrl='http://localhost:8088/EventManagement/Resservation/makeReservation';
  private baseUrl='http://localhost:8088/EventManagement/Resservation'
  private _openHttpClient: HttpClient; 
  constructor(private http: HttpClient, private handler$: HttpBackend) { 
    this._openHttpClient = new HttpClient(handler$);
  }
  getReservations(){
    return this._openHttpClient.get('http://localhost:8088/EventManagement/Resservation/retrieve-all-Reservation');
  }
  makeReservation(id:number,reservation:Reservation):Observable<any>{
    /*return this.http.post<any>(`${this.backendUrl}/makeReservation`, { id, reservation });*/
    const url = `${this.apiUrl}/${id}`;
    return this.http.post<Reservation>(url, reservation);
  }
  getEventByReservationId(reservationId: number): Observable<Evenement> {
    const url = `${this.baseUrl}/GetEventByReservation/${reservationId}`;
    return this.http.get<Evenement>(url);
  }
  }


