class BasePage {
  constructor(url) {
    this.url = url;
  }

  async open() {
    return await browser.url(this.url);
  }
}

export default BasePage;
