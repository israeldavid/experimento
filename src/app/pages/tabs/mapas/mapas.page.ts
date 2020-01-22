import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage {


  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
    
  }

  
}
