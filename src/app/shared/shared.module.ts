import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSlideToggleModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { LaunchCardComponent } from './launch-card/launch-card.component';
import { LaunchesListComponent } from './launches-list/launches-list.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { StatusChipComponent } from './status-chip/status-chip.component';

@NgModule({
  imports: [
    CommonModule,
    MatBadgeModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatFormFieldModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    RouterModule
  ],
  declarations: [
    LaunchesListComponent,
    LaunchCardComponent,
    StatusChipComponent,
    SearchFilterComponent,
    CounterComponent
  ],
  exports: [
    LaunchesListComponent,
    LaunchCardComponent,
    CounterComponent,
    RouterModule,
    MatBadgeModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    SearchFilterComponent
  ]
})
export class SharedModule {}
