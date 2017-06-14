import { Sport }                from './sport';
import { TournamentType }       from './TournamentType';
export class Tournament {
  id: number;
  name: string;
  type: number;
  sport: Sport;
  tournamentType: TournamentType;
  participantCount: number;
}
