import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FotografiaPage } from './fotografia.page';

const routes: Routes = [
  {
    path: '',
    component: FotografiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FotografiaPageRoutingModule {}
