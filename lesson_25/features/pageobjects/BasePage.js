class BasePage {
  constructor() {
    this.navbar = ".navbar__toggle";
  }

  async openUrl(url) {
    await browser.url(url);
  }

  async open() {
    await this.openUrl("https://webdriver.io/");
  }

  async getTitle() {
    return await browser.getTitle();
  }

  async hasTitle(expectedTitle) {
    const title = await this.getTitle();
    return title.includes(expectedTitle);
  }
}

module.exports = BasePage;
