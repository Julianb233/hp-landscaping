# HP Landscaping SEO Files Setup Guide

## Files Created

### 1. `/src/app/sitemap.ts` (1,645 bytes)
**Location**: `/root/github-repos/hp-landscaping/src/app/sitemap.ts`

Dynamic XML sitemap generator using Next.js 14+ MetadataRoute.Sitemap type.

**Includes:**
- Homepage (priority: 1.0, weekly updates)
- Static pages: About, Contact, Gallery, Services, Areas (priority: 0.8-0.9)
- 6 Service pages dynamically from SERVICES constant (priority: 0.8)
- 15 Service Area pages dynamically from SERVICE_AREAS constant (priority: 0.8 featured, 0.7 others)

**Total URLs: 28 pages**

Key features:
- Environment variable support: `NEXT_PUBLIC_BASE_URL`
- Fallback URL: https://hplandscaping.com
- Appropriate change frequencies based on page type
- Respects featured flag from SERVICE_AREAS for priority differentiation

### 2. `/src/app/robots.ts` (624 bytes)
**Location**: `/root/github-repos/hp-landscaping/src/app/robots.ts`

Robot exclusion configuration following best practices.

**Rules:**
- Allows all crawlers to public pages
- Disallows: `/api/`, `/.next/`, `/admin/`, query parameters (`?*sort=`, `?*filter=`)
- Special explicit allow for Google bots
- Points to sitemap.xml for discovery
- Crawl delay: 0.5 seconds

### 3. `/public/manifest.json` (2,365 bytes)
**Location**: `/root/github-repos/hp-landscaping/public/manifest.json`

Progressive Web App (PWA) manifest with HP Landscaping branding.

**Features:**
- Name: "HP Landscaping - San Diego County Professional Landscaping Services"
- Short name: "HP Landscaping"
- Display: standalone (full-screen app experience)
- Theme color: #2d8659 (landscaping green)
- Background color: #ffffff (white)
- Icon support: 192px, 512px, maskable variants
- Screenshots: Mobile (540x720) and Desktop (1280x720)
- App shortcuts: Services, Request Quote, Gallery
- Web Share Target: Points to contact form
- Categories: business, lifestyle

## Generated Sitemap Structure

### Service Pages (6 total)
```
/services/landscape-design
/services/irrigation-systems
/services/hardscaping
/services/lawn-care
/services/tree-services
/services/outdoor-lighting
```

### Service Area Pages (15 total)
**Featured Areas (Priority 0.8):**
```
/areas/san-diego
/areas/chula-vista
/areas/oceanside
/areas/escondido
/areas/carlsbad
```

**Standard Areas (Priority 0.7):**
```
/areas/el-cajon
/areas/vista
/areas/san-marcos
/areas/encinitas
/areas/national-city
/areas/la-mesa
/areas/santee
/areas/poway
/areas/del-mar
/areas/coronado
```

## Configuration Steps

### 1. Environment Variable
Add to `.env.local`:
```
NEXT_PUBLIC_BASE_URL=https://hplandscaping.com
```

Or for local development:
```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 2. Layout Metadata Integration
Update `src/app/layout.tsx` to link manifest:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://hplandscaping.com'),
  manifest: '/manifest.json',
  // ... rest of your metadata
};
```

### 3. PWA Icons (Required for Full Functionality)
Create these image files in `/public/`:

**Standard Icons:**
- `icon-192.png` (192x192) - Home screen icon
- `icon-512.png` (512x512) - Splash screen icon
- `icon-96.png` (96x96) - App shortcuts

**Maskable Icons (Modern Android):**
- `icon-192-maskable.png` (192x192)
- `icon-512-maskable.png` (512x512)

**Screenshots:**
- `screenshot-540.png` (540x720) - Narrow/mobile form factor
- `screenshot-1280.png` (1280x720) - Wide/desktop form factor

**Design Notes:**
- Use green theme color (#2d8659) consistent with HP Landscaping branding
- Maskable icons need safe area padding (about 10% margin for dynamic mask)
- Screenshots should show the app in real use scenarios

## Testing & Verification

### Local Testing
```bash
# Start development server
npm run dev

# Test sitemap (should return XML with 28 URLs)
curl http://localhost:3000/sitemap.xml

# Test robots.txt (should return robot rules)
curl http://localhost:3000/robots.txt

# Verify manifest is served
curl http://localhost:3000/manifest.json
```

### Browser Testing
1. Open DevTools → Application tab
2. Check "Manifest" section loads successfully
3. Verify green theme color appears
4. Check all icon sizes are served correctly

### Production Verification (After Deploy)
1. **Google Search Console**
   - Add sitemap: https://hplandscaping.com/sitemap.xml
   - Check coverage report for all 28 URLs

2. **Google robots.txt Tester**
   - Test crawlability of key pages
   - Verify API routes are properly blocked

3. **PWA Audit**
   - Run Chrome DevTools Lighthouse audit
   - Check PWA installability score
   - Verify all icons load without errors

4. **Mobile Testing**
   - Test on iOS Safari (Home Screen > Add to Home Screen)
   - Test on Android Chrome (Menu > Install app)

## SEO Impact

### Immediate Benefits
- **Faster indexing**: Sitemap helps search engines discover all 28 pages quickly
- **Improved crawl efficiency**: Robots.txt prevents wasting crawler budget on non-indexable content
- **Better mobile experience**: PWA manifest enables app installation and offline features

### Long-term Benefits
- **Semantic clarity**: Organized sitemap structure signals site hierarchy to search engines
- **Local SEO**: Service area pages targeting geographic keywords
- **User retention**: PWA installability increases repeat visits

## File Sizes Summary
```
sitemap.ts      1,645 bytes
robots.ts         624 bytes
manifest.json   2,365 bytes
Total           4,634 bytes
```

## Next Steps

1. Generate or source the 7 PNG files for PWA icons
2. Add `NEXT_PUBLIC_BASE_URL` to environment variables
3. Update layout.tsx with manifest reference
4. Deploy to production
5. Submit sitemap to Google Search Console
6. Monitor coverage and indexation in Search Console
