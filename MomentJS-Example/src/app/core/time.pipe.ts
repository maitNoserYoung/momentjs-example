import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'since'
})
export class TimePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const now = moment();
    const date = moment(new Date(value));
    /*let future = false;
    console.log('Diff', diff);
    let sinceText = '';
    if (diff < 0) {
      future = true;
      diff = diff * -1;
    }
    if (moment.duration(diff).asSeconds() < 60) {
      const inSeconds = parseInt(moment.duration(diff).asSeconds().toString(), 10);
      sinceText = `${inSeconds.toFixed(0)} sec`;
    } else if (moment.duration(diff).asMinutes() < 60) {
      const inMinutes = parseInt(moment.duration(diff).asMinutes().toString(), 10);
      sinceText = `${inMinutes.toFixed(0)} minutes`;
    } else if (moment.duration(diff).asHours() < 24) {
      const inHours = parseInt(moment.duration(diff).asHours().toString(), 10);
      sinceText = `${inHours} ${inHours === 1 ? 'hour' : 'hours'}`;
    } else if (moment.duration(diff).asMonths() < 1) {
      const inDays = parseInt(moment.duration(diff).asDays().toString(), 10);
      sinceText = `${inDays.toFixed(0)}  ${inDays === 1 ? 'day' : 'days'}`;
    } else if (moment.duration(diff).asYears() < 1) {
      const inMonths = parseInt(moment.duration(diff).asMonths().toString(), 10);
      sinceText = `${inMonths.toFixed(0)}  ${inMonths === 1 ? 'month' : 'months'}`;
    } else {
      const inYears = parseInt(moment.duration(diff).asYears().toString(), 10);
      sinceText = `${inYears.toFixed(0)} ${inYears === 1 ? 'year' : 'years'}`;
    }
    if (future === true) {
      sinceText = `in ${sinceText}`;
    } else {
      sinceText = `${sinceText} ago`;
    }
    console.log('Since text', sinceText);*/
    return now.to(date);
  }

}
