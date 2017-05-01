import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Tournament } from '../components/tournament/tournament';

@Injectable()
export class TournamentSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Tournament[]> {
    return this.http
               .get(`app/tournaments/?name=${term}`)
                .map(response => response.json().data as Tournament[]);
  }
}
