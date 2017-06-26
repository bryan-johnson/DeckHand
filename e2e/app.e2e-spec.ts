import { NgcliAppPage } from './app.po';

describe('ngcli-app App', () => {
  let page: NgcliAppPage;

  beforeEach(() => {
    page = new NgcliAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
