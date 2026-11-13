# Web Team Playbook (v2 · 14 Nov 2026)

Shared standards for every agent. Each agent file stays short and points here, so briefs cost fewer tokens.

## 1. The product
- React 18 + Vite + React Router, deployed on Vercel from `main` (`Isimelisavutini/elimbridge-website`, public).
- **One source of truth per thing:** wording and business facts → `src/content/site.js` · brand tokens → `src/styles/tokens.css` · layout → `src/styles/global.css` · pages → `src/pages/*.jsx` · shared parts → `src/components/`.
- Brand: the Elim Bridge design system (https://claude.ai/artifact/1YkRtZEC7BVy36jnauK2E9). Flag blue #012169 leads, flag red #E4002B accents (≤5%), IBM Plex Sans/Mono, square corners, no gradients, shadows, emoji or stock photos.
- Public email: info@elimbridge.com.au. Footer: ELIMBRIDGE TECHNOLOGIES · ABN 23 904 305 868 (no "Pty Ltd" until incorporated).

## 2. Lessons learned (retro of 12–14 Nov 2026)
| What happened | Rule from now on |
|---|---|
| Push access to GitHub failed three times (private repo, Claude app not installed). | Check access in the first five minutes: `add_repo` + a test push. Report blockers immediately with the fix. |
| The phone menu shipped broken: `.site-header .container` also styled the menu inside it. | Scope layout selectors to a named class (`.header-bar`). Never style a generic class through a parent. |
| Copy bugs ("For sMEs", the same sentence twice). | Never transform copy in code. Read every changed page as text before reporting. |
| Changes went straight to `main` and so to the live site. | Work on a branch; Vercel gives a preview URL; merge only with Isimeli's approval. |
| The stack moved from "static" to React without a logged decision. | Any change to stack, inbox, domain or cost goes in `docs/DECISIONS.md` before work starts. |
| The Drive connector can't carry large images. | Images come through the browser pane into Downloads, or are attached in chat. Resize to ≤600 px and ≤60 KB before committing. |
| The email was switched to info@ before that mailbox existed. | Confirm that infrastructure exists (mailbox, DNS, accounts) before pointing the site at it. |
| Changing nameservers would cut off email. | DNS: add only A/CNAME records at Synergy Wholesale. Never touch MX or nameservers. |

## 3. Quality gates (every change)
1. `npm run build` passes, with no console errors.
2. Layout audit at 320 / 360 / 390 / 768 / 1024 / 1280 px: no horizontal overflow, tap targets ≥44 px (the script pattern lives in `docs/qa.md` once it is written).
3. Text contrast ≥4.5:1; keyboard focus visible; every image has alt text.
4. Lighthouse ≥90 on all four categories (from Phase 5 on).
5. No invented clients, numbers, prices, certifications or testimonials.

## 4. Token discipline (lean working)
- Read only the files the task names; use `grep`/`rg` before opening whole files.
- Edit with small, targeted diffs. Never re-paste whole files.
- Reuse scripts and checks in the repo; don't rewrite them each time.
- Screenshots only when the visual result is the question; otherwise read the page as text.
- Report in the fixed format (below); no narration.
- One brief per agent, self-contained: goal · inputs · deliverables (paths) · constraints · checks.

## 5. Report format (all agents → Thomas → Isimeli)
**Phase · Status** — **Delivered** (path + one line) — **Checked** — **Needs decision** — **Next step (awaiting approval)**
