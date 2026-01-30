import { test, expect } from '@playwright/test';

test.afterEach(async ({ page }) => {
  await page.close();
});

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // Validate hero tagline text is visible on the page.
  await expect(
    page.getByText(
      'Playwright enables reliable end-to-end testing for modern web apps.'
    )
  ).toBeVisible();
});
