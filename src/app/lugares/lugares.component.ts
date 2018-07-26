import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
  lat: number = -34.6351364;
  lng: number = -58.4852413;
  lugares: any;

  constructor(private lugaresService: LugaresService) {}

  ngOnInit() {
    this.lugaresService.getLugares().subscribe(
      res => {
        this.lugares = Object.values(res);
      },
      error => {
        alert(error.statusText);
      }
    );
  }
}
