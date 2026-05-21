import { test} from '@playwright/test';
import { dialog_test } from './ReusableMethods/AlertReuasable'; 

test("alert handle", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await dialog_test(page);
    await page.click("text=Click for JS Alert");
    await page.click("text=Click for JS Confirm");
    await page.click("text=Click for JS Prompt")

page.on('dialog', async (dialog) => {
    console.log(dialog.message());
    await dialog.accept();
  })

  await page.click("text=Click for JS Alert");
}); 

test("alert handle option 2", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

page.on('dialog', async (dialog) => {
    console.log(dialog.message());
    await dialog.accept();
  })
  await page.click("text=Click for JS Alert");
}); 


test("alert handle option 3", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
   
  // If you need to wait for an alert specifically
 const [dialog] = await Promise.all([
  page.waitForEvent('dialog'),
  page.click('text=Click for JS Alert'),
]);

console.log('Alert message:', dialog.message());
await dialog.accept();
  
});