import { Then } from "@wdio/cucumber-framework";
import { page } from "../po";

//TODO archivo con comparador equals y contains
Then("I should see the error message {string}", async (errorMessage) => {
  const actualMessage = await page("login").getErrorMessageText();
  return expect(actualMessage).toContain(errorMessage);
});

Then(
  "I should see {string} page title in inventory page",
  async (expectedTitle) => {
    const actualTitle = await page("inventory").getPageTitle();
    return expect(actualTitle).toEqual(expectedTitle);
  }
);
