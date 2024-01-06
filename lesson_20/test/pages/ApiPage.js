class ApiPage {
  async getTitle() {
    return await browser.getTitle();
  }

  async hasTitle(expectedTitle) {
    const title = await this.getTitle();
    return title.includes(expectedTitle);
  }
}

module.exports = new ApiPage();
