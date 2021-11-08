const { Given, When, Then } = require("@cucumber/cucumber");
const { client } = require("nightwatch-api");

Given("user has navigated to the home page", function () {
  return client
    .url("http://localhost:3001/")
    .click("button[data-bs-target='#loginModal']")
    .waitForElementVisible("#loginModal");
});

When("user logs in with email {string} and password {string}", function (email, password) {
  return client
    .setValue("input#email-login", email)
    .setValue("input#password-login", password)
    .click(".login-form > div > button[type='submit']");
});

Then("user should see dashboard", function () {
  return client.assert.containsText("a[type='button'].btn-outline-success", "Dashboard");
});
