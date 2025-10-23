
import { test, expect, Locator, Page } from '@playwright/test';

export class RegisterPage {
  page: Page;
  firstNameField: Locator;
  lastNameField: Locator;
  dobField: Locator;
  streetField: Locator;
  postalCodeField: Locator;

  

  constructor(page: Page) {
    this.page = page;
    this.firstNameField = page.locator('[data-test="first-name"]');
    this.lastNameField =   page.locator('[data-test="last-name"]');
    this.dobField = page.locator('[data-test="dob"]');
    this.streetField = page.locator('[data-test="street"]');
    this.postalCodeField = page.locator('[data-test="postal_code"]');
  }

//   async doLogin(email: string, password: string) {
//     await this.emailField.fill(email);
//     await this.pswField.fill(password);
//     await this.submitBtn.click();
//   }
}

// await page.locator('[data-test="first-name"]').fill('Geta');
//   await page.locator('[data-test="last-name"]').fill('Dow');
//   await page.locator('[data-test="dob"]').fill('1990-11-11');
//   await page.locator('[data-test="street"]').fill('street');
//   await page.locator('[data-test="postal_code"]').fill('11111111');
//   await page.locator('[data-test="city"]').fill('cluj');
//   await page.locator('[data-test="state"]').fill('cluj');
//   await page.locator('[data-test="country"]').selectOption('AT');
//   await page.locator('[data-test="phone"]').fill('1111111');
//   await page.locator('[data-test="email"]').fill('test@test.com');
//   await page.locator('[data-test="password"]').fill('Seniorita!2*a');
//   await page.locator('[data-test="register-submit"]').click();