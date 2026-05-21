import {test} from '@playwright/test'

test("shadowElement", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/shadowdom");
    console.log(await page.locator("my-paragraph").locator("span").textContent());
})


test("shadowDom", async ({ page }) => {
    await page.goto("https://books-pwakit.appspot.com/");
    await page.locator("book-app")
        .locator(":scope >>> app-header")
        .locator(":scope >>> app-toolbar a[href='/favorites']")
        .click();
    console.log(
        await page.locator("book-app")
            .locator(":scope >>> iron-pages")
            .locator(":scope >>> book-favorites")
            .locator(":scope >>> div h2")
            .textContent()
    );
})





