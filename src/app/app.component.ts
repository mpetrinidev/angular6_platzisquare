import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  loggedIn = false;

  constructor(private autorizacion: AutorizacionService) {
    autorizacion.isLogged().subscribe(
      res => {
        if (res && res.uid) {
          this.loggedIn = true;
        } else {
          this.loggedIn = true;
        }
      },
      err => {
        this.loggedIn = false;
      }
    );
  }

  logout() {
    this.autorizacion.logout();
  }
}
