import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private autorizacion: AutorizacionService) {}

  ngOnInit() {}

  login() {
    this.autorizacion.login(this.model.email, this.model.password);
  }

  facebookLogin() {
    this.autorizacion.facebookLogin();
  }
}
