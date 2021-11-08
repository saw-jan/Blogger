const { setDefaultTimeout, BeforeAll, Before, AfterAll, After } = require("@cucumber/cucumber");
const { startWebDriver, stopWebDriver, createSession, closeSession } = require("nightwatch-api");
const path = require("path");

setDefaultTimeout(60000); // 60 seconds

BeforeAll(async function () {
  await startWebDriver({ configFile: path.join(__dirname, "nightwatch.conf.js"), env: "chrome" });
});

Before(async function () {
  await createSession();
});

After(async function () {
  await closeSession();
});

AfterAll(async function () {
  await stopWebDriver();
});
