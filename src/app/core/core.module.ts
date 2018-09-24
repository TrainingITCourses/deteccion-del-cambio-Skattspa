import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { CoreRoutingModule } from './core-routing.module';
import { NavComponent } from './shell-container/nav/nav.component';
import { ShellContainerComponent } from './shell-container/shell-container.component';
import { DisplayComponent } from './t-minus/display/display.component';
import { TMinusComponent } from './t-minus/t-minus.component';
@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  declarations: [
    NavComponent,
    ShellContainerComponent,
    TMinusComponent,
    DisplayComponent
  ],
  exports: [ShellContainerComponent]
})
export class CoreModule {}
