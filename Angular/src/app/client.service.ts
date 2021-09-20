import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getClientList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'clients-list');
  }

  createClient(client: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-client', client);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-client/${id}`, { responseType: 'text' });
  }

  getClient(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/client/${id}`);
  }

  updateClient(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-client/${id}`, value);
  }
  
}                                           