import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OpenService {
  private _openHttpClient: HttpClient;

  constructor(private handler$: HttpBackend) {
    this._openHttpClient = new HttpClient(handler$);
  }

  getEvent(id: string){
    return this._openHttpClient.get('');
  }
}
