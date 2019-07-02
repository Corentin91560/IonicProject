import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { trigger, style, animate, transition } from '@angular/animations';
import { RocketsService } from '../services/spacex-api/rockets.service';
import { Rocket } from '../models/launch.model';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  animations: [
    trigger('fadeIn', [
      // route 'enter' transition
      transition(':enter', [
        // css styles at start of transition
        style({ opacity: 0 }),
        // animation and styles at end of transition
        animate('.4s', style({ opacity: 1 }))
      ]),
    ])
  ]
})
export class Tab1Page implements OnInit {
  rockets: Rocket[];
  observableRockets: Observable<Rocket[]>;

  constructor(private rocketService: RocketsService) { }

  ngOnInit() {
    this.rocketService.getRockets().subscribe(result => {
      this.rockets = result;
    });

    setTimeout(() => {
      this.observableRockets = this.rocketService.getRockets();
    },
      2000);
  }

  buttonClick(rocketId: string) {
    console.log(rocketId);
  }
}
