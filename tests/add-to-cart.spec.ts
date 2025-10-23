import { test, expect } from '../base';
import { faker } from '@faker-js/faker';


const baseUrl = 'https://practicesoftwaretesting.com/';
test.describe('Add to cart test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${baseUrl}`);
  });

  test('add to cart for logged in user test', async ({ page, navPage, loginPage, registerPage }) => {
await page.locator('[data-test="nav-home"]').click();
  await page.locator('[data-test="product-name"]').first().click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="nav-cart"]').click();
  await expect(page.locator('[data-test="nav-sign-in"]')).not.toBeVisible();

    
  });
});
