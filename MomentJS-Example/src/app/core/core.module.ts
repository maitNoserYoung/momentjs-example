import {NgModule} from '@angular/core';
import {MaterialModule} from './material/material.module';
import { DateDirective } from './date.directive';
import { TimePipe } from './time.pipe';


@NgModule({
  declarations: [DateDirective, TimePipe],
  exports: [
    MaterialModule,
    DateDirective,
    TimePipe
  ]
})
export class CoreModule {
}
