import { Component, OnInit } from '@angular/core';

import { Tournament }                from '../tournament/tournament';
import { TournamentService }         from '../../services/tournament.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  tournaments: Tournament[] = [];

  constructor(private tournamentService: TournamentService) { }

  ngOnInit(): void {
    this.tournamentService.getTournaments()
      .then(tournaments => this.tournaments = tournaments.slice(1, 5));
  }
}
