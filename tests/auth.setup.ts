import { expect, test as setup } from '../base.ts';

import path from 'node:path';

const baseUrl = 'https://practicesoftwaretesting.com/';
const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('atuhenticate', async ({ page, registerPage, loginPage, navPage }) => {
  const { faker } = await import('@faker-js/faker');
  // Register flow
  await page.goto(`${baseUrl}/auth/register`);

  await registerPage.firstNameField.fill('John');
  await registerPage.lastNameField.fill('Doe');
  await registerPage.dobField.fill('1990-11-11');
  await registerPage.streetField.fill('street');
  await registerPage.postalCodeField.fill('11111111');
  await registerPage.cityField.fill('cluj');
  await registerPage.stateField.fill('cluj');
  await registerPage.selectDropdownCountryOption('AT');
  await registerPage.phoneField.fill('1111111');
  const randomEmail = faker.internet.email();
  await registerPage.emailField.fill(`${randomEmail}`);
  console.log(randomEmail);
  await registerPage.pswField.fill('Superpass123*');
  await registerPage.submitBtn.click();
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

  //login
  await navPage.signInBtn.click();
  await loginPage.doLogin(randomEmail, 'Superpass123*');
  await expect(page.locator('[data-test="nav-menu"]')).toBeVisible();
  await expect(page.locator('[data-test="page-title"]')).toBeVisible();

  // store browser storage into a json file
  await page.context().storageState({ path: authFile });
});
