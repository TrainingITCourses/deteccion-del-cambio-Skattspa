import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/store/api.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {
  public launch;
  public statuses;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.statuses = this.api.statuses;
    this.launch = this.api.launches.filter(l => l.id.toString() === id)[0];
  }
}
