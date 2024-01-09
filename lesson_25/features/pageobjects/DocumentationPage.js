const BasePage = require("./BasePage");

class DocumentationPage extends BasePage {
  async navigateToDocumentation() {
    await this.open();
    const docsLink = await $("=Docs");
    if (!(await docsLink.isDisplayed())) {
      const menuButton = await $(this.navbar);
      await menuButton.click();
    }
    await docsLink.click();
  }
}

module.exports = new DocumentationPage();
