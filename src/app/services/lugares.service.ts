import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  lugares: any = [];

  constructor(
    private firebaseDatabase: AngularFireDatabase,
    private http: HttpClient
  ) {}

  public getLugares() {
    return this.firebaseDatabase.list('lugares/');
  }

  public getLugar(id) {
    return this.firebaseDatabase.object('lugares/' + id);
  }

  public guardarLugar(lugar) {
    this.firebaseDatabase.database.ref('lugares/' + lugar.id).set(lugar);
  }

  public obtenerGeoData(direccion) {
    return this.http.get<any>(
      'http://maps.google.com/maps/api/geocode/json?address=' + direccion
    );
  }
}
