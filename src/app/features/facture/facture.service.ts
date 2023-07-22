import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Facture } from 'src/app/shared/models/Facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private backendUrl = 'http://localhost:8088/EventManagement/Facture'; // Remplacez l'URL par celle de votre backend

  constructor(private http: HttpClient, private handler$: HttpBackend) {
    this._openHttpClient = new HttpClient(handler$);
  }

  private _openHttpClient: HttpClient; // FOR REQUESTS WITHOUT TOKEN

  addFacture(facture: Facture): Observable<any> {
    return this.http.post<any>(`${this.backendUrl}/add-Facture`, facture);
  }

  createFacture(data: any) {
    return this.http.post("", data);
  }

  getFactures() {
    return this._openHttpClient.get('http://localhost:8088/EventManagement/Facture/retrieve-all-Factures');
  }

  deleteFacture(idfacture: number)  {
    return this._openHttpClient.delete('http://localhost:8088/EventManagement/Facture/delete');
  }

  updateFacture(facture: Facture): Observable<any> {
    return this.http.put<any>(`${this.backendUrl}/update-Facture`, facture);
  }

  getFactureNameById(factureId: number): Observable<any> {
    const url = `${this.backendUrl}/getName/${factureId}`;
    return this.http.get<any>(url);
  }

  getFactureById(factureId: number): Observable<any> {
    const url = `${this.backendUrl}/retrieve-Facture/${factureId}`;
    return this.http.get<any>(url);
  }

  getFactureByEventId(eventId: number): Observable<any> {
    const url = `${this.backendUrl}/retrieve-FactureByEventId/${eventId}`;
    return this.http.get<any>(url);
  }

}
