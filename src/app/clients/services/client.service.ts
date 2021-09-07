import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CLIENTS } from '../data/clients.json';
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private URL_ENDPOINT = 'http://localhost:8080/api/clients';

  constructor(
    private http: HttpClient
  ) { }

  getClients(): Observable<Client[]> {
    // return of(CLIENTS);
    return this.http.get<Client[]>(this.URL_ENDPOINT);
  }
}
