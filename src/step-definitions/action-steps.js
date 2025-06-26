import { Given, When } from "@wdio/cucumber-framework";
import { page } from "../po";

Given("I open {string} page", async (pageName) => {
  return await page(pageName).open();
});

When(
  /^I enter (.+) and (.+) in the login form$/,
  async (username, password) => {
    return await page("login").enterCredentials(username, password);
  }
);

When(/^I clear (all|username|password) form inputs?$/, async (targetField) => {
  await page("login").clearCredentials(targetField);
});

When("I click on Login button", async () => {
  return await page("login").clickLoginButton();
});
