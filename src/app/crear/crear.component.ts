import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, map, debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  lugar: any = {};
  id = null;
  results: Observable<any>;
  private searchField: FormControl;

  constructor(
    private lugarService: LugaresService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    const url = 'https://maps.google.com/maps/api/geocode/json';

    this.id = this.route.snapshot.params['id'];
    if (this.id !== 'new') {
      this.lugarService
        .getLugar(this.id)
        .valueChanges()
        .subscribe(res => {
          this.lugar = res;
        });
    }

    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges.pipe(
      debounceTime(500),
      switchMap(q => this.http.get<any>(`${url}?address=${q}`)),
      map(res => res.results)
    );
  }

  ngOnInit() {}

  seleccionarDireccion(result) {
    const addressComponents = result.address_components;
    const adrressParams: any = {};

    for (let i = 0, len = addressComponents.length; i < len; i++) {
      const type = addressComponents[i].types[0].toString();
      switch (type) {
        case 'street_number':
          adrressParams.street_number = addressComponents[i].long_name;
          break;
        case 'route':
          adrressParams.route = addressComponents[i].long_name;
          break;
        case 'locality':
          adrressParams.locality = addressComponents[i].long_name;
          break;
        case 'country':
          adrressParams.country = addressComponents[i].long_name;
          break;
      }
    }
    this.lugar.calle = `${adrressParams.route}${adrressParams.street_number}`;
    this.lugar.ciudad = adrressParams.locality;
    this.lugar.pais = adrressParams.country;
  }

  guardarLugar() {
    const direccion =
      this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;

    this.lugarService.obtenerGeoData(direccion).subscribe(res => {
      const location = res.results[0].geometry.location;

      this.lugar.lat = location.lat;
      this.lugar.lng = location.lng;

      if (this.id === 'new') {
        this.lugar.id = Date.now();
      }

      this.lugarService.guardarLugar(this.lugar);

      this.lugar = {};
    });
  }
}
