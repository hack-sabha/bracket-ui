import { TparkUIPage } from './app.po';

describe('tpark-ui App', () => {
  let page: TparkUIPage;

  beforeEach(() => {
    page = new TparkUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
