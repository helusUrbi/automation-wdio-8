describe('Homework', async () => {

    it('should open page and create screenshot', async () => {
        await browser.url('/registrace');
        await browser.saveScreenshot('./test/specs/homework/scrn_registrace.png');
    });

});
