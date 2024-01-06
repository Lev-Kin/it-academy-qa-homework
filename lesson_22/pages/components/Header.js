class Header {
  constructor(page) {
    this.page = page;
    this.topNavLinks = ".navbar__item.navbar__link";
    this.colorModeToggle = ".toggle_vylO.colorModeToggle_DEke";
    this.docSearchButton = ".DocSearch-Button";
    this.docSearchInput = "input.DocSearch-Input";
    this.docSearchHitContainer = ".DocSearch-Hit-Container";
  }

  async goToPageWithTopNavMenu(linkNumber) {
    await this.page.locator(this.topNavLinks).nth(linkNumber).click();
  }

  async switchBetweenLightAndDarkMode() {
    await this.page.locator(this.colorModeToggle).click();
  }

  async searchInSearchField(searchQuery, linkNumber) {
    await this.page.locator(this.docSearchButton).click();
    await this.page.locator(this.docSearchInput).waitFor({ state: "visible" });
    await this.page.locator(this.docSearchInput).fill(searchQuery);
    await this.page.locator(this.docSearchHitContainer).nth(linkNumber).click();
  }
}

module.exports = Header;
