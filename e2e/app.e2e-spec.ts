import { SuprematismToggleUpdatePage } from './app.po';

describe('suprematism-toggle-update App', () => {
  let page: SuprematismToggleUpdatePage;

  beforeEach(() => {
    page = new SuprematismToggleUpdatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toEqual('Icons Unrelated');
  });
});
