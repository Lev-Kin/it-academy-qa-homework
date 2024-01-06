const HomePage = require("../pages/HomePage");
const ApiPage = require("../pages/ApiPage");
const DocumentationPage = require("../pages/DocumentationPage");
const assert = require("chai").assert;

describe("WebdriverIO website", function () {
  it("should have the logo displayed", async function () {
    await HomePage.open();
    assert.isTrue(await HomePage.isLogoDisplayed());
  });

  it("should have a search box displayed", async function () {
    await HomePage.open();
    assert.isTrue(await HomePage.isSearchBoxDisplayed());
  });

  it("should navigate to the documentation page", async function () {
    await HomePage.navigateToDocumentation();
    assert.isTrue(await DocumentationPage.hasTitle("Getting Started"));
  });

  it("should navigate to the API page", async function () {
    await HomePage.navigateToApi();
    assert.isTrue(await ApiPage.hasTitle("Introduction"));
  });
});
