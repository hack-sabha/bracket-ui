import { Sport }                from './sport';
import { TournamentType }       from './tournament-type';
export class Tournament {
    id: number;
    name: string;
    type: number;
    sport: Sport;
    tournamentType: TournamentType;
    participantCount: number;
}
