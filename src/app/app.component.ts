import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares: any = [
    {
      plan: 'pagado',
      cercania: 1,
      distancia: 1,
      active: true,
      nombre: 'Floreria la Gardenia'
    },
    {
      plan: 'gratuito',
      cercania: 1,
      distancia: 1.8,
      active: true,
      nombre: 'Donas la pasadita'
    },
    {
      plan: 'gratuito',
      cercania: 2,
      distancia: 5,
      active: true,
      nombre: 'Veterinaria huellitas felices'
    },
    {
      plan: 'gratuito',
      cercania: 3,
      distancia: 10,
      active: false,
      nombre: 'Sushi shuiroll'
    },
    {
      plan: 'pagado',
      cercania: 3,
      distancia: 35,
      active: true,
      nombre: 'Hotel la gracia'
    },
    {
      plan: 'gratuito',
      cercania: 3,
      distancia: 120,
      active: true,
      nombre: 'Zapateria el clavo'
    }
  ];

  lat: number = -34.6351364;
  lng: number = -58.4852413;

  constructor() {}
}
