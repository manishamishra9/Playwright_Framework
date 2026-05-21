import { test} from '@playwright/test';

test("dropdownlandle handle", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/dropdown");
    await page.selectOption('#dropdown', '1'); // Select by value
    await page.selectOption('#dropdown', { label: 'Option 2' }); // Select by label
    await page.locator('#dropdown').selectOption({ index : 1 }); // Select by value using locator
   // await page.selectOption('#dropdown', { index: 1 }); // Select by index  

})