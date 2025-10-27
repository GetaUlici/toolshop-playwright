import { test, expect } from '../base';

const baseUrl = 'https://practicesoftwaretesting.com/';

test.describe('User authentication test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${baseUrl}`);
  });

  test('visual test on homepage', async ({ page }) => {
    // Step 1: check the app is fully loaded
    const response = await page.waitForResponse((resp) => resp.url().includes('/products'));
    expect(response.status()).toBe(200);
    await expect(page.locator('[data-test="nav-menu"]')).toBeVisible();
    await page.waitForTimeout(5000);

    // Step 2: Take the ss
    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
      // mask: [
      //   page.locator('h1.display-4'),
      // //   page.locator('#current-time'),
      // ],
      // maskColor: '#cccccc',
    });
  });
});
