import { test, expect } from '@playwright/test';

test.describe('Responsive Design - Smoke Tests', () => {
  const viewports = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1920, height: 1080 },
  ];

  viewports.forEach(({ name, width, height }) => {
    test(`should render properly on ${name} (${width}x${height})`, async ({
      browser,
    }) => {
      const context = await browser.newContext({
        viewport: { width, height },
      });
      const page = await context.newPage();

      await page.goto('/');
      await page.waitForLoadState('networkidle');

      const mainContent = page.locator('main, [role="main"]').first();
      await expect(mainContent).toBeVisible();

      const scrollWidth = await page.evaluate(
        () => document.documentElement.scrollWidth
      );
      const clientWidth = await page.evaluate(
        () => document.documentElement.clientWidth
      );
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);

      await context.close();
    });
  });

  test('should handle orientation changes on mobile', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 375, height: 812 },
    });
    const page = await context.newPage();

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.setViewportSize({ width: 812, height: 375 });
    const content = page.locator('main, [role="main"]').first();
    await expect(content).toBeVisible();

    await context.close();
  });

  test('should maintain readability on tablet', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 768, height: 1024 },
    });
    const page = await context.newPage();

    await page.goto('/');
    const heading = page.locator('h1').first();
    const headingSize = await heading.evaluate((el) => {
      return window.getComputedStyle(el).fontSize;
    });

    const fontSize = parseInt(headingSize);
    expect(fontSize).toBeGreaterThan(16);

    await context.close();
  });
});
