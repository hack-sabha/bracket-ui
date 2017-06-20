import { TournamentUiPage } from './app.po';

describe('tournament-ui App', () => {
  let page: TournamentUiPage;

  beforeEach(() => {
    page = new TournamentUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
