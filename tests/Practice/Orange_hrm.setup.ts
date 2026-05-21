import{test} from '@playwright/test';

test("Orange HRM" ,async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();
    await page.pause();
    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await page.close();
    console.log("Login successful");
})