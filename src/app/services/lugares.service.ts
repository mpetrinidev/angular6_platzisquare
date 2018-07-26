import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  API_ENDPOINT = 'https://platzisquare-210502.firebaseio.com';
  lugares: any = [];

  constructor(
    private firebaseDatabase: AngularFireDatabase,
    private http: HttpClient
  ) {}

  public getLugares() {
    // return this.firebaseDatabase.list('lugares/');
    return this.http.get(this.API_ENDPOINT + '/lugares.json');
  }

  public getLugar(id) {
    return this.firebaseDatabase.object('lugares/' + id);
  }

  public guardarLugar(lugar) {
    // this.firebaseDatabase.database.ref('lugares/' + lugar.id).set(lugar);
    return this.http
      .post(this.API_ENDPOINT + '/lugares.json', lugar, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      })
      .subscribe();
  }

  public obtenerGeoData(direccion) {
    return this.http.get<any>(
      'http://maps.google.com/maps/api/geocode/json?address=' + direccion
    );
  }
}
