import { test, expect, Locator, Page } from '@playwright/test';

export class ProductsPage {
  page: Page;
  product: Locator;
  addToCartBtn: Locator;
  proceedCheckoutBtn1: Locator;
  proceedCheckoutBtn2: Locator;

  constructor(page: Page) {
    this.page = page;
    this.product = page.locator('[data-test="product-name"]');
    this.addToCartBtn = page.locator('[data-test="add-to-cart"]');
    this.proceedCheckoutBtn1 = page.locator('[data-test="proceed-1"]');
    this.proceedCheckoutBtn2 = page.locator('[data-test="proceed-2"]');
  }

  // async doLogin(email: string, password: string) {
  //   await this.emailField.fill(email);
  //   await this.pswField.fill(password);
  //   await this.submitBtn.click();
  // }
}

// await page.locator('[data-test="street"]').click();
// await page.locator('[data-test="proceed-3"]').click();
// await page.locator('[data-test="payment-method"]').selectOption('bank-transfer');
// await page.locator('[data-test="bank_name"]').click();
// await page.locator('[data-test="bank_name"]').fill('aaa');
// await page.locator('[data-test="bank_name"]').click();
// await page.locator('[data-test="bank_name"]').fill('aaaa');
// await page.locator('[data-test="account_name"]').click();
// await page.locator('[data-test="account_name"]').fill('aaa');
// await page.locator('[data-test="account_number"]').click();
// await page.locator('[data-test="account_name"]').fill('aaaa');
// await page.locator('[data-test="account_number"]').fill('11111');
// await page.locator('[data-test="finish"]').click();
// await expect(page.locator('[data-test="payment-success-message"]')).toBeVisible();
// await page.locator('[data-test="finish"]').click();
