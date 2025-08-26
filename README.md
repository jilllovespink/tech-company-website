# Borne Technology Website (Vue 3 + Vite + Tailwind)

**Live Demo:** https://bornetechtw.netlify.app/

A modern, performant corporate website for **Borne Technology Ltd.**  
I planned the IA, designed the UI system, and built the site end-to-end with a focus on clean visuals, accessibility, and fast loads.

---

## Overview

- **Pages:** Home, About, Technology/Products, FAQ, Contact  
- **Design:** Tailwind v4 design tokens (brand gold & accent blue), full-bleed banners, feature cards  
- **UX:** Sticky header + mobile menu, FAQ accordion, validated contact form  
- **Loading:** Global overlay with logo write-in animation (Pinia-controlled, 300 ms min hold)  
- **Deploy:** Netlify (SPA history routing)

---

## Key Features

- **Responsive UI** with consistent spacing and mobile-first layout
- **ThinBanner** component for internal pages (full-width, image + overlay)
- **Feature Cards** with hover elevation & image zoom (GPU transforms)
- **FAQ Accordion** (ARIA attributes, keyboard accessible)
- **Contact Form** with `vee-validate` (required, email format, digits-only phone)
- **Performance**: lazy/async image decoding, small bundle via Vite

---

## Tech Stack

- **Vue 3**, **Vite**, **Pinia**, **Vue Router**
- **Tailwind CSS v4** (`@theme` tokens), **Font Awesome**
- **vee-validate** (+ rules)
- **Netlify** (CI/CD & SPA redirects)

---

## Quick Start

```bash
# install
npm i

# dev
npm run dev

# production build
npm run build
npm run preview
