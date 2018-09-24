import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  declarations: [DashBoardComponent]
})
export class HomeModule {}
