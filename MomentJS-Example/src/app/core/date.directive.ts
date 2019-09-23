import {Directive, ElementRef, Input} from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appDataDirective]'
})
export class DateDirective {
  @Input() date: string;


  constructor(private el: ElementRef) {
    console.log('input', this.date);
    const now = moment();
    const date = moment(new Date(this.date));
    console.log('Date', date);
    const diff: number = now.diff(date);
    console.log('Diff', diff);
    let sinceText = '';
    if (moment.duration(diff).asSeconds() < 60) {
      sinceText = `${moment.duration(diff).asSeconds().toFixed(0)} sec ago`;
    } else if (moment.duration(diff).asMinutes() < 60) {
      sinceText = `${moment.duration(diff).asMinutes().toFixed(0)} minutes ago`;
    } else if (moment.duration(diff).asHours() < 24) {
      sinceText = `${moment.duration(diff).asHours().toFixed(0)} hours ago`;
    } else if (moment.duration(diff).asMonths() < 1) {
      sinceText = `${moment.duration(diff).asDays().toFixed(0)} days ago`;
    } else if (moment.duration(diff).asYears() < 1) {
      sinceText = `${moment.duration(diff).asMonths().toFixed(0)} months ago`;
    } else {
      sinceText = `${moment.duration(diff).asYears().toFixed(0)} years ago`;
    }
    console.log('Since text', sinceText);
    this.el.nativeElement.innerHTML = sinceText;
  }

}
