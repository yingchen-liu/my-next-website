# Portfolio projects

## Purpose

The home-page section titled `Selected Work` presents selected products
Yingchen helped build. It should communicate both the product value and
Yingchen's concrete contribution without reading like a task log.

## Behaviour contract

- Projects are ordered newest first.
- Mapify, Henri and AxIT are the only full featured case studies, in that order.
  Aimi Player, OptuSafe and Airtasker appear below them as compact earlier-work
  cards rather than repeating the full case-study layout.
- Project titles and artwork link to, or visually identify, the public product.
- External links open in a new tab and use `noopener noreferrer`.
- Desktop featured cards alternate image alignment; mobile cards remain stacked.
- Each featured entry includes one concise product description, exactly three
  contribution highlights, and no more than four core-skill chips.
- Each contribution highlight MUST lead with a short, memorable outcome or
  ownership headline, followed by one concise evidence sentence. Highlights
  MUST prioritise scale, system ownership, production impact, user value and
  verified performance outcomes over task-list wording.
- Each earlier-work card contains one outcome sentence and one compact skill
  line; it MUST NOT repeat long role descriptions from the experience section.
  It MUST also show the locally stored product image above the text, using a
  consistent 16:9 crop across Aimi Player, OptuSafe, and Airtasker.
- Core-skill chips MUST communicate transferable senior-level capability, such
  as architecture, orchestration, streaming, reliability, observability,
  connected-device systems, performance, or technical leadership.
- Core-skill chips MUST NOT promote routine feature work or a single provider
  integration as a headline skill. Authentication-provider integrations may
  appear in supporting contribution copy when relevant, but not as a core-skill
  chip.
- Each featured skill MUST render as a visually distinct chip rather than
  undifferentiated inline text.
- Mapify and Henri project copy MUST state that Yingchen led their development;
  this ownership language MUST remain consistent with About, experience, and
  resume summaries.
- Mapify copy MUST lead with its verified 5M+ user scale and cover search/data
  architecture, summarisation architecture, resilient speech-to-text,
  production monitoring, measurable web performance, the multilingual
  newsletter/transactional-email engine, and the affiliate operations and
  settlement system.
- The Mapify summarisation-architecture contribution MUST explain that AI
  summarisation, mind-map generation, and persistence were decoupled from the
  web UI and moved into a shared package, enabling consistent generation across
  web, backend, and Zapier surfaces. It MUST remain a distinct outcome rather
  than being merged with search, ingestion, or email work.
- The Mapify email-engine contribution MUST cover shared JSON-defined templates,
  generated TypeScript renderers, dynamic mailing lists, click tracking,
  unified unsubscribe, locale-aware content, one-ZIP locale imports, and
  dashboard sending without implying a verified email-recipient count.
- The Mapify affiliate contribution MUST cover partner contracts, one-step
  Stripe coupon creation, 5–15% commission tiers, a two-month settlement cycle,
  and pre-settlement refund/downgrade adjustments without claiming an
  unverified affiliate or payout count.
- Mapify performance copy MUST retain the verified before/after values: FCP
  11.6s to 1.1s and LCP 22.1s to 7.6s.
- Henri copy covers its personalised tutoring experience, onboarding and auth,
  learning and engagement flows, AI generation, platform stability, tests,
  internationalisation, infrastructure, and release work.
- The Henri case study MUST expose an `App Store` action linking to the verified
  Xmind Ltd. iOS listing for `Henri: Personal AI Tutor`.
- AxIT copy covers its connected strength and performance assessments and
  Yingchen's work across the original Android product and current iOS delivery,
  including Bluetooth devices, shared metrics, storage and sync, reporting,
  responsive layouts, accessibility, security, diagnostics, and releases.
- AxIT scale copy MUST say the platform supports `700+ centres`. This claim is
  a conservative rounding of the 827 location rows associated with 764
  non-deleted organisations found in the read-only production query on 9
  November 2026; it MUST NOT be strengthened to `active centres` without
  separate recent-usage evidence.
- The AxIT card MUST use the official landscape photograph of a person holding
  the tablet with AxIT result charts, sourced from the bottom-right image in the
  `They say a picture says a thousand words` section of the official AxIT
  software page. It MUST be stored locally as
  `/images/axit-results.jpeg`, not hotlinked or replaced by the previous report
  screenshot.
- Current AxIT contribution copy MUST separate the four connected systems:
  AxIT iOS brings the product to iPhone and iPad; AxITLib reduces platform drift
  through shared Kotlin Multiplatform models, capabilities, sampling rules, and
  metrics across iOS, Android, Connect web, and backend services; AxLib makes
  metric algorithms, de-identified traces, and test cases explorable and
  reviewable; SBN Testing streamlines exact-build internal QA through shared
  plans, progress, evidence, priorities, immutable history, and discussions.
  AxLib and SBN Testing SHOULD share one outcome card because together they form
  the metric-review and internal-testing workflow.
- Cross-runtime AxITLib copy MUST describe one shared calculation contract
  across mobile, web, and backend. It MAY name Connect as the browser surface
  and backend services separately, but MUST NOT imply that the Connect frontend
  is itself a Node.js server runtime.
- The work MUST be described as independent software contracting, not as a
  second full-time employer or a named company/brand.

## Content sources

- Product positioning and artwork come from the current official Mapify and
  Henri public sites and the official AxIT product/App Store pages.
- Mapify's 5M+ scale comes from its current official homepage; the affiliate
  commission and settlement rules come from its official affiliate page.
- Contribution details come from the locally archived monthly Xmind work maps.
- AxIT contribution details come from the local iOS, Android, metrics, trace,
  testing, and release records; source or replay evidence MUST NOT be presented
  as blanket physical-device, hosted, PDF, or release acceptance.
- Copy may group related tasks into outcomes, but must not claim ownership or
  technologies that are not supported by those sources.

## Acceptance checks

- `Selected Work` renders Mapify, Henri and AxIT as full case studies before the
  compact earlier-work cards for Aimi Player, OptuSafe and Airtasker.
- Each earlier-work card displays its matching local product image in a
  consistent 16:9 frame without stretching or horizontal overflow.
- The Mapify case study includes a dedicated summarisation-architecture card;
  on medium and larger screens its four outcome cards render as a balanced
  two-column grid rather than a cramped four-column row.
- All three new title links open the correct public sites.
- Henri links to the official App Store listing at
  `https://apps.apple.com/us/app/henri-personal-ai-tutor/id6756479042`.
- All three new images load locally and preserve a 16:9 aspect ratio.
- AxIT links to the official App Store and Google Play listings.
- The AxIT project image renders from `/images/axit-results.jpeg`, has intrinsic
  dimensions of 1500 by 844 pixels, and shows the tablet results photograph.
- The AxIT role copy names AxIT iOS, AxITLib, AxLib, and SBN Testing and states the
  outcome each contribution brings.
- The AxLib and SBN Testing outcome covers metric-algorithm review, de-identified
  trace exploration, test-case verification, and streamlined exact-build
  internal testing with auditable evidence.
- The AxITLib outcome names iOS, Android, Connect web, and backend services;
  its headline does not describe the shared metric system as mobile-only.
- The AxIT case study, Strength By Numbers experience, and resume consistently
  state that the platform supports more than 700 centres.
- Every featured project shows capability-led skill chips; no chip uses a
  routine feature such as Apple/Google sign-in as the headline value.
- All ten contribution cards render a distinct outcome-led headline before
  their supporting evidence; none opens with an unlabelled implementation list.
- Mapify visibly states `5M+ users`, the newsletter/email template engine,
  affiliate settlement responsibilities, and both verified web-performance
  before/after pairs.
- Skill chips wrap without horizontal overflow at the 390-pixel breakpoint.
- The section remains readable at mobile and desktop breakpoints.
- The production build completes without TypeScript or rendering errors.

## Iteration history

- 2026-11-09: Added product imagery to all three earlier-work cards and made
  development leadership explicit for both Mapify and Henri across the site.
- 2026-11-09: Replaced the generic release-confidence card with the connected
  AxLib and SBN Testing story: algorithm review, trace exploration, test-case
  verification and streamlined internal QA.
- 2026-11-09: Expanded the AxITLib contribution to cover its shared calculation
  contract across mobile, Connect web, and backend services without conflating
  browser and Node runtimes.
- 2026-11-09: Updated the AxIT scale from the stale 200+ figure to a
  production-verified, conservatively rounded 700+ centres claim.
- 2026-11-09: Added Mapify's shared summarisation architecture as a dedicated
  contribution, grounded in the archived January work map, and balanced its
  four outcome cards in a two-column desktop grid.
- 2026-11-09: Rewrote all featured-project contributions as outcome-led mini
  case studies with stronger headlines, clearer ownership, scale and verified
  production impact.
- 2026-11-09: Added the verified Henri iOS App Store listing to the featured
  project card.
- 2026-11-09: Rebuilt the section as three concise featured case studies plus a
  compact earlier-work row, with exactly three contribution highlights per
  featured product and restrained hover interaction.
- 2026-11-09: Replaced the AxIT card artwork with the official bottom-right
  tablet results photograph from the AxIT software page.
- 2026-11-09: Reframed current AxIT work as independent weekend side projects
  and separated the value delivered by AxIT iOS, AxITLib, and SBN Testing.
- 2026-11-09: Added Mapify's verified 5M+ user scale, multilingual newsletter
  and transactional-email platform, affiliate settlement system, and FCP/LCP
  performance outcomes across the project and professional story.
- 2026-11-09: Reframed every project around senior engineering capabilities,
  removed routine integrations from the skill hierarchy, and promoted the
  skill list into a labelled visual chip group.
- 2026-11-09: Added AxIT as a first-class project, connected its earlier
  Android chapter to the current iOS work, and added official store links and
  public-safe App Store artwork.
- 2026-11-09: Reconciled project positioning with the broader site-content
  contract so the hero, About, work history, resume, and SEO tell the same
  current Xmind/AI-product story.
- 2026-11-09: Added Mapify and Henri as the two newest featured projects using
  the archived work history and current official product positioning.
