import { test, expect, Page } from '@playwright/test';
import { initializeTest, login, closeBrowser } from '../utils/core';
import { LoginPage } from '../pages/LoginPage';

let sharedPage: Page;
let sharedUsername: string;
let sharedPassword: string;
let sharedAppUrl: string;

test.beforeEach(async ({ browser }) => {
    const { page, username, password, appUrl } = await initializeTest(browser);
    sharedPage = page;
    sharedUsername = username;
    sharedPassword = password;
    sharedAppUrl = appUrl;
});

test('Sample Test - Verify Page Title after Login @Smoke', async () => {

    await login(sharedPage, sharedAppUrl);
    await expect(sharedPage).toHaveTitle('OrangeHRM');
    const loginPage = new LoginPage(sharedPage);
    await loginPage.loginToApplication(sharedUsername, sharedPassword); // ✅ do login here
    await expect(sharedPage).toHaveTitle('OrangeHRM');
    await sharedPage.screenshot({ path: 'screenshots/filled-form.png' });
});

test.afterEach(async ({ browser }, testInfo) => {
    await sharedPage.screenshot({ path: `screenshots/${testInfo.title}.png` });
    await closeBrowser(browser);
});