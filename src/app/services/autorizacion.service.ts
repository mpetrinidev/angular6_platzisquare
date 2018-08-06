import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebaseApp from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {
  constructor(private firebase: AngularFireAuth, private router: Router) {
    this.isLogged();
  }

  facebookLogin() {
    this.firebase.auth
      .signInWithPopup(new firebaseApp.auth.FacebookAuthProvider())
      .then(() => {
        this.router.navigate(['lugares']);
      })
      .catch(err => {
        alert(err);
      });
  }

  login(email, password) {
    this.firebase.auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.router.navigate(['lugares']);
      })
      .catch(err => alert(err));
  }

  registro(email, password) {
    this.firebase.auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.router.navigate(['login']);
      })
      .catch(err => alert(err));
  }

  isLogged() {
    return this.firebase.authState;
  }

  logout() {
    this.firebase.auth.signOut();
    this.router.navigate(['login']);
  }

  getUser() {
    return this.firebase.auth;
  }
}
