import { test, expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  page: Page;
  emailField: Locator;
  pswField: Locator;
  submitBtn: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.emailField = page.locator('[data-test="email"]');
    this.pswField =  page.locator('[data-test="password"]');
    this.submitBtn = page.locator('[data-test="login-submit"]');
  }

  async doLogin(email: string, password: string) {
    await this.emailField.fill(email);
    await this.pswField.fill(password);
    await this.submitBtn.click();
  }
}