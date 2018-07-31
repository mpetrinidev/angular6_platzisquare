import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearComponent } from './crear/crear.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MyGuardService } from './services/my-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/lugares', pathMatch: 'full' },
  { path: 'lugares', component: LugaresComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'contacto', component: ContactoComponent },
  {
    path: 'crear/:id',
    component: CrearComponent,
    canActivate: [MyGuardService]
  },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);
