import { test, expect } from '@playwright/test';

test.describe('Navigation - Smoke Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should find and display main navigation', async ({ page }) => {
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();
  });

  test('should have accessible navigation links', async ({ page }) => {
    const links = page.locator('a');
    const linkCount = await links.count();
    expect(linkCount).toBeGreaterThan(0);
  });

  test('navigation links should be clickable', async ({ page }) => {
    const nav = page.locator('nav').first();
    const links = nav.locator('a[href]');
    const linkCount = await links.count();

    for (let i = 0; i < Math.min(linkCount, 5); i++) {
      const link = links.nth(i);
      if (await link.isVisible()) {
        await expect(link).toBeEnabled();
      }
    }
  });

  test('should handle navigation without breaking layout', async ({ page }) => {
    const nav = page.locator('nav').first();
    const firstLink = nav.locator('a').first();

    if (await firstLink.isVisible()) {
      const href = await firstLink.getAttribute('href');
      if (href && href.startsWith('/')) {
        await firstLink.click();
        await page.waitForLoadState('networkidle');

        const content = page.locator('main, [role="main"]').first();
        await expect(content).toBeVisible();
      }
    }
  });
});
