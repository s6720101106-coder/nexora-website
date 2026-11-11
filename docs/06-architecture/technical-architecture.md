# Phase 06 — Technical Architecture

## Baseline
- Next.js App Router + TypeScript.
- Tailwind CSS for styling.
- shadcn/ui where appropriate.
- Locale route groups or explicit `/th/` and `/en/` route segments.
- Git/GitHub for version control.
- Google Stitch design handoff; OpenCode implementation workflow.
- Markdown as source of project documentation.

## Proposed application layers
1. Presentation: localized pages, shared components, accessible forms.
2. Content: typed locale dictionaries / CMS-ready content boundary.
3. Validation: shared schemas for quote and consultation forms.
4. Submission service: server-side endpoint; provider TBD.
5. Observability: privacy-conscious error logging and analytics.
6. Delivery: hosting/CDN TBD; CI checks before deployment.

## Route map
`/[locale]`, `/[locale]/about`, `/[locale]/services`, `/[locale]/services/website-development`, `mobile-application-development`, `enterprise-software`, `custom-software`, `ai-automation`, `portfolio`, `portfolio/[slug]`, `contact`, `request-a-quote`, `consultation`.

## Data model (conceptual)
Enquiry: id, type (quote|consultation), name, organization?, email, phone?, service?, topic?, projectSummary?, preferredDateTime?, preferredContactMethod?, consentVersion, createdAt, status.
Do not store more personal data than necessary. Retention and deletion policy must be decided before production.

## Security
- Server-side validation and output encoding.
- Rate limiting and spam/bot mitigation.
- Secrets only in environment variables; never commit secrets.
- HTTPS in production.
- Restrict access to enquiry records.
- Avoid sensitive form data in logs and analytics.
- Privacy notice, consent wording, retention, data-subject request process and vendor review required.
- Email delivery provider and storage provider TBD.

## Open decisions recorded as TBD
Database, CMS, hosting, domain, email provider, analytics provider, captcha/spam provider, backup/retention, monitoring, form recipient and legal policy.
