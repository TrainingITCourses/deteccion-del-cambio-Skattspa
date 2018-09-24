import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  public favorites: number[] = [];
  private key = 'favorites';
  constructor(private api: ApiService) {
    this.loadFavorites();
    this.onLaunchesOrFavoritesChange();
  }

  private loadFavorites = () => {
    const savedFavorites = localStorage.getItem(this.key);
    if (savedFavorites) {
      const parsedFavorites = JSON.parse(savedFavorites);
      if (parsedFavorites instanceof Array) {
        this.favorites = parsedFavorites;
      }
    }
  };

  public toggleFavorite = launch => {
    const index = this.favorites.findIndex(f => f === launch.id);
    if (index >= 0) {
      launch.isInFavorites = false;
      this.favorites = this.favorites.filter(l => l !== launch.id);
    } else {
      launch.isInFavorites = true;
      this.favorites = [...this.favorites, launch.id];
    }
    this.onLaunchesOrFavoritesChange();
  };

  public onLaunchesOrFavoritesChange() {
    localStorage.setItem(this.key, JSON.stringify(this.favorites));
    if (!this.api.launches) return;
    this.api.launches.forEach(
      l => (l.isInFavorites = this.favorites.includes(l.id))
    );
  }
}
