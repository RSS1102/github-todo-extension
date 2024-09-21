// TODO: Add tests for the content runtime script


describe('Webextension Content Runtime Script', () => {
  before(function () {
    if ((browser.capabilities as WebdriverIO.Capabilities).browserName === 'chrome') {
      // Chrome doesn't allow content scripts on the extension pages
    }
  });

  it('should create runtime element on the page', async () => {

  });
});
