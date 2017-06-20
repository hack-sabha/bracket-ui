import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Tournament } from '../models/tournament';
import { Sport } from '../models/sport';

@Injectable()
export class TournamentService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private tournamentsUrl = 'api/tournaments';  // URL to web api
    private sportsUrl = 'api/sports';  // URL to web api

    constructor(private http: Http) { }

    getTournaments(): Promise<Tournament[]> {
        return this.http.get(this.tournamentsUrl)
            .toPromise()
            .then(response => response.json().data as Tournament[])
            .catch(this.handleError);
    }

    getSports(): Promise<Sport[]> {
        return this.http.get(this.sportsUrl)
            .toPromise()
            .then(response => response.json().data as Sport[])
            .catch(this.handleError);
    }

    getTournament(id: number): Promise<Tournament> {
        const url = `${this.tournamentsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Tournament)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.tournamentsUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(name: string, type: number, sportId: number, participantCount: number): Promise<Tournament> {
        return this.http
            .post(this.tournamentsUrl, JSON.stringify({ name: name, type: type, sportId: sportId, participantCount: participantCount }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Tournament)
            .catch(this.handleError);
    }

    update(tournament: Tournament): Promise<Tournament> {
        const url = `${this.tournamentsUrl}/${tournament.id}`;
        return this.http
            .put(url, JSON.stringify(tournament), { headers: this.headers })
            .toPromise()
            .then(() => tournament)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

