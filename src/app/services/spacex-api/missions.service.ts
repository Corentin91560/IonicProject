import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Missions } from 'src/app/models/mission.model';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {
  private apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
   }

  getAllMissions(): Observable<Missions[]> {
    const requestEndpoint = this.apiBaseUrl + 'missions?order=desc';
    return this.http.get<Missions[]>(requestEndpoint).pipe(
      map(missions => {
        return missions;
      })
    );
  }

  getOneMission(mission): Observable<Missions[]> {
    const requestEndpoint = this.apiBaseUrl + '?mission_id='+mission.mission_id ;
    return this.http.get<Missions[]>(requestEndpoint).pipe(
      map(missions => {
        return missions;
      })
    );
  }

}
