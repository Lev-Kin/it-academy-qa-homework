const { Given, When, Then } = require("@wdio/cucumber-framework");
const HomePage = require("../pageobjects/HomePage");
const ApiPage = require("../pageobjects/ApiPage");
const DocumentationPage = require("../pageobjects/DocumentationPage");
const assert = require("chai").assert;

Given("I open the home page", async function () {
  await HomePage.open();
});

Then("the {string} should be displayed", async function (elementName) {
  let isDisplayed = false;

  if (elementName === "logo") {
    isDisplayed = await HomePage.isLogoDisplayed();
  } else if (elementName === "search box") {
    isDisplayed = await HomePage.isSearchBoxDisplayed();
  } else {
    assert.fail(`Element "${elementName}" is not recognized`);
  }

  assert.isTrue(isDisplayed, `${elementName} should be displayed`);
});

When("I navigate to the {string} page", async function (pageName) {
  if (pageName === "documentation") {
    await DocumentationPage.navigateToDocumentation();
  } else if (pageName === "API") {
    await ApiPage.navigateToApi();
  } else {
    assert.fail(`Page "${pageName}" is not recognized`);
  }
});

Then(
  "the {string} page should be opened with the title {string}",
  async function (pageName, expectedTitle) {
    let actualTitle = await browser.getTitle();
    assert.include(actualTitle, expectedTitle);
  }
);
