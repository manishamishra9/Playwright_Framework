import { test} from '@playwright/test';

test("Basic_Auth handle", async ({ page }) => {

    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    

})