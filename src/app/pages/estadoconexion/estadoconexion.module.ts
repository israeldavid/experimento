import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadoconexionPageRoutingModule } from './estadoconexion-routing.module';

import { EstadoconexionPage } from './estadoconexion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadoconexionPageRoutingModule
  ],
  declarations: [EstadoconexionPage]
})
export class EstadoconexionPageModule {}
