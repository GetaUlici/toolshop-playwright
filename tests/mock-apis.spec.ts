import { test, expect } from '../base';
import { faker } from '@faker-js/faker';

const baseUrl = 'https://practicesoftwaretesting.com/';
test.describe('API mock examples', () => {
  test('mock products', async ({ page }) => {
    const mockResponse = {
      current_page: 1,
      data: [
        {
          id: '01K81CEV8R2X5RMR6HBSSNKBFR',
          name: 'TAI PRODUCT',
          description: 'automated tests',
          price: 10.15,
          is_location_offer: false,
          is_rental: false,
          co2_rating: 'D',
          in_stock: true,
          is_eco_friendly: false,
          product_image: {
            id: '01K81CEV876Z34GXB0K6GM0B1D',
            by_name: 'Helinton Fantin',
            by_url: 'https:\/\/unsplash.com\/@fantin',
            source_name: 'Unsplash',
            source_url: 'https:\/\/unsplash.com\/photos\/W8BNwvOvW4M',
            file_name: 'pliers01.avif',
            title: 'Combination pliers',
          },
          category: { id: '01K81CEV7RRGW9GK9DBV2QQ8FV', name: 'Pliers', slug: 'pliers' },
          brand: { id: '01K81CETW65AH35HB1QZWDH2DT', name: 'ForgeFlex Tools' },
        },
      ],
      from: 1,
      last_page: 5,
      per_page: 9,
      to: 9,
      total: 45,
    };

    await page.route('**/products*', async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify(mockResponse),
      });
    });

    await page.goto(`${baseUrl}`);
    // await page.pause()
    await expect(page.locator('[data-test="product-name"]')).toContainText('TAI PRODUCT');
    // await page.pause()
    // await expect(page.locator('[data-test="no-results"]')).toBeVisible();
  });
});
