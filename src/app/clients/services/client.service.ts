import { Injectable } from '@angular/core';

import { CLIENTS } from '../data/clients.json';
import { Client } from '../model/client.model';



@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients(): Client[] {
    return CLIENTS;
  }
}
