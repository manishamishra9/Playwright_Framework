import { test, chromium , expect} from '@playwright/test';
import { Console } from 'console';

test("multiple page launch", async () => {
  
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    const page1 = await context.newPage();
    console.log("No of Pages - " + context.pages.length);

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle(/OrangeHRM/);
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

})

test("child browser launch", async () => {
  
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
   
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    // Example: scroll to the username input field
    const usernameInput = page.locator("//*[@href='http://www.orangehrm.com']");
    await usernameInput.scrollIntoViewIfNeeded();
    const promise = context.waitForEvent('page');
       await usernameInput.click();
    const page1 = await promise;
    await page1.waitForLoadState();
    console.log("Child Page URL: " + page1.url());
    await expect(page1).toHaveURL("https://www.orangehrm.com/");

    /*// Wait for new page/window to open
const [newPage] = await Promise.all([
  context.waitForEvent('page'), // Wait for new page
  usernameInput.click() // Action that triggers new window
]);
*/
    await page.close();
    })
    
