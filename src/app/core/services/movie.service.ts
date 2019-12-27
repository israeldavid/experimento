import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Typescript personalizar Enum para tipos de busqueda (optional)
//http://www.omdbapi.com/?i=tt3896198&apikey=57dd2d56
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
  url = 'http://www.omdbapi.com/';
  apiKey = '57dd2d56'; // <-- Api que viene del servicio!
  //http://www.omdbapi.com/?i=tt3896198&apikey=57dd2d56
  constructor(private httpService: HttpClient) { }

  searchData(title: string, type: SearchType): Observable<any> {
    return this.httpService.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }

  getDetails(id) {
    return this.httpService.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
