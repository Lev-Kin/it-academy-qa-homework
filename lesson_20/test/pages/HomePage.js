class HomePage {
  async open() {
    await browser.url("https://webdriver.io/");
  }

  async isLogoDisplayed() {
    const logo = await $(".svg_j3ED");
    return await logo.isDisplayed();
  }

  async isSearchBoxDisplayed() {
    const searchBox = await $(".DocSearch-Button-Placeholder");
    return await searchBox.isDisplayed();
  }

  async navigateToDocumentation() {
    await this.open();
    const docsLink = await $("=Docs");
    if (!(await docsLink.isDisplayed())) {
      const menuButton = await $(".navbar__toggle");
      await menuButton.click();
    }
    await docsLink.click();
  }

  async navigateToApi() {
    await this.open();
    const apiLink = await $("=API");
    if (!(await apiLink.isDisplayed())) {
      const menuButton = await $(".navbar__toggle");
      await menuButton.click();
    }
    await apiLink.click();
  }
}

module.exports = new HomePage();
