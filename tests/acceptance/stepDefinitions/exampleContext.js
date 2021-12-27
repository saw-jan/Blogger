const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");

Given("the user has navigated to the google search", async function () {
  await page.goto("https://google.com");
});

When("the user searches for {string}", async function (searchTerm) {
  await page.fill("input[name='q']", searchTerm);
  await page.keyboard.press("Enter");
  // console.time("timeout");
  // await page.pause();
  // console.log("timeout");
});

Then("the search list should contain JankariTech website", async function () {
  await expect(page.locator(".g cite").first()).toContainText(
    "jankaritech.com"
  );
});
