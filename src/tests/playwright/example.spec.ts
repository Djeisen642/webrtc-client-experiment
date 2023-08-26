import { test, expect } from '@playwright/test';

test('has RTCPeerConnection', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  const RTCPeerConnection = await page.evaluateHandle(
    'window.RTCPeerConnection'
  );
  expect(RTCPeerConnection).toBeTruthy();
});
