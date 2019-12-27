import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MovieDetailsPageRoutingModule } from './movie-details-routing.module';

import { MovieDetailsPage } from './movie-details.page';
import { ComponentsModule } from '../../core/module/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    MovieDetailsPageRoutingModule
  ],
  declarations: [MovieDetailsPage]
})
export class MovieDetailsPageModule {}
