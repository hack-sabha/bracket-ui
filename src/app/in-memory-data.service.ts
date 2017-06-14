import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let tournaments = [
      { id: 11, name: 'Mr. Nice', type: 1, sport:{sportId: 1, name:'Cricket'}, participantCount: 4},
      { id: 12, name: 'Narco', type: 1, sport:{sportId: 1, name:'Cricket'}, participantCount: 4},
      { id: 13, name: 'Bombasto', type: 1, sport:{sportId: 1, name:'Cricket'}, participantCount: 4},
      { id: 14, name: 'Celeritas', type: 1, sport:{sportId: 1, name:'Cricket'}, participantCount: 4},
      { id: 15, name: 'Magneta', type: 1, sport:{sportId: 1, name:'Cricket'}, participantCount: 4},
      { id: 16, name: 'RubberMan', type: 1, sport:{sportId: 1, name:'Cricket'}, participantCount: 4},
      { id: 17, name: 'Dynama', type: 1, sport:{sportId: 1, name:'Cricket'}, participantCount: 4},
      { id: 18, name: 'Dr IQ', type: 1, sport:{sportId: 1, name:'Cricket'}, participantCount: 4},
      { id: 19, name: 'Magma', type: 1, sport:{sportId: 1, name:'Cricket'}, participantCount: 4},
      { id: 20, name: 'Tornado', type: 1, sport:{sportId: 1, name:'Cricket'}, participantCount: 4}
      ];
    let sports = [
        { sportId: 1, name: 'Cricket' },
        { sportId: 2, name: 'Tennis' }
    ];
    return { tournaments, sports };
  }
}
