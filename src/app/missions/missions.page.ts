import { Component, OnInit } from '@angular/core';
import { Missions } from '../models/mission.model';
import { MissionsService } from '../services/spacex-api/missions.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.page.html',
  styleUrls: ['./missions.page.scss'],
})
export class MissionsPage implements OnInit {

  missions: Missions[];
  constructor(private missionService: MissionsService) { }
  ngOnInit() {
    this.missionService.getAllMissions().subscribe(result => {
      this.missions = result;
    });
  }
  doRefresh(event: any) {
    this.missionService.getAllMissions().subscribe(result => {
      this.missions = result;
      event.target.complete();
    });
  }

}
