import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/lugares', pathMatch: 'full' },
  { path: 'lugares', component: LugaresComponent },
  { path: 'detalle/:id', component: DetalleComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);
