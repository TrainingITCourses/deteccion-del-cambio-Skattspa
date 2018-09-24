import { ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TimeService } from '../store/time.service';

@Component({
  selector: 'app-t-minus',
  templateUrl: './t-minus.component.html',
  styleUrls: ['./t-minus.component.css']
})
export class TMinusComponent implements OnChanges {
  @Input() public nextLaunch;
  public tMinus: { counter: string };
  public tMinus$: BehaviorSubject<any> = new BehaviorSubject({ counter: '' });

  constructor(private time: TimeService, private cdRef: ChangeDetectorRef) {}

  ngOnChanges() {
    if (!this.nextLaunch) return;
    this.tMinus = { counter: this.time.countDown(this.nextLaunch.windowstart) };
    this.tMinus$.next(this.tMinus);

    setInterval(_ => {
      // this.tMinus.counter = this.time.countDown(this.nextLaunch.windowstart);
      // this.tMinus = {
      //   ...this.tMinus,
      //   counter: this.time.countDown(this.nextLaunch.windowstart)
      // };
      this.cdRef.detectChanges();
      this.tMinus$.next(this.tMinus);
    }, 1000);
  }
}
