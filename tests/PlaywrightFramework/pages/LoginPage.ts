import { expect, Locator, Page } from '@playwright/test';


export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('//*[@name="username"]');
    this.password = page.locator('//*[@name="password"]');
    this.loginButton = page.locator('//*[@type="submit"]');
  }

  async loginToApplication(username: string, password: string){
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
    await expect(this.page).toHaveTitle('OrangeHRM');

    return {
      success: true,
      title: 'OrangeHRM',
      message: 'Login completed successfully',
    };
  }
}
