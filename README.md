# Borne Technology Website (Vue 3 + Vite + Tailwind)

**Live demo:** https://bornetechtw.netlify.app/

A modern, performant, and accessible corporate website for **Borne Technology Ltd.**  
Built with **Vue 3**, **Vite**, **Tailwind CSS v4**, and deployed to **Netlify**.  
Pages include **Home**, **About**, **Technology/Products**, **FAQ**, and **Contact** (with a validated lead form).

---

## ✨ Highlights

- **Clean design system** driven by Tailwind v4 **design tokens** (brand gold & accent blue).
- **Sticky header** with responsive navigation and a mobile-friendly slide-down menu.
- **Hero & Thin banners** with gradient overlays and full-bleed backgrounds.
- **Feature cards** with hover elevation + image zoom (GPU-accelerated), responsive aspect ratios.
- **Contact form** validated with `vee-validate` (required fields, email format, digits-only phone).
- **Global loading overlay** (logo write-in animation) controlled via **Pinia** with a **300 ms minimum hold** so the animation always completes.
- **FAQ accordion** (accessible, keyboard friendly, smooth slide-down).
- **About** page with origin story, image block, and a CTA “Contact us” section.
- **Netlify-ready SPA** (history-mode routing and redirects).
- Image performance via `loading="lazy"` and `decoding="async"`.

---

## 🧱 Tech Stack

- **Framework:** Vue 3 (Composition API)
- **Build:** Vite
- **State:** Pinia (global loader)
- **Routing:** Vue Router (history mode)
- **Styling:** Tailwind CSS v4 (`@theme` design tokens)
- **Validation:** vee-validate + rules (`required`, `email`, `numeric`)
- **Deploy:** Netlify

---

## 🗂️ Project Structure (key parts)
```
src/
├─ assets/ # static assets (images, etc.)
├─ components/
│ ├─ Header.vue # sticky header / mobile menu
│ ├─ Footer.vue # footer with company info
│ ├─ ThinBanner.vue # slim banner (reusable)
│ ├─ ContactForm.vue # validated lead form (vee-validate)
│ ├─ FAQCard.vue # accessible accordion card
│ └─ GlobalLoader.vue # full-screen loading overlay (logo animation)
├─ stores/
│ └─ loader.js # Pinia store with 300ms min-hold logic
├─ views/
│ ├─ HomeView.vue
│ ├─ AboutView.vue
│ ├─ ProductView.vue # Technology / Products
│ ├─ FAQView.vue
│ └─ ContactView.vue
├─ router/
│ └─ index.js # beforeEach/afterEach → loader.show/hide
├─ style.css # Tailwind v4 + tokens + utilities
└─ main.js # app bootstrap
```
## 🎨 Design Tokens (Tailwind v4)

Defined in `src/style.css`:

```css
@import "tailwindcss";

@theme {
  --color-primary: #d9a200; /* brand gold */
  --color-accent:  #008cff; /* accent blue */
  --color-text:    #1a1a1a; /* main text */
  --color-muted:   #4a4a4a; /* secondary text */
  --color-background: #ffffff;
  --color-surface:    #f7f7f8;
  --color-secondary:  #121212;
  --color-border:     #e5e7eb;
}
Reusable utilities include: .container, .btn-primary, .btn-secondary, .input, .card, .section-title, .section-subtle, and loader animation classes (pure Tailwind utilities).

🚀 Getting Started
Prerequisites
Node 18+ (recommended 20)

npm / pnpm / yarn (examples use npm)

npm run build   # outputs dist/
npm run preview # preview dist locally
🔁 Routing & Global Loader
History-mode routing via Vue Router.

Global loader is managed by Pinia (src/stores/loader.js) with:

A counter to handle overlapping show() calls.

Minimum display time (300 ms) so the logo animation completes even for instant navigations.

Router hooks:

// router/index.js
router.beforeEach(() => useLoaderStore().show(300));
router.afterEach(()  => useLoaderStore().hide());
Utility to wrap async jobs and show the loader:


await useLoaderStore().wrap(() => fetch(...), 300);
📩 Contact Form (vee-validate)
Fields: fullName*, company, email*, phone*, serviceType, message*

Rules: required, email, numeric (+ digits-only input handler)

Emits submit with form values (integrate your API/MySQL later).

❓ FAQ Data Model (Firebase Realtime Database – optional)
Recommended schema if you connect Firebase:

{
  "faqs": {
    "groups": [
      { "id": "general", "title": "General", "order": 1 },
      { "id": "tech",    "title": "Technology & Product", "order": 2 }
    ],
    "items": [
      { "id": "faq-001", "groupId": "general", "question": "...", "answer": "...", "order": 1 },
      { "id": "faq-002", "groupId": "general", "question": "...", "answer": "...", "order": 2 },
      { "id": "faq-101", "groupId": "tech",    "question": "...", "answer": "...", "order": 1 }
    ]
  }
}
All client-side env vars must start with VITE_ (e.g., VITE_FIREBASE_API_KEY).

📦 Netlify Deployment
Site: https://bornetechtw.netlify.app/

netlify.toml (root)

[build]
  command = "npm run build"
  publish = "dist"

# SPA fallback (Vue Router history mode)
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "20"

# (Optional) static asset caching
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
Steps

Push repository to GitHub/GitLab/Bitbucket.

Netlify → Add new site → Import existing project.

Build command: npm run build, publish directory: dist.

Deploy.
(Or use Netlify CLI: netlify deploy --build --prod.)

♿ Accessibility
Visible focus ring for keyboard users.

FAQ uses semantic buttons with aria-expanded/aria-controls.

Images provide alt text where appropriate.

Skip-to-content link included.

⚡ Performance
Vite + code-splitting + HTTP/2.

Lazy loading (loading="lazy", decoding="async").

Cache headers for static assets (see netlify.toml).

CSS-only animations & GPU-accelerated transforms.

🗺️ Route Map
/ — Home (hero banner, core technologies, featured cards)

/about — About (origin story, image block, CTA)

/tech or /product — Technology / Products (thin banner + sections)

/faq — FAQ (accordion grouped by category)

/contact — Contact (tall left image + validated form)

Update exact paths to match your router configuration if needed.

🔧 Customization
Colors & tokens: edit @theme in src/style.css.

Buttons / Cards: adjust utility classes (.btn-primary, .card, etc.).

Banners: swap images & overlay strengths in ThinBanner.vue.

Loader: change logo image/animation in GlobalLoader.vue.

Validation: update rules/messages in ContactForm.vue.

🛣️ Roadmap
Wire the contact form to a backend (MySQL/HeidiSQL through an API).

CMS/Firebase for editable content.

Multi-language (i18n).

Analytics & event tracking.

📝 Scripts

{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
  }
  }
```
