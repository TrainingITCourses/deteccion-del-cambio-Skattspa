import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [CommonModule, SearchRoutingModule, SharedModule],
  declarations: [SearchComponent]
})
export class SearchModule {}
