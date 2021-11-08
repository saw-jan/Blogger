describe("User login", function () {
  test("valid login", function (browser) {
    browser
      .url("http://localhost:3001/")
      .click("button[data-bs-target='#loginModal']")
      .waitForElementVisible("#loginModal")
      .setValue("input#email-login", "demo@example.com")
      .setValue("input#password-login", "demo")
      .click(".login-form > div > button[type='submit']")
      .assert.containsText("a[type='button'].btn-outline-success", "Dashboard")
      .end();
  });
});
