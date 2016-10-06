import { SuprematismTogglePage } from './app.po';

describe('suprematism-toggle App', function() {
  let page: SuprematismTogglePage;

  beforeEach(() => {
    page = new SuprematismTogglePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
