import { test, expect, Browser, Page } from '@playwright/test';

let page: Page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://example.com');
});

test.afterAll(async () => {
  await page.context().close();
});

test('example test 1', async () => {
  await expect(page).toHaveTitle('Example Domain');
});

test('example test 2', async () => {
  await expect(page.locator('h1')).toHaveText('Example Domain');
});

test('example test 3', async () => {
    await page.locator('a').click();
  //await expect(page.locator('a')).toHaveAttribute('href', 'https://www.iana.org/domains/example');
});
test('example test 4', async () => {
    await page.locator('a').click();
  //await expect(page.locator('h1')).toHaveText('Example Domains');
});
test('example test 5', async () => {
    await page.locator('a').click();
  //await expect(page).toHaveURL('https://www.iana.org/domains/example');
});