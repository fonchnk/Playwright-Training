import { test, expect } from '@playwright/test';

test.afterEach(async ({ page, context }) => {
  await page.close();
  await context.close();
});

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
