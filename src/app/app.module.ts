import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQVf0ORpvGRSLetPtUGzJfgTXz8p4SVK8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
