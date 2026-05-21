import {test} from '@playwright/test'




test("keyboard", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/key_presses");
    await page.locator("#target").click();
    await page.keyboard.press("a");
    await page.keyboard.press("ControlLeft");
    await page.keyboard.press("ControlRight");  
    await page.keyboard.press("Enter");
    await page.keyboard.press("Backspace");
    await page.keyboard.press("Tab");
    await page.keyboard.press("ShiftLeft");
    await page.keyboard.press("ShiftRight");
    
    
})