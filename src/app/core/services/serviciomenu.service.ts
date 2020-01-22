import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../../environments/environment';
import { menu} from '../../core/interfaces/menu.interface';
import { Observable } from 'rxjs';

const url = environment.direccionMenu;

@Injectable({
  providedIn: 'root'
})
export class ServiciomenuService {

  constructor(private httpService: HttpClient) { }

  obtenerMenus():Observable<menu> {
    return this.httpService.get<menu>(url);
  }
}
