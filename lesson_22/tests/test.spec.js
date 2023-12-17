const { test, expect } = require("@playwright/test");
const MainPage = require("../pages/MainPage");
const Header = require("../pages/components/Header");
const Footer = require("../pages/components/Footer");

test.describe("Test Playwright website", () => {
  let mainPage, header, footer;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    header = new Header(page);
    footer = new Footer(page);
    await mainPage.navigate("https://playwright.dev/");
  });

  test("Navigate to API page", async ({ page }) => {
    await header.goToPageWithTopNavMenu(1);
    await expect(page.locator("h1")).toHaveText("Playwright Library");
  });

  test("Switch between dark and light mode", async ({ page }) => {
    await header.switchBetweenLightAndDarkMode();
    const locator = page.locator(".plugin-pages.plugin-id-default");
    await expect(locator).toHaveAttribute("data-theme", "light");
  });

  test("Navigate to Getting started page", async ({ page }) => {
    await footer.goToPageWithDownNavMenu(0);
    await expect(page.locator("h1")).toHaveText("Installation");
  });

  test("Check functionality of Search field", async ({ page }) => {
    await header.searchInSearchField("Playwright Test", 0);
    await expect(page.locator("h1")).toHaveText("Playwright Test");
  });
});
