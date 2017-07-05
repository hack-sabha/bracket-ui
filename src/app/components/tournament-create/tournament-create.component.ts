import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Tournament }           from '../../models/tournament';
import { Sport }                from '../../models/sport';
import { TournamentType }       from '../../models/tournament-type';
import { TournamentService }    from '../../services/tournament.service';

@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.css']
})
export class TournamentCreateComponent implements OnInit {

 tournament: Tournament;
 sports: Sport[];

 constructor(
     private tournamentService: TournamentService,
     private router: Router) { }

  getSports(): void {
      this.tournamentService
          .getSports()
          .then(sports => this.sports = sports);
  }

  add(tournament: Tournament): void {
      tournament.type = 1;
      if (!tournament.name) { return; }
      this.tournamentService.create(tournament)
          .then(tournament => {
              this.tournament = tournament;
          });
  }

  ngOnInit() {
      this.getSports();
      this.tournament = new Tournament();
  }

}
