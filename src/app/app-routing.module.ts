import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from "../app/core/guards/auth-guard.service";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/movies/movies.module').then( m => m.MoviesPageModule)},
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
