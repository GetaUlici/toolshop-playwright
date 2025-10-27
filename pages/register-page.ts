import { test, expect, Locator, Page } from '@playwright/test';

export class RegisterPage {
  page: Page;
  firstNameField: Locator;
  lastNameField: Locator;
  dobField: Locator;
  streetField: Locator;
  postalCodeField: Locator;
  cityField: Locator;
  stateField: Locator;
  dropdownCountry: Locator;
  phoneField: Locator;
  emailField: Locator;
  pswField: Locator;
  submitBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameField = page.locator('[data-test="first-name"]');
    this.lastNameField = page.locator('[data-test="last-name"]');
    this.dobField = page.locator('[data-test="dob"]');
    this.streetField = page.locator('[data-test="street"]');
    this.postalCodeField = page.locator('[data-test="postal_code"]');
    this.cityField = page.locator('[data-test="city"]');
    this.stateField = page.locator('[data-test="state"]');
    this.dropdownCountry = page.locator('[data-test="country"]');
    this.phoneField = page.locator('[data-test="phone"]');
    this.emailField = page.locator('[data-test="email"]');
    this.pswField = page.locator('[data-test="password"]');
    this.submitBtn = page.locator('[data-test="register-submit"]');
  }

  async selectDropdownCountryOption(country: string) {
    await this.dropdownCountry.selectOption(country);
  }
}
