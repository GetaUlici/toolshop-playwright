import { test, expect, Locator, Page } from '@playwright/test';

export class NavPage {
  page: Page;
  signInBtn: Locator;
 

  constructor(page: Page) {
    this.page = page;
    this.signInBtn = page.locator('[data-test="nav-sign-in"]');
   
  }
}