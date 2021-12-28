const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { SearchPage } = require("../pageObjects/SearchPage");

const searchPage = new SearchPage();

Given("the user has navigated to the google search", async function () {
  await searchPage.navigate();
});

When("the user searches for {string}", async function (searchTerm) {
  await searchPage.search(searchTerm);
  // console.time("timeout");
  // await page.pause();
  // console.log("timeout");
});

Then("the search list should contain JankariTech website", async function () {
  await expect(page.locator(".g cite").first()).toContainText(
    "jankaritech.com"
  );
});
