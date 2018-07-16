import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares: any = [
    { active: true, nombre: 'Floreria la Gardenia' },
    { active: true, nombre: 'Donas la pasadita' },
    { active: true, nombre: 'Veterinaria huellitas felices' },
    { active: false, nombre: 'Sushi shuiroll' },
    { active: true, nombre: 'Hotel la gracia' },
    { active: true, nombre: 'Zapateria el clavo' }
  ];

  constructor() {}
}
