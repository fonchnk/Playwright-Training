import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  await expect(
    page.getByText(
      'Playwright enables reliable end-to-end testing for modern web apps.'
    )
  ).toBeVisible();
  await page.waitForTimeout(2000);
  await page.close();
});

