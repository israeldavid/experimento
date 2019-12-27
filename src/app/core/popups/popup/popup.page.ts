import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.page.html',
  styleUrls: ['./popup.page.scss'],
})
export class PopupPage implements OnInit {

  constructor(private mdlCtr:ModalController) { }

  ngOnInit() {
  }

  cerrar(){
    this.mdlCtr.dismiss();
  }
}
