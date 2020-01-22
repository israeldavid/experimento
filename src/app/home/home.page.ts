import { Component, OnInit } from '@angular/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  constructor(private ga:GoogleAnalytics) {}

  ngOnInit() {
    this.ga.trackView('Home Page')
    .then(() => {})
    .catch(e => console.log(e));
    
  }

  trackEvent(item) {
    this.ga.trackEvent('Category', 'Tapped Action', 'Item Tapped is '+item, 0);
  }


}
