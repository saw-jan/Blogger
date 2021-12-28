class SearchPage {
  constructor() {
    this.url = "https://google.com";
    this.elements = {
      searchInput: "//input[@name='q']",
    };
  }

  async navigate() {
    return await page.goto(this.url);
  }

  async search(term) {
    await page.fill(this.elements.searchInput, term);
    return await page.keyboard.press("Enter");
  }
}

module.exports = { SearchPage };
