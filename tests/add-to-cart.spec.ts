import { test, expect } from '../base';

const baseUrl = 'https://practicesoftwaretesting.com/';
test.describe('Cart test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${baseUrl}`);
  });

  test.only('Successfully purchase a product', async ({ page, navPage, productsPage }) => {
    await productsPage.product.first().click();
    await productsPage.addToCartBtn.click();
    await navPage.cartBtn.click();
    await expect(page.locator('[data-test="product-title"]')).toBeVisible();
    await productsPage.proceedCheckoutBtn1.click();
    await productsPage.proceedCheckoutBtn2.click();
    await productsPage.streetField.fill('Eroilor');
    await productsPage.cityField.fill('Cluj-Napoca');
    await productsPage.stateField.fill('Cluj');
    await productsPage.countryField.fill('Romania');
    await productsPage.postalCodeField.fill('123');
    await productsPage.proceedCheckoutBtn3.click();
    await productsPage.selectDropdownPaymentMethod('bank-transfer');
    await productsPage.bankNameField.fill('Transilvania');
    await productsPage.accountNameField.fill('John Doe');
    await productsPage.accountNumberField.fill('12323');
    await productsPage.finishBtn1.click();
    await expect(page.locator('[data-test="payment-success-message"]')).toBeVisible();
    await productsPage.finishBtn2.click();
    await expect(page.getByText('Thanks for your order! Your')).toBeVisible();
  });

  test('Continue shopping functionality test', async ({ page, navPage, productsPage }) => {
    await productsPage.product.first().click();
    await productsPage.addToCartBtn.click();
    await navPage.cartBtn.click();
    await productsPage.continueShoppingBtn.click();
    expect(page.getByText('Sort Name (A - Z)Name (Z - A)')).toBeVisible();
  });

  test('Remove from cart test', async ({ page, productsPage, navPage }) => {
    await productsPage.product.first().click();
    await productsPage.addToCartBtn.click();
    await expect(page.getByRole('alert', { name: 'Product added to shopping' })).toBeVisible();
    await navPage.cartBtn.click();
    await expect(page.getByRole('cell', { name: 'Combination Pliers', exact: true })).toBeVisible();
    await productsPage.removeProductBtn.click();
    await expect(page.getByText('The cart is empty. Nothing to')).toBeVisible();
  });
});
