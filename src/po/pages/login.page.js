import BasePage from "./base.page";
import { Key } from "webdriverio";

class LoginPage extends BasePage {
  constructor() {
    super("/");
  }

  /**
   *
   * @param name {'username' | 'password'}
   * @returns
   */
  input(name) {
    const selectors = {
      username: "//input[@id='user-name']",
      password: "//input[@id='password']",
    };
    return $(selectors[name.toLowerCase()]);
  }

  get loginButton() {
    return $("//input[@id='login-button']");
  }

  get errorMessage() {
    return $("//h3[@data-test='error']");
  }

  async enterCredentials(username, password) {
    await this.input("username").setValue(username);
    await this.input("password").setValue(password);
  }

  /**
   *
   * @param targetField {'username' | 'password' | 'all'}
   */
  async clearCredentials(targetField) {
    const field = targetField.toLowerCase();
    if (field === "username" || field === "all") {
      const username = this.input("username");
      const value = await username.getValue();

      const backspaces = new Array(value.length).fill(Key.Backspace);
      await username.click();
      await browser.keys(backspaces);
    }
    if (field === "password" || field === "all") {
      const password = this.input("password");
      const value = await password.getValue();

      const backspaces = new Array(value.length).fill(Key.Backspace);
      await password.click();
      await browser.keys(backspaces);
    }
  }

  async clickLoginButton() {
    return await this.loginButton.click();
  }

  async getErrorMessageText() {
    return await this.errorMessage.getText();
  }
}

export default new LoginPage();
