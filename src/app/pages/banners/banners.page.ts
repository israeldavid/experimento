import { Component, OnInit } from '@angular/core';
//Servicio de Banner
import { ServiciogenericoService} from '../../core/services/serviciogenerico.service';
import { responseBanner} from '../../core/interfaces/banner.interface';
 
@Component({
  selector: 'app-banners',
  templateUrl: './banners.page.html',
  styleUrls: ['./banners.page.scss'],
})
export class BannersPage implements OnInit {
  responsebanners: responseBanner;

  constructor(private sg:ServiciogenericoService) { }

  ngOnInit() {
  }

  consultarBaners(){
    this.sg.obtenerBanners().subscribe(data => { 
      this.responsebanners=data;
      console.log(this.responsebanners);
    });
  }

}
