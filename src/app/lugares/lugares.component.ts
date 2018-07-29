import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
  animations: [
    // trigger('contenedorAnimable', [
    //   state(
    //     'inicial',
    //     style({
    //       opacity: 0,
    //       backgroundColor: 'green',
    //       transform: 'rotate3d(0,0,0,0deg)'
    //     })
    //   ),
    //   state(
    //     'final',
    //     style({
    //       opacity: 1,
    //       backgroundColor: 'yellow',
    //       transform: 'rotate3d(5,10,20,30deg)'
    //     })
    //   ),
    //   transition('inicial => final', animate(1000)),
    //   transition('final => inicial', animate(500))
    // ]),
    trigger('contenedorAnimable', [
      state(
        'inicial',
        style({
          opacity: 0
        })
      ),
      state(
        'final',
        style({
          opacity: 1
        })
      ),
      transition('inicial => final', animate(2000)),
      transition('final => inicial', animate(1000))
    ])
  ]
})
export class LugaresComponent implements OnInit {
  lat: number = -34.6351364;
  lng: number = -58.4852413;
  lugares: any;
  state = 'inicial';

  constructor(private lugaresService: LugaresService) {}

  ngOnInit() {
    this.lugaresService
      .getLugares()
      .valueChanges()
      .subscribe(
        res => {
          this.lugares = Object.values(res);
          this.state = 'final';
        },
        error => {
          alert(error.statusText);
        }
      );
  }

  animar() {
    this.state = this.state === 'final' ? 'inicial' : 'final';
  }

  animacionInicial(e) {}

  animacionTermina(e) {}
}
