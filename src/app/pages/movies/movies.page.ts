import { Component, OnInit } from '@angular/core';
import { MovieService} from '../../core/services/movie.service';  //Importo el servicio y el Enum
import { Observable, from } from 'rxjs';
import { Imovie} from '../../core/interfaces/movies.interface';
import { SearchType } from '../../core/enums/SearchType.enum';
import { ModalController } from '@ionic/angular';
import { PopupPage} from '../popup/popup.page';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})

export class MoviesPage implements OnInit {
  //declaro las variables que usare.
  results: Observable<Imovie>;  //variable results de tipo observable
  searchTerm: string = '';  //variable searchterm de tipo string
  type: SearchType = SearchType.all;  //variable type de tipo importado arriba del ENUM SearchType que es igual al elemento del enum all

  constructor(private movieService: MovieService, private mdlCtr:ModalController) { } //para poder usar el servicio lo instancio

  ngOnInit() {
  }

  //la funcion de busqueda
  searchChanged() {
    // Llama a nuestro servicio que retorna un Observable
    this.results = this.movieService.searchData(this.searchTerm, this.type);
  }

  async presentModal() {
    const modal = await this.mdlCtr.create({
      component: PopupPage
    });
    await modal.present();
  }
}
