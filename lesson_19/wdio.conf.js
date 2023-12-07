exports.config = {
  runner: "local",
  specs: ["./test/specs/**/*.js"],
  capabilities: [
    {
      browserName: "chrome",
    },
  ],
  logLevel: "info",
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "mocha",
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
