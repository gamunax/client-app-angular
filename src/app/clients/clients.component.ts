import { Component, OnInit } from '@angular/core';
import { Client } from './model/client.model';
import { ClientService } from './services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: Client[];

  constructor(
    private clientService: ClientService,
  ) { }

  ngOnInit(): void {
    this.clientService.getClients()
      .subscribe(clients => this.clients = clients);
  }

}
