import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.page.html',
  styleUrls: ['./popup.page.scss'],
})
export class PopupPage implements OnInit {

  constructor(private mdlCtr:ModalController) { }

  demo : string = environment.imagenpopup_uno;

  ngOnInit() {
  }

  cerrar(){
    this.mdlCtr.dismiss();
  }
}
