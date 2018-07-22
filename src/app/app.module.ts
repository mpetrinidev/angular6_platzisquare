import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar/resaltar.directive';
import { ContarClicksDirective } from './directives/clicks/contar-clicks.directive';
import { Routing } from './app.routing';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent
  ],
  imports: [
    Routing,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQVf0ORpvGRSLetPtUGzJfgTXz8p4SVK8'
    })
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule {}
