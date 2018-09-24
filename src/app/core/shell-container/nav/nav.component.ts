import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input() public appTitle: string;
  @Input() public isHandset: Boolean;
  @Input() public loaded: Boolean;
  @Input() public nextLaunch;

  constructor() {}
}
