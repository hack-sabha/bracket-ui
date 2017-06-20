import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { TournamentSearchService } from '../../services/tournament-search.service';
import { Tournament } from '../../models/tournament';

@Component({
    selector: 'tournament-search',
    templateUrl: './tournament-search.component.html',
    styleUrls: ['./tournament-search.component.css'],
    providers: [TournamentSearchService]
})
export class TournamentSearchComponent implements OnInit {
    tournamentes: Observable<Tournament[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private tournamentSearchService: TournamentSearchService,
        private router: Router) { }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.tournamentes = this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time the term changes
                // return the http search observable
                ? this.tournamentSearchService.search(term)
                // or the observable of empty tournamentes if there was no search term
                : Observable.of<Tournament[]>([]))
            .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<Tournament[]>([]);
            });
    }

    gotoDetail(tournament: Tournament): void {
        let link = ['/detail', tournament.id];
        this.router.navigate(link);
    }
}
