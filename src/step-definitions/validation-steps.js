import { Then } from "@wdio/cucumber-framework";
import { page } from "../po";
import { compareText } from "./utils/compare-text";

Then(
  "I should see an error message {string} {string}",
  async (shouldBeParam, errorMessage) => {
    const actualMessage = await page("login").getErrorMessageText();
    return compareText(actualMessage, errorMessage, shouldBeParam);
  }
);

Then(
  "I should see page title in inventory page {string} {string}",
  async (shouldBeParam, expectedTitle) => {
    const actualTitle = await page("inventory").getPageTitle();
    return compareText(actualTitle, expectedTitle, shouldBeParam);
  }
);
