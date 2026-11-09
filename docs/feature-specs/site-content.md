# Site content specification

## Purpose

The portfolio must present Yingchen's current professional story consistently
across the home page, experience timeline, project section, resume, profile
image, contact copy, metadata, structured data, and social previews.

## Data and source contract

- Employment MUST list Xmind as full-time from January 2025 through July 2026.
  Contract work MUST be presented separately for the two career-gap periods:
  June through December 2024 after Aimi, and August 2026 to the present after
  Xmind. It is not another employer in the main job timeline. The Mt.Code brand
  name MUST NOT appear in public copy.
- August 2021 remains the earliest verified contractor service month: invoice
  `#2021090101` was sent on 1 September 2021 for August AxIT/BLE work, with
  consulting correspondence and a signed contractor agreement from that month.
  This evidence MUST NOT be presented as a legal business-registration date.
- Xmind contribution details MUST be grounded in the locally archived monthly
  work maps. Mapify and Henri product positioning MUST match their public sites.
  Public summaries MUST state that Yingchen led development of both products.
- Current contractor content MUST distinguish four connected contributions and
  explain their value: AxIT iOS brings connected assessment workflows to iPhone
  and iPad; AxITLib shares models, capability rules, sampling, and metrics across
  iOS, Android, Connect web, and backend services; AxLib enables metric-algorithm
  review, de-identified trace exploration, and test-case verification; SBN
  Testing streamlines exact-build internal QA through shared plans, progress,
  evidence, priorities, immutable result history, and discussions. AxLib and
  SBN Testing MAY share one concise quality-system bullet or project outcome.
  The Strength By Numbers entry MUST retain Yingchen's earlier ownership of the
  original Android platform.
- Earlier employment, education, certification, contact, and profile details
  MUST use the saved LinkedIn snapshot, supplemented only by existing verified
  resume content.
- The About origin story MUST state that Yingchen's coding journey began in
  middle school in 2005 with both a friend-making platform built using ASP and
  Access for a website competition and work on football-playing and racing
  robots.
- The role title MUST be corrected to `Senior Full-Stack Engineer`; the typo in
  the captured LinkedIn title is backup evidence, not desired public copy.
- Experience duration MUST derive from 2016 and display as a current `N+ years`
  value rather than retaining the stale eight-year wording.
- Quantified outcomes MUST retain their supported values: Aimi startup time
  reduced by 52%, Aimi test coverage at 96%, Airtasker load time reduced by more
  than 50%, Airtasker retention improved by 17%, Lendlease manual classification
  work previously handled by 30 staff, and Strength By Numbers supporting more
  than 700 centres. The Strength By Numbers scale is intentionally rounded down
  from a read-only production query on 9 November 2026 that found 827 location
  records attached to 764 non-deleted organisations; public copy MUST NOT call
  all of those centres active without separate recent-usage evidence.

## UI rules

- All user-facing copy MUST use British English under the existing Australian
  locale (`en-AU`). This includes the home page, experience and project copy,
  resume, login and error messages, metadata, structured data, and social
  previews. Code identifiers, library APIs, product names, and quoted external
  text MUST remain unchanged when spelling carries technical or source meaning.
- The hero MUST lead with transferable full-stack and AI-product strength, then
  summarise the strongest verified achievements across Yingchen's whole career
  rather than narrating his latest roles. Its introduction MUST include products
  used by 5M+ people, up to 90% lower critical load time, founding an Android
  team, and automating work previously handled by 30 staff.
- The hero MUST use a stable headline rather than a typewriter or deleting-text
  animation. It MUST surface four verified proof points: Mapify's 5M+ users,
  Aimi's 52% startup improvement, Airtasker's 50%+ loading improvement, and
  Aimi's 96% test coverage.
- The main page container and fixed header MUST share the same responsive
  horizontal inset: 24 pixels on narrow mobile screens, 32 pixels from the
  small breakpoint, and 40 pixels from the medium breakpoint. The hero headline
  MUST retain that breathing room from both edges of the coloured page
  background without introducing a separate inset panel.
- Every hero proof card MUST visibly name the project behind its metric and act
  as an in-page link to that project's card: Mapify to `#project-mapify`, both
  Aimi metrics to `#project-aimi`, and Airtasker to `#project-airtasker`.
- Home-page sections MUST appear in this order: hero and proof points; Selected
  Work; experience; About; contact.
- About MUST use the current LinkedIn profile photo and describe current work
  before summarising earlier employers. It MUST retain the 2005 website and
  robotics projects as the start of Yingchen's interest in technology.
- About MUST use no more than two paragraphs and MUST NOT repeat detailed
  project implementation lists already present in Selected Work.
- Every Strength By Numbers reference and the SensiLab reference in About MUST
  link to their verified official websites.
- Where I've Worked MUST interleave employment and career-gap contractor entries
  in reverse chronological order: Contract Work (Aug 2026-Present); Xmind;
  Contract Work (Jun-Dec 2024); Aimi; Servian engagements; Strength By Numbers;
  SensiLab.
- Each contractor entry MUST identify the role as Independent Software
  Contractor and omit a company/brand label. Contractor work MUST NOT appear as
  a separate standalone section below Where I've Worked.
- The desktop experience navigation MUST label both contractor rows simply as
  `Contract Work`, without dates. Every navigation row MUST include a compact,
  recognisable business logo; both contractor rows MUST instead use the same
  neutral contract-work icon. Every logo and contractor icon MUST occupy the
  same 20-pixel square footprint with the same small corner radius and no border
  or shadow. Marks that already include a clearly visible solid background MUST
  render without an additional tile. The contractor, Servian, Airtasker, and
  Lendlease marks MUST receive a solid high-contrast background within that same
  footprint. Logos MUST fill their square and be clipped directly at the shared
  corner radius; there MUST NOT be an inset frame or border around the logo.
  The Strength By Numbers row MUST show the complete `SBN` lettermark rather
  than crop through the letters; the long wordmark text MAY be omitted because
  the adjacent row label supplies the company name. Icons MUST remain aligned
  with wrapped labels and MUST NOT replace the adjacent text label.
- Desktop and mobile MUST show `Servian Consulting` as a non-selectable parent
  group, with Optus, Airtasker, and Lendlease visibly nested beneath it. Each
  client engagement MUST remain individually selectable on desktop and
  expandable on mobile; the parent MUST NOT open an empty content panel. Other
  concrete mobile experiences MUST render in chronological order inside the
  same single-open accordion. The current contractor entry MUST be open by
  default; opening another entry MUST collapse the earlier one.
- On desktop, the Servian client group MUST use exactly one continuous vertical
  hierarchy guide. Nested client buttons MUST NOT draw a second parallel left
  border; their active state MUST instead use text and background emphasis.
- The Xmind experience MUST contain no more than four bullets. Current contract
  work and Aimi MUST contain no more than three bullets; older entries MUST
  contain no more than three, favouring quantified outcomes.
- Concise Xmind and Mapify summaries MUST NOT merge unrelated systems merely to
  satisfy the bullet limit. Search and its S3-to-PostgreSQL index migration MAY
  share one claim; the speech-to-text pipeline and production monitoring MUST
  remain distinct claims. Lower-priority detail SHOULD be omitted rather than
  attached to an unrelated achievement.
- The resume MUST separate contractor work under a Contract Work heading
  from the main employment history, retain the existing public and authenticated
  layouts, and remain readable when titles and dates wrap on narrow screens.
- The public resume SHOULD fit within two printed pages at its normal desktop
  width. Xmind MUST contain no more than four bullets, and public testimonials
  or repeated nested implementation lists MUST NOT inflate the resume.
- The resume MUST include the AWS Certified AI Practitioner credential and a
  LinkedIn contact link.
- The resume capability summary, authenticated role filter, and skills heading
  MUST name `iOS & Android` explicitly instead of using the generic `Mobile`
  label. The mobile-specialist title MUST read `Senior iOS & Android Engineer`.
- Resume employment metadata MUST use the concise `working arrangement,
  location` pattern and MUST NOT add `Full-Time` to ordinary employment roles.
  Xmind MUST always display `Remote, Australia`, not `Remote, Melbourne`, across
  public and authenticated country views.
- The resume education section MUST bold `Dux of Postgraduate Information
  Technology Award` as the complete award name and MUST NOT append the
  explanatory phrase `Top 1 Student`.
- Contact copy MUST invite relevant AI, web, mobile, and cloud collaboration
  without unsupported superlatives. It MUST use `Email me` as the primary
  mailto action and provide a secondary `Copy email address` button.
- Emoji accents MUST be purposeful and restrained: one in the hero greeting,
  one on each of the three featured-project category lines, and one in the
  contact callout. Emoji MUST NOT appear in the resume or replace labels/icons.
- The closed mobile header MUST remain a single 64-pixel row with a compact menu
  button. Public navigation MUST expose Work, Experience, About, Contact and
  Resume; Login MUST remain accessible by direct URL but MUST NOT appear in the
  main public navigation.
- Section anchors MUST retain at least 80 pixels of scroll offset so headings
  remain visible below the fixed header.
- Motion MUST be limited to section reveals, the mobile menu and subtle hover
  lift/colour feedback. It MUST respect `prefers-reduced-motion` and MUST NOT
  introduce continuous or content-obscuring animation.
- Metadata and social-preview copy MUST describe Yingchen as a senior
  full-stack, AI, and mobile product engineer.
- Every indexable route MUST provide its own concise title, human-readable meta
  description, canonical URL, Open Graph URL and Twitter card. Route-specific
  metadata MUST NOT inherit the homepage canonical URL or homepage-only social
  copy.
- The homepage MUST identify itself as an Open Graph profile. Its structured
  data MUST connect one `ProfilePage`, `Person`, `WebSite`, and profile
  `ImageObject`; the Person MUST link to the verified LinkedIn profile through
  `sameAs`, and the WebSite MUST identify the Person as publisher.
- The public resume MUST use a visible `h1` for Yingchen's name and `h2`
  headings for its major sections. Each public route MUST expose its primary
  content inside a `main` landmark.
- The site MUST provide square 512-pixel and 180-pixel PNG identity icons in
  addition to the legacy favicon so search results, browsers, and installed
  shortcuts are not limited to the 32-pixel source.
- Hero phrases, social-preview chips, and the resume skill summary MUST lead
  with transferable senior capabilities rather than routine implementation
  details or individual provider integrations.
- The hero, About section, Xmind experience, resume, metadata, and social
  preview MUST identify Mapify as a product trusted by 5M+ users; the scale
  claim MUST be refreshed or removed if the official Mapify homepage changes.

## Logic and state rules

- Existing Firebase access behaviour MUST remain unchanged: public visitors see
  the public Australia/JavaScript/full-stack resume, while authenticated
  `@yingchenliu.com` users retain role, stack, and country filters.
- Changing authenticated resume filters MAY reorder or hide specialised bullets
  but MUST NOT hide either the Xmind job or the separate contractor
  contracting entry.
- External HTTP links MUST open safely in a new tab with `noopener noreferrer`.
- The LinkedIn contractor entries MUST use their matching public descriptions:
  `https://yingchenliu.com/#contract-after-aimi` for Jun-Dec 2024 and
  `https://yingchenliu.com/#contract-after-xmind` for Aug 2026-Present. Publish
  those links only when the production site contains both targets.
- The current-year calculation MUST not affect the historical start and end
  dates attached to individual roles.
- The XML sitemap MUST contain only canonical, indexable pages, include the
  homepage's key portfolio images, and use the actual date of the last
  significant content or structured-data change. It MUST NOT generate a fresh
  `lastmod` date for unchanged content, and MUST NOT include the private login.
- `robots.txt` MUST allow the public site, declare the canonical host and point
  to the sitemap. The login page MUST remain crawlable enough for crawlers to
  observe its `noindex, nofollow` metadata, while staying out of the sitemap.
- Homepage section navigation MUST use ordinary fragment links so it remains
  meaningful without JavaScript; enhanced smooth scrolling MAY intercept those
  links when the target is present.
- The contact copy action MUST write `info@yingchenliu.com` to the system
  clipboard. It MUST replace its label with `Copied!` after success, show
  `Copy failed` if the browser rejects the write, and return to its idle label
  after a short delay.

## Compatibility and failure behaviour

- If Firebase configuration is absent or authentication fails, the public
  resume MUST remain usable and show the current experience history.
- Missing optional company URLs MUST render as plain company text, not as an
  empty or broken link.
- Desktop and mobile presentation MUST remain usable without JavaScript-driven
  experience selection on mobile.

## Acceptance checks

- The document language remains `en-AU`, and all original site copy uses British
  spellings such as `specialising`, `personalised`, `modernising`, `prioritising`,
  `authorised`, `catalogues`, `centres`, and `optimised` where applicable.
- The hero, About, experience timeline, resume, metadata, and social preview all
  show Xmind ending in July 2026 and contractor work as current.
- The About introduction mentions the 2005 friend-making website competition
  project and the football-playing and racing robots.
- The hero headline is immediately complete, contains no typewriter cursor, and
  displays all four verified proof points before the first content section.
- At mobile, small, and medium breakpoints, the hero and header content align to
  24-, 32-, and 40-pixel horizontal insets respectively, with no headline or
  proof-card text touching the viewport edge.
- The hero introduction describes cross-career strengths and achievements; it
  does not use the weaker chronology of helping take Henri to production and
  currently doing weekend AxIT work.
- Each hero proof point includes its project name, is keyboard-focusable, and
  resolves to the matching featured or earlier-work project card without being
  obscured by the fixed header.
- The home page renders Selected Work before experience, followed by the
  two-paragraph About section and the contact callout.
- The About employment summary renders Strength By Numbers and SensiLab as
  working external links.
- The current contractor entry is first in Where I've Worked, immediately
  followed by Xmind. The 2024 contractor entry appears immediately before Aimi.
- Contract work is labelled Independent Software Contractor, has no public
  company/brand label, and shows Jun-Dec 2024 and Aug 2026-Present wherever its
  timeline is shown.
- The two contractor list entries respond to their distinct direct-link hashes
  on desktop and mobile, selecting the correct desktop entry and scrolling the
  corresponding content into view. On mobile, the linked accordion entry opens
  before it is scrolled into view.
- The desktop navigation shows a logo for Xmind, Aimi, Servian, Optus,
  Airtasker, Lendlease, Strength By Numbers, and SensiLab, and shows the
  contract-work icon for both `Contract Work` rows. Neither contractor label
  contains a year. All marks render at the same 20-pixel square dimensions with
  the same small corner radius and no border or shadow. The contractor, Servian,
  Airtasker, and Lendlease marks have a visible solid background, other
  solid-background marks do not gain a second tile, and the Strength By Numbers
  icon shows all three `SBN` letters.
- Contractor copy on the hero, About, contracting section, resume, and AxIT project
  consistently identifies weekend contracting and the distinct value of AxIT
  iOS, AxITLib, AxLib, and SBN Testing.
- Mapify and Henri responsibilities are visible in the Xmind entry and remain
  consistent with the dedicated project cards, with development leadership
  stated explicitly for both products.
- The Xmind experience and resume describe Mapify search/index migration and
  speech-to-text reliability as separate achievements; neither presents
  Prometheus monitoring as part of the search migration.
- AxIT is visible in the hero, About, contractor experience, resume, project
  section, metadata, structured data, and social-preview story.
- The current LinkedIn profile image loads locally with square dimensions.
- The public resume shows the current roles without exposing authenticated-only
  filters, contains at most four Xmind bullets, and contains no testimonials.
- The résumé header lists `iOS & Android` rather than `Mobile`, and the matching
  skills row names both platforms explicitly.
- The Xmind résumé entry reads `Remote, Australia` with no `Full-Time` prefix;
  no other ordinary full-time role adds that redundant employment label.
- The education section shows the complete Dux award name in bold and contains
  no `Top 1 Student` wording.
- At 390 pixels, the closed header is one 64-pixel row, the menu expands and
  collapses without horizontal overflow, and anchor navigation leaves the
  destination heading visible.
- At 390 pixels, experience entries use the accordion, only one entry is open,
  and collapsed roles remain visible in reverse chronological order.
- At desktop and 390 pixels, Servian Consulting appears as the parent of Optus,
  Airtasker, and Lendlease; all three client rows are indented beneath it and
  remain independently selectable or expandable.
- The desktop Servian client list shows one vertical hierarchy guide, not two
  parallel lines, while the selected client remains visually distinct.
- The homepage uses exactly five restrained emoji accents: one hero greeting,
  three featured-project category lines and one contact callout.
- The contact card provides both a working mailto link and a keyboard-accessible
  copy button. Activating the copy button copies the exact public email address
  and announces visible success or failure feedback without changing pages.
- Generated homepage metadata resolves to its own canonical URL, profile Open
  Graph fields and large Twitter card; generated resume metadata resolves to a
  distinct `/resume` canonical URL and resume-specific title and description.
- Homepage JSON-LD contains a `ProfilePage` whose `mainEntity` resolves to the
  same `Person` node used by the `WebSite` publisher, and that Person links to
  the verified LinkedIn URL.
- The sitemap contains `/` and `/resume`, omits `/login`, uses the recorded
  significant-update date, and lists the profile, Mapify, Henri and AxIT images
  against the homepage. `robots.txt` exposes both the host and sitemap.
- The homepage and resume each render one visible `h1`; resume section labels
  use `h2` elements. The generated head links to both the 512-pixel site icon
  and 180-pixel Apple icon.
- Section reveals and hover interactions are disabled or effectively immediate
  when reduced motion is requested.
- Desktop and 390-pixel mobile previews show readable experience and resume
  layouts without horizontal overflow.
- The production build and `git diff --check` complete successfully.

## Iteration history

- 2026-11-09: Standardised résumé role metadata by removing the redundant
  `Full-Time` label and correcting Xmind's location to `Remote, Australia`.
- 2026-11-09: Replaced generic résumé `Mobile` labels with explicit `iOS &
  Android` positioning in the header, role filter, specialist title, skills and
  route metadata.
- 2026-11-09: Added a secondary copy-email action with accessible success and
  failure feedback alongside the primary mailto button.
- 2026-11-09: Removed the duplicate nested-client border so the Servian group
  uses one hierarchy guide with a background-based active state.
- 2026-11-09: Made Yingchen's development leadership explicit for Mapify and
  Henri across About, Selected Work, experience, and the resume, and added
  imagery to the compact earlier-work cards.
- 2026-11-09: Reframed the AxIT quality-system contribution around introducing
  AxLib for metric and trace review plus SBN Testing for streamlined exact-build
  internal verification.
- 2026-11-09: Expanded the AxITLib story from mobile-only alignment to the
  shared calculation contract spanning iOS, Android, Connect web and backend
  services.
- 2026-11-09: Replaced the stale Strength By Numbers 200+ scale with the
  conservative 700+ centres claim, verified against current non-deleted
  production organisations and their location records.
- 2026-11-09: Increased and aligned the responsive page and header insets so
  the large hero headline keeps clear breathing room from the background edge.
- 2026-11-09: Separated Mapify search/index migration from speech-to-text
  reliability in the Xmind experience and resume, and removed the unrelated
  Prometheus detail from the compressed resume claim.
- 2026-11-09: Restored Servian Consulting as a visible parent group in desktop
  and mobile experience navigation, with Optus, Airtasker, and Lendlease nested
  beneath it while retaining their individual content controls.
- 2026-11-09: Replaced the role-by-role hero introduction with a career-wide
  achievement summary covering 5M+ users, up to 90% faster loading, Android team
  leadership and automation of work previously handled by 30 staff.
- 2026-11-09: Added project names and direct in-page destinations to all four
  hero proof cards.
- 2026-11-09: Emphasised the complete Dux award name in the resume education
  section and removed the redundant `Top 1 Student` explanation.
- 2026-11-09: Strengthened technical SEO with unique route-level canonical and
  social metadata, ProfilePage/Person/WebSite structured data, accurate sitemap
  modification signals and image entries, semantic resume headings, crawlable
  fragment navigation, and search-sized identity icons.
- 2026-11-09: Reworked the full homepage into a stable proof-led hero, three
  concise featured projects, compact earlier work, a shorter experience and
  About story, a single-action contact card, restrained emoji accents, and
  reduced-motion-safe interaction. Simplified public navigation and resume
  density at the same time.
- 2026-11-09: Added a high-contrast background to the Servian mark and clipped
  every full-size experience-navigation logo to the same small corner radius,
  without an inset frame or border.
- 2026-11-09: Corrected Where I've Worked to reverse chronological order, with
  each contractor period immediately before the full-time role that preceded it.
- 2026-11-09: Added solid backgrounds only to transparent experience marks and
  reframed the Strength By Numbers wordmark so the complete SBN lettermark is
  visible within the shared square footprint.
- 2026-11-09: Standardised all public site, resume, login, metadata, structured
  data, and social-preview copy on British English under the `en-AU` locale.
- 2026-11-09: Reduced every experience-navigation mark to the same small square
  size and removed the white tile, padding, rounding, and shadow.
- 2026-11-09: Simplified both contractor navigation labels to Contract Work and
  added a business logo or contractor icon to every desktop experience row.
- 2026-11-09: Moved both contractor periods into Where I've Worked immediately
  after Xmind and Aimi, with distinct deep links for LinkedIn.
- 2026-11-09: Ended Xmind in July 2026 and split contractor work into the two
  career-gap periods after Aimi and Xmind, with one shared description target.
- 2026-11-09: Removed the Mt.Code brand from public copy and retained the work as
  a separate Independent Software Contractor history.
- 2026-11-09: Reframed contractor work as weekend side projects alongside full-time work
  and grounded current contribution copy in AxIT iOS, AxITLib, and SBN Testing,
  with the user value of each system stated explicitly.
- 2026-11-09: Linked the Strength By Numbers and SensiLab names in the About
  employment summary to their official websites.
- 2026-11-09: Expanded the About origin story to include the football-playing
  and racing robots alongside the 2005 ASP/Access website project.
- 2026-11-09: Separated contractor work from main employment, relabelled it as an
  independent software-contracting practice, and corrected the start to the
  earliest verified service month of August 2021.
- 2026-11-09: Added Mapify's official 5M+ user scale and quantified platform,
  email-engine, affiliate-settlement, and performance impact across the site.
- 2026-11-09: Reframed the hero, social preview, resume summary, and project
  chips around architecture, systems, reliability, and delivery capabilities.
- 2026-11-09: Added AxIT throughout the site and connected Yingchen's current
  Swift/SwiftUI, Bluetooth, metrics, sync, reporting, and release work to the
  earlier Strength By Numbers Android chapter.
- 2026-11-09: Expanded the Mapify/Henri project update into a site-wide content
  refresh covering current roles, profile, resume, contact, SEO, structured
  data, and social previews.
