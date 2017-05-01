import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Tournament } from '../tournament';
import { TournamentService } from '../../../services/tournament.service';

@Component({
  selector: 'tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: [ './tournament-detail.component.css' ]
})
export class TournamentDetailComponent implements OnInit {
    tournament: Tournament;

  constructor(
      private tournamentService: TournamentService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.tournamentService.getTournament(+params['id']))
      .subscribe(tournament => this.tournament = tournament);
  }

  save(): void {
    this.tournamentService.update(this.tournament)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
