import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
//Para los permisos de Android
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage implements OnInit {

  locationCoords: any;
  timetest: any;

  constructor(private mapas:Geolocation,private apermisos:AndroidPermissions, private localizacion: LocationAccuracy) { 
    this.locationCoords = {
      latitude: "",
      longitude: "",
      accuracy: "",
      timestamp: ""
    }
    this.timetest = Date.now();
  }

  ngOnInit() {
  }

  //Chequear los permisos

  checkGPSPermission() {
    this.apermisos.checkPermission(this.apermisos.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {
 
          //Si tiene permiso muestra 'Encender GPS
          this.preguntaEncenderGPS();
        } else {
 
          //Si no tiene permiso, lo solicita
          this.pedirGPSPermiso();
        }
      },
      err => {
        alert(err);
      }
    );
  }

  pedirGPSPermiso() {
    this.localizacion.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log("4");
      } else {
        //Show 'GPS Permission Request' dialogue
        this.apermisos.requestPermission(this.apermisos.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              // call method to turn on GPS
              this.preguntaEncenderGPS();
            },
            error => {
              //Muestra el error en caso de que el usuario puso No Gracias
              alert('Error al denegar el permiso del GPS ' + error)
            }
          );
      }
    });
  }

  preguntaEncenderGPS() {
    this.localizacion.request(this.localizacion.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // Si el GPS esta encendido llama al metodo
        this.obtenerCoordenadas()
      },
      error => alert('Error solicitando permisos locales ' + JSON.stringify(error))
    );
  }

  verUbicacion(){
    this.mapas.getCurrentPosition().then((resp) => {
      const direccion = `${ resp.coords.latitude } , ${ resp.coords.longitude }`;
      console.log(direccion);
     }).catch((error) => {
       console.log('Error obteniendo la ubicación', error);
     });
  }

  // Metodo para obtener las coordenadas usando GPS
  obtenerCoordenadas() {
    this.mapas.getCurrentPosition().then((resp) => {
      this.locationCoords.latitude = resp.coords.latitude;
      this.locationCoords.longitude = resp.coords.longitude;
      this.locationCoords.accuracy = resp.coords.accuracy;
      this.locationCoords.timestamp = resp.timestamp;
    }).catch((error) => {
      alert('Error obteniendo las coordenadas' + error);
    });
  }

}
