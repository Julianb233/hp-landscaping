# HP Landscaping - Prioritized Task Breakdown

**Sprint Planning for Next.js Website Development**

---

## Sprint 1: Foundation & Setup (Week 1)

### 🔴 High Priority

**Task 1.1: Project Configuration**
- **Priority**: High
- **Effort**: 4 hours
- **Dependencies**: None
- **Assignee**: Tyler-TypeScript / Fiona-Frontend
- **Tasks**:
  - [ ] Configure TypeScript with strict mode
  - [ ] Set up ESLint + Prettier with Next.js rules
  - [ ] Configure absolute imports (@/components, @/lib)
  - [ ] Create .env.example with required variables
  - [ ] Set up pre-commit hooks (Husky + lint-staged)
  - [ ] Configure VS Code workspace settings
- **Acceptance Criteria**:
  - TypeScript compilation with no errors
  - Linting passes on all files
  - Absolute imports working
  - Git hooks preventing commits with errors

**Task 1.2: Folder Structure**
- **Priority**: High
- **Effort**: 2 hours
- **Dependencies**: 1.1
- **Tasks**:
  ```
  /root/github-repos/hp-landscaping/
  ├── src/
  │   ├── app/
  │   │   ├── (marketing)/
  │   │   │   ├── page.tsx                # Home
  │   │   │   ├── about/
  │   │   │   ├── services/
  │   │   │   │   ├── page.tsx            # Services listing
  │   │   │   │   ├── landscape-design/
  │   │   │   │   ├── lawn-maintenance/
  │   │   │   │   ├── hardscaping/
  │   │   │   │   ├── irrigation/
  │   │   │   │   └── tree-care/
  │   │   │   ├── portfolio/
  │   │   │   │   ├── page.tsx            # Portfolio grid
  │   │   │   │   └── [slug]/             # Individual projects
  │   │   │   ├── blog/
  │   │   │   │   ├── page.tsx
  │   │   │   │   └── [slug]/
  │   │   │   ├── contact/
  │   │   │   ├── quote/
  │   │   │   └── testimonials/
  │   │   ├── (legal)/
  │   │   │   ├── privacy/
  │   │   │   └── terms/
  │   │   ├── api/
  │   │   │   ├── contact/
  │   │   │   └── quote/
  │   │   ├── layout.tsx
  │   │   └── globals.css
  │   ├── components/
  │   │   ├── ui/                         # Radix UI components
  │   │   │   ├── button.tsx
  │   │   │   ├── input.tsx
  │   │   │   ├── card.tsx
  │   │   │   ├── accordion.tsx
  │   │   │   ├── dialog.tsx
  │   │   │   └── navigation-menu.tsx
  │   │   ├── layout/
  │   │   │   ├── header.tsx
  │   │   │   ├── footer.tsx
  │   │   │   ├── navigation.tsx
  │   │   │   └── mobile-menu.tsx
  │   │   ├── sections/                   # Reusable page sections
  │   │   │   ├── hero.tsx
  │   │   │   ├── services-grid.tsx
  │   │   │   ├── portfolio-grid.tsx
  │   │   │   ├── testimonials.tsx
  │   │   │   └── cta-section.tsx
  │   │   └── forms/
  │   │       ├── contact-form.tsx
  │   │       ├── quote-form.tsx
  │   │       └── newsletter-form.tsx
  │   ├── lib/
  │   │   ├── utils.ts
  │   │   ├── cn.ts                       # Tailwind class merger
  │   │   ├── validations.ts              # Zod schemas
  │   │   └── constants.ts
  │   └── types/
  │       ├── index.ts
  │       ├── project.ts
  │       ├── service.ts
  │       └── testimonial.ts
  ├── content/                            # MDX content
  │   ├── projects/
  │   ├── blog/
  │   └── services/
  ├── public/
  │   ├── images/
  │   │   ├── hero/
  │   │   ├── projects/
  │   │   ├── team/
  │   │   └── services/
  │   ├── fonts/
  │   └── favicon.ico
  └── tests/
      ├── unit/
      └── e2e/
  ```
- [ ] Create all directories
- [ ] Add README.md files in key directories
- [ ] Set up barrel exports (index.ts files)

**Task 1.3: Design System - Tailwind Configuration**
- **Priority**: High
- **Effort**: 4 hours
- **Dependencies**: 1.1
- **Tasks**:
  - [ ] Configure custom Tailwind theme
  - [ ] Define color palette:
    ```typescript
    colors: {
      primary: {
        DEFAULT: '#2D5016',  // Forest green
        50: '#F0F5ED',
        100: '#E1EBD9',
        200: '#C3D7B3',
        300: '#A5C38D',
        400: '#6E9850',
        500: '#2D5016',
        600: '#244013',
        700: '#1B3010',
        800: '#12200A',
        900: '#091005',
      },
      secondary: {
        DEFAULT: '#8B6F47',  // Earth brown
        // ... similar shades
      },
      accent: {
        DEFAULT: '#F4A261',  // Warm orange
        // ... similar shades
      },
    }
    ```
  - [ ] Define typography scale
  - [ ] Configure spacing scale
  - [ ] Set up responsive breakpoints
  - [ ] Configure animation utilities
- **Deliverable**: `/tailwind.config.ts`

**Task 1.4: Core UI Components (Phase 1)**
- **Priority**: High
- **Effort**: 8 hours
- **Dependencies**: 1.3
- **Components to Build**:
  - [ ] Button component (variants: primary, secondary, outline, ghost, link)
  - [ ] Input component (text, email, tel, password)
  - [ ] Textarea component
  - [ ] Card component
  - [ ] Container/Section wrapper
  - [ ] Badge component
- **Requirements**:
  - TypeScript interfaces for all props
  - Accessibility (ARIA labels, keyboard navigation)
  - Variants using `class-variance-authority`
  - Responsive design
  - Documentation comments
- **File**: `/src/components/ui/button.tsx`, etc.

---

## Sprint 2: Layout & Navigation (Week 2)

### 🔴 High Priority

**Task 2.1: Header Component**
- **Priority**: High
- **Effort**: 6 hours
- **Dependencies**: 1.4
- **Tasks**:
  - [ ] Logo integration (SVG optimized)
  - [ ] Desktop navigation menu
    - Home, Services (dropdown), Portfolio, About, Blog, Contact
  - [ ] "Get Free Quote" CTA button (prominent)
  - [ ] Phone number with click-to-call
  - [ ] Sticky header on scroll
  - [ ] Active link highlighting
  - [ ] Smooth scroll transitions
- **Responsive Behavior**:
  - Desktop: Full horizontal menu
  - Tablet: Condensed with dropdown
  - Mobile: Hamburger menu
- **File**: `/src/components/layout/header.tsx`

**Task 2.2: Mobile Navigation**
- **Priority**: High
- **Effort**: 4 hours
- **Dependencies**: 2.1
- **Tasks**:
  - [ ] Hamburger menu icon (animated)
  - [ ] Full-screen mobile menu
  - [ ] Slide-in animation (Framer Motion)
  - [ ] Services submenu accordion
  - [ ] Close on link click
  - [ ] Prevent body scroll when open
  - [ ] Touch-friendly (min 44x44px tap targets)
- **File**: `/src/components/layout/mobile-menu.tsx`

**Task 2.3: Footer Component**
- **Priority**: High
- **Effort**: 4 hours
- **Dependencies**: 1.4
- **Tasks**:
  - [ ] Four-column layout (desktop)
    - Column 1: Logo, tagline, social icons
    - Column 2: Quick links
    - Column 3: Services links
    - Column 4: Contact info, newsletter
  - [ ] Newsletter signup form
  - [ ] Social media links (icons)
  - [ ] Business hours
  - [ ] Copyright notice
  - [ ] Legal links (Privacy, Terms)
- **Responsive**: Stack to single column on mobile
- **File**: `/src/components/layout/footer.tsx`

**Task 2.4: Root Layout**
- **Priority**: High
- **Effort**: 2 hours
- **Dependencies**: 2.1, 2.3
- **Tasks**:
  - [ ] Integrate Header and Footer
  - [ ] Set up Google Fonts or load custom fonts
  - [ ] Configure metadata (default title, description)
  - [ ] Add viewport meta tags
  - [ ] Set up analytics script placeholders
  - [ ] Configure theme (light/dark if applicable)
- **File**: `/src/app/layout.tsx`

---

## Sprint 3: Homepage (Week 3)

### 🔴 High Priority

**Task 3.1: Hero Section**
- **Priority**: High
- **Effort**: 6 hours
- **Dependencies**: 2.4
- **Tasks**:
  - [ ] Full-width hero image/video background
  - [ ] Overlay with gradient for text readability
  - [ ] Headline: "Transform Your Outdoor Space" (h1)
  - [ ] Subheadline/value proposition (p)
  - [ ] Primary CTA: "Get Free Quote" (links to /quote)
  - [ ] Secondary CTA: "View Our Work" (links to /portfolio)
  - [ ] Trust indicators (e.g., "20+ Years Experience", "500+ Projects")
  - [ ] Scroll indicator (animated arrow)
- **Responsive**: Adjust text size and layout for mobile
- **File**: `/src/components/sections/hero.tsx`
- **Animation**: Fade in on load, parallax scroll effect

**Task 3.2: Services Overview Section**
- **Priority**: High
- **Effort**: 5 hours
- **Dependencies**: 1.4
- **Tasks**:
  - [ ] Section title: "Our Services"
  - [ ] Grid layout (2 cols mobile, 3 cols tablet, 6 cols desktop)
  - [ ] Service cards with:
    - Icon (from lucide-react)
    - Service name
    - Short description (1-2 sentences)
    - "Learn More" link
  - [ ] Hover effects (lift, border glow)
  - [ ] Services:
    - Landscape Design
    - Lawn Maintenance
    - Hardscaping
    - Irrigation Systems
    - Tree & Shrub Care
    - Seasonal Services
- **File**: `/src/components/sections/services-grid.tsx`

**Task 3.3: Featured Projects Section**
- **Priority**: High
- **Effort**: 5 hours
- **Dependencies**: 1.4
- **Tasks**:
  - [ ] Section title: "Featured Projects"
  - [ ] Showcase 3 projects in card grid
  - [ ] Project card:
    - Before/After image slider
    - Project title
    - Location
    - Brief description
    - "View Details" link
  - [ ] "View All Projects" CTA button
- **File**: `/src/components/sections/featured-projects.tsx`
- **Component**: Before/After slider (install `react-compare-image`)

**Task 3.4: Testimonials Section**
- **Priority**: High
- **Effort**: 4 hours
- **Dependencies**: 1.4
- **Tasks**:
  - [ ] Section title: "What Our Clients Say"
  - [ ] Carousel/slider with 3-5 testimonials
  - [ ] Testimonial card:
    - 5-star rating
    - Quote text
    - Client name
    - Client location
    - Optional photo
  - [ ] Auto-rotate every 5 seconds
  - [ ] Navigation dots
  - [ ] Pause on hover
- **File**: `/src/components/sections/testimonials.tsx`
- **Library**: Consider `embla-carousel-react` or build with Framer Motion

**Task 3.5: Service Area Section**
- **Priority**: Medium
- **Effort**: 3 hours
- **Tasks**:
  - [ ] Section title: "Serving [Region/City] and Surrounding Areas"
  - [ ] List of cities/neighborhoods
  - [ ] Optional: Embedded Google Map with service radius
  - [ ] "Proudly serving [County] since [Year]"
- **File**: `/src/components/sections/service-area.tsx`

**Task 3.6: Final CTA Section**
- **Priority**: High
- **Effort**: 2 hours
- **Tasks**:
  - [ ] Full-width section with background image
  - [ ] Headline: "Ready to Transform Your Outdoor Space?"
  - [ ] Subheadline: "Get a free quote today"
  - [ ] Large CTA button: "Get Started"
  - [ ] Phone number with icon
- **File**: `/src/components/sections/final-cta.tsx`

---

## Sprint 4: Service Pages (Week 4)

### 🔴 High Priority

**Task 4.1: Services Listing Page**
- **Priority**: High
- **Effort**: 4 hours
- **Tasks**:
  - [ ] Hero section with title "Our Services"
  - [ ] Grid of all service cards (more detailed than homepage)
  - [ ] Each card links to individual service page
- **File**: `/src/app/(marketing)/services/page.tsx`

**Task 4.2: Service Page Template**
- **Priority**: High
- **Effort**: 6 hours
- **Tasks**:
  - [ ] Create reusable service page component
  - [ ] Sections:
    - Hero with service name and image
    - Overview/description
    - Key benefits (bullet points with icons)
    - Process/how it works (numbered steps)
    - Image gallery
    - Related projects
    - FAQ accordion (service-specific)
    - CTA for quote
  - [ ] Related services suggestions
  - [ ] Breadcrumb navigation
- **File**: `/src/components/templates/service-page.tsx`

**Task 4.3: Individual Service Pages**
- **Priority**: High
- **Effort**: 10 hours (2 hours per service x 5)
- **Dependencies**: 4.2
- **Pages to Create**:
  - [ ] Landscape Design & Installation (`/services/landscape-design`)
  - [ ] Lawn Maintenance (`/services/lawn-maintenance`)
  - [ ] Hardscaping (`/services/hardscaping`)
  - [ ] Irrigation Systems (`/services/irrigation`)
  - [ ] Tree & Shrub Care (`/services/tree-care`)
- **Content Needed**:
  - Service-specific copy
  - High-quality images (5-10 per service)
  - Benefits list
  - Process steps
  - FAQs (3-5 per service)
- **Files**: `/src/app/(marketing)/services/[service-slug]/page.tsx`

### 🟡 Medium Priority

**Task 4.4: Service Request Form Component**
- **Priority**: Medium
- **Effort**: 4 hours
- **Tasks**:
  - [ ] Embedded form on each service page
  - [ ] Fields: Name, Email, Phone, Service Interest (pre-selected), Message
  - [ ] Form validation with Zod
  - [ ] Submit to API route
- **File**: `/src/components/forms/service-request-form.tsx`

---

## Sprint 5: Portfolio System (Week 5)

### 🔴 High Priority

**Task 5.1: Portfolio Listing Page**
- **Priority**: High
- **Effort**: 6 hours
- **Tasks**:
  - [ ] Hero section: "Our Portfolio"
  - [ ] Filter buttons: All, Landscape Design, Maintenance, Hardscaping, Irrigation
  - [ ] Masonry grid layout (using CSS Grid or library)
  - [ ] Project cards:
    - Featured image
    - Project title
    - Category badge
    - Location
    - "View Details" overlay on hover
  - [ ] Lazy loading images
  - [ ] Pagination or infinite scroll
- **File**: `/src/app/(marketing)/portfolio/page.tsx`

**Task 5.2: Project Detail Page**
- **Priority**: High
- **Effort**: 6 hours
- **Tasks**:
  - [ ] Dynamic route: `/portfolio/[slug]`
  - [ ] Project hero image
  - [ ] Project information sidebar:
    - Location
    - Services performed
    - Project duration
    - Completion date
  - [ ] Before/After comparison slider
  - [ ] Full image gallery with lightbox
  - [ ] Project description (rich text)
  - [ ] Client testimonial (if available)
  - [ ] Related projects
  - [ ] "Request Similar Project" CTA
  - [ ] Breadcrumb navigation
- **File**: `/src/app/(marketing)/portfolio/[slug]/page.tsx`

**Task 5.3: Image Gallery Component**
- **Priority**: High
- **Effort**: 4 hours
- **Tasks**:
  - [ ] Grid layout with thumbnails
  - [ ] Lightbox modal on click
  - [ ] Navigation arrows (prev/next)
  - [ ] Keyboard navigation (arrow keys, Esc)
  - [ ] Image zoom
  - [ ] Caption display
  - [ ] Mobile swipe gestures
- **Library**: `yet-another-react-lightbox` or build custom with Radix Dialog
- **File**: `/src/components/ui/image-gallery.tsx`

### 🟡 Medium Priority

**Task 5.4: Before/After Slider Component**
- **Priority**: Medium
- **Effort**: 3 hours
- **Tasks**:
  - [ ] Interactive slider with draggable divider
  - [ ] Labels: "Before" / "After"
  - [ ] Responsive behavior
  - [ ] Touch/swipe support on mobile
- **Library**: `react-compare-image` or `react-before-after-slider-component`
- **File**: `/src/components/ui/before-after-slider.tsx`

---

## Sprint 6: Contact & Forms (Week 6)

### 🔴 High Priority

**Task 6.1: Contact Page**
- **Priority**: High
- **Effort**: 5 hours
- **Tasks**:
  - [ ] Hero section: "Contact Us"
  - [ ] Two-column layout:
    - Left: Contact form
    - Right: Contact information
  - [ ] Contact info block:
    - Business name
    - Phone (click-to-call)
    - Email (mailto link)
    - Address
    - Business hours
    - Google Maps embed
  - [ ] Social media links
- **File**: `/src/app/(marketing)/contact/page.tsx`

**Task 6.2: Contact Form**
- **Priority**: High
- **Effort**: 6 hours
- **Tasks**:
  - [ ] Form fields:
    - Name (required)
    - Email (required, validated)
    - Phone (required, formatted)
    - Subject dropdown
    - Message (required, min 10 chars)
  - [ ] Form validation (Zod schema)
  - [ ] Error messages (inline, accessible)
  - [ ] Loading state on submit
  - [ ] Success message
  - [ ] Error handling
- **Library**: `react-hook-form` + `zod`
- **File**: `/src/components/forms/contact-form.tsx`

**Task 6.3: Quote Request Page**
- **Priority**: High
- **Effort**: 6 hours
- **Tasks**:
  - [ ] Multi-step form wizard (3 steps):
    - Step 1: Contact info (Name, Email, Phone, Address)
    - Step 2: Project details (Service type, Property size, Timeline)
    - Step 3: Additional info (Budget range, Message, Photo upload)
  - [ ] Progress indicator
  - [ ] Form validation per step
  - [ ] Back/Next buttons
  - [ ] Review before submit
  - [ ] Submit to API
- **File**: `/src/app/(marketing)/quote/page.tsx`
- **Component**: `/src/components/forms/quote-form.tsx`

**Task 6.4: Form API Routes**
- **Priority**: High
- **Effort**: 4 hours
- **Tasks**:
  - [ ] Contact form API: `/api/contact/route.ts`
  - [ ] Quote form API: `/api/quote/route.ts`
  - [ ] Email sending integration (Resend or Nodemailer)
  - [ ] Spam protection (rate limiting, Turnstile)
  - [ ] Data validation server-side
  - [ ] Store submissions (database or email)
  - [ ] Auto-responder email to customer
  - [ ] Notification email to business
- **Files**: `/src/app/api/contact/route.ts`, `/src/app/api/quote/route.ts`

**Task 6.5: Thank You Pages**
- **Priority**: Medium
- **Effort**: 2 hours
- **Tasks**:
  - [ ] Contact thank you page
  - [ ] Quote thank you page
  - [ ] Confirmation message
  - [ ] What happens next
  - [ ] "Back to Home" link
  - [ ] Social media follow CTAs
- **Files**: `/src/app/(marketing)/contact/thank-you/page.tsx`, etc.

---

## Sprint 7: About & Additional Pages (Week 7)

### 🔴 High Priority

**Task 7.1: About Page**
- **Priority**: High
- **Effort**: 5 hours
- **Tasks**:
  - [ ] Hero section with company photo
  - [ ] Company story section
  - [ ] Mission & values
  - [ ] Team section:
    - Team member cards (photo, name, role, bio)
    - Grid layout
  - [ ] Certifications & licenses
  - [ ] Service area map
  - [ ] Company timeline (optional)
  - [ ] CTA: "Work With Us"
- **File**: `/src/app/(marketing)/about/page.tsx`

### 🟡 Medium Priority

**Task 7.2: Testimonials Page**
- **Priority**: Medium
- **Effort**: 4 hours
- **Tasks**:
  - [ ] Hero: "Client Testimonials"
  - [ ] Filter by service type
  - [ ] Grid of testimonial cards
  - [ ] Star ratings
  - [ ] Client photos (optional)
  - [ ] Service performed badge
  - [ ] Pagination
- **File**: `/src/app/(marketing)/testimonials/page.tsx`

**Task 7.3: FAQ Page**
- **Priority**: Medium
- **Effort**: 4 hours
- **Tasks**:
  - [ ] Hero: "Frequently Asked Questions"
  - [ ] Category tabs or sections:
    - Services
    - Pricing & Payment
    - Process
    - Maintenance
  - [ ] Accordion component (Radix UI)
  - [ ] Search functionality
  - [ ] "Still have questions?" CTA
- **File**: `/src/app/(marketing)/faq/page.tsx`

### 🟢 Low Priority

**Task 7.4: Legal Pages**
- **Priority**: Low
- **Effort**: 2 hours
- **Tasks**:
  - [ ] Privacy Policy page
  - [ ] Terms of Service page
  - [ ] Simple text-based layout
  - [ ] Last updated date
- **Files**: `/src/app/(legal)/privacy/page.tsx`, `/src/app/(legal)/terms/page.tsx`
- **Note**: Use legal template generators or hire legal professional

---

## Sprint 8: Blog System (Week 8)

### 🟡 Medium Priority

**Task 8.1: Blog Infrastructure Setup**
- **Priority**: Medium
- **Effort**: 4 hours
- **Decision**: Choose content approach
  - **Option A**: MDX files in `/content/blog/`
  - **Option B**: Headless CMS (Sanity.io)
  - **Option C**: Database with admin panel
- **Recommendation**: MDX for simplicity, Sanity for client editing
- **Tasks**:
  - [ ] Set up content source
  - [ ] Create blog post schema/interface
  - [ ] Set up content parser/fetcher

**Task 8.2: Blog Listing Page**
- **Priority**: Medium
- **Effort**: 5 hours
- **Tasks**:
  - [ ] Hero: "Blog & Resources"
  - [ ] Featured post (latest)
  - [ ] Grid of blog post cards:
    - Featured image
    - Title
    - Excerpt
    - Author
    - Publish date
    - Category badge
    - Read time
  - [ ] Category filter
  - [ ] Search bar
  - [ ] Pagination or load more
- **File**: `/src/app/(marketing)/blog/page.tsx`

**Task 8.3: Blog Post Template**
- **Priority**: Medium
- **Effort**: 5 hours
- **Tasks**:
  - [ ] Dynamic route: `/blog/[slug]`
  - [ ] Hero with featured image
  - [ ] Article metadata (author, date, read time)
  - [ ] Rich text content rendering (MDX or portable text)
  - [ ] Table of contents (auto-generated from headings)
  - [ ] Social sharing buttons
  - [ ] Author bio box
  - [ ] Related posts
  - [ ] Newsletter signup CTA
  - [ ] Comments section (optional - Giscus)
- **File**: `/src/app/(marketing)/blog/[slug]/page.tsx`

**Task 8.4: Initial Blog Content**
- **Priority**: Low
- **Effort**: 10 hours (writing)
- **Content**:
  - [ ] "Spring Landscaping Checklist"
  - [ ] "How to Choose the Right Plants for Your Climate"
  - [ ] "Benefits of Professional Irrigation Systems"
  - [ ] "Hardscaping Ideas for Small Yards"
  - [ ] "Lawn Maintenance Tips for Summer"
  - [ ] "Fall Cleanup: What You Need to Know"
- **Deliverable**: 6 blog posts in chosen format (MDX or CMS)

---

## Sprint 9: SEO & Performance (Week 9)

### 🔴 High Priority

**Task 9.1: SEO Infrastructure**
- **Priority**: High
- **Effort**: 6 hours
- **Tasks**:
  - [ ] Install and configure `next-seo`
  - [ ] Create SEO component with OpenGraph support
  - [ ] Add metadata to all pages:
    - Title (50-60 chars)
    - Description (150-160 chars)
    - Open Graph tags
    - Twitter Card tags
  - [ ] Set up canonical URLs
  - [ ] Create `robots.txt`
  - [ ] Generate `sitemap.xml` (dynamic based on pages)
  - [ ] Add structured data (JSON-LD):
    - LocalBusiness schema
    - Service schema
    - BreadcrumbList schema
- **Files**: `/src/lib/seo.ts`, `/src/app/robots.ts`, `/src/app/sitemap.ts`

**Task 9.2: Image Optimization**
- **Priority**: High
- **Effort**: 4 hours
- **Tasks**:
  - [ ] Audit all images
  - [ ] Convert to WebP format
  - [ ] Implement Next.js Image component everywhere
  - [ ] Add proper alt text
  - [ ] Set up blur placeholders
  - [ ] Lazy load below-fold images
  - [ ] Optimize thumbnail sizes
- **Deliverable**: All images < 200KB, WebP format

**Task 9.3: Performance Optimization**
- **Priority**: High
- **Effort**: 6 hours
- **Tasks**:
  - [ ] Run Lighthouse audit
  - [ ] Optimize Core Web Vitals:
    - LCP < 2.5s (preload hero image, optimize fonts)
    - FID < 100ms (minimize JavaScript, code splitting)
    - CLS < 0.1 (set image dimensions, avoid layout shifts)
  - [ ] Code splitting audit
  - [ ] Bundle size analysis (`@next/bundle-analyzer`)
  - [ ] Tree shaking verification
  - [ ] Font optimization (preload, font-display: swap)
  - [ ] Implement service worker (optional PWA)
- **Target**: Lighthouse score 90+ on all metrics

**Task 9.4: Accessibility Audit**
- **Priority**: High
- **Effort**: 4 hours
- **Tasks**:
  - [ ] Run axe DevTools audit
  - [ ] Fix color contrast issues
  - [ ] Add ARIA labels where needed
  - [ ] Ensure keyboard navigation works
  - [ ] Add skip to main content link
  - [ ] Test with screen reader (NVDA or VoiceOver)
  - [ ] Form labels and error messages
  - [ ] Focus indicators visible
- **Target**: WCAG 2.1 AA compliance

---

## Sprint 10: Analytics & Final Polish (Week 10)

### 🔴 High Priority

**Task 10.1: Analytics Setup**
- **Priority**: High
- **Effort**: 3 hours
- **Tasks**:
  - [ ] Google Analytics 4 setup
  - [ ] Google Tag Manager installation
  - [ ] Event tracking:
    - Form submissions
    - Button clicks (CTA buttons)
    - Phone number clicks
    - Email clicks
    - Outbound links
  - [ ] Conversion goals:
    - Contact form submission
    - Quote request submission
  - [ ] Microsoft Clarity setup (heatmaps)
- **File**: `/src/lib/analytics.ts`

**Task 10.2: Testing**
- **Priority**: High
- **Effort**: 6 hours
- **Tests**:
  - [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
  - [ ] Mobile device testing (iOS, Android)
  - [ ] Tablet testing
  - [ ] Form submission testing (all forms)
  - [ ] Email delivery testing
  - [ ] Link checking (all internal/external links)
  - [ ] Image loading verification
  - [ ] 404 page testing
  - [ ] Performance testing on slow connections
- **Tools**: BrowserStack, real devices

**Task 10.3: Content Review**
- **Priority**: High
- **Effort**: 4 hours
- **Tasks**:
  - [ ] Proofread all copy
  - [ ] Check for typos and grammar
  - [ ] Verify contact information (phone, email, address)
  - [ ] Test all CTAs
  - [ ] Verify all images have alt text
  - [ ] Check meta descriptions
  - [ ] Review legal pages

**Task 10.4: Deploy to Production**
- **Priority**: High
- **Effort**: 3 hours
- **Tasks**:
  - [ ] Set up Vercel project
  - [ ] Configure environment variables
  - [ ] Connect custom domain
  - [ ] Configure SSL certificate
  - [ ] Set up redirects (if migrating from old site)
  - [ ] Test production deployment
  - [ ] Set up monitoring (Sentry for errors)
  - [ ] Configure email sending in production
  - [ ] Submit sitemap to Google Search Console
  - [ ] Submit to Bing Webmaster Tools

### 🟡 Medium Priority

**Task 10.5: 404 & Error Pages**
- **Priority**: Medium
- **Effort**: 2 hours
- **Tasks**:
  - [ ] Custom 404 page with helpful navigation
  - [ ] 500 error page
  - [ ] Offline page (PWA)
- **Files**: `/src/app/not-found.tsx`, `/src/app/error.tsx`

---

## Post-Launch Tasks (Ongoing)

### Month 1

**Task PL.1: Content Creation**
- **Priority**: Medium
- **Effort**: Ongoing
- [ ] Add 5-10 portfolio projects with photos
- [ ] Write and publish 2 blog posts
- [ ] Collect and add 5+ testimonials
- [ ] Create FAQ entries (add 10 more questions)

**Task PL.2: SEO Optimization**
- **Priority**: High
- **Effort**: Ongoing
- [ ] Monitor Google Search Console
- [ ] Fix any indexing issues
- [ ] Add service area pages (if needed)
- [ ] Build local citations
- [ ] Update Google Business Profile with new website

**Task PL.3: Marketing Integration**
- **Priority**: Medium
- [ ] Set up Google Ads conversion tracking
- [ ] Create Facebook Pixel
- [ ] Set up email marketing sequences
- [ ] Social media integration

**Task PL.4: Monitoring & Optimization**
- **Priority**: High
- [ ] Review analytics weekly
- [ ] Monitor form submissions
- [ ] Check Core Web Vitals
- [ ] Review user feedback
- [ ] A/B test CTAs
- [ ] Optimize conversion funnel

---

## Optional Enhancements (Future Sprints)

### 🟢 Low Priority (Nice to Have)

**Enhancement E.1: Online Booking System**
- **Effort**: 12 hours
- [ ] Integrate scheduling tool (Calendly, Acuity)
- [ ] Appointment booking form
- [ ] Calendar availability display
- [ ] Email confirmations

**Enhancement E.2: Client Portal**
- **Effort**: 20 hours
- [ ] User authentication (NextAuth.js)
- [ ] Client dashboard
- [ ] Project status tracking
- [ ] Invoice viewing
- [ ] Document sharing

**Enhancement E.3: Cost Calculator**
- **Effort**: 8 hours
- [ ] Interactive form
- [ ] Property size input
- [ ] Service selection
- [ ] Instant estimate display
- [ ] Lead capture

**Enhancement E.4: Video Integration**
- **Effort**: 4 hours
- [ ] Company introduction video
- [ ] Project time-lapse videos
- [ ] Testimonial videos
- [ ] YouTube embed

**Enhancement E.5: Live Chat**
- **Effort**: 2 hours
- [ ] Integrate chat widget (Intercom, Drift, or Tawk.to)
- [ ] Automated responses
- [ ] Business hours configuration

**Enhancement E.6: Progressive Web App**
- **Effort**: 6 hours
- [ ] Service worker setup
- [ ] Offline page
- [ ] Install prompt
- [ ] Push notifications

---

## Resource Allocation

### Developer Hours Estimate

| Sprint | Tasks | Hours | Developer |
|--------|-------|-------|-----------|
| Sprint 1 | Foundation & Setup | 18 | Tyler-TypeScript / Fiona-Frontend |
| Sprint 2 | Layout & Navigation | 16 | Fiona-Frontend |
| Sprint 3 | Homepage | 25 | Fiona-Frontend |
| Sprint 4 | Service Pages | 24 | Tyler-TypeScript / Fiona-Frontend |
| Sprint 5 | Portfolio System | 19 | Fiona-Frontend |
| Sprint 6 | Contact & Forms | 23 | Tyler-TypeScript (API) + Fiona-Frontend |
| Sprint 7 | About & Additional | 15 | Fiona-Frontend |
| Sprint 8 | Blog System | 24 | Tyler-TypeScript / Fiona-Frontend |
| Sprint 9 | SEO & Performance | 20 | Fiona-Frontend + Rex-Reviewer |
| Sprint 10 | Analytics & Launch | 18 | Petra-DevOps + Fiona-Frontend |
| **Total** | | **202 hours** | ~5-6 weeks full-time |

### Content & Design Hours

| Task | Hours | Role |
|------|-------|------|
| Copywriting (all pages) | 16 | Content Writer |
| Photography (projects) | 8 | Photographer |
| Image editing & optimization | 8 | Designer |
| Blog post writing (6 posts) | 12 | Content Writer |
| Design review & QA | 6 | Designer |
| **Total** | **50 hours** | |

### Grand Total: ~250 hours

---

## Dependencies & Prerequisites

### Before Starting Development

**Assets Needed:**
- [ ] Company logo (SVG, PNG - high res)
- [ ] Brand color palette
- [ ] Font selection (or use Google Fonts)
- [ ] 20-30 project photos (before/after)
- [ ] Team photos (headshots)
- [ ] Company information:
  - Business name
  - Tagline
  - Address
  - Phone number
  - Email
  - Business hours
  - Service area (cities/counties)
  - Certifications/licenses

**Content Needed:**
- [ ] Service descriptions (6 services)
- [ ] Company story/about text
- [ ] Team member bios
- [ ] Testimonials (5-10)
- [ ] FAQ questions and answers (20+)

**Third-Party Accounts:**
- [ ] Google Analytics account
- [ ] Google Search Console
- [ ] Google Business Profile
- [ ] Email service (Resend, SendGrid, etc.)
- [ ] CMS account (if using Sanity/Contentful)
- [ ] Hosting (Vercel account)
- [ ] Domain registrar access

---

## Quality Gates

### Before Moving to Next Sprint

- [ ] All high-priority tasks completed
- [ ] Code reviewed (self or peer)
- [ ] Linting passes
- [ ] TypeScript compiles with no errors
- [ ] Responsive on mobile, tablet, desktop
- [ ] Accessibility basics checked
- [ ] Git commits clean and descriptive
- [ ] Changes pushed to repository

### Before Launch

- [ ] All sprints 1-9 completed
- [ ] Content review complete
- [ ] All forms tested and working
- [ ] Analytics installed and tested
- [ ] SEO metadata on all pages
- [ ] Lighthouse score 90+ on all metrics
- [ ] Accessibility audit passed
- [ ] Cross-browser testing passed
- [ ] Mobile testing on real devices
- [ ] Client approval received
- [ ] Backup plan in place

---

## Risk Management

### Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Forms not sending emails | Medium | High | Test early, have backup email service |
| Poor mobile performance | Low | High | Mobile-first development, regular testing |
| Image optimization issues | Low | Medium | Use Next.js Image, automated optimization |
| SEO not effective | Medium | High | Follow best practices, monitor early |
| Accessibility failures | Low | Medium | Use semantic HTML, test with tools |

### Project Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Content delays | High | Medium | Start content gathering early |
| Scope creep | Medium | High | Clear requirements, change management |
| Photography not available | Medium | High | Stock photos backup, phased approach |
| Client changes mind | Medium | Medium | Regular check-ins, approval gates |

---

## Success Metrics

### Technical KPIs (Post-Launch)

- **Performance**:
  - Lighthouse score: 90+ (all categories)
  - LCP < 2.5s
  - Page load time < 3s

- **SEO**:
  - All pages indexed within 2 weeks
  - No crawl errors in Search Console
  - Structured data validates

- **Accessibility**:
  - WCAG 2.1 AA compliance
  - No critical axe violations

### Business KPIs (First 3 Months)

- **Traffic**:
  - 500+ monthly visitors
  - 40%+ from organic search

- **Engagement**:
  - < 50% bounce rate
  - > 2 min average session duration
  - > 3 pages per session

- **Conversions**:
  - 30+ quote requests per month
  - 20+ contact form submissions
  - 10+ phone calls attributed to website

---

## Notes

- **Iterative Approach**: Complete high-priority tasks first. Medium and low can be deferred if needed.
- **Parallel Work**: Some tasks can be done in parallel (e.g., forms while working on pages).
- **Content Dependency**: Many tasks require content. Start gathering early.
- **Testing**: Don't leave testing to the end. Test as you build.
- **Communication**: Regular check-ins with stakeholders for feedback.

---

**Document Version**: 1.0
**Last Updated**: December 27, 2025
**Next Review**: Weekly during development
