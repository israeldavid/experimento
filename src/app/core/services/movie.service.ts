import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../../environments/environment';

const url = environment.direccionurl;
const api = environment.apiKey;

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  constructor(private httpService: HttpClient) { }

  searchData(title: string, type: SearchType): Observable<any> {
    return this.httpService.get(`${url}?s=${encodeURI(title)}&type=${type}&apikey=${api}`).pipe(
      map(results => results['Search'])
    );
  }

  getDetails(id) {
    return this.httpService.get(`${url}?i=${id}&plot=full&apikey=${api}`);
  }
}
