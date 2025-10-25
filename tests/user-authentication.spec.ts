import { test, expect } from '../base';
import { faker } from '@faker-js/faker';

const baseUrl = 'https://practicesoftwaretesting.com/';
test.describe('User authentication test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${baseUrl}`);
  });

  test('user should be able to login', async ({ page, navPage, loginPage, registerPage }) => {
    //The user is already logged in based on the auth.setup file
  });

  test('register user', async ({ page, registerPage }) => {
    await page.goto(`${baseUrl}/auth/register`);

    await registerPage.firstNameField.fill('John');
    await registerPage.lastNameField.fill('Doe');
    await registerPage.dobField.fill('1990-11-11');
    await registerPage.streetField.fill('street');
    await registerPage.postalCodeField.fill('11111111');
    await page.locator('[data-test="city"]').fill('cluj');
    await page.locator('[data-test="state"]').fill('cluj');
    await page.locator('[data-test="country"]').selectOption('AT');
    await page.locator('[data-test="phone"]').fill('1111111');
    const randomEmail = faker.internet.email();
    await page.locator('[data-test="email"]').fill(`${randomEmail}`);
    console.log(randomEmail);
    await page.locator('[data-test="password"]').fill('SuperPass123&');
    await page.locator('[data-test="register-submit"]').click();
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  });

  test('wait for api endpoint to respond', async ({ page }) => {
    const response = await page.waitForResponse((resp) => resp.url().includes('/products'));
    expect(response.status()).toBe(200);

    await page.locator('[data-test="nav-menu"]').click();
    await expect(page.locator('[data-test="nav-sign-out"]')).toBeVisible();
  });
});
