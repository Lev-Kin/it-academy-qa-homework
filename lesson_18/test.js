const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("ChromeDriver website tests", () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test("Test title 'ChromeDriver'", async () => {
    await driver.get("https://chromedriver.chromium.org/home");
    let title = await driver.getTitle();
    expect(title).to.match(/^ChromeDriver/);
  });

  test("Navigate to 'Chrome Extensions' and check title", async () => {
    let chromeExtensionsLink = await driver.findElement(
      By.xpath("//a[contains(text(), 'Chrome Extensions')]")
    );

    await driver.executeScript("arguments[0].click()", chromeExtensionsLink);

    let title = await driver.getTitle();
    expect(title).to.match(/Chrome Extensions/);
  });

  test("Highlight title and verify 'Chrome Extensions'", async () => {
    let h1 = await driver.wait(until.elementLocated(By.css("h1")), 10000);
    await driver.executeScript(
      "arguments[0].style.backgroundColor = 'yellow'",
      h1
    );

    let title = await h1.getText();
    expect(title).to.equal("Chrome Extensions");
  });

  test("Search 'driver' and verify first result", async () => {
    // Открываем меню поиска
    let searchHeaderButton = await driver.findElement(
      By.xpath('//div[@class="U26fgb mUbCce fKz7Od iWs3gf Wdnjke M9Bg4d"]')
    );
    await driver.wait(until.elementIsVisible(searchHeaderButton), 10000);
    await searchHeaderButton.click();

    // Вводим 'driver' в поле поиска
    let searchHeaderInputField = await driver.findElement(
      By.xpath('//input[@class="whsOnd zHQkBf"]')
    );
    await driver.wait(until.elementIsEnabled(searchHeaderInputField), 10000);
    await searchHeaderInputField.sendKeys("driver", Key.ENTER);

    // Появления результатов поиска и проверить первую ссылку
    let firstLinkOnSearchResultPage = await driver
      .wait(until.elementLocated(By.xpath("//a[@data-position=1]")), 10000)
      .getAttribute("href");

    expect(firstLinkOnSearchResultPage.toLowerCase()).to.include("driver");
  });
});
