const chai = require("chai");
const assert = chai.assert;

describe("WebdriverIO website", function () {
  it("should have the right title", async function () {
    await browser.url("https://webdriver.io/");
    const title = await browser.getTitle();
    assert.equal(
      title,
      "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
    );
  });

  it("should display the WebdriverIO logo", async function () {
    await browser.url("https://webdriver.io/");
    const logo = await $(".svg_j3ED");
    assert.isTrue(await logo.isDisplayed());
  });

  it("should have a search box", async function () {
    await browser.url("https://webdriver.io/");
    const searchBox = await $(".DocSearch-Button-Placeholder");
    assert.isTrue(await searchBox.isDisplayed());
  });

  it("should navigate to the documentation page", async function () {
    await browser.url("https://webdriver.io/");

    let docsLink = await $("=Docs");

    if (!(await docsLink.isDisplayed())) {
      const menuButton = await $(".navbar__toggle");
      await menuButton.click();
    }

    await docsLink.click();

    await browser.waitUntil(
      async () => (await browser.getTitle()).includes("Getting Started"),
      {
        timeout: 5000,
        timeoutMsg: "Expected title to be updated after navigating to Docs",
      }
    );

    const title = await browser.getTitle();
    assert.include(title, "Getting Started");
  });

  it("should navigate to API page", async function () {
    await browser.url("https://webdriver.io/");

    let docsLink = await $("=API");

    if (!(await docsLink.isDisplayed())) {
      const menuButton = await $(".navbar__toggle");
      await menuButton.click();
    }

    await docsLink.click();

    await browser.waitUntil(
      async () => (await browser.getTitle()).includes("Introduction"),
      {
        timeout: 5000,
        timeoutMsg: "Expected title to be updated after navigating to API",
      }
    );

    const title = await browser.getTitle();
    assert.include(title, "Introduction");
  });
});
