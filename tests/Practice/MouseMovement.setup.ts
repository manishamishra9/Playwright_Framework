import { test} from '@playwright/test';

test("DragAndDrop", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
    const source = page.locator("#column-a");
    const target = page.locator("#column-b");   
    await source.dragTo(target);    

})

test("Mousehover", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/hovers");
    const firstImage = page.locator("div.figure").nth(0);
    await firstImage.hover();   
    const tooltip = page.locator("div.figure").nth(0).locator("h5");
    await tooltip.waitFor();
    console.log(await tooltip.textContent());      

})

test("rightClick", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/context_menu");
    const box = page.locator("#hot-spot");
    const dialog = page.on('dialog', async (dialog) => {
        console.log('Right click dialog:', dialog.message());
        await dialog.accept();
    }); 
    await box.click({ button: 'right' }); // Trigger the right-click dialog
     
})
test("doubleClick", async ({ page }) => {
// Double click on an element
await page.locator('#my-element').dblclick();

// Or using page.dblclick with selector
await page.dblclick('#my-element');
})