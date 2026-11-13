# Roadmap: from brochure site to interactive system (v1 · 14 Nov 2026)

Goal: visitors **do** something on elimbridge.com.au: find the right service, check their IT health, request and track work. Every stage needs Isimeli's approval. No prices or results are invented anywhere.

## Stage I1 — Interactive tools (no new accounts, no cost)
| Feature | What the visitor does | Owner |
|---|---|---|
| **Service Finder** | Answers 4–5 tap questions → gets the matching service(s) → one tap pre-fills the proposal form | Grace (questions) · Leilani (flow) · Mosese (build) |
| **IT Health Check** | 12 yes/no questions across Security, Backup, Devices, Cloud → a score per area with plain next steps; nothing stored | Grace · Leilani · Mosese |
| **Multi-step proposal form** | 3 short steps with progress; the draft is saved on the device; a review screen before sending | Leilani · Mosese |

## Stage I2 — Real enquiries (small or free services)
| Feature | Notes | Owner |
|---|---|---|
| **Form delivery** | Vercel function → email to info@ + auto-reply to the visitor; Cloudflare Turnstile spam protection | Daniel |
| **Book a discovery call** | Cal.com (or Calendly) embedded on Contact; needs an account | Daniel · Mosese |
| **Security headers + analytics** | `vercel.json` headers; Vercel Web Analytics (cookie-free) | Daniel |

## Stage I3 — Client portal (Supabase, Sydney region)
| Feature | Notes | Owner |
|---|---|---|
| **Sign-in** | Email magic link, no passwords | Daniel |
| **My requests** | Clients see their proposal and project status and documents | Mosese · Daniel |
| **Support tickets** | Raise and track tickets; email updates | Mosese · Daniel |
| **Team dashboard** | Directors see new enquiries, health-check leads and tickets in one place | Leilani · Mosese · Daniel |

## Stage I4 — Advanced
- **AI assistant** that answers from the site's own content and hands over to "Request a proposal" (needs an API key and a cost cap).
- **Insights hub** (articles/guides, written in MDX) for search and AI-answer visibility.
- **Fijian/English toggle** on key pages for Pacific clients.
- **Case studies** once clients agree in writing.

## Team upgrades already in place (14 Nov)
- Shared `docs/PLAYBOOK.md`: stack, lessons learned, quality gates, token discipline, report format.
- Leaner agent briefs that point to the playbook instead of repeating context (fewer tokens per run).
- A retro after every phase feeds new rules into the playbook.
