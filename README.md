# Elim Bridge Technologies — Website

The website for Elim Bridge Technologies at **elimbridge.com.au**, built with React and Vite.

> Connecting People. Empowering the Future.

## Pages

| Path | Page |
|---|---|
| `/` | Home |
| `/services` | Services (each service has its own anchor, e.g. `/services#cybersecurity`) |
| `/how-we-deliver` | How We Deliver |
| `/about` | About |
| `/contact` | Contact: the proposal request form |
| `/privacy` | Privacy policy |

Every page ends with the same proposal band and leads to one action: **Request a proposal**.

## Run it locally

You need Node.js 20 or later.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Where to change things

| To change | Edit |
|---|---|
| Any wording, services, stages, FAQs, values, directors | `src/content/site.js` |
| Email address, phone numbers, ABN | `business` in `src/content/site.js` |
| Colours, fonts, spacing (brand tokens) | `src/styles/tokens.css` |
| Layout and component styles | `src/styles/global.css` |
| Page structure | `src/pages/*.jsx` |
| Logo and favicon | `public/*.svg` |
| Director photos | `public/team/` (see the README there) |

Colours, type and layout follow the Elim Bridge Technologies brand guidelines (Australian flag blue #012169 and red #E4002B, IBM Plex Sans and IBM Plex Mono).

## Proposal form

- **Default:** the form opens the visitor's email app with the request filled in, addressed to the business email in `site.js`.
- **With a form service:** set `VITE_FORM_ENDPOINT` to an endpoint that accepts JSON POSTs (for example Formspree). Locally, copy `.env.example` to `.env`. On GitHub, add it as a repository variable under Settings › Secrets and variables › Actions › Variables.

## Deploying

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages on every push to `main`.

1. Settings › Pages › Source: **GitHub Actions**.
2. GitHub Pages on a private repository needs a paid GitHub plan. Otherwise make the repository public, or deploy `dist/` to another static host such as Vercel, Netlify or Cloudflare Pages.
3. To use elimbridge.com.au, add it under Settings › Pages › Custom domain, then point the domain's DNS at GitHub Pages in the Synergy Wholesale portal.

The build copies `index.html` to `404.html` so links like `/services` work on static hosts.

## Team

Built and maintained by Elim Bridge's Web Development team (led by Thomas, AI Operations Manager). Team standards, decisions, status and roadmap live in the private repo `Isimelisavutini/elimbridge-ai-agent-teams` under `departments/web-development/`.

## Before launch

- [x] Add the three director photos to `public/team/`
- [x] Public email set to info@elimbridge.com.au
- [ ] Add public phone numbers to `site.js`
- [ ] Have the privacy policy reviewed
- [ ] Connect the form to a form service, or confirm the email-app approach
- [ ] Point elimbridge.com.au at the host

---

© ELIMBRIDGE TECHNOLOGIES · ABN 23 904 305 868
