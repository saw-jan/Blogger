const {
  Before,
  BeforeAll,
  AfterAll,
  After,
  BeforeStep,
  AfterStep,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const { expect } = require("@playwright/test");

// playwright expect to global
global.expect = expect;
// disabling timeout
// you have to implement your own timeouts
// https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/timeouts.md
setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
  // Browsers are expensive in Playwright so only create 1
  global.browser = await chromium.launch({
    // Not headless so we can watch test runs
    headless: false,
    // Slow so we can see things happening
    // slowMo: 50,
  });
});

AfterAll(async function () {
  await global.browser.close();
});

// Create a new browser context and page per scenario
Before(async function () {
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

// before running each step
BeforeStep(function () {
  console.log("Before step...");
});

// after each step
AfterStep(function () {
  console.log("After step...");
});

// Cleanup after each scenario
After(async function () {
  await global.page.close();
  await global.context.close();
});
