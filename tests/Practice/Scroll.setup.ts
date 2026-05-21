import {test} from '@playwright/test'


test("Scroll", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/horizontal_slider");
    const slider = page.locator("input[type='range']");
    await slider.scrollIntoViewIfNeeded();
})