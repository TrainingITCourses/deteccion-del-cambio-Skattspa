import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/store/api.service';
import { FavoritesService } from '../../core/store/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  public favorites: any[];
  public launches;
  public statuses;
  constructor(
    private api: ApiService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.favorites = this.favoritesService.favorites;
    this.launches = this.api.launches.filter(l =>
      this.favorites.includes(l.id)
    );
    this.statuses = this.api.statuses;
  }
}
