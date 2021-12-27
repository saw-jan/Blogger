const { test, expect } = require("@playwright/test");

test("Example test", async ({ page }) => {
  await page.goto("/");
  const sloganEl = page.locator(".banner-text > .sppb-addon-content");
  // console.time("timeout");
  // await page.pause();
  // console.timeEnd("timeout");
  await expect(sloganEl).toContainText("We develop SOFTWARE");
});
