import { Component, OnInit } from '@angular/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';
//Servicio de Banner
import { ServiciogenericoService} from '../core/services/serviciogenerico.service';
import { Observable, from } from 'rxjs';
import { responseBanner,Banner} from '../core/interfaces/banner.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  responsebanners: responseBanner;
  
  
  constructor(private ga:GoogleAnalytics,private sg:ServiciogenericoService) {}

  ngOnInit() {
    this.ga.trackView('Home Page')
    .then(() => {})
    .catch(e => console.log(e));
    
  }

  trackEvent(item) {
    this.ga.trackEvent('Category', 'Tapped Action', 'Item Tapped is '+item, 0);
  }

  consultarBaners(){
    console.log("Este es el proceso Consultar")
    this.sg.obtenerBanners().subscribe(data => { 
      this.responsebanners=data;
      console.log(this.responsebanners);
    });
    
   
  }
}
