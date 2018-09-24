import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private oneMillisecond = 1;
  private oneSecond = this.oneMillisecond * 1000;
  private oneMinute = this.oneSecond * 60;
  private oneHour = this.oneMinute * 60;
  private oneDay = this.oneHour * 24;
  private oneWeek = this.oneDay * 7;
  private oneMonth = this.oneWeek * 4;
  private oneYear = this.oneMonth * 12;

  constructor() {}

  public countDown = date => {
    const diff = this.diff(date);
    let counter = '';
    if (diff <= this.oneMonth) {
      counter = `${this.diffStr(diff / this.oneDay)}d:${this.diffStr(
        (diff % this.oneDay) / this.oneHour
      )}h:${this.diffStr(
        (diff % this.oneHour) / this.oneMinute
      )}m:${this.diffStr((diff % this.oneMinute) / this.oneSecond)}s`;
    }
    return counter;
  };

  private padZero = d => ('0' + d).slice(-2);
  private diffStr = d => this.padZero(Math.floor(d));

  public diff = date => new Date(date).getTime() - new Date().getTime();

  public diffTimeUnits = date => {
    const diff = this.absDiff(date);
    let diffUnit = '';
    if (diff <= 2 * this.oneMinute) {
      diffUnit = Math.round(diff / this.oneSecond) + ' seconds';
    } else if (diff <= 2 * this.oneHour) {
      diffUnit = Math.round(diff / this.oneMinute) + ' minutes';
    } else if (diff <= 2 * this.oneDay) {
      diffUnit = Math.round(diff / this.oneHour) + ' hours';
    } else if (diff <= 2 * this.oneWeek) {
      diffUnit = Math.round(diff / this.oneDay) + ' days';
    } else if (diff <= 2 * this.oneMonth) {
      diffUnit = Math.round(diff / this.oneWeek) + ' weeks';
    } else if (diff <= 2 * this.oneYear) {
      diffUnit = Math.round(diff / this.oneMonth) + ' months';
    } else {
      diffUnit = Math.round(diff / this.oneYear) + ' years';
    }
    return this.dateWhithinAgo(date, diffUnit);
  };

  private dateWhithinAgo = (date, diffUnit) =>
    new Date(date) > new Date() ? 'within ' + diffUnit : diffUnit + ' ago';

  private absDiff = date => Math.abs(this.diff(date));
}
