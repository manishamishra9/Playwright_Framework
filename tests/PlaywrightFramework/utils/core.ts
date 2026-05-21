import { expect, Browser, Page } from '@playwright/test';

export async function initializeTest(browser: Browser): Promise<{ page: Page; username: string; password: string; appUrl: string }> {
  const username = process.env.Automation_UI_App_Username;
  const password = process.env.Automation_UI_App_Pwd;
  const appUrl = process.env.Automation_UI_App_Url;

  if (!username || !password || !appUrl) {
    throw new Error('Required environment variables are missing');
  }

  const context = await browser.newContext();
  const page = await context.newPage();

  return { page, username, password, appUrl };
}

export async function login(page: Page, appUrl: string): Promise<void> {
  await page.goto(appUrl);
  console.log(`Navigated to ${appUrl}`);
  await expect(page).toHaveTitle('OrangeHRM');
  console.log('Page title verified');
}

export async function closeBrowser(browser: Browser): Promise<void> {
  try {
    await browser.close();
    console.log('Browser closed successfully.');
  } catch (error) {
    console.error('Error closing the browser:', error);
  }
}


