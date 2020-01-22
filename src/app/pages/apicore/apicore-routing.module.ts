import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApicorePage } from './apicore.page';

const routes: Routes = [
  {
    path: '',
    component: ApicorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApicorePageRoutingModule {}
