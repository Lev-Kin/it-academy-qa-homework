const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.cypress.io',
    browser: 'chrome',
    retries: {
      "runMode": 2,
      "openMode": 2
    },
    supportFile: false,
    fixturesFolder: false,
    video: false,
    screenshotsFolder: 'cypress/screenshots',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    chromeWebSecurity: false
  },
  'watchForFileChanges': false,
  'defaultCommandTimeout': 20000,
  'viewportHeight': 800,
  'viewportWidth': 1280
});