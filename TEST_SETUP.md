# Test Setup - hp-landscaping

## Quick Start

```bash
# Install dependencies (if not done)
npm install

# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

# Open interactive test UI
npm run test:ui          # Vitest UI
npm run test:e2e:ui      # Playwright UI
```

## Test Structure

```
tests/
└── smoke/
    ├── home.spec.ts        # Homepage load & content tests
    ├── navigation.spec.ts   # Navigation & link tests
    └── responsive.spec.ts   # Mobile/tablet/desktop responsive tests
```

## Test Coverage

### Home Page Tests
- Homepage loads successfully
- Landscaping services section visible
- No console errors
- Images load correctly
- Meta tags present

### Navigation Tests
- Main navigation visible
- Navigation links accessible
- Navigation clickable
- No layout breaks

### Responsive Tests
- Mobile (375×667)
- Tablet (768×1024)
- Desktop (1920×1080)
- Orientation changes
- Text readability

## CI/CD

GitHub Actions workflow automatically runs on:
- Push to `main`
- Pull requests to `main`

Pipeline includes:
- Linting
- Type checking
- Unit tests
- Build verification
- E2E tests across 5 browsers

Reports uploaded to GitHub Actions artifacts (30-day retention).

## Configuration Files

- `vitest.config.ts` - Unit test configuration
- `playwright.config.ts` - E2E test configuration

## Adding More Tests

Create new test files in `tests/smoke/` following the existing patterns.

Example:
```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature', () => {
  test('should render', async ({ page }) => {
    await page.goto('/');
    const element = page.locator('h1');
    await expect(element).toBeVisible();
  });
});
```

## Debugging

- View E2E traces: `playwright show-trace path/to/trace.zip`
- Run single test: `npm run test:e2e -- home.spec.ts`
- Debug mode: `npm run test:e2e -- --debug`

## Dependencies Added

- `@playwright/test` - E2E testing
- `vitest` - Unit testing
- `@vitest/ui` - Interactive UI
- `jsdom` - DOM simulation
- `vite` - Vitest requires Vite
- `@vitejs/plugin-react` - React support in Vite
