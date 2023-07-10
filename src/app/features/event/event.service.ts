import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventService {



  private _openHttpClient: HttpClient; // FOR REQUESTS WITHOUT TOKEN
  constructor(private http: HttpClient, private handler$: HttpBackend) {
    this._openHttpClient = new HttpClient(handler$);
  }


  createEvent(data: any){
    return this.http.post("",data);
  }

  getEvents(){
    this._openHttpClient.get('htpp:localhost:8088/EventManagement/Event/retrieve-all-Events');
  }
}
