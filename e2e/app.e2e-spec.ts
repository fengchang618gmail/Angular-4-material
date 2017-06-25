import { Angular4MaterialPage } from './app.po';

describe('angular4-material App', () => {
  let page: Angular4MaterialPage;

  beforeEach(() => {
    page = new Angular4MaterialPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
