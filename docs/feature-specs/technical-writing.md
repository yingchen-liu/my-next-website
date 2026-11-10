# Technical writing specification

## Purpose

The portfolio writing section presents evidence-led engineering case studies
that help hiring readers understand Yingchen's judgement, not only the products
or technologies he has used.

## Content contract

- Writing MUST cover the strongest repository-supported work from current AxIT
  contributions back through Henri, Mapify and Aimi.
- Every article MUST use the same order: introduce the app, then the problem,
  then the discussion of the approach, then the decision, then how well it
  worked, then what was learned. Headings and “On this page” labels MUST use
  that article’s own titles. They MUST NOT be replaced with the fixed labels
  “Intro of the app”, “Problem”, “Discussion”, “Decision”, “How well it
  worked”, or “My learning”.
- The product introduction MUST open the article body, before the problem,
  the discussion and the decision. Its first paragraph MUST say, in one or two
  plain sentences, what the app does for its user. That opening MUST come
  before metrics, architecture, hardware traces or internal tools, and a
  reader with no knowledge of the company MUST be able to understand the
  product from it alone. The rest of the introduction continues in prose. It
  MUST NOT end with a glossary of labelled term cards.
- Articles about the same product MUST open with the same product description.
  AxIT is a connected strength-assessment app: a practitioner runs a test with
  Push-IT, Pull-IT or Stomp-IT hardware and sees live force, calculated results
  and reports. Each AxIT introduction MUST show that sentence, then the same
  public Strength By Numbers photograph of a practitioner running a Stomp-IT
  jump with a client: `LHP-WP-235` from the Wauchope Physiotherapy article,
  stored as `practitioner-client-stomp-test.jpg`. The alternative text MUST
  name the practitioner, the client and the Stomp-IT plates. The caption MUST
  say the practitioner is running the test and the app is recording the force,
  and MUST credit Strength By Numbers. Mapify is an AI app that turns documents, videos, recordings and
  web pages into visual mind maps. Henri is a personal AI tutor that turns a
  topic into a syllabus of conversational lessons, questions and quizzes. Aimi
  Player is a generative-music app that creates an evolving performance rather
  than playing a fixed playlist.
- Published article text, labels, captions, alternative text and screenshots
  MUST be English. They MUST NOT contain Chinese. The Henri article explains
  the model call and MUST NOT show the syllabus screenshot.
- Acronyms and internal concepts MUST be defined at first use. Explanations
  MUST distinguish source data, derived results, product surfaces and
  operational workflows instead of treating them as interchangeable.
- Every article MUST surface at least three concrete engineering decisions
  after the discussion and before how well it worked. Each decision MUST name
  the boundary, trade-off or failure mode it addresses rather than repeating a
  technology label.
- Public claims MUST come from authored repository history, existing verified
  portfolio evidence or an explicitly described measurement. Private source,
  customer data, credentials, internal links and proprietary identifiers MUST
  NOT be published.
- The Aimi source repository is not available in the current local or
  authenticated GitHub inventory. Its article MUST therefore stay within the
  already verified outcomes: cross-platform generative-music SDK leadership,
  founding the Android team, 52% faster startup and 96% test coverage.
- AxIT articles MUST keep acceptance levels distinct. Source and replay
  evidence MUST NOT be presented as hosted, physical-device, PDF, scientific,
  App Store or release approval.
- The AxIT metric-contract article MUST first explain that connected hardware
  produces sampled force-over-time traces and that metrics are derived,
  versioned interpretations such as peak force, rate of force development,
  impulse and bilateral or bodyweight-relative results. It MUST distinguish a
  raw trace, metric result, calculation contract and aggregated benchmark.
- The metric-contract problem MUST tell the order in which the products
  existed. AxIT started on Android, with the metric rules inside that app.
  Connect came next and shows saved sessions. There was no iOS app yet. Before
  iOS was created, the metrics were separated from the Android screens by
  choosing Kotlin Multiplatform, so Android, Connect and the future iOS app
  call one calculation. Making the whole app cross-platform was not a good
  option, because Bluetooth, the screens and performance differ by platform.
  Kotlin Multiplatform shares the metrics and does not replace the app.
  Extracting them was a conversion of the existing Android calculation from
  Java to Kotlin, not a rewrite from scratch, and it did not require retesting
  the whole app. The remaining work is the caller adapters: an iOS framework,
  and a separate packaged path for the browser because it cannot import the
  mobile build. The
  section title is “Separate the metrics before iOS”. That title is the problem
  section and appears before the diagram. It MUST NOT present Android, iOS,
  Connect, the backend and browser review as four surfaces that already
  existed together.
- Backend copy MUST explain that controlled recalculation pins catalogue and
  engine identity, preserves raw traces and keeps unavailable/error outcomes
  explicit. It MUST NOT imply that all historical data has been or should be
  rewritten. Benchmark copy MUST retain the cohort definition and calculation
  provenance rather than presenting a percentile curve as context-free truth.
- Browser-review copy MUST explain success rates, recovered/lost cases and
  value differences over the same trace cohort. It MUST describe Connect as a
  browser application and MUST NOT equate Node build tooling with its runtime.
- The “two-phase quality model” section MUST stay in its paragraphs. It MUST
  NOT end with the four summary lines about algorithm acceptance, testers
  recomputing formulas, replay acceptance, or attaching every result to its
  cohort and configuration.
- The feature-flag section MUST stay in its paragraphs and the phase-2
  screenshots. It MUST NOT end with the five summary lines about All ON,
  unmentioned flags, the 1.5.2 setup, the features on that map, or a fresh
  confirmation. Takeaways MUST NOT repeat that material as “Gate new
  behaviour with a default-off feature flag” or “Ask testers to reconfirm
  when the next cases need different flags.”
- The AxIT QA article MUST centre the ownership problem: ordinary app testers
  do not have the domain expertise to approve metric algorithms, while domain
  experts have limited time. The problem section MUST also say that, as a
  startup, there are no full-time testers: anyone in the company can test, and
  they usually do that testing around their own job. It MUST describe the
  resulting two-phase process:
  AxLib calculation review before integration, followed by observable app-
  behaviour testing through SBN Testing after integration.
- The QA decision “Spend expert time on the differences” MUST say that
  comparing baseline and candidate outputs is possible because those
  calculations come from one shared metrics Kotlin Multiplatform project. The
  phrase `shared metrics Kotlin Multiplatform project` MUST be a same-tab link
  to `one-metric-contract-across-ios-android-web-and-backend`. The same
  sentence and link MUST appear in the phase-one narrative. A missing target
  article or a phrase that is not in the sentence MUST fail the page render.
- AxLib phase-one copy MUST explain that the candidate is replayed over an
  explicitly sampled, de-identified production cohort targeted at roughly 1%
  of eligible recordings for the validation cycle. A reader who does not know
  AxIT MUST be able to understand that figure: a test saves how the person’s
  force changed over time, personal details are removed, and the check reruns
  the new calculation on about 1 in 100 of the saved recordings it includes.
  The article MUST present this as a bounded sampling plan, say that the
  sample does not look at every saved test, retain the run's exact recording
  count and exclusions, and MUST NOT generalise the sample into a review of
  every test the app has saved.
- The QA decision about judging a candidate across recorded tests MUST say,
  in plain language, that running the code is not enough. It MUST say the new
  calculation is replayed on recorded production tests with personal details
  removed, and that the review shows how often it succeeds, which old failures
  it recovers, and which good results it loses. It MUST NOT use “population
  behaviour” or “execution” as the explanation.
- Phase-one evidence MUST include baseline-versus-candidate success rates,
  recovered and lost cases, changed/unchanged/unavailable outcomes and the
  version comparison used to focus domain-expert review. A successful replay
  MUST NOT be presented as expert approval.
- SBN Testing phase-two copy MUST state that app testers verify observable
  behaviour rather than recomputing formulas. It MUST explain how the exact-
  build dependency map, configurations, shared progress, preserved evidence
  and result history let testers contribute in short, fragmented work sessions.
  It MUST also explain that result-bound questions and replies can optionally
  notify Slack while SBN Testing remains the durable record.
- Phase-two copy MUST state that a developer can start fixing a reported bug
  while testers continue the rest of that pass. It MUST reject the sequential
  hand-off in which development waits until the whole test cycle is finished
  and then receives the results. The time saving MUST be described as that
  overlap. The article MUST NOT invent a duration or defect-reduction
  percentage for it.
- The AxIT QA article MUST describe the typed iOS feature-flag contract:
  Boolean keys named `feature_flag_ios_<name>`, one central catalogue, Firebase
  Remote Config, and a local default of off for new product behaviour. The off
  state MUST hide that behaviour's entry points and side effects. The same
  installed build MUST be able to reveal it when the flag is on, so on/off
  comparison does not require a second binary. A missing or failed remote value
  MUST keep a new flag off.
- Feature-flag copy MUST explain the delivery benefit without an invented
  metric: the behaviour can be in the build under test while users still see
  the previous behaviour, and testers enable it by changing the flag and
  relaunching rather than waiting for another release.
- Dependency-map copy MUST explain that a configuration is one shared flag
  combination, not every possible permutation. All ON enables the positive
  flags under test and keeps required OFF safeguards explicit. Conflicting
  requirements remain separate configurations. Each configuration MUST connect
  to the features and suites that depend on it. Copy MUST NOT say that
  selecting a configuration changes the flags on the device.
- Flag-confirmation copy MUST say that moving to tests which need a different
  flag combination clears the previous confirmation. The tester MUST check the
  required on/off positions and click to confirm them before those cases open.
  The click records that check. It MUST NOT be described as changing the flags
  on the device. A step that itself changes a flag MUST keep the following
  steps closed until that change is checked and confirmed.
- Step-preview copy MUST say that hovering a named screen or button in a step
  opens a popover with that step's reference screenshot, so an unfamiliar or
  new part of the app can be followed without leaving the case. Keyboard and
  tap MUST open the same preview. A step with no screenshot MUST remain
  ordinary text.
- Mapify performance figures MUST retain their recorded context: FCP 11.6s to
  1.1s, LCP 22.1s to 7.6s, and embedding memory 78 MB to 22 MB for the measured
  workloads. They MUST NOT be generalised into an unsupported global SLA.
- Evidence screenshots MUST be cropped to the region that supports the
  caption. Unrelated chrome—navigation, account controls, status bars,
  home-screen labels and support contacts—MUST be left out. A marker MAY
  outline the claim and MUST NOT cover its text or invent a result. A chart
  MAY summarise numbers visible in the same evidence. It MUST use those
  recorded numbers and MUST NOT present counts that do not partition a total
  as one stacked bar.
- Article copy MUST use British English under the existing Australian locale.
- Every article page MUST show a byline with Yingchen's profile photo, the
  name Yingchen Liu, and one work date. The photo is the existing LinkedIn
  portrait, cropped to a circle. That byline date is the only date on the
  article page. The header MUST show the project and reading time, and MUST
  NOT show the work-period range.
- The work date MUST be the author date of a commit by Yingchen that
  implements that article's subject. Visible day dates use Australian English,
  such as `3 November 2026`. `datePublished` uses the same value. `dateModified`
  remains the portfolio content date.
- Dated evidence:
  - AxIT QA: 3 November 2026, `axit-trace-review` `cd331da`, AxLib comparison
    evidence.
  - Metric contract: 24 July 2025, `axit-models-kmp` `7170ec0`, the shared
    Kotlin model contract.
  - AxIT iOS behaviour: 18 August 2026, `axit-ios` `0e95bf490`, BLE connection
    ownership. The June–December 2024 span has no commit in the current iOS
    repository.
  - Henri: 17 June 2026, `study-mode-backend` `ef34762`, the provider fallback
    chain and provider-health record. The published article is “How Henri
    calls a model”. “Designing a resilient real-time AI tutor” is not
    published.
  - Mapify search: 19 January 2026, `mapify-db` `16ff827`, the PostgreSQL
    `search_vector`.
  - Mapify performance: 26 November 2025, `mapify-web` `ca20004724`, Prometheus
    observability.
  - Mapify email: 5 August 2025, `mapify-backend` `75e1fda2`, newsletter
    lists, test sends and unsubscribe. Newsletters use `mail.mapify.so`.
    Account verification codes use `hi.mapify.so`.
  - Mapify affiliates: 1 December 2025, `mapify-backend` `d83eb6de`, refund
    and downgrade adjustments on partner settlement.
  - Mapify generation without the browser: 17 January 2025, `mapify-web`
    `88e85bef77`, private APIs so the extracted generator can run for a caller
    that has no page open.
  - Mapify summarisation: 27 January 2025, `mapify-web` `919beb989f`,
    extraction of the shared summarisation calculation.
- The Aimi source repository is not available. Its byline date MUST stay at
  month precision, `May 2024`, matching the verified end of that work, and
  MUST NOT be shown as a specific commit day.

## Information architecture

- `/articles` MUST list all public case studies newest-work-first.
- `/articles/[slug]` MUST expose one canonical, indexable article with its own
  title, description, Open Graph article metadata, Twitter card and TechArticle
  structured data.
- The main header MUST expose Writing on desktop and mobile.
- Each Mapify, Henri, AxIT and Aimi project card MUST list every relevant case
  study under a clear `Read more` heading. Internal article links MUST remain in
  the same tab; product and store links remain external.
- The sitemap MUST include the article index and every canonical article route,
  and MUST use the site content update date rather than pretending the work
  period is the publication date.

## Visual and interaction rules

- Each article MUST include the existing project image plus one code-native,
  responsive explanatory visual: an architecture flow, outcome snapshot or
  before/after comparison.
- When safe public or de-identified product evidence exists, the article MUST
  add at least one contextual screenshot beyond the project hero. Screenshots
  MUST be relevant to that article rather than reused as generic decoration.
- Every evidence screenshot MUST have a visible label, meaningful alternative
  text and a caption explaining what the image demonstrates about the
  architecture or outcome. The caption MUST NOT merely describe pixels.
- The AxIT QA architecture diagram MUST show two phase groups. Phase 1 asks
  “Is the calculation right?” and places the work in AxLib, before the
  calculation enters the app, on recorded tests with personal details removed.
  Its steps are writing the calculation, replaying about 1 in 100 saved force
  recordings that the check includes, comparing that run with the current
  calculation, and a domain
  expert approving or rejecting what changed. Phase 2 asks “Does the app show
  that result?” and places the work in SBN Testing, on one exact build, after
  approval. Its steps are testers checking what a person can see, and
  developers fixing reported bugs while the remaining tests continue. The
  diagram MUST NOT present these as one ungrouped row of equal steps.
- Every other flow diagram MUST use the same shape: two plain-language groups,
  each with a question a reader can answer without already knowing the
  product, and short steps under that question. It MUST NOT be one row of
  equal jargon cards. The metric-contract groups are “What does the number
  mean?” and “Where is that number used?”. The Henri groups are
  “What does the app ask the model to do?” and “What if that provider does not
  answer?”. The search groups are “Where does a map live during the
  move?” and “What does the person see?”. The email groups are “Which sending
  domain should carry this?” and “Who receives which version?”. The affiliate
  groups are “What was agreed with the partner?” and “What is the partner
  owed?”. The headless-generation groups are “What did the browser own?” and
  “What does the backend supply instead?”. The
  summarisation groups are “What comes in?” and “What comes out?”. The Mapify
  performance article keeps its before/after comparison. The Aimi article keeps
  its measured outcome snapshot.
- A screenshot MUST appear inside the section whose point it illustrates. It
  MUST NOT be gathered into a later gallery. A section MUST NOT end with arrow
  lines that repeat its paragraphs. The page MUST NOT display a screenshot
  wider than that image’s   pixel width. The two affiliate graphics are 640×480 and stay on the affiliate
  article at that width. The Henri article uses the diagram and has no
  screenshot. The email article uses the diagram and has no screenshot.
- The AxIT QA article MUST show an AxLib success comparison and the recorded
  baseline-versus-candidate metric review inside “Phase 1: make scarce domain
  expertise scale”, and the SBN Testing dependency map and live-results view
  inside “Phase 2: test the product, not the formula”. The success comparison
  is a sharp example, drawn at 1600×1302, so the page does not enlarge a small
  screenshot. Previously successful recordings move from 100% (10/10) to 80%
  (8/10). All 20 recordings move from 50% (10/20) to 70% (14/20), with 6
  recovered and 2 lost. Its caption MUST say it is an example. The version
  chart remains the recorded 1,875-comparison run. Each caption MUST say which
  point in that section the view illustrates. These views MUST NOT be repeated
  in a later gallery. A caption MUST NOT imply that one view proves the
  complete release.
- The dependency-map evidence MUST be the AxIT iOS 1.5.2 (62) source plan,
  not the fictional practice map and not only the expanded flag list of All ON.
  The testing-page image already shows that one combination. The map is a sharp
  2000×1094 drawing of the five source-plan combinations, 50 cases together:
  General checks (4 cases; firmware update and pull-left-first off), All ON
  (37 cases; cloud sync, extended CMJ, Italian and high sampling on; those two
  safeguards off), Mixed settings 1 (6 cases; high sampling, extended CMJ and
  cloud sync off; Italian on), Extended CMJ metrics off (1 case; extended CMJ
  off while high sampling, cloud sync and Italian stay on), and Mixed settings 2
  (2 cases; Italian and high sampling off; extended CMJ and cloud sync on).
  On wide screens that map MUST span the evidence grid.
- Screenshots MUST NOT expose private emails, customer names, conversations,
  credentials, internal links or proprietary identifiers. Cropping is allowed
  when it preserves the relevant product evidence while removing private
  context.
- The Aimi article is exempt from the extra-screenshot requirement until a safe
  source repository or additional verified public product evidence is
  available. It MUST retain its existing public project image and code-native
  outcome visual rather than inventing evidence.
- Each card on `/articles` MUST use a thumbnail derived from that article's own
  explanatory visual. Sibling articles MUST NOT repeat their shared project
  hero image as the card thumbnail. Flow, comparison and metric thumbnails MUST
  retain visible text labels so their meaning is not carried by colour alone.
- Visuals MUST have meaningful captions and accessible text equivalents. They
  MUST NOT rely on colour alone to convey a result.
- Article typography MUST favour a narrow reading measure, high body-text
  contrast and clear numbered sections.
- Every article section MUST share the page column. The article header, hero,
  narrative sections and footer MUST use that same width and the same left
  edge. A section MUST NOT be centred in a narrower box than its siblings.
  Summary and narrative prose MUST use one left-aligned reading measure. The
  “On this page” list shares that column until the scroll rule below docks it
  to the left.
- Every article MUST show an “On this page” list after the header. The list
  has two levels. The numbered sections follow the article order: the product
  introduction, the problem, the discussion, the decision, how well it worked,
  and what was learned. Each numbered section uses that stretch’s own title.
  Material that continues the same stretch is a subtitle under that section,
  not another numbered section: the approach sections sit under the
  explanatory diagram, “The decisions that shaped the system” sits under the
  decision when the article has a decision section, and Takeaways sit under
  the learning section. Screenshots sit inside the section they illustrate,
  so “What the architecture enabled” is not a contents entry. In the article column the numbered
  sections fill the left column from top to bottom, then the right column.
  Subtitles stay under their section in that column. On a narrow column, and
  while the list is docked, the same order is one list. Links MUST be
  same-page anchors and MUST work without JavaScript. Each target MUST clear
  the fixed header. A subtitle uses a smaller heading in the article and does
  not take a peer section number.
- Before that list reaches the site header, it MUST stay in the shared column.
  After the reader scrolls it above the header, and only when at least 168px
  remains between the viewport edge and the article text, the same list MUST
  move to the left of the article column. It MUST stay at most 240px wide, in
  one column, with a 16px gap from the article text and at least 12px from the
  viewport edge.
- While docked, the list MUST flow with the scroll. Its top sits 12px below
  the visible site header, or 16px from the viewport top when that header is
  hidden. It remains beside the article as later sections scroll through. When
  the article bottom reaches the list, the list MUST move up with the article
  instead of staying over the page below it. A list taller than the space under
  the header MUST scroll inside the rail.
- Scrolling back until the list’s original place is below the header MUST
  return it to the column. Viewports without 168px of left space MUST keep the
  list in the column. The move MUST follow `prefers-reduced-motion`: reduced
  motion changes position without the slide. Without JavaScript the list stays
  in the column, and there MUST be only one “On this page” navigation.
- The list MUST highlight the section the reader is in. The current link uses
  white medium-weight text, a blue index number, a 2px blue left bar, a tinted
  row, and a visible underline. Other links stay muted and keep a transparent
  bar so the labels stay aligned. The current link MUST set
  `aria-current="location"`. At most one link is current.
- Every contents label shares one left edge. Index numbers sit in a fixed
  column to the left of that edge, and subtitles use the same text edge.
  Each row keeps padding on the right, so a label does not meet the right
  edge of its row.
- The current section is the last linked heading whose top has reached 112px
  from the viewport top, or 12px below the site header when that header extends
  lower. Before any linked heading reaches that line, no link is current. When
  the page is scrolled to the end, the last linked heading still inside the
  viewport becomes current.
- When the docked list scrolls internally, the current link MUST be scrolled
  into that list without moving the page. Without JavaScript, no link is
  marked current.
- Motion remains limited to existing page reveals, the contents list moving
  to the left rail, and subtle hover feedback. It MUST respect
  `prefers-reduced-motion`.
- The article index and detail pages MUST remain useful without client-side
  JavaScript.

## Acceptance checks

- All ten articles render from static routes and appear on the Writing index.
  The article “Evolving a mature BLE product without platform drift” is not
  published. “Building Mapify’s multilingual email and affiliate platform”
  is not published.
- Mapify lists six relevant articles, AxIT two, Henri one and Aimi one.
- All ten Writing cards have article-specific visual content; no two sibling
  project cards repeat the same product screenshot.
- Every article visibly answers what the problem was, why the approach was
  chosen, how it was implemented, what improved and what was learned.
- Every article page shows Yingchen Liu, the circular profile photo, and its
  recorded work date. The QA article reads 3 November 2026 and does not show
  October–November 2026 in the header. Aimi reads May 2024 without a day.
  Structured data uses that same date as `datePublished`.
- All ten articles open the body with that article’s own introduction title.
  Its first paragraph states what the app does in plain language, and the
  introduction does not show labelled term cards. Each AxIT introduction
  shows the practitioner-and-client Stomp-IT jump
  photograph immediately after that opening sentence, with the Strength By
  Numbers credit.
- “On this page” uses those own titles and two levels. On the QA article the
  left column is the metric-algorithm introduction, The problem, and One
  quality system, two different questions. Under that last section the
  subtitles are The two-phase quality model, Phase 1, Phase 2, and Feature
  flags. The right column is The decisions that shaped the system, What
  improved, and What I learned with the subtitle Takeaways. The AxLib and SBN
  Testing screenshots sit in the phase sections, so What the architecture
  enabled is not a contents entry on this article. No contents label is Intro of the app,
  Discussion, How well it worked, or My learning.
- The AxIT metric-contract article separately explains mobile calculation,
  controlled backend backfills, benchmark generation and browser-based
  baseline-versus-candidate review over de-identified traces.
- The QA problem says that, as a startup, there are no full-time testers,
  anyone in the company can test, and they usually do that testing around
  their own job.
- The AxIT QA article visibly distinguishes phase-one algorithm review from
  phase-two app-behaviour QA, names the approximate 1% sampling target without
  treating it as a census, and explains how scarce expert time and fragmented
  tester time are used differently. It also states that developers fix reported
  bugs while testing continues, rather than waiting for a completed pass to be
  handed over. It explains the default-off iOS feature-flag contract and shows
  the 1.5.2 (62) source-plan map of five flag combinations. Switching to a
  different flag combination requires a fresh check and confirmation, and hovering a named screen or button
  in a step opens that step's reference screenshot. Its first decision says the
  baseline and candidate comparison is possible because of the shared metrics
  Kotlin Multiplatform project, and that phrase links to the metric-contract
  article.
- Every article displays three concrete engineering decisions; every article
  with safe source evidence displays contextual screenshots with explanatory
  captions. Those screenshots are cropped to the claim. The QA success view
  is a sharp example, not an enlarged crop: previously successful recordings
  move from 100% (10/10) to 80% (8/10), and all 20 recordings move from 50%
  (10/20) to 70% (14/20), with 6 recovered and 2 lost. Its caption says it is
  an example. The version chart uses the recorded
  1,875-comparison counts as separate bars, the 1.5.2 map shows the five
  source-plan combinations rather than the expanded All ON flag list. The Henri
  article names the three teaching tools, the tagged user turn, the Bedrock to
  OpenRouter to DeepSeek chain, and the separate adaptive and plan-adjustment
  routes. The questionnaire, tree and plan-editing calls are described with
  their own prompts and tools. Finished chapters are sent as learning records,
  and the current chapter is kept.
- The two-phase quality model section does not show “Algorithm acceptance
  stays with engineers and domain experts.” or the three summary lines that
  followed it. The feature-flag section does not show “All ON means the
  positive flags under test are enabled.” or the four summary lines that
  followed it. Takeaways does not show “Gate new behaviour with a default-off
  feature flag” or “Ask testers to reconfirm when the next cases need
  different flags.”
- The QA architecture diagram shows two groups, “Is the calculation right?”
  and “Does the app show that result?”, with the phase-1 and phase-2 steps
  named above. It does not show five equal ungrouped steps. Its sample step
  says a test saves how force changed over time, personal details are removed,
  the check uses about 1 in 100 of the saved recordings it includes, and that
  sample is not every saved test.
- The performance comparison labels both before and after values in text.
- Article headings remain visible below the fixed header at mobile and desktop
  widths, and diagrams collapse into a readable vertical sequence on mobile.
- The article header, hero and narrative sections share one column width.
  “On this page” starts in that column and its links reach those sections in
  the required order, with each heading below the fixed header. The diagram
  comes after the problem and before the decision. On the QA article the AxLib
  screenshots are inside the phase-1 section and the SBN Testing screenshots
  are inside the phase-2 section. On the other articles, each screenshot is
  inside the section it illustrates, and the flow diagrams show the two groups
  named above rather than five equal cards.
- On a viewport with at least 168px to the left of the article text, scrolling
  the “On this page” list above the header moves it to the left of the column.
  It stays visible beside later sections, sits below the header while the
  header is showing, and moves up with the article when the article ends.
  Scrolling back to its original place returns it to the column. A narrower
  viewport leaves it in the column. With JavaScript disabled it stays in the
  column and its anchors still work.
- At the top of an article, before the introduction heading reaches the
  reading line, no contents link is current. Scrolling into the problem
  section highlights that link and clears the introduction. The current link
  has a left bar and an underline as well as a colour change. At the bottom of
  the page, Takeaways is current when that heading is on screen. On the docked
  QA list, “The problem”, “One quality system, two different questions”, and
  “The two-phase quality model” share one left edge, and the current label
  ends inset from the right edge of its row.
- `next build` completes without TypeScript, metadata or static-generation
  errors, and `git diff --check` reports no whitespace errors.

## Iteration history

- 2026-11-10: Added “Running Mapify mind-map generation without the browser”.
  The browser generator stays in mapify-common and receives its page
  dependencies as arguments. The backend supplies an in-memory document,
  node-canvas measurement and PNG rendering, and calls the Mapify web model
  APIs. The Writing index lists ten articles. Mapify lists six.
- 2026-11-10: Split the combined email and affiliate article. The email article
  sends newsletters from mail.mapify.so and account verification codes from
  hi.mapify.so, uses a mailing list per language and audience, and generates
  messages from a template. The affiliate article covers contract, invoice,
  refund and downgrade settlement. The Writing index lists nine articles.
  Mapify lists five.
- 2026-11-10: Henri context compression runs on the copy sent to the model.
  Each finished chapter becomes one learning record of three to eight notes,
  or a completed-chapter marker when that record is missing. The adaptive
  lesson keeps every turn of the current chapter. The earlier lesson path
  keeps the latest 30 turns and lengthens that window to preserve a tool
  call. Uploaded pages are omitted from the compressed teaching history. In
  the evaluation harness, only the current chapter’s pages are attached in
  memory, and that change is not written back.
- 2026-11-10: The Henri article includes the request shape from the evaluation
  harness. A call is a system prompt, a message list and phase tools. An
  ordinary turn is user_message then learning_state. The first teaching turn
  adds questionnaire_context, knowledge_tree and first_node. A quiz answer is
  a generate_quiz tool result. A chapter tap is a system_event. The
  questionnaire returns questions or two to four paths. The tree prompt asks
  for 12 to 40 chapters. Plan editing uses remove, add_node and
  start_learning. The iOS lesson omits show_html_widget.
- 2026-11-10: Removed “Designing a resilient real-time AI tutor”. Henri’s article
  is “How Henri calls a model”: the three teaching tools, the Bedrock,
  OpenRouter and DeepSeek chain, schema delivery, and the adaptive and
  plan-adjustment routes. The byline date is 17 June 2026.
- 2026-11-10: Published writing and screenshots are English. The Henri syllabus
  shows the four chapters in English.
- 2026-11-10: Removed “Evolving a mature BLE product without platform drift”.
  The Writing index lists eight articles. AxIT lists the QA article and the
  metric-contract article.
- 2026-11-10: Extracting the metrics was a Java-to-Kotlin conversion of the existing
  Android calculation, plus caller adapters, not a rewrite from scratch and
  not a retest of the whole app.
- 2026-11-10: The metric-contract problem says a fully cross-platform app was not
  a good option, because Bluetooth, the screens and performance differ by
  platform. Kotlin Multiplatform shares the metrics only.
- 2026-11-10: The metric-contract problem follows the product order. Android came
  first, then Connect. Before iOS existed, the metrics were separated from the
  Android screens by choosing Kotlin Multiplatform.
- 2026-11-10: The other flow diagrams use two plain-language groups, and each
  screenshot sits in the section it illustrates. Summary arrow lines are not
  repeated under those sections. A screenshot is not displayed wider than its
  pixel width.
- 2026-11-10: The Phase 2 dependency map shows the five 1.5.2 (62) source-plan
  flag combinations, drawn at 2000×1094. The testing-page image keeps the
  All ON switch positions.
- 2026-11-10: The Phase 1 success view is a sharp 1600×1302 example. Previously
  successful recordings move from 100% (10/10) to 80% (8/10). All 20 recordings
  move from 50% (10/20) to 70% (14/20), with 6 recovered and 2 lost. The
  caption says it is an example. The version chart stays the recorded run.
- 2026-11-10: QA takeaways no longer repeat the feature-flag lines about gating
  new behaviour or asking testers to reconfirm and preview a step.
- 2026-11-10: The feature-flag section no longer ends with the five summary
  lines about All ON, unmentioned flags, the 1.5.2 setup, the map’s features,
  or a fresh confirmation.
- 2026-11-10: The QA problem states that the startup has no full-time testers.
  Anyone in the company can test, and they usually do it around their own job.
- 2026-11-10: The QA phase sections show the system that makes each point.
  Phase 1 shows the AxLib success rates and the comparison an expert reviews.
  Phase 2 shows the SBN Testing flag map and the same setup on the testing page.
- 2026-11-10: The two-phase quality model section no longer ends with the four
  summary lines about acceptance, formulas, replay boundaries and result
  attachment.
- 2026-11-10: The QA sample step explains the 1% for a reader who does not know
  AxIT. A test saves the force recording, personal details are removed, and
  the check reruns the calculation on about 1 in 100 included recordings.
- 2026-11-10: The QA architecture diagram now shows two phases in plain language.
  Phase 1 asks whether the calculation is right. Phase 2 asks whether the
  app shows that approved result.
- 2026-11-10: “On this page” labels share one left edge. Numbers stay in a
  fixed column, subtitles use that same text edge, and each row keeps
  padding on the right.
- 2026-11-09: Article introductions no longer end with a glossary of labelled
  term cards. The introduction stays in prose.
- 2026-11-09: “On this page” is a two-level list. Numbered sections fill the left
  column first, then the right column. Later parts of the same stretch are
  subtitles under that section.
- 2026-11-09: AxIT introductions now show the public Strength By Numbers
  photograph of a practitioner running a Stomp-IT jump test with a client,
  directly after the opening product sentence.
- 2026-11-09: Article sections stay in one order: introduce the app, the
  problem, the discussion, the decision, how well it worked, then what was
  learned. Headings keep each article’s own titles.
- 2026-11-09: “On this page” highlights the section in view. The current link
  uses a blue bar, underline, and brighter text, and it follows the heading
  at the reading line, including the takeaways at the end of the page.
- 2026-11-09: “On this page” now leaves the article column once it scrolls past
  the header, when the viewport has room on the left. It sits beside the
  article, follows the header and the article bottom, and returns to the
  column when the reader scrolls back up.
- 2026-11-09: Cropped article evidence to the region each caption describes.
  Markers outline that region without covering its text. The version-comparison
  chart repeats the recorded whole-run counts as separate bars.
- 2026-11-09: Rewrote the QA decision on recorded-test review in plain
  language. It now says a successful run is not enough: replay the calculation,
  then show the success rate, recovered failures and lost good results.
- 2026-11-09: The AxIT QA article now explains the flag-change confirmation
  and the step screenshot popover. A different flag combination must be checked
  and confirmed again, and hovering a named screen or button shows the step's
  reference screenshot.
- 2026-11-09: Aligned every article section to one column and added an
  “On this page” list of same-page links to the primer, decisions, visual,
  evidence, narrative sections and takeaways.
- 2026-11-09: Removed the work-period range from the article header. The
  byline date is the only date on the article page.
- 2026-11-09: The AxIT QA decision on expert review now says the baseline
  and candidate comparison is possible because of the shared metrics Kotlin
  Multiplatform project, and links that phrase to the metric-contract article.
- 2026-11-09: Added an author byline and a git-sourced work date to every
  article. Eight dates come from Yingchen's commits. Aimi stays at May 2024
  because its source repository is not available.
- 2026-11-09: Required every article primer to open with a one- or two-sentence
  description of what the app does, before domain mechanics, using the same
  wording for articles about the same product.
- 2026-11-09: Added the AxIT iOS feature-flag contract to the QA article and
  replaced the fictional dependency map with the source-backed 1.5.2 (62) All ON
  view, so testers can see one flag combination and the features it covers.
- 2026-11-09: Updated the AxIT QA article so phase two includes concurrent fixing:
  developers start from evidence-linked failures while testers continue the
  remaining cases, instead of waiting for the whole pass to be handed over.
- 2026-11-09: Added reader-first domain primers to every case study and expanded
  the AxIT metric-contract article to explain raw traces, derived metrics,
  mobile calculation, controlled backend backfills, benchmark generation and
  browser-based algorithm experimentation before presenting the architecture.
- 2026-11-09: Reframed the AxIT QA case study around its two-phase ownership
  model: AxLib production-sample comparison and domain review before integration,
  followed by exact-build app-behaviour testing, dependency navigation, shared
  progress and Slack-linked feedback in SBN Testing.
- 2026-11-09: Expanded all nine case studies with explicit engineering
  decisions and added article-specific, public or de-identified product
  screenshots to AxIT, Henri and Mapify articles.
- 2026-11-09: Replaced repeated project screenshots on the Writing index with
  article-specific architecture, comparison and outcome thumbnails.
- 2026-11-09: Added the technical writing system, nine evidence-led case
  studies, responsive architecture/performance visuals, per-project article
  lists, route-specific SEO and sitemap coverage.

