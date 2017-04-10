import { SuprematismToggleUpdatePage } from './app.po';

describe('suprematism-toggle-update App', () => {
  let page: SuprematismToggleUpdatePage;

  beforeEach(() => {
    page = new SuprematismToggleUpdatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('supre works!');
  });
});
