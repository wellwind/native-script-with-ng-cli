import { NativeScriptWithNgCliPage } from './app.po';

describe('native-script-with-ng-cli App', () => {
  let page: NativeScriptWithNgCliPage;

  beforeEach(() => {
    page = new NativeScriptWithNgCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
