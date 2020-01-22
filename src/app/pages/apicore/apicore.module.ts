import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApicorePageRoutingModule } from './apicore-routing.module';

import { ApicorePage } from './apicore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApicorePageRoutingModule
  ],
  declarations: [ApicorePage]
})
export class ApicorePageModule {}
