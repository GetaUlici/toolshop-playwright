import { test, expect } from '../base';
import { faker } from '@faker-js/faker';

const baseUrl = 'https://practicesoftwaretesting.com/';
test.describe('Cart test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${baseUrl}`);
  });

  test('Successfully purchase a product', async ({ page }) => {
    await page.locator('[data-test="nav-home"]').click();
    await page.locator('[data-test="product-name"]').first().click();
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="nav-cart"]').click();
    await expect(page.locator('[data-test="product-title"]')).toBeVisible();
    await page.locator('[data-test="proceed-1"]').click();
    await page.locator('[data-test="proceed-2"]').click();
    await page.locator('[data-test="street"]').click();
    await page.locator('[data-test="proceed-3"]').click();
    await page.locator('[data-test="payment-method"]').selectOption('bank-transfer');
    await page.locator('[data-test="bank_name"]').click();
    await page.locator('[data-test="bank_name"]').fill('aaa');
    await page.locator('[data-test="bank_name"]').click();
    await page.locator('[data-test="bank_name"]').fill('aaaa');
    await page.locator('[data-test="account_name"]').click();
    await page.locator('[data-test="account_name"]').fill('aaa');
    await page.locator('[data-test="account_number"]').click();
    await page.locator('[data-test="account_name"]').fill('aaaa');
    await page.locator('[data-test="account_number"]').fill('11111');
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="payment-success-message"]')).toBeVisible();
    await page.locator('[data-test="finish"]').click();
    await expect(page.getByText('Thanks for your order! Your')).toBeVisible();
  });

  test('Continue shopping functionality test', async ({ page }) => {
    await page.locator('[data-test="product-name"]').first().click();
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="nav-cart"]').click();
    await page.locator('[data-test="continue-shopping"]').click();
    await expect(page.getByText('Sort Name (A - Z)Name (Z - A)')).toBeVisible();
  });

  test('Remove from cart test', async ({ page }) => {
    await page.locator('[data-test="product-name"]').first().click();
    await page.locator('[data-test="add-to-cart"]').click();
    await expect(page.getByRole('alert', { name: 'Product added to shopping' })).toBeVisible();
    await page.locator('[data-test="nav-cart"]').click();
    await expect(page.getByRole('cell', { name: 'Combination Pliers', exact: true })).toBeVisible();
    await page.locator('.btn.btn-danger').click();
    await expect(page.getByText('The cart is empty. Nothing to')).toBeVisible();
  });
});
