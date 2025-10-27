import { test, expect } from '../base';
import AxeBuilder from '@axe-core/playwright';

const baseUrl = 'https://practicesoftwaretesting.com/';

test.describe('User authentication test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${baseUrl}`);
  });

  test('a11y test on homepage - v1', async ({ page }) => {
    const response = await page.waitForResponse((resp) => resp.url().includes('/products'));
    expect(response.status()).toBe(200);
    await expect(page.locator('[data-test="nav-menu"]')).toBeVisible();
    await page.waitForTimeout(5000);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules(['color-contrast', 'select-name'])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('a11y test on homepage - v2, with custom steps', async ({ page }, testInfo) => {
    const response = await page.waitForResponse((resp) => resp.url().includes('/products'));
    expect(response.status()).toBe(200);
    await expect(page.locator('[data-test="nav-menu"]')).toBeVisible();
    await page.waitForTimeout(5000);

    await test.step('check accessibility', async () => {
      const { violations } = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .withRules(['color-contrast', 'select-name'])
        .analyze();

      await testInfo.attach('accessibility-scan-results', {
        body: JSON.stringify(violations, null, 2),
        contentType: 'application/json',
      });

      expect(violations).toHaveLength(0);
    });

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules(['color-contrast', 'select-name'])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
