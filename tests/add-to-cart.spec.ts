import { test, expect } from '../base';

const baseUrl = 'https://practicesoftwaretesting.com/';
test.describe('Cart test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${baseUrl}`);
  });

  test('Successfully purchase a product', async ({ page, navPage, productsPage }) => {
    await navPage.homeBtn.click();
    await productsPage.product.first().click();
    await productsPage.addToCartBtn.click();
    await navPage.cartBtn.click();
    await expect(page.locator('[data-test="product-title"]')).toBeVisible();
    await productsPage.proceedCheckoutBtn1.click();
    await productsPage.proceedCheckoutBtn2.click();
    await page.locator('[data-test="street"]').fill('Eroilor');
    await page.locator('[data-test="city"]').fill('cluj-napoca');
    await page.locator('[data-test="state"]').fill('Cluj');
    await page.locator('[data-test="country"]').fill('roamnia');
    await page.locator('[data-test="country"]').fill('romania');
    await page.locator('[data-test="postal_code"]').fill('123');
    await page.locator('[data-test="proceed-3"]').click();
    await page.locator('[data-test="payment-method"]').selectOption('bank-transfer');
    await page.locator('[data-test="bank_name"]').fill('Transilvania');
    await page.locator('[data-test="account_name"]').fill('John Doe');
    await page.locator('[data-test="account_number"]').fill('12323');
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
    expect(page.getByText('Sort Name (A - Z)Name (Z - A)')).toBeVisible();
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
