import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogindPage } from './logind.page';

const routes: Routes = [
  {
    path: '',
    component: LogindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogindPageRoutingModule {}
