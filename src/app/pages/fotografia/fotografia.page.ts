import { Component, OnInit } from '@angular/core';
//Para uso de la cámara
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.page.html',
  styleUrls: ['./fotografia.page.scss'],
})
export class FotografiaPage implements OnInit {

  capturedSnapURL:string;
 
  camaraOptions: CameraOptions = {
    quality: 80, //100 debe ser
    destinationType: this.camara.DestinationType.DATA_URL,
    encodingType: this.camara.EncodingType.JPEG,
    mediaType: this.camara.MediaType.PICTURE
  }

  constructor(private camara: Camera) { }

  ngOnInit() {
  }

  takeSnap() {
    this.camara.getPicture(this.camaraOptions).then((imageData) => {
      // this.camara.DestinationType.FILE_URI da la URL del archivo grabada en local
      // this.camara.DestinationType.DATA_URL da la URL en base64
      
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.capturedSnapURL = base64Image;
    }, (err) => {
      
      console.log(err);
      
    });
  }

}
