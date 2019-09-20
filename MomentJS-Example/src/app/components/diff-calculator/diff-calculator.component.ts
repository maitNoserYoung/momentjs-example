import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Moment} from 'moment';

@Component({
  selector: 'app-diff-calculator',
  templateUrl: './diff-calculator.component.html',
  styleUrls: ['./diff-calculator.component.scss']
})
export class DiffCalculatorComponent implements OnInit {

  date1: Moment = moment();
  date2: Moment = this.date1;
  diff: number = this.date2.diff(this.date1);
  diffInSeconds = moment.duration(this.diff).asSeconds();
  diffInMinutes = moment.duration(this.diff).asMinutes();
  diffInHours = moment.duration(this.diff).asHours();
  diffInDays = moment.duration(this.diff).asDays();
  diffInWeeks = moment.duration(this.diff).asWeeks();
  diffInMonths = moment.duration(this.diff).asMonths();
  diffInYear = moment.duration(this.diff).asYears();

  constructor() {
  }

  ngOnInit() {
    this.date1 = moment();
    this.date2 = moment().add();
  }

  setDate1(event) {
    console.log('Event', event);
    this.date1 = moment(event.value);
    this.updateValues();
  }

  setDate2(event) {
    console.log('Event', event);
    this.date2 = moment(event.value);
    this.updateValues();
  }

  updateValues() {
    this.diff = this.date2.diff(this.date1);
    this.diffInSeconds = moment.duration(this.diff).asSeconds();
    this.diffInMinutes = moment.duration(this.diff).asMinutes();
    this.diffInHours = moment.duration(this.diff).asHours();
    this.diffInDays = moment.duration(this.diff).asDays();
    this.diffInWeeks = moment.duration(this.diff).asWeeks();
    this.diffInMonths = moment.duration(this.diff).asMonths();
    this.diffInYear = moment.duration(this.diff).asYears();
  }

}
