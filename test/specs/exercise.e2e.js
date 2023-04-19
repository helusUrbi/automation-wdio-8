import {username, password} from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

describe('Czechitas Login Page', async () => {

    it('should open login page', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');

        //vypiste na konzoli velikost prohlizece
        const windowSize = await browser.getWindowSize();
        console.log(windowSize);
        //screenshot
        await browser.saveScreenshot('login_page.png');
        //pauza testu
        await browser.pause(5000);

    });

});
