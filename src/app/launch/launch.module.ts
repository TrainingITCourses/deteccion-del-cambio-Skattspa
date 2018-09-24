import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchComponent } from './launch/launch.component';

@NgModule({
  imports: [CommonModule, LaunchRoutingModule, SharedModule],
  declarations: [LaunchComponent]
})
export class LaunchModule {}
