import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../../environments/environment';
import { tabs} from '../../core/interfaces/tabs.interface';
import { Observable } from 'rxjs';

const url = environment.direccionTabs;

@Injectable({
  providedIn: 'root'
})
export class ServiciotabsService {

  constructor(private httpService: HttpClient) { }

  obtenerTabs():Observable<tabs> {
    return this.httpService.get<tabs>(url);
  }
}
