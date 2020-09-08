describe('Google Search', () => {
 it('Google Search - BrowserStack', () => {
      browser.url('https://www.google.com/');
      $('[name="q"]').setValue('BrowserStack');
      browser.getTitle().should.match("Google 1");
  });
})
