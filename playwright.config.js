const { devices } = require("@playwright/test");

const config = {
  retries: 0,
  use: {
    trace: "retain-on-failure",
    headless: false,
    baseURL: "https://google.com",
  },
  workers: 1,
  testDir: "./tests/acceptance",
  projects: [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    // {
    //   name: "firefox",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //   },
    // },
    // {
    //   name: "iphone11",
    //   use: {
    //     browserName: "chromium",
    //     ...devices["iPhone 11"],
    //   },
    // },
  ],
};

module.exports = config;
