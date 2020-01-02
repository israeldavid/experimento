import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametrosDetallesPage } from './parametros-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: ParametrosDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametrosDetallesPageRoutingModule {}
