import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/store/api.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  public nextLaunches;
  public statuses;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.nextLaunches = this.api.launches
      .filter(l => new Date(l.windowstart) > new Date())
      .sort((a, b) => (a.isostart > b.isostart ? 1 : -1))
      .slice(0, 10);
    this.statuses = this.api.statuses;
  }
}
