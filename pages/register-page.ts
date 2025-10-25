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
    this.lastNameField = page.locator('[data-test="last-name"]');
    this.dobField = page.locator('[data-test="dob"]');
    this.streetField = page.locator('[data-test="street"]');
    this.postalCodeField = page.locator('[data-test="postal_code"]');
  }
}
