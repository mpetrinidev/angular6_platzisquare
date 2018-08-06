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
  loggedUser = null;

  constructor(private autorizacion: AutorizacionService) {
    autorizacion.isLogged().subscribe(
      res => {
        if (res && res.uid) {
          this.loggedIn = true;
          setTimeout(() => {
            this.loggedUser = this.autorizacion.getUser().currentUser.email;
          }, 500);
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
