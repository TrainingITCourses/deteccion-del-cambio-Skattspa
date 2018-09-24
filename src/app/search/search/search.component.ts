import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/store/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public launches: any[];
  public filteredLaunches: any[] = [];
  public filteredAgencies: any[] = [];
  public filteredStates: any[] = [];
  public statuses: any[];
  constructor(private api: ApiService) {}

  public agencies: any[];
  public types: any[];
  public states: any[];

  ngOnInit() {
    this.statuses = this.api.statuses;
    this.agencies = this.api.agencies;
    this.states = this.api.states;
  }

  onSearch = (searchText: string) => {
    const search = searchText.toLowerCase();
    const filteredLaunches = this.api.launches.filter(
      l =>
        l.name.toLowerCase().includes(search) ||
        l.location.name.toLowerCase().includes(search)
    );
    // @TODO: creo que consiste en usar estos filtros pero no consigo aplicarlos.
    // const filteredAgencies = this.api.agencies.filter(
    //   l =>
    //     l.name.toLowerCase().includes(search) ||
    //     l.location.name.toLowerCase().includes(search)
    // );
    // const filteredStates = this.api.states.filter(
    //   l =>
    //     l.name.toLowerCase().includes(search) ||
    //     l.location.name.toLowerCase().includes(search)
    // );
    // this.clearAndPush(filteredLaunches);
    this.filteredLaunches = filteredLaunches;
    // this.filteredAgencies = filteredAgencies;
    // this.filteredStates = filteredStates;
  };

  clearAndPush(filteredLaunches) {
    const n = this.filteredLaunches.length;
    for (let index = 0; index < n; index++) {
      this.filteredLaunches.pop();
    }
    filteredLaunches.forEach(f => this.filteredLaunches.push(f));
  }
}
