import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotografiaPageRoutingModule } from './fotografia-routing.module';

import { FotografiaPage } from './fotografia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotografiaPageRoutingModule
  ],
  declarations: [FotografiaPage]
})
export class FotografiaPageModule {}
