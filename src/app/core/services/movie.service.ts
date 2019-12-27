import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment} from '../../../environments/environment';
import { Imovie } from '../interfaces/movies.interface';
import { SearchType}  from '../enums/SearchType.enum';

const url = environment.direccionurl;
const api = environment.apiKey;



@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  constructor(private httpService: HttpClient) { }

  searchData(title: string, type: SearchType){
    return this.httpService.get<Imovie>(`${url}?s=${encodeURI(title)}&type=${type}&apikey=${api}`).pipe(
      map(results => results['Search'])
    );
  }

  getDetails(id) {
    return this.httpService.get<Imovie>(`${url}?i=${id}&plot=full&apikey=${api}`);
  }
}
