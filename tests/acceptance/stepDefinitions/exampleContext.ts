import { Given, When, Then } from "@cucumber/cucumber";
import { World } from "../types";

Given(
  "the user has navigated to the google search",
  async function (this: World) {
    await this.page.goto("https://google.com");
  }
);

When(
  "the user searches for {string}",
  async function (this: World, searchTerm: string) {
    await this.page.fill("input[name='q']", searchTerm);
    await this.page.keyboard.press("Enter");
  }
);

Then(
  "the search list should contain {string} website",
  async function (this: World, website: string) {
    await this.expect(this.page.locator(".g cite").first()).toContainText(
      website
    );
  }
);
