import { Component, OnInit } from '@angular/core';
import { NetworkserviceService } from 'src/app/core/services/networkservice.service';

@Component({
  selector: 'app-estadoconexion',
  templateUrl: './estadoconexion.page.html',
  styleUrls: ['./estadoconexion.page.scss'],
})
export class EstadoconexionPage implements OnInit {

  isConnected = false;
  constructor(private ns: NetworkserviceService) { }

  ngOnInit() {
    this.ns.getNetworkStatus().subscribe((connected: boolean) => {
      this.isConnected = connected;
      if (!this.isConnected) {
        console.log('Por favor enciende tu conexión a Internet');
      }
    });
  }

}
