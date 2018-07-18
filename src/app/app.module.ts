import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar/resaltar.directive';
import { ContarClicksDirective } from './directives/clicks/contar-clicks.directive';

@NgModule({
  declarations: [AppComponent, ResaltarDirective, ContarClicksDirective],
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
