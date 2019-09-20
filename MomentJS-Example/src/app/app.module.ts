import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {I18nExampleComponent} from './components/i18n-example/i18n-example.component';
import {CoreModule} from './core/core.module';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DiffCalculatorComponent} from './components/diff-calculator/diff-calculator.component';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {registerLocaleData} from '@angular/common';
import localeDeCh from '@angular/common/locales/de-CH';

registerLocaleData(localeDeCh, 'de-CH');

@NgModule({
  declarations: [
    AppComponent,
    I18nExampleComponent,
    MainPageComponent,
    DiffCalculatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    MatDatepickerModule,
    {provide: LOCALE_ID, useValue: 'de-CH'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
