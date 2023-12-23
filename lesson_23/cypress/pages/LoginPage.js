class LoginPage {
  constructor() {
    this.url = "https://cloud.cypress.io/login";
  }

  elements = {
    signupLink: () => cy.get(".sign-up-link a"),
  };
}

module.exports = new LoginPage();
