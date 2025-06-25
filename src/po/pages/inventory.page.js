import BasePage from "./base.page";

class InventoryPage extends BasePage {
  constructor() {
    super("/inventory.html");
  }

  get pageTitle() {
    return $(".app_logo");
  }

  async getPageTitle() {
    return await this.pageTitle.getText();
  }
}

export default new InventoryPage();
