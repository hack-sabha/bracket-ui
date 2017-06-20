import { TestBed, inject } from '@angular/core/testing';

import { TournamentSearchService } from './tournament-search.service';

describe('TournamentSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [TournamentSearchService]
    });
  });

  it('should ...', inject([TournamentSearchService], (service: TournamentSearchService) => {
    expect(service).toBeTruthy();
  }));
});
