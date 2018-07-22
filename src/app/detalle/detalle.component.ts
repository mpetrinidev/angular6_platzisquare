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
      nombre: 'Floreria la Gardenia',
      descripcion:
        'Descripción de este negocio. Mas adelante tendremos mas informacion'
    },
    {
      id: 2,
      plan: 'gratuito',
      cercania: 1,
      distancia: 1.8,
      active: true,
      nombre: 'Donas la pasadita',
      descripcion:
        'Descripción de este negocio. Mas adelante tendremos mas informacion'
    },
    {
      id: 3,
      plan: 'gratuito',
      cercania: 2,
      distancia: 5,
      active: true,
      nombre: 'Veterinaria huellitas felices',
      descripcion:
        'Descripción de este negocio. Mas adelante tendremos mas informacion'
    },
    {
      id: 4,
      plan: 'gratuito',
      cercania: 3,
      distancia: 10,
      active: false,
      nombre: 'Sushi shuiroll',
      descripcion:
        'Descripción de este negocio. Mas adelante tendremos mas informacion'
    },
    {
      id: 5,
      plan: 'pagado',
      cercania: 3,
      distancia: 35,
      active: true,
      nombre: 'Hotel la gracia',
      descripcion:
        'Descripción de este negocio. Mas adelante tendremos mas informacion'
    },
    {
      id: 6,
      plan: 'gratuito',
      cercania: 3,
      distancia: 120,
      active: true,
      nombre: 'Zapateria el clavo',
      descripcion:
        'Descripción de este negocio. Mas adelante tendremos mas informacion'
    }
  ];
  id = 0;
  lugar: any = {};

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.lugar = this.buscarLugar();
  }

  ngOnInit() {}

  buscarLugar() {
    return this.lugares.find(l => l.id == this.id);
  }
}
