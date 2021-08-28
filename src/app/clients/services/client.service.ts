import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CLIENTS } from '../data/clients.json';
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients(): Observable<Client[]> {
    return of(CLIENTS);
  }
}
