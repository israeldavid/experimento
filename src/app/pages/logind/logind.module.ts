import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogindPageRoutingModule } from './logind-routing.module';

import { LogindPage } from './logind.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    LogindPageRoutingModule
  ],
  declarations: [LogindPage]
})
export class LogindPageModule {}
