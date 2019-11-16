var enact = {}
module.export = {
    beforeEach: browser => {
        enact = browser.page.reEnactPage();
        enact
            .navigate();
    },
    after: browser => {
        browser
            .end();
    },
    'Test Here': browser => {

    }
}