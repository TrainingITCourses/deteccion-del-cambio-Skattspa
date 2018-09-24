import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { FavoritesService } from '../../core/store/favorites.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.css']
})
export class LaunchCardComponent implements OnInit, OnChanges {
  @Input() public launch: any = null;
  @Input() public statuses: any[];
  public isInFavorites = false;
  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.launch.currentValue &&
      changes.launch.currentValue !== changes.launch.previousValue
    ) {
      this.isInFavorites = this.favoritesService.favorites.includes(
        changes.launch.currentValue.id
      );
    }
  }

  toggleFavorite = () => this.favoritesService.toggleFavorite(this.launch);
}
