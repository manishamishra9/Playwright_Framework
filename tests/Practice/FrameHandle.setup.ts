import {test} from '@playwright/test'
test("FrameHandle", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/nested_frames");
    const frame1 = page.frameLocator("frame[name='frame-top']").frameLocator("frame[name='frame-left']");
    console.log(await frame1.locator("body").textContent());
    const frame2 = page.frameLocator("frame[name='frame-top']").frameLocator("frame[name='frame-middle']");
    console.log(await frame2.locator("#content").textContent());
    const frame3 = page.frameLocator("frame[name='frame-top']").frameLocator("frame[name='frame-right']");
    console.log(await frame3.locator("body").textContent());
    const frame4 = page.frameLocator("frame[name='frame-bottom']");
    console.log(await frame4.locator("body").textContent());
})