import { test} from '@playwright/test';

test("DynamicElements", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dynamic_content");
    const firstText = page.locator("#content").locator("div.row").nth(0).locator("div.large-10").nth(0);
   // await firstText.waitFor();
    console.log(await firstText.textContent());
})
