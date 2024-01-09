const BasePage = require('./BasePage');
const { $ } = require('@wdio/globals');

class HomePage extends BasePage {
    constructor() {
        super();
        this.logoSelector = ".svg_j3ED";
        this.searchBoxSelector = ".DocSearch-Button-Placeholder";
    }

    async open() {
        await super.openUrl("https://webdriver.io/");
    }

    async isLogoDisplayed() {
        const logo = await $(this.logoSelector);
        return await logo.isDisplayed();
    }

    async isSearchBoxDisplayed() {
        const searchBox = await $(this.searchBoxSelector);
        return await searchBox.isDisplayed();
    }
}

module.exports = new HomePage();