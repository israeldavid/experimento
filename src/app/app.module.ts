import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// para usar el servicio
import { HttpClientModule } from '@angular/common/http';
//para usar el interceptor
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpConfigInterceptor } from '../app/core/interceptors/httpConfig.interceptor';
//Para usar el modulo de autenticación
import { AuthModule } from '../app/core/authentication/auth.module';
//Para usar el maps
import { Geolocation } from '@ionic-native/geolocation/ngx';
//PAra los permisos de Android
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
//Uso de la cámara
import { Camera } from '@ionic-native/camera/ngx';
//Uso de las llamadas desde el movil
import { CallNumber } from '@ionic-native/call-number/ngx';
//Uso para las analiticas de Google
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';
//Uso del Calendario
import { Calendar } from '@ionic-native/calendar/ngx';
//Uso de los contactos
import { Contacts } from '@ionic-native/contacts/ngx';
//Uso del sistema de archivos
import { File } from '@ionic-native/file/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,AuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidPermissions,
    Geolocation,
    LocationAccuracy,
    CallNumber,
    GoogleAnalytics,
    Camera,
    Calendar,
    Contacts,
    File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
