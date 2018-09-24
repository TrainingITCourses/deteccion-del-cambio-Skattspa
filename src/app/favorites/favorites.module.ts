import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  imports: [CommonModule, FavoritesRoutingModule, SharedModule],
  declarations: [FavoritesComponent]
})
export class FavoritesModule {}
