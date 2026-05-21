import { test, chromium } from '@playwright/test';

//launch the browser
test("Launch Browser and Login", async () => {
  
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();
    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await page.close();

});
