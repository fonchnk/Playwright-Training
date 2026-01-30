import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // Expect the page contains "Playwright enables reliable end-to-end testing for modern web apps."
  await expect(page.locator('body')).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
});