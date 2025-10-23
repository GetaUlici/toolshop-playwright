import { faker } from '@faker-js/faker';
import { expect, test as setup } from '../base.ts';
import path from 'path';

const baseUrl = 'https://practicesoftwaretesting.com/';
const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('atuhenticate', async ({ page, registerPage, loginPage, navPage }) => {
  // Register flow
 await page.goto(`${baseUrl}/auth/register`);

    await registerPage.firstNameField.fill('Geta');
    await registerPage.lastNameField.fill('Dow');
    await registerPage.dobField.fill('1990-11-11');
    await registerPage.streetField.fill('street');
    await registerPage.postalCodeField.fill('11111111');
    await page.locator('[data-test="city"]').fill('cluj');
    await page.locator('[data-test="state"]').fill('cluj');
    await page.locator('[data-test="country"]').selectOption('AT');
    await page.locator('[data-test="phone"]').fill('1111111');
    const randomEmail = faker.internet.email();
    await page.locator('[data-test="email"]').fill(`${randomEmail}`);
    console.log(randomEmail)
    await page.locator('[data-test="password"]').fill('Superpass123*');
    await page.locator('[data-test="register-submit"]').click();
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();


    //login
    await navPage.signInBtn.click();
    await loginPage.doLogin(randomEmail, 'Superpass123*');
    await expect(page.locator('[data-test="nav-menu"]')).toBeVisible();
    await expect(page.locator('[data-test="page-title"]')).toBeVisible();


  // store browser storage into a json file
    await page.context().storageState({path: authFile});
});

