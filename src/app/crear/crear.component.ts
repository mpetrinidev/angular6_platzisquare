import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  lugar: any = {};
  id = null;

  constructor(
    private lugarService: LugaresService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    if (this.id !== 'new') {
      this.lugarService
        .getLugar(this.id)
        .valueChanges()
        .subscribe(res => {
          this.lugar = res;
        });
    }
  }

  ngOnInit() {}

  guardarLugar() {
    var direccion =
      this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;

    this.lugarService.obtenerGeoData(direccion).subscribe(res => {
      let location = res.results[0].geometry.location;

      this.lugar.lat = location.lat;
      this.lugar.lng = location.lng;

      if (this.id !== 'new') {
        this.lugar.id = Date.now();
      }

      this.lugarService.guardarLugar(this.lugar);

      this.lugar = {};
    });
  }
}
