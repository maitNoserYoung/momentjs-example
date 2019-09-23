import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import * as moment from 'moment';
import {ILocale} from '../../models/locale.interface';

@Component({
  selector: 'app-i18n-example',
  templateUrl: './i18n-example.component.html',
  styleUrls: ['./i18n-example.component.scss']
})
export class I18nExampleComponent implements OnInit {

  now: moment.Moment;
  @Inject(LOCALE_ID) public applicationLocale: string;
  locale: string;
  locales: ILocale[];
  weekdays: string[];
  birthday = moment("2000-01-01");

  date1 = moment('2019-07-21');
  date2 = moment('2019-09-21');
  date3 = moment('1998-07-21');
  date4 = moment('2019-09-24');
  date5 = moment('1998-07-21');

  constructor() {
  }

  ngOnInit() {
    this.locales = [
      {locale: 'en-US', name: 'English, USA'},
      {locale: 'en-GB', name: 'English, GB'},
      {locale: 'de', name: 'German, Germany'},
      {locale: 'de-CH', name: 'German, Switzerland'},
      {locale: 'fr', name: 'French, France'},
      {locale: 'fr-CH', name: 'French, Switzerland'},
      {locale: 'it', name: 'Italian, Italy'},
      {locale: 'it-CH', name: 'Italian, Switzerland'},
      {locale: 'es-ES', name: 'Spanish, Spain'},
      {locale: 'es-VE', name: 'Spanish, Venezuela'},
      {locale: 'pt-PT', name: 'Portuguese, Portugal'},
      {locale: 'pt-BR', name: 'Portuguese, Brazil'},
      {locale: 'sv', name: 'Swedish, Sweden'},
      {locale: 'nb-NO', name: 'Norwegian, Norway'},
      {locale: 'ar-SA', name: 'Arabic, Saudi Arabia'},
      {locale: 'zh-CN', name: 'Mandarin, China'}
    ];
    console.log('Application locale', this.applicationLocale);
    this.locale = this.applicationLocale !== undefined ? this.applicationLocale : this.locales[0].locale;
    this.weekdays = moment.weekdays();
    this.updateNow();
    setInterval(() => this.updateNow(), 1000);
  }

  private updateNow() {
    this.now = moment();
  }

  public updateLocale(event) {
    moment.locale(event);
    this.locale = event;
    this.weekdays = moment.weekdays();
  }
}
