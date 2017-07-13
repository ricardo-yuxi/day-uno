import { DayUnoPage } from './app.po';

describe('day-uno App', () => {
  let page: DayUnoPage;

  beforeEach(() => {
    page = new DayUnoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
