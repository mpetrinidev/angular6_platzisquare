import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  lugares: any = [
    {
      id: 1,
      plan: 'pagado',
      cercania: 1,
      distancia: 1,
      active: true,
      nombre: 'Floreria la Gardenia'
    },
    {
      id: 2,
      plan: 'gratuito',
      cercania: 1,
      distancia: 1.8,
      active: true,
      nombre: 'Donas la pasadita'
    },
    {
      id: 3,
      plan: 'gratuito',
      cercania: 2,
      distancia: 5,
      active: true,
      nombre: 'Veterinaria huellitas felices'
    },
    {
      id: 4,
      plan: 'gratuito',
      cercania: 3,
      distancia: 10,
      active: false,
      nombre: 'Sushi shuiroll'
    },
    {
      id: 5,
      plan: 'pagado',
      cercania: 3,
      distancia: 35,
      active: true,
      nombre: 'Hotel la gracia'
    },
    {
      id: 6,
      plan: 'gratuito',
      cercania: 3,
      distancia: 120,
      active: true,
      nombre: 'Zapateria el clavo'
    }
  ];

  id = null;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.buscarLugar());
  }

  ngOnInit() {}

  buscarLugar() {
    return this.lugares.find(l => {
      return l.id === this.id;
    });
  }
}
