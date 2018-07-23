import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar/resaltar.directive';
import { ContarClicksDirective } from './directives/clicks/contar-clicks.directive';
import { Routing } from './app.routing';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';
import { CrearComponent } from './crear/crear.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyDPvu4le2PsD5Upg92KvT6weuTsp1NhO',
  authDomain: 'platzisquare-210502.firebaseapp.com',
  databaseURL: 'https://platzisquare-210502.firebaseio.com',
  storageBucket: 'platzisquare-210502.appspot.com',
  messagingSenderId: '196236982915'
};

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
    Routing,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQVf0ORpvGRSLetPtUGzJfgTXz8p4SVK8'
    })
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule {}
