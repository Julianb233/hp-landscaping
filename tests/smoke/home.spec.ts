import { test, expect } from '@playwright/test';

test.describe('Home Page - Smoke Tests', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();
  });

  test('should display landscaping services section', async ({ page }) => {
    await page.goto('/');
    const content = page.locator('main, [role="main"]').first();
    await expect(content).toBeVisible();
  });

  test('should have no console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');
    expect(errors.length).toBe(0);
  });

  test('should load all critical images', async ({ page }) => {
    await page.goto('/');
    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < Math.min(count, 10); i++) {
      const img = images.nth(i);
      const isVisible = await img.isVisible();
      if (isVisible) {
        await expect(img).toHaveJSProperty('complete', true);
      }
    }
  });

  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/');
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveAttribute('content', /width=device-width/);
  });
});
