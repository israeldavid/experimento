//Ojo este servicio se llama serviciobanner

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../../environments/environment';
import { responseBanner} from '../../core/interfaces/banner.interface';
import { Observable } from 'rxjs';

const url = environment.direccionBanner;

@Injectable({
  providedIn: 'root'
})
export class ServiciogenericoService {

  constructor(private httpService: HttpClient) { }

  obtenerBanners():Observable<responseBanner> {
    return this.httpService.get<responseBanner>(url);
  }
}
