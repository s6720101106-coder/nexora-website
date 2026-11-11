# Phase 08 — Testing, SEO & Deployment Readiness

## Functional QA
- Verify all TH/EN routes and locale switching.
- Verify navigation, breadcrumbs, service links and demo portfolio links.
- Verify required/optional fields, validation, keyboard use and error recovery.
- Verify quote and consultation submissions against a test recipient/provider.
- Verify success messages appear only after accepted server response.
- Verify no calendar booking is implied.

## Accessibility
- Keyboard-only navigation and visible focus.
- Semantic landmarks and heading hierarchy.
- Accessible names/labels and error associations.
- Contrast checks and reduced-motion behavior.
- Screen-reader review of navigation and form states.

## SEO
- Unique localized title and description per page.
- Canonical URLs and reciprocal hreflang for translated equivalents.
- XML sitemap and robots.txt.
- Open Graph metadata.
- Descriptive image alt text.
- Accurate Organization/Service structured data only when facts are verified.
- Noindex for staging and internal preview environments.

## Security/privacy
- Server-side validation, rate limits, spam controls.
- HTTPS, secret management and least-privilege access.
- Privacy notice, consent, retention and deletion process reviewed.
- No PII in analytics or application logs.
- Dependency and vulnerability review.

## Deployment gate
Do not deploy publicly until domain, hosting, production environment variables, verified contact details, form recipient, privacy/legal content, backups, monitoring and rollback plan are configured. Deployment has not been performed by this package.
