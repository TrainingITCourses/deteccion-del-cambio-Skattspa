import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: '../home/home.module#HomeModule'
  },
  {
    path: 'launch/:id',
    loadChildren: '../launch/launch.module#LaunchModule'
  },
  {
    path: 'favorites',
    loadChildren: '../favorites/favorites.module#FavoritesModule'
  },
  {
    path: 'search',
    loadChildren: '../search/search.module#SearchModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
