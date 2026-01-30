import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // Validate that the text "Playwright enables" exists
  await expect(page.locator('text=Playwright enables')).toBeTruthy();
});