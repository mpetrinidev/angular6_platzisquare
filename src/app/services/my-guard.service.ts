import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AutorizacionService } from './autorizacion.service';

@Injectable({
  providedIn: 'root'
})
export class MyGuardService implements CanActivate {
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

  canActivate() {
    return this.loggedIn;
  }
}
