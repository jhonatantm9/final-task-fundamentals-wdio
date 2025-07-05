import { After } from "@wdio/cucumber-framework";

After(async function (scenario) {
  if (scenario.result?.status === "FAILED") {
    const screenshot = await browser.takeScreenshot();
    await this.attach(screenshot, "image/png");
  }
});
