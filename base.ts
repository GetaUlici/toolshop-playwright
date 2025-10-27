import { test as baseTest } from '@playwright/test';
import { LoginPage } from './pages/login-page';
import { NavPage } from './pages/navigation-page';
import { RegisterPage } from './pages/register-page';
import { ProductsPage } from './pages/products-page';

type MyFixtures = {
  loginPage: LoginPage;
  navPage: NavPage;
  registerPage: RegisterPage;
  productsPage: ProductsPage;
};

export const test = baseTest.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  navPage: async ({ page }, use) => {
    await use(new NavPage(page));
  },

  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },

  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
});

export { expect } from '@playwright/test';
