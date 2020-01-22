import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const myarray=[
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    children: [
      {
        path: '',
        loadChildren: '../tabs/tabs.module#TabsPageModule',
      }
    ]
  },
  {
    path: 'about',
    children: [
      {
        path: '',
        loadChildren: '../about/about.module#AboutPageModule'
      }
    ]
  },
  {
    path: 'contact',
    children: [
      {
        path: '',
        loadChildren: '../contact/contact.module#ContactPageModule'
      }
    ]
  },
  {
      path: 'mapas',
      loadChildren: () => import('./mapas/mapas.module').then( m => m.MapasPageModule)
  },
]

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: myarray
  },
  {
    path: '',
    redirectTo: '/tabs/tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
