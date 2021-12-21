const { test, expect } = require("@playwright/test");

test("Example test", async ({ page }) => {
  await page.goto("/");
  const sloganEl = page.locator(".banner-text > .sppb-addon-content");
  await expect(sloganEl).toContainText("We develop SOFTWARE");
});
