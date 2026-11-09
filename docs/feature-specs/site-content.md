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
- Current contractor content MUST distinguish three connected contributions and
  explain their value: AxIT iOS brings connected assessment workflows to iPhone
  and iPad; AxITLib shares models, capability rules, sampling, and metrics across
  iOS and Android; SBN Testing provides collaborative, exact-build QA with
  progress, evidence, priorities, immutable result history, and discussions.
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
  than 200 centres.

## UI rules

- All user-facing copy MUST use British English under the existing Australian
  locale (`en-AU`). This includes the home page, experience and project copy,
  resume, login and error messages, metadata, structured data, and social
  previews. Code identifiers, library APIs, product names, and quoted external
  text MUST remain unchanged when spelling carries technical or source meaning.
- The hero MUST lead with current AI-product and full-stack positioning and
  describe Mapify, Henri, and Xmind in the past tense while presenting contractor
  work as current.
- About MUST use the current LinkedIn profile photo and describe current work
  before summarising earlier employers. Its opening paragraph MUST connect the
  2005 website and robotics projects as the start of Yingchen's interest in
  technology.
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
- Desktop MUST keep the selectable experience navigation. Mobile MUST render
  each concrete experience in chronological order and omit empty grouping rows.
- The resume MUST separate contractor work under a Contract Work heading
  from the main employment history, retain the existing public and authenticated
  layouts, and remain readable when titles and dates wrap on narrow screens.
- The resume MUST include the AWS Certified AI Practitioner credential and a
  LinkedIn contact link.
- Contact copy MUST invite relevant AI, web, mobile, and cloud collaboration
  without unsupported superlatives.
- Metadata and social-preview copy MUST describe Yingchen as a senior
  full-stack, AI, and mobile product engineer.
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
- The About employment summary renders Strength By Numbers and SensiLab as
  working external links.
- The current contractor entry is first in Where I've Worked, immediately
  followed by Xmind. The 2024 contractor entry appears immediately before Aimi.
- Contract work is labelled Independent Software Contractor, has no public
  company/brand label, and shows Jun-Dec 2024 and Aug 2026-Present wherever its
  timeline is shown.
- The two contractor list entries respond to their distinct direct-link hashes
  on desktop and mobile, selecting the correct desktop entry and scrolling the
  corresponding content into view.
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
  iOS, AxITLib, and SBN Testing.
- Mapify and Henri responsibilities are visible in the Xmind entry and remain
  consistent with the dedicated project cards.
- AxIT is visible in the hero, About, contractor experience, resume, project
  section, metadata, structured data, and social-preview story.
- The current LinkedIn profile image loads locally with square dimensions.
- The public resume shows the current roles without exposing authenticated-only
  filters.
- Desktop and 390-pixel mobile previews show readable experience and resume
  layouts without horizontal overflow.
- The production build and `git diff --check` complete successfully.

## Iteration history

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
