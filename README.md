# WebBridge — Software Development Agency Website

A premium, fully static agency website built with **Angular 19** (standalone components, signals, SCSS). No backend, no database: all content lives in TypeScript data files.

## Run

```bash
npm install
npm start          # dev server → http://localhost:4200
npm run build      # production build → dist/webbridge/browser
```

> The npm scripts call the Angular CLI through `node` directly because the folder name contains `&`, which breaks the Windows `ng`/`npx` shims.

## Edit content

Everything you'll want to change is in **`src/app/data/site.data.ts`**:

| What | Constant |
| --- | --- |
| Email, WhatsApp number, LinkedIn, GitHub, location | `CONTACT` ⚠️ replace the placeholders |
| Navigation | `NAV_LINKS` |
| Hero / About copy | `HERO`, `ABOUT`, `ABOUT_HIGHLIGHTS` |
| Services, technologies | `SERVICES`, `TECH_CATEGORIES` |
| Demo projects | `PROJECTS` |
| Process, Why choose us | `PROCESS`, `WHY_US` |
| Testimonials (sample) | `TESTIMONIALS`: replace with real, permitted feedback |
| FAQ, form dropdowns | `FAQS`, `SERVICE_OPTIONS`, `BUDGET_OPTIONS` |

## Structure

```
src/app/
  core/        reveal.directive (scroll reveal), active-section.service (nav highlight)
  shared/      icon (inline SVG set), logo, section-header
  models/      content interfaces
  data/        site.data.ts: all static content
  components/  navbar, hero, about, services, technologies, projects,
               process, why-choose-us, testimonials, faq, contact, footer
```

## Notes

- **Contact form**: reactive form with required, email and phone (10–15 digits) validation. On submit it opens WhatsApp (`wa.me`) or the user's mail app (`mailto:`) with the inquiry pre-filled. Nothing is sent to a server.
- **Honesty**: projects carry "Demo Project" badges and testimonials carry "Sample · Demo content" badges.
- **Accessibility**: skip link, semantic landmarks, keyboard-operable menu/accordion/carousel/modal (native `<dialog>`), visible focus rings, `prefers-reduced-motion` support.
- **Before going live**: add `og:url` and a 1200×630 PNG `og:image` in `src/index.html`.
