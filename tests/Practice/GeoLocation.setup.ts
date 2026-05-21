import {test} from '@playwright/test'

test("GeoLocation", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/geolocation");
    await page.locator("text=Where am I?").click();
    console.log(await page.locator("#latitude").textContent());
    console.log(await page.locator("#longitude").textContent());
});