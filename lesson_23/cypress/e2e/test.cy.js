import homePage from "../pages/HomePage";
import loginPage from "../pages/LoginPage";
import signupPage from "../pages/SignupPage";
import pricingPage from "../pages/PricingPage";

describe("Homepage tests", () => {
  beforeEach(() => {
    homePage.navigate("https://www.cypress.io/");
  });

  it("1 should check if User can visit main page after clicking on the logo", () => {
    homePage.elements.logo().click();
    cy.location("pathname").should("eq", "/");
  });

  it("2 should check navbar links", () => {
    homePage.elements.navbarLink().should((links) => {
      expect(links).to.have.length(5);
      expect(links[0]).to.contain("Product");
      expect(links[1]).to.contain("Docs");
      expect(links[2]).to.contain("Community");
      expect(links[3]).to.contain("Company");
      expect(links[4]).to.contain("Pricing");
    });
  });

  it("3 should display the error message when User registers with the email which is already taken", () => {
    homePage.elements.loginButton().invoke("removeAttr", "target").click();
    loginPage.elements.signupLink().click();
    signupPage.elements.emailLink().click();
    signupPage.login("test2848@gmail.com", "test@7777");
    signupPage.elements
      .errorMessage()
      .should("contain", "That email address is already taken");
  });

  it("4 should change the currency of the card", () => {
    const currency = "RUB";
    const currencySymbol = "₽";
    homePage.elements.navbarPricingLink().click();
    cy.url().should("contain", "https://www.cypress.io/pricing");
    pricingPage.chooseCurrency(currency);
    pricingPage.elements.priceTitles().each((title) => {
      expect(title).to.contain(currencySymbol);
    });
  });
});
