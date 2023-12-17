const { devices } = require("@playwright/test");

module.exports = {
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  timeout: 30000,
  retries: 1,
  testDir: "./tests",

  use: {
    viewport: { width: 1280, height: 720 },
    screenshot: "only-on-failure",
  },
};
