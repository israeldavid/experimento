import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadoconexionPage } from './estadoconexion.page';

const routes: Routes = [
  {
    path: '',
    component: EstadoconexionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadoconexionPageRoutingModule {}
