import { test} from '@playwright/test';

test("upload_download", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/upload");
    const filePath = "tests/Practice/1.png";
    await page.locator("#file-upload").setInputFiles(filePath);
    await page.locator("#file-submit").click();
    console.log(await page.locator("h3").textContent());
  
})

test("download", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/download");
    //await page.locator("a").first().click();
    const [ download ] = await Promise.all([
        page.waitForEvent("download"),
        page.locator("a").first().click()
    ]);
    console.log(await download.path());
    
})