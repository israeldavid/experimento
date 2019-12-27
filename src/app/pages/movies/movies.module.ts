import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//Esto hace q funcione las etiquetas de ionic como por ejemplo ion-title
import { IonicModule } from '@ionic/angular';

import { MoviesPageRoutingModule } from './movies-routing.module';

import { MoviesPage } from './movies.page';
//Aqui tengo que importar el modulo para usar todos los componentes en el html
import { ComponentsModule } from '../../core/module/components.module';
import { PopupPage} from '../popup/popup.page';
import { PopupPageModule } from '../popup/popup.module';

@NgModule({
  //aqui llamo al popup
  entryComponents:[
    PopupPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //aqui lo llamo ojo
    ComponentsModule,
    //aqui llamo al modulo
    PopupPageModule,
    MoviesPageRoutingModule
  ],
  declarations: [MoviesPage]
})
export class MoviesPageModule {}
