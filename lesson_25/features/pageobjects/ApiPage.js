const BasePage = require("./BasePage");

class ApiPage extends BasePage {
  async navigateToApi() {
    await this.open();
    const apiLink = await $("=API");
    if (!(await apiLink.isDisplayed())) {
      const menuButton = await $(this.navbar);
      await menuButton.click();
    }
    await apiLink.click();
  }
}

module.exports = new ApiPage();
