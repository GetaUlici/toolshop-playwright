import { th } from '@faker-js/faker';
import { test, expect, Locator, Page } from '@playwright/test';

export class ProductsPage {
  page: Page;
  product: Locator;
  addToCartBtn: Locator;
  proceedCheckoutBtn1: Locator;
  proceedCheckoutBtn2: Locator;
  streetField: Locator;
  cityField: Locator;
  stateField: Locator;
  countryField: Locator;
  postalCodeField: Locator;
  proceedCheckoutBtn3: Locator;
  dropdownPaymentMethod: Locator;
  bankNameField: Locator;
  accountNameField: Locator;
  accountNumberField: Locator;
  finishBtn1: Locator;
  finishBtn2: Locator;
  continueShoppingBtn: Locator;
  removeProductBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.product = page.locator('[data-test="product-name"]');
    this.addToCartBtn = page.locator('[data-test="add-to-cart"]');
    this.proceedCheckoutBtn1 = page.locator('[data-test="proceed-1"]');
    this.proceedCheckoutBtn2 = page.locator('[data-test="proceed-2"]');
    this.streetField = page.locator('[data-test="street"]');
    this.cityField = page.locator('[data-test="city"]');
    this.stateField = page.locator('[data-test="state"]');
    this.countryField = page.locator('[data-test="country"]');
    this.postalCodeField = page.locator('[data-test="postal_code"]');
    this.proceedCheckoutBtn3 = page.locator('[data-test="proceed-3"]');
    this.dropdownPaymentMethod = page.locator('[data-test="payment-method"]');
    this.bankNameField = page.locator('[data-test="bank_name"]');
    this.accountNameField = page.locator('[data-test="account_name"]');
    this.accountNumberField = page.locator('[data-test="account_number"]');
    this.finishBtn1 = page.locator('[data-test="finish"]');
    this.finishBtn2 = page.locator('[data-test="finish"]');
    this.continueShoppingBtn = page.locator('[data-test="continue-shopping"]');
    this.removeProductBtn = page.locator('.btn.btn-danger');
  }
  async selectDropdownPaymentMethod(method: string) {
    await this.dropdownPaymentMethod.selectOption(method);
  }
}
