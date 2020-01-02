import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParametrosDetallesPageRoutingModule } from './parametros-detalles-routing.module';

import { ParametrosDetallesPage } from './parametros-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParametrosDetallesPageRoutingModule
  ],
  declarations: [ParametrosDetallesPage]
})
export class ParametrosDetallesPageModule {}
