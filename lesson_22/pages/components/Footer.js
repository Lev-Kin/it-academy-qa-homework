class Footer {
  constructor(page) {
    this.page = page;
    this.downNavLinks = ".footer__link-item";
  }

  async goToPageWithDownNavMenu(linkNumber) {
    await this.page.locator(this.downNavLinks).nth(linkNumber).click();
  }
}

module.exports = Footer;
