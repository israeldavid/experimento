import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from "../app/core/guards/auth-guard.service";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/movies.module').then( m => m.MoviesPageModule),
    //en la pagina que quieres proteger pones los guards como abajo
    //canActivate: [AuthGuardService]
  },
  {
    path: 'movie-details/:id',
    loadChildren: () => import('./pages/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/login/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'parametros',
    loadChildren: () => import('./pages/parametros/parametros.module').then( m => m.ParametrosPageModule)
  },
  {
    path: 'parametros-detalles/:id',
    loadChildren: () => import('./pages/parametros-detalles/parametros-detalles.module').then( m => m.ParametrosDetallesPageModule)
  },
  {
    path: 'mapas',
    loadChildren: () => import('./pages/mapas/mapas.module').then( m => m.MapasPageModule)
  },
  {
    path: 'fotografia',
    loadChildren: () => import('./pages/fotografia/fotografia.module').then( m => m.FotografiaPageModule)
  },
  {
    path: 'llamadas',
    loadChildren: () => import('./pages/llamadas/llamadas.module').then( m => m.LlamadasPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./pages/slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pages/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./pages/contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'archivos',
    loadChildren: () => import('./pages/archivos/archivos.module').then( m => m.ArchivosPageModule)
  },
  {
    path: 'logind',
    loadChildren: () => import('./pages/logind/logind.module').then( m => m.LogindPageModule)
  },
  {
    path: 'olvide',
    loadChildren: () => import('./pages/olvide/olvide.module').then( m => m.OlvidePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
