import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';  //El Behavior Subject permite tener siempre actualizado el ultimo valor de la api

import { environment } from '../../../environments/environment';

import { Storage } from  '@ionic/storage';
import { User } from  '../interfaces/user';
import { AuthResponse } from  '../interfaces/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //En este caso despues de que funcione esto debemos cambiar a las variables de Ambiente
  AUTH_SERVER_ADDRESS:  string  =  environment.direccionLogin;
  authSubject  =  new  BehaviorSubject(false);
  constructor(private httpClient: HttpClient, private storage:Storage) { 

  }

  //Usamos el método post() para enviar una solicitud POST al endPoint / register expuesto por nuestro servidor de autenticación que se ejecutará desde el localhost:3000 Usamos la función pipe() para encadenar múltiples operadores. En nuestro caso, queremos realizar un efecto secundario para almacenar información JWT (el token de acceso y la fecha de vencimiento) en el almacenamiento local, por lo que utilizamos el operador tap () que está disponible en RxJS. En el operador tap() verificamos si la respuesta tiene un objeto de usuario y configuramos persistir el token de acceso y la fecha de vencimiento con las teclas ACCESS_TOKEN y EXPIRES_IN. Luego, emitimos un valor verdadero a nuestro authSubject usando el método next ().
  register(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/register`, user).pipe(
      tap(async (res:  AuthResponse ) => {

        if (res.user) {
          await this.storage.set("ACCESS_TOKEN", res.user.access_token);
          await this.storage.set("EXPIRES_IN", res.user.expires_in);
          this.authSubject.next(true);
        }
      })
    );
  }
  
  //método para autenticar los usuarios
  login(user: User): Observable<AuthResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/login`, user).pipe(
      tap(async (res: AuthResponse) => {
        if (res.user) {
          await this.storage.set("ACCESS_TOKEN", res.user.access_token);
          await this.storage.set("EXPIRES_IN", res.user.expires_in);
          this.authSubject.next(true);
        }
      })
    );
  }

  //logout metodo que será usada por remover JWT authentication informacion del local storage:
  async logout() {
    await this.storage.remove("ACCESS_TOKEN");
    await this.storage.remove("EXPIRES_IN");
    this.authSubject.next(false);
  }

  //Añadimos el metodo isLoggedIn para saber si el usuario tiene una sesion activa.
  isLoggedIn() {
    return this.authSubject.asObservable();
  }
}
