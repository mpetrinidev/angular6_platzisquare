import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {
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

  constructor(private firebaseDatabase: AngularFireDatabase) {}

  public getLugares() {
    return this.lugares;
  }

  public getLugar(id: number) {
    return this.lugares.find(l => l.id == id);
  }

  public guardarLugar(lugar) {
    this.firebaseDatabase.database.ref('lugares/1').set(lugar);
  }
}
