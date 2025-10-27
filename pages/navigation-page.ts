import { test, expect, Locator, Page } from '@playwright/test';

export class NavPage {
  page: Page;
  signInBtn: Locator;
  homeBtn: Locator;
  cartBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInBtn = page.locator('[data-test="nav-sign-in"]');
    this.homeBtn = page.locator('[data-test="nav-home"]');
    this.cartBtn = page.locator('[data-test="nav-cart"]');
  }
}
