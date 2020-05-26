describe('BrowserStack Local Testing', () => {
    it('Check if local URL is accessible', () => {
        browser.url('http://localhost:45691/check')
        const message = $('body')
        expect(message).toHaveText('Up and running')
        browser.saveScreenshot('./screenshots/local_env_check.png')
    })
})
