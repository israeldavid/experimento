import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../../environments/environment';
import { sliders} from '../../core/interfaces/slides.interface';
import { Observable } from 'rxjs';

const url = environment.direccionSliders;

@Injectable({
  providedIn: 'root'
})
export class ServicioslidersService {

  constructor(private httpService: HttpClient) { }

  obtenerSliders():Observable<sliders> {
    return this.httpService.get<sliders>(url);
  }
}
