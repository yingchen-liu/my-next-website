export type ArticleProject = "AxIT" | "Henri" | "Mapify" | "Aimi";

export interface FlowNode {
  title: string;
  detail: string;
}

export interface FlowPhase {
  label: string;
  title: string;
  detail: string;
  nodes: FlowNode[];
}

export interface ComparisonItem {
  label: string;
  before: number;
  after: number;
  unit: string;
}

export interface MetricItem {
  value: string;
  label: string;
  detail: string;
}

export type ArticleVisual =
  | {
      type: "flow";
      title: string;
      caption: string;
      nodes: FlowNode[];
    }
  | {
      type: "flow";
      title: string;
      caption: string;
      phases: FlowPhase[];
    }
  | {
      type: "comparison";
      title: string;
      caption: string;
      items: ComparisonItem[];
    }
  | {
      type: "metrics";
      title: string;
      caption: string;
      items: MetricItem[];
    };

export interface ArticleSectionImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ArticleSection {
  title: string;
  paragraphs: ArticleParagraph[];
  bullets?: string[];
  image?: ArticleSectionImage;
  evidence?: ArticleMedia[];
}

const axitPractitionerTest: ArticleSectionImage = {
  src: "/images/articles/axit/practitioner-client-stomp-test.jpg",
  alt: "A practitioner holds a tablet while a client jumps toward two Stomp-IT force plates",
  caption:
    "A practitioner runs a jump test with a client. The AxIT app records the force from the Stomp-IT plates. Photograph: Strength By Numbers.",
};

export interface ArticleInlineLink {
  phrase: string;
  slug: string;
}

export type ArticleParagraph =
  | string
  | {
      text: string;
      link: ArticleInlineLink;
    };

export interface ArticleDecision {
  title: string;
  detail: string;
  link?: ArticleInlineLink;
}

export interface ArticleMedia {
  src: string;
  alt: string;
  label: string;
  caption: string;
  fit?: "cover" | "contain";
  layout?: "wide";
  width?: number;
  height?: number;
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  project: ArticleProject;
  workPeriod: string;
  sortDate: string;
  publishedOn: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  tags: string[];
  primer: ArticleSection;
  decisions: ArticleDecision[];
  visual: ArticleVisual;
  media?: ArticleMedia[];
  sections: ArticleSection[];
  takeaways: string[];
  projectHref: string;
}

export const articles: Article[] = [
  {
    slug: "reviewable-metrics-from-algorithm-to-exact-build-qa",
    title: "Two-phase QA for metric algorithms and app behaviour",
    summary:
      "How I designed a two-phase quality process: AxLib focuses scarce domain-expert time on production-sample evidence and version differences, then SBN Testing lets app testers validate exact-build behaviour without rechecking the maths. Developers fix reported bugs while that testing continues, instead of waiting for a finished pass to be handed over.",
    project: "AxIT",
    workPeriod: "October–November 2026",
    sortDate: "2026-11-08",
    publishedOn: "2026-11-03",
    readingTime: "11 min read",
    image: "/images/axit-results.jpeg",
    imageAlt: "AxIT strength assessment results on a tablet",
    tags: ["Quality architecture", "Production sampling", "Team workflow"],
    projectHref: "/#project-axit",
    primer: {
      title: "What a metric algorithm is—and why app testing is not enough",
      image: axitPractitionerTest,
      paragraphs: [
        "AxIT is a connected strength-assessment app. A practitioner runs a test with Push-IT, Pull-IT or Stomp-IT hardware, and the app shows live force, calculated results and reports.",
        "AxIT records a force trace: a time-ordered stream of measurements from that hardware. A metric algorithm turns that raw curve into a result a practitioner can use, such as peak force, rate of force development, impulse, bodyweight-relative force or a left-versus-right comparison. The number depends on more than a formula: test type, sampling frequency, detected movement phases, device capability, units and algorithm version all affect the outcome.",
        "That creates two different kinds of quality question. A domain expert must decide whether the algorithm interprets the movement and force curve correctly. An app tester must decide whether an approved result appears, saves, synchronises and reopens correctly in a particular build. One person rarely has the time and expertise to answer both at scale.",
      ],
    },
    decisions: [
      {
        title: "Spend expert time on the differences",
        detail:
          "Domain experts should compare baseline and candidate outputs, investigate regressions and approve changed calculations—not repeat every app test. This is possible because those calculations come from one shared metrics Kotlin Multiplatform project.",
        link: {
          phrase: "shared metrics Kotlin Multiplatform project",
          slug: "one-metric-contract-across-ios-android-web-and-backend",
        },
      },
      {
        title: "Don't stop because the code ran",
        detail:
          "Replay the new calculation on recorded production tests, with personal details removed. Show how often it succeeds, which old failures it recovers, and which good results it loses.",
      },
      {
        title: "Make small windows of testing useful",
        detail:
          "Exact-build dependencies, live progress, durable evidence and Slack-linked questions let testers contribute safely in short, fragmented sessions.",
      },
      {
        title: "Fix bugs while testing continues",
        detail:
          "A developer starts from a failed case as soon as it is reported. Testing of the remaining cases does not stop, and development does not wait for the whole pass to be handed over.",
      },
    ],
    visual: {
      type: "flow",
      title: "One quality system, two different questions",
      caption:
        "Phase 1 checks the calculation on recorded tests, before it enters the app. Phase 2 checks that one exact build shows the approved result.",
      phases: [
        {
          label: "Phase 1",
          title: "Is the calculation right?",
          detail:
            "In AxLib, before the calculation goes into the app. The tests are real recordings with personal details removed.",
          nodes: [
            {
              title: "Write the new calculation",
              detail:
                "Engineers build it in AxLib, where the inputs and the result can be checked.",
            },
            {
              title: "Replay a sample of saved tests",
              detail:
                "When a person is tested, the app saves how their force changed over time and removes their personal details. This check reruns the new calculation on about 1 in 100 of the saved recordings it includes. The sample shows how the calculation behaves on real tests. It does not look at every test the app has saved.",
            },
            {
              title: "Compare it with the current one",
              detail:
                "Show how often each succeeds, which old failures come back, and which good results are lost.",
            },
            {
              title: "An expert decides",
              detail:
                "A domain expert approves or rejects what changed. Finishing the run is not the decision.",
            },
          ],
        },
        {
          label: "Phase 2",
          title: "Does the app show that result?",
          detail:
            "In SBN Testing, after the approved calculation is in one exact build. Testers leave the maths to phase 1.",
          nodes: [
            {
              title: "Testers check what a person can see",
              detail:
                "On that build, the result appears, saves, syncs and opens again.",
            },
            {
              title: "Developers fix bugs while testing continues",
              detail:
                "A failed case can be fixed immediately. The remaining tests keep going.",
            },
          ],
        },
      ],
    },
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "Metric QA had an ownership mismatch. App testers were good at finding product problems, but they could not reasonably be expected to understand every force-trace algorithm, sampling rule or clinical interpretation. The people who did have that domain expertise had limited time and could not manually inspect every trace and every app build.",
          "The old question—‘does the metric work?’—was too broad. It mixed two very different risks: whether the calculation was correct, and whether an approved calculation had been integrated into the product correctly. Asking one group to answer both questions either wasted expert time or pushed algorithm decisions onto testers without the right context.",
          "As a startup, we do not have full-time testers. Anyone in the company can be a tester, and they usually do that testing around their own job.",
        ],
      },
      {
        title: "The two-phase quality model",
        paragraphs: [
          "I split the process at the point where the required expertise changes. Phase one happens in AxLib before app integration: engineers replay a candidate against de-identified production traces, compare it with the baseline and prepare the changed or uncertain cases for domain review. Phase two begins after that calculation is accepted and integrated: app testers verify observable behaviour in one exact build through SBN Testing.",
          "To see how a new calculation behaves on real clinic work, each check reruns it on about 1 in 100 of the saved force recordings it includes. Personal details are already removed. That is a sample plan, not a review of every test the app has saved. Each run keeps the exact number of recordings used, which recordings were left out, which version of the calculation ran, and the outcomes, so a reviewer can see what the sample covers.",
        ],
      },
      {
        title: "Phase 1: make scarce domain expertise scale",
        paragraphs: [
          "I designed AxLib as both a development environment and a calculation-review system. Each candidate runs against frozen, de-identified traces without replacing the baseline. The comparison records the input identity, algorithm identity, metric values, units, calculation status and intermediate evidence needed to explain why a result changed.",
          {
            text: "The important measure is not only ‘did the code run?’ AxLib calculates baseline and candidate success rates over the selected production cohort and surfaces recovered, lost, changed, unchanged and unavailable outcomes. Domain experts can then spend their time on the delta: the cases where behaviour changed, evidence is ambiguous or the calculation needs a judgement only they can make. This is possible because those calculations come from one shared metrics Kotlin Multiplatform project.",
            link: {
              phrase: "shared metrics Kotlin Multiplatform project",
              slug: "one-metric-contract-across-ios-android-web-and-backend",
            },
          },
          "Version comparisons remain reviewable and append-only. A later candidate can improve the algorithm without rewriting the evidence used to approve an earlier one, and disagreement can be recorded as correct, incorrect, uncertain or still unreviewed instead of being compressed into a misleading green status.",
        ],
        evidence: [
          {
            src: "/images/articles/axit/calculation-success-example.png",
            alt: "Example calculation success. Of 10 recordings the current calculation already got right, the new one keeps 8: 100 percent versus 80 percent. Across all 20 recordings, success moves from 50 percent, 10 of 20, to 70 percent, 14 of 20, with 6 recovered and 2 lost.",
            label: "AxLib · Did the calculation succeed?",
            caption:
              "This is an example, drawn so the numbers stay sharp. Of 10 recordings the current calculation already got right, the new one keeps 8: 100% versus 80%. Across all 20 recordings, success moves from 50% (10/20) to 70% (14/20). Six old failures come back, and two good results are lost.",
            fit: "contain",
            width: 1600,
            height: 1302,
          },
          {
            src: "/images/articles/axit/metric-version-comparison-focus.png",
            alt: "CMJ corrections from production 1.0.89 to local 1.0.90. The whole run of 1,875 comparisons is charted as separate counts: 1,315 unchanged, 542 changed, 421 unavailable or error, and 18 removed",
            label: "AxLib · Where the expert should look",
            caption:
              "This whole run compared 1,875 results. 1,315 stayed the same and 542 changed. 18 were removed, none were added, and 421 were unavailable or an error. The bars repeat those counts separately. The 421 unavailable or error results overlap the other counts, so they are not stacked into one total. The expert reviews the 542 that changed, not the 1,315 that stayed the same.",
            fit: "contain",
          },
        ],
      },
      {
        title: "Phase 2: test the product, not the formula",
        paragraphs: [
          "Once an algorithm has passed the first phase and is integrated into the app, SBN Testing gives testers a smaller, clearer responsibility: verify what a user can observe. That includes metric availability, names, phases, units, selections, save and reopen behaviour, synchronisation and the feature-flag combinations that control the experience. They do not need to re-derive the maths.",
          "The dependency map is where a tester reads that relationship for one exact build: the flag combination first, then the features and suites that combination covers. Progress is shared live, results retain their evidence and history, and the same case can be picked up in a short pocket of time without losing who tested what. This turns fragmented availability into useful parallel work instead of duplicated or context-free checks.",
          "The steps stay easy to follow when a screen is unfamiliar or new. Hovering a named screen or button in a step opens a popover with that step’s reference screenshot, so the tester can see the part of the app the instruction means without leaving the case. The same preview opens from the keyboard or a tap. A step with no screenshot stays ordinary text.",
          "Feedback stays close to the evidence. A tester can mark a case Passed, Failed, Blocked or Don’t understand, attach a screenshot and start a discussion on that exact result. Questions and replies can optionally notify the relevant people in Slack with a protected link back to the build and case; the durable conversation remains in SBN Testing rather than being lost in chat.",
          "That live record also removes the wait between testing and fixing. A developer does not sit idle until the whole pass is finished and handed over as a batch. As soon as a case fails, the exact build, configuration, screenshot and discussion are already attached, so the developer can start the fix while testers continue the remaining cases. The overlap cuts the time between finding a defect and correcting it.",
        ],
        evidence: [
          {
            src: "/images/articles/axit/dependency-map-combinations.png",
            alt: "iOS dependency map for the AxIT 1.5.2 (62) source plan. Five setups: General checks, All ON, Mixed settings 1, Extended CMJ metrics off, and Mixed settings 2, with different flags on or off",
            label: "SBN Testing · Different setups on one build",
            caption:
              "The 1.5.2 (62) source plan keeps contradictory flags in separate setups, 50 cases in all. General checks only holds firmware update and pull-left-first off. All ON turns on cloud sync, extended CMJ metrics, Italian and high sampling. Mixed settings 1 turns high sampling, extended CMJ and cloud sync off, and leaves Italian on. Another setup turns extended CMJ off while high sampling stays on. Mixed settings 2 turns Italian and high sampling off. The image below shows the All ON positions on the testing page.",
            width: 2000,
            height: 1094,
            fit: "contain",
            layout: "wide",
          },
          {
            src: "/images/articles/axit/sbn-testing-live-results-focus.png",
            alt: "All ON on the testing page. The outlined chips show firmware update off, cloud sync on, extended CMJ metrics on, and Italian on",
            label: "SBN Testing · All ON on the testing page",
            caption:
              "All ON is one of the setups above. The outlined chips are its positions on the testing page: Bluetooth firmware update off, cloud sync on, extended CMJ metrics on, and Italian on. A tester confirms those positions, then checks what the app shows. Developer review can open the tests without confirming that setup.",
            fit: "contain",
            layout: "wide",
          },
        ],
      },
      {
        title: "Feature flags, and the map of what they turn on",
        paragraphs: [
          "I introduced a typed feature-flag contract for AxIT iOS. Every flag is one Boolean, named feature_flag_ios_<name>, registered in a single catalogue and backed by Firebase Remote Config. New product behaviour defaults to off. While it is off, its entry points and side effects stay out of the product. Turning it on reveals that behaviour in the build already installed, so testers compare the two states without waiting for a second binary. If Remote Config is missing or the fetch fails, a new flag stays off rather than turning itself on.",
          "That removed a release wait. The implementation can travel inside the exact build under test while users still see the previous behaviour. Enabling it for testers is a flag change and a relaunch, not another app. The rest of the pass can continue on that same build with the new behaviour still hidden.",
          "The dependency map stops the combinations from becoming guesswork. It does not ask anyone to try every on/off permutation. For one exact build it groups cases that can share a setup. All ON turns on the flags under test and still lists the safeguards that must stay off. Cases that need contradictory settings stay in separate configurations. Each configuration is drawn through to the features and suites that depend on it, so a tester sees both the switch positions and the product behaviour those positions cover. Choosing a configuration never changes the flags on the device. It tells the tester what to set, and then what to confirm, before the related features are tested.",
          "Switching to tests that need a different combination does not keep the previous setup. SBN Testing clears that confirmation and asks the tester to check the required on and off positions, then click to confirm them, before those cases open. The click records that the tester checked the app. It does not change the flags. If a later step itself changes a flag, the steps after it stay closed until that change is checked and confirmed too, so the pass cannot continue on the wrong setting.",
        ],
      },
      {
        title: "What improved",
        paragraphs: [
          "The team gained a traceable route from algorithm development to app acceptance without asking every participant to become a domain expert. Experts review a bounded comparison instead of an entire release; testers work from visible dependencies and exact-build context; engineers receive evidence-linked failures while testing is still underway and can fix them without waiting for a completed hand-off; and release owners can see what is approved, what is tested and what remains unproven.",
        ],
      },
      {
        title: "What I learned",
        paragraphs: [
          "The biggest lesson was that QA scales through responsibility design, not only more automation. A trustworthy system sends each question to the person qualified to answer it, preserves the hand-off between phases and makes incomplete evidence visible. That is more valuable than a single pass percentage that hides how the decision was reached.",
        ],
      },
    ],
    takeaways: [
      "Use production-sample success rates and version comparisons to focus scarce expert review.",
      "Separate algorithm approval from observable app-behaviour QA.",
      "Design testing around exact dependencies, short work sessions and durable feedback.",
      "Let developers fix reported bugs while testers continue, instead of waiting for the whole pass to be handed over.",
    ],
  },
  {
    slug: "one-metric-contract-across-ios-android-web-and-backend",
    title: "One metric contract across iOS, Android, web and backend",
    summary:
      "How raw AxIT force traces become consistent metrics across mobile, controlled backend backfills, benchmark generation and browser-based algorithm review.",
    project: "AxIT",
    workPeriod: "July 2025–November 2026",
    sortDate: "2026-11-06",
    publishedOn: "2025-07-24",
    readingTime: "12 min read",
    image: "/images/axit-results.jpeg",
    imageAlt: "AxIT test curves and metric results",
    tags: ["Kotlin Multiplatform", "iOS & Android", "Data contracts"],
    projectHref: "/#project-axit",
    primer: {
      title: "Traces become metrics; metrics become decisions and benchmarks",
      image: axitPractitionerTest,
      paragraphs: [
        "AxIT is a connected strength-assessment app. A practitioner runs a test with Push-IT, Pull-IT or Stomp-IT hardware, and the app shows live force, calculated results and reports.",
        "During a strength, jump or balance assessment, the hardware does not send a finished result such as ‘Peak Force: 820 N’. It sends a trace: many force samples captured over time, often with separate left and right channels. Software must identify the relevant test and movement phases, apply the correct sampling-aware algorithm, and return a value with a unit and an explanation of whether that value is available.",
        "A metric is one derived interpretation of that trace. Peak force asks for the highest valid force in a defined region; rate of force development describes how quickly force rises; impulse integrates force over a time interval; relative and bilateral metrics add bodyweight or side-to-side context. These examples share raw data but not necessarily the same filters, phases, units or failure conditions. A plausible-looking number can therefore still be wrong if two products use different rules.",
        "A benchmark is different again: it is a reference distribution built by calculating the same versioned metric over a comparable cohort, then aggregating those results into percentiles or curves. Mobile apps need metrics immediately during assessment; the backend needs them for controlled recalculation, backfills and benchmark generation; Connect needs to display saved results; and browser review tools need to recalculate frozen, de-identified traces so a new algorithm can be compared with the current one before release.",
      ],
    },
    decisions: [
      {
        title: "Share semantics, not screens",
        detail:
          "The common layer owns catalogue meaning, capability rules, units and calculations; each product keeps native navigation and presentation.",
      },
      {
        title: "Treat sampling as provenance",
        detail:
          "The recorded test carries its sampling policy, so later calculations do not guess which frequency produced the curve.",
      },
      {
        title: "Persist engine identity",
        detail:
          "Saved outcomes retain the calculation identity independently from a user-facing label, keeping wording changes separate from numerical changes.",
      },
    ],
    visual: {
      type: "flow",
      title: "One recording, one meaning, three places it is used",
      caption:
        "The shared calculation decides what a saved force recording means. The phone apps, the backend and the browser use that meaning for different jobs. They do not share one screen.",
      phases: [
        {
          label: "The meaning",
          title: "What does the number mean?",
          detail:
            "In the shared calculation, before any app shows it. A force recording is many samples over time, often from the left and the right side.",
          nodes: [
            {
              title: "Keep the recording",
              detail:
                "Save the force samples, which side they came from, which test it was, and how often the force was measured.",
            },
            {
              title: "Use one calculation",
              detail:
                "The same rules decide the result, the unit, and whether a result is available. A missing result is not turned into zero.",
            },
            {
              title: "Remember which calculation ran",
              detail:
                "The saved number keeps the identity of the calculation that produced it, so a wording change is not mistaken for a new result.",
            },
          ],
        },
        {
          label: "The jobs",
          title: "Where is that number used?",
          detail:
            "Each product keeps its own screens. They call the same calculation for a different job.",
          nodes: [
            {
              title: "Show it during the test",
              detail:
                "The Android and iOS apps calculate on the phone so the practitioner sees the result immediately.",
            },
            {
              title: "Recalculate saved tests",
              detail:
                "The backend fills eligible missing results and builds a benchmark from one pinned calculation. It does not rewrite every old recording.",
            },
            {
              title: "Compare a candidate",
              detail:
                "The browser runs the current calculation and a new one on the same saved recordings, with personal details removed.",
            },
          ],
        },
      ],
    },
    sections: [
      {
        title: "Separate the metrics before iOS",
        paragraphs: [
          "AxIT started on Android. The metric rules lived in that app: which result belongs to a test, the unit, and what happens when a result is missing. Connect came next. It shows a saved session, so it has to explain the same numbers after the test is over. There was no iOS app yet.",
          "Before iOS was created, I wanted those metrics separated from the Android screens. A second copy inside the new app would let the two products drift, while the numbers still looked right. I chose Kotlin Multiplatform for that split. Android could keep using the calculation it already had, Connect could call it, and iOS could use it from the day the app existed.",
          "Making the whole app cross-platform was not a good option. Bluetooth is different on Android and iOS. The screens need to fit each platform. Performance, including how quickly a live force curve appears, depends on the native app. Kotlin Multiplatform shares the metrics. It does not replace the app.",
          "Extracting the metrics was not a large rewrite. The Android calculation was already there, so the work was to convert it from Java to Kotlin. Each caller still needed its own adapter: iOS receives a framework, and the browser cannot import that mobile build, so it has its own packaged path. That is not starting from scratch, and it did not require retesting the whole app.",
          "A peak force taken from the wrong part of the recording, or a rate of force development that assumes a different measurement rate, can still look like a real result. One shared calculation is what stops that. Each product keeps its own screens.",
        ],
      },
      {
        title: "The boundary: share meaning, not the user interface",
        paragraphs: [
          "I drew the shared boundary around domain meaning. AxLib owns typed test and metric identities, catalogue interpretation, capability rules, sampling policy, calculation algorithms, units, availability states and calculation provenance. Platform adapters translate those shared types into the environment that invokes them.",
          "The clients deliberately retain navigation, Bluetooth state, local persistence, visualisation, accessibility and release behaviour. A shared screen would have forced Android, iOS, Connect and review tooling into one interaction model; a shared calculation contract lets them remain different products while agreeing on the meaning of their data.",
        ],
      },
      {
        title: "How the calculation contract is modelled",
        paragraphs: [
          "The input contract contains the raw trace channels and their ordering, the test identity, sampling frequency and the metadata required by an algorithm. Catalogue data maps that test to allowed metric definitions, presentation groups and capability gates. The calculator then returns typed outcomes containing the metric identity, values, unit, availability or error state, engine identity and the provenance needed to explain the calculation.",
          "That separation matters when the catalogue evolves. A new metric can be made eligible for one test without becoming visible everywhere; an experimental algorithm can remain gated while the established result continues to calculate; and an old saved result can retain the engine that produced it even after display wording changes.",
          "Kotlin Multiplatform publishes the domain contract to Android/JVM and an iOS framework. A separately packaged Kotlin/JavaScript bridge exposes the calculator to browser and server-side JavaScript consumers. I did not treat the mobile framework as something Node could import directly: each target has an explicit adapter and distribution path around the same domain model.",
        ],
      },
      {
        title: "Mobile: immediate results without duplicating the rules",
        paragraphs: [
          "Android and iOS both need to calculate near the assessment. They receive device samples, assemble the left and right traces, attach the test and sampling context, invoke the shared calculator and translate the typed result into native history, charts and reports. Keeping that path local makes the workflow responsive and does not make basic result review dependent on a round trip to the backend.",
          "On iOS I integrated the catalogue into metric selection, current and historical results, save/reopen behaviour and synchronisation. Uploads preserve the raw trace and calculation identity so the server can distinguish the evidence recorded by the device from the derived outcome. The iOS interface remains SwiftUI and the Android interface remains native; what they share is the contract that decides what the numbers mean.",
        ],
        evidence: [
          {
            src: "/images/articles/axit/shared-metric-result-focus.png",
            alt: "CMJ Pro force curves for the left and right sides, with peak-force bodyweight results outlined at 102 percent left and 107 percent right",
            label: "The phone shows the shared result",
            caption:
              "This is the point of the phone job. The iOS screen shows the left and right force curves and the peak-force result for each side, 102% and 107% of bodyweight. The shared calculation decides what those numbers mean. iOS decides how the screen looks.",
            fit: "contain",
            width: 1336,
            height: 950,
          },
        ],
      },
      {
        title: "Backend: deterministic backfills and benchmark generation",
        paragraphs: [
          "The backend needs the same calculator for work that is impractical or inappropriate on a device. A controlled backfill can select eligible stored traces, pin the catalogue and engine version, recalculate missing or newly supported metrics and write a new versioned outcome without changing the raw recording. Failures and unavailable results remain explicit, so a batch job cannot make incomplete history look complete by silently skipping difficult cases.",
          "Benchmark generation uses the same principle at population scale. The job first defines a comparable cohort—test type, metric, units and any relevant demographic or protocol filters—then calculates every eligible trace with one pinned engine. Only after that does it aggregate values into percentile curves or other reference data. The stored benchmark needs its cohort definition and calculation provenance; otherwise a later product cannot tell whether a changed curve reflects new data or different maths.",
          "This architecture makes backfill and benchmark work reproducible, but it does not imply that every historical record should be rewritten. Migration eligibility, review, rollout and preservation policy remain separate product decisions.",
        ],
      },
      {
        title: "Web: recalculate traces to review and experiment safely",
        paragraphs: [
          "Connect is a browser application, not a Node server hidden behind the UI. Its ordinary product path displays stored sessions and benchmark curves from backend services. For algorithm work, a dedicated Kotlin/JavaScript route lets review tooling run AxLib directly against approved, de-identified traces in the browser or in an explicitly packaged JavaScript environment.",
          "A reviewer can freeze one trace cohort, calculate it with the production engine and a candidate engine, and compare values, availability and intermediate evidence trace by trace. The review also exposes population behaviour: total success rate, previously successful traces, recovered cases, lost cases, unchanged results and changed results. That reveals an algorithm which ‘works’ on a hand-picked example but regresses a wider production sample.",
          "This shortens experimentation without weakening the approval boundary. Engineers can change an algorithm and immediately produce a repeatable comparison; domain experts can focus on changed or ambiguous cases; and only an accepted engine version moves into mobile integration and exact-build app QA. A browser replay is evidence for the calculation—it is not by itself physical-device, PDF, hosted-release or scientific acceptance.",
        ],
      },
      {
        title: "What improved",
        paragraphs: [
          "One metric definition can now move through recording, immediate mobile calculation, saved history, controlled backend recalculation, benchmark generation and browser review as a coherent contract. Teams spend less time reconciling duplicated constants, and a reviewer can tell the difference between unavailable data, an algorithm error, a platform integration problem and a genuine numerical change.",
          "The shared contract also makes experimentation cheaper. New algorithms can be evaluated over frozen production-derived evidence before they are exposed to app testers, while platform teams continue to evolve navigation and presentation independently.",
        ],
      },
      {
        title: "What I learned",
        paragraphs: [
          "Cross-platform code is most valuable when it removes semantic duplication, not when it maximises the percentage of shared lines. Sharing the calculation contract created leverage across mobile delivery, backend operations, benchmark data and expert review without forcing four products into one UI framework.",
          "The other lesson is that reproducibility is a product feature. Raw trace identity, sampling context, catalogue version, engine identity and cohort definition must travel with the number; otherwise a future recalculation can produce a different answer with no reliable way to explain why.",
        ],
      },
    ],
    takeaways: [
      "Share domain meaning and calculations while keeping each product native.",
      "Use the same pinned engine for mobile results, controlled backfills and benchmark inputs.",
      "Make browser experimentation reproducible with frozen traces and baseline-versus-candidate evidence.",
      "Treat sampling, catalogue, engine and cohort identity as data provenance.",
    ],
  },

  {
    slug: "how-henri-calls-a-model",
    title: "How Henri calls a model",
    summary:
      "The tools, provider chain and API call behind one Henri lesson: a quiz, a chapter move and a picture travel with the conversation, and the next provider can answer when the first one does not.",
    project: "Henri",
    workPeriod: "February–July 2026",
    sortDate: "2026-07-27",
    publishedOn: "2026-06-17",
    readingTime: "13 min read",
    image: "/images/henri.png",
    imageAlt: "Henri personal AI tutor artwork",
    tags: ["LLM tools", "Provider fallback", "API design"],
    projectHref: "/#project-henri",
    primer: {
      title: "What the tutor asks a model to do",
      paragraphs: [
        "Henri is a personal AI tutor. A learner names a topic and the app builds a syllabus of conversational lessons, questions and quizzes, rather than opening a general chat.",
        "A lesson reply can be an explanation, a quiz, a decision to move to the next chapter, or a picture. Those are tools the model can call. The app sends the lesson so far, the learner’s words, and the tools it is willing to trust.",
        "The call also has to survive the provider. Claude on Amazon Bedrock is the usual first stop. If that call fails, the same lesson can be asked again through another provider, with that provider’s own key and its own way of accepting a structured result.",
      ],
    },
    decisions: [
      {
        title: "Make the product actions into tools",
        detail:
          "A quiz, a chapter move and a picture each have a name and a fixed set of arguments, so the app can store them without guessing at a paragraph.",
      },
      {
        title: "Keep one chain of providers",
        detail:
          "The lesson stays the same while the call moves from Bedrock to OpenRouter and then to DeepSeek. Each step has its own credential and is skipped when that credential is missing.",
      },
      {
        title: "Record which provider answered",
        detail:
          "The saved call names the provider and the model, and whether a later step in the chain had to answer.",
      },
    ],
    visual: {
      type: "flow",
      title: "One lesson, asked in a way the app can trust",
      caption:
        "The app sends the lesson and a small set of tools. If that provider does not answer, the same lesson moves to the next provider.",
      phases: [
        {
          label: "The request",
          title: "What does the app ask the model to do?",
          detail:
            "The lesson so far, plus the actions the product is willing to trust.",
          nodes: [
            {
              title: "Send the lesson so far",
              detail:
                "The system prompt stays fixed. Finished chapters become one learning record. The current chapter stays, with the learner’s words and the chapter state on each new turn.",
            },
            {
              title: "Offer three tools",
              detail:
                "The model can set a quiz, decide to move on or switch chapter, or ask for a picture. Each tool has a fixed set of arguments.",
            },
            {
              title: "Check the arguments",
              detail:
                "The app accepts a tool when the arguments match that shape, then stores a quiz, a chapter move or a picture.",
            },
          ],
        },
        {
          label: "The backup",
          title: "What if that provider does not answer?",
          detail:
            "The lesson stays the same. The next provider uses its own key.",
          nodes: [
            {
              title: "Start with Claude on Bedrock",
              detail:
                "A normal lesson asks Claude Haiku on Amazon Bedrock first. That attempt always runs.",
            },
            {
              title: "Ask Claude through OpenRouter",
              detail:
                "If Bedrock fails, the next step asks Claude Haiku through OpenRouter, with OpenRouter’s own key.",
            },
            {
              title: "Ask DeepSeek with thinking off",
              detail:
                "If Claude is unavailable on both, official DeepSeek V4 Pro answers with thinking turned off.",
            },
          ],
        },
      ],
    },
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "A learner’s message can need a quiz, a decision about the next chapter, and sometimes a picture. If the model writes all of that as one paragraph, the app has to guess which sentence is the question and which sentence is the picture prompt.",
          "Providers fail in different places. Bedrock can be down while OpenRouter still serves Claude. Claude can be down in both places, and the lesson still needs an answer from a different model. One API call, aimed at one provider, ends the lesson at the first failure.",
          "The providers also disagree about structured output. One accepts a JSON schema. Another accepts JSON mode and needs the schema written into the prompt. Another needs the schema in the prompt and no response format at all. The lesson’s meaning has to stay the same while the call changes to fit the provider.",
        ],
      },
      {
        title: "The decision",
        paragraphs: [
          "I treated every model call as the same three parts: a system prompt, the message list, and the tools for that phase. The questionnaire returns JSON, either more questions or two to four learning paths. The tree call returns the curriculum as an object. While the learner is still editing that plan, the tools are remove, add_node and start_learning. The live lesson then drops those tools and offers generate_quiz, evaluate_understanding and generate_image.",
          "An ordinary learner turn is two blocks. user_message holds what the learner wrote. learning_state follows it with the current chapter, its status, the next chapter, progress, visual coverage, and the task to stay on this chapter until it is complete. The first teaching turn also sends questionnaire_context, the knowledge_tree and first_node, then the teaching order. A quiz answer comes back as the tool result for generate_quiz. A chapter tap arrives as a system_event, together with the tool call the app has already made.",
        ],
      },
      {
        title: "How I implemented it",
        paragraphs: [
          "The teaching system prompt is the stable part of every lesson call. Its sections cover the message structure, a curriculum that stays fixed once teaching starts, the teaching philosophy, a short welcome, one chapter at a time, what to do when the learner is confused, response length, tone, and a usage guide for each tool. On Claude that prompt is the cached prefix, so later turns in the same lesson reuse it. The tree prompt asks for 12 to 40 chapters, grouped under a few top-level branches. The questionnaire prompt stops once it knows the learner’s motivation, starting point, goal and preferred approach, usually after two or three rounds.",
          "The tool definitions match the evaluation harness used to compare teaching models. generate_quiz returns a true-or-false or a choice question, and is_final marks the question that can complete the chapter. evaluate_understanding either advances with reveal_next or switches with switch_to. generate_image asks for one picture of the idea being taught. The evaluation request also defines show_html_widget. The iOS lesson omits that tool, because the phone has no renderer for it. The app checks the arguments against that tool’s schema before it stores the result. A quiz that the learner has not answered is removed from the history before the next ordinary message, because the provider requires every tool call to be followed by its result.",
          "Finished chapters are folded before the model sees them. The saved conversation stays complete. The copy sent to the model replaces each finished chapter with one learning record: three to eight notes about what the learner understood. If that record was never written, the model sees a short completed-chapter marker. A record that is already in that form is left as it is. The opening turn that carries the questionnaire and the curriculum stays. On the adaptive lesson, the chapter being taught keeps every turn. On the earlier lesson path, that chapter keeps the latest 30 turns, and the window is lengthened when it would otherwise start on a tool result whose tool call had fallen outside it. Tool calls that lost their results are removed, so the provider still receives a valid sequence.",
          "Uploaded pages are handled on the copy, too. PDF and file blocks are left out of the compressed teaching history. In the evaluation harness, the original upload becomes a placeholder once the curriculum exists. When the chapter changes, the previous chapter’s pages come off and only the current chapter’s pages are attached for that call. That change stays in memory, so the cached prompt prefix is unchanged.",
          "A normal lesson uses one chain. Claude Haiku on Bedrock is first. Claude Haiku through OpenRouter is next, and that step is omitted when its key is missing. Official DeepSeek V4 Pro is last, with thinking turned off, because that is the setting under which the teaching evaluation selected it. Each attempt has its own timeout, and the whole chain has a deadline. The first attempt always runs. A later attempt runs only when enough of that deadline remains.",
          "Each attempt receives the schema in the way that provider can accept: the native JSON schema, JSON mode with the full schema added to the prompt, or the full schema in the prompt alone. Required fields, types and allowed values travel with the schema on the prompt path.",
          "Two other jobs use a shorter chain of their own. Adaptive teaching starts on official DeepSeek with high reasoning, then falls back to Claude Haiku on OpenRouter. Changing the learning plan starts on GPT-5.6 Terra at medium reasoning through OpenAI, then the same model on Azure, and then the normal lesson chain. A missing key skips that step. The saved call records the provider, the model and whether a later step answered.",
        ],
      },
      {
        title: "What improved",
        paragraphs: [
          "A quiz, a chapter move and a picture arrive as checked tool results, so the lesson can store them and continue. When Bedrock fails, OpenRouter can still serve Claude. When Claude fails in both places, DeepSeek can still answer. The call record shows which provider served that reply, so a provider failure stays separate from a malformed tool result.",
        ],
      },
      {
        title: "What I learned",
        paragraphs: [
          "The prompt is one part of the call. The tools, the lesson history and the provider chain decide whether the learner gets a result the app can continue. A fallback model is useful when production keeps the setting the evaluation measured. On the last step of a normal lesson, DeepSeek stays with thinking turned off for that reason.",
        ],
      },
    ],
    takeaways: [
      "Turn the actions the product must trust into tools with a fixed shape.",
      "Send the lesson so far, then move that same lesson down a chain of providers.",
      "Record which provider answered, including when a later step in the chain was used.",
    ],
  },
  {
    slug: "mapify-search-postgresql-migration",
    title: "Migrating Mapify search to PostgreSQL without a hard cut-over",
    summary:
      "How I designed full-text mind-map search and moved index ownership from S3 to PostgreSQL with fallback, background migration and user-transparent rollout.",
    project: "Mapify",
    workPeriod: "January 2026",
    sortDate: "2026-01-23",
    publishedOn: "2026-01-19",
    readingTime: "9 min read",
    image: "/images/mapify.png",
    imageAlt: "Mapify AI mind map product preview",
    tags: ["PostgreSQL", "Search architecture", "Data migration"],
    projectHref: "/#project-mapify",
    primer: {
      title: "A mind map is a searchable tree, not just a file name",
      paragraphs: [
        "Mapify is an AI app that turns documents, videos, recordings and web pages into visual mind maps.",
        "Each map contains a hierarchy of topics and nested ideas, so the useful search target is often a concept deep inside the tree rather than the title of the saved document. Search must return the right map, preserve enough context to explain the match and stay responsive across a large personal library.",
        "S3 was well suited to storing the complete generated document, but object storage is not a full-text search engine. PostgreSQL could hold a searchable projection of the relevant text and maintain an index, while S3 remained the safe document source during migration. That distinction—source document versus searchable projection—is the foundation of the rollout described here.",
      ],
    },
    decisions: [
      {
        title: "Add a projection before replacing storage",
        detail:
          "PostgreSQL became the searchable representation while S3 remained the safe document source during the transition.",
      },
      {
        title: "Design fallback first",
        detail:
          "Explicit migration state lets an unmigrated or failed record use the safe path instead of disappearing from search.",
      },
      {
        title: "Operate the migration as a product",
        detail:
          "Index checks, bounded retries, deletion cleanup and visible errors make partial progress supportable rather than exceptional.",
      },
    ],
    visual: {
      type: "flow",
      title: "Search the ideas without making people wait for a migration",
      caption:
        "The full mind map stays in file storage. A database copy is what search uses, and only after that map has been indexed. Until then, search falls back instead of hiding the map.",
      phases: [
        {
          label: "The move",
          title: "Where does a map live during the move?",
          detail:
            "File storage keeps the complete map. PostgreSQL holds a searchable copy, built in the background.",
          nodes: [
            {
              title: "Keep the original",
              detail:
                "The saved mind map stays in file storage. Search does not require that file to be thrown away first.",
            },
            {
              title: "Copy the searchable text",
              detail:
                "A background job reads the topics inside the map, not only the file name, and writes them into PostgreSQL.",
            },
            {
              title: "Record whether it finished",
              detail:
                "Each map has a migration state. Operations can see a failure instead of discovering a missing result.",
            },
          ],
        },
        {
          label: "The search",
          title: "What does the person see?",
          detail:
            "Search never assumes every old map has already been copied.",
          nodes: [
            {
              title: "Search the copy when it is ready",
              detail:
                "A finished map is found through the database index, including short words and numbers.",
            },
            {
              title: "Fall back when it is not",
              detail:
                "A map that has not been indexed, or whose indexing failed, is still found through the safe original.",
            },
            {
              title: "Drop deleted maps",
              detail:
                "Deleting a map removes it from the results. A failed index is retried a limited number of times.",
            },
          ],
        },
      ],
    },
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "Mapify users needed to find ideas inside a growing library of mind maps, not merely locate a file by title. The existing S3-backed representation was useful for document storage but not a strong foundation for full-text query, relevance and operational migration state.",
          "A hard cut-over would have made indexing failures visible as missing results. It also would have coupled search launch to the complete migration of existing content.",
        ],
        evidence: [
          {
            src: "/images/articles/mapify/research-mind-map.png",
            alt: "A large Mapify neuroscience mind map with nested searchable concepts",
            label: "Search has to see inside the map",
            caption:
              "This is why a file name is not enough. One map holds a deep tree of topics. The searchable copy has to include those topics, not only the title of the saved document.",
            fit: "contain",
            width: 1800,
            height: 732,
          },
        ],
      },
      {
        title: "The decision",
        paragraphs: [
          "I designed PostgreSQL as the searchable projection while keeping S3 as a safe source during migration. Search and migration were separate concerns: the indexer could progress in the background, and the read path could use explicit state and fallback instead of assuming every item had migrated successfully.",
        ],
      },
      {
        title: "How I implemented it",
        paragraphs: [
          "The work crossed four repositories: the web experience, search backend, database package and operations dashboard. I added the full-text search vector and index checks, built indexing and migration endpoints, exposed migration errors for operations, and implemented responsive search states in the product.",
          "The edge cases mattered as much as the first query: short terms and numbers needed explicit handling, deleted maps had to disappear from results, image-heavy result lists needed careful loading, and transient indexing failures required bounded retry rather than an infinite background loop.",
        ],
      },
      {
        title: "What improved",
        paragraphs: [
          "Mapify gained content-level search without forcing users through a migration ceremony. Operations could see indexing state and retry failures, while the product could remain useful during partial migration. PostgreSQL also placed query behaviour, deletion consistency and search-vector maintenance in one inspectable data path.",
        ],
      },
      {
        title: "What I learned",
        paragraphs: [
          "A migration is safer when the new store is introduced as a projection with explicit completeness, not declared the source of truth on day one. Designing the fallback first made partial progress a supported state rather than an emergency.",
        ],
      },
    ],
    takeaways: [
      "Make migration completeness explicit and observable.",
      "Keep fallback behaviour during partial indexing.",
      "Test search semantics beyond happy-path words.",
    ],
  },
  {
    slug: "mapify-ai-performance-and-observability",
    title: "Making Mapify faster—and its AI pipelines observable",
    summary:
      "A performance and reliability programme spanning web vitals, streaming memory leaks, embedding memory and Prometheus monitoring.",
    project: "Mapify",
    workPeriod: "August–December 2025",
    sortDate: "2025-12-02",
    publishedOn: "2025-11-26",
    readingTime: "8 min read",
    image: "/images/mapify.png",
    imageAlt: "Mapify AI product preview",
    tags: ["Web performance", "Node.js", "Observability"],
    projectHref: "/#project-mapify",
    primer: {
      title: "One Mapify request crosses the browser, AI streams and data pipelines",
      paragraphs: [
        "Mapify is an AI app that turns documents, videos, recordings and web pages into visual mind maps.",
        "A result is assembled progressively. The browser first renders the product shell, then receives generated text and structured map content, and may later add images, speech transcripts or embedding-backed context. A slow experience can therefore come from the initial page, the streaming process, image delivery, model orchestration or memory pressure in a backend worker.",
        "The measurements in this article describe different layers. First Contentful Paint is when the browser first shows useful content; Largest Contentful Paint tracks when the largest visible element finishes; process and embedding memory describe server-side resource use; Prometheus signals make those behaviours inspectable after deployment. Combining them into one generic ‘speed’ number would hide the actual failure mode.",
      ],
    },
    decisions: [
      {
        title: "Measure by failure layer",
        detail:
          "Web vitals, streaming retention and embedding memory each received their own baseline instead of one ambiguous speed score.",
      },
      {
        title: "Remove retained work",
        detail:
          "The streaming fix targeted repeated string concatenation and large intermediates rather than hiding pressure behind a larger memory limit.",
      },
      {
        title: "Keep the measurement in production",
        detail:
          "Prometheus process and pipeline signals turned the incident investigation into an ongoing performance capability.",
      },
    ],
    visual: {
      type: "comparison",
      title: "Measured before and after",
      caption:
        "Lower is better. The web-vital timings and embedding-memory figures come from the performance work itself, not a synthetic portfolio estimate.",
      items: [
        { label: "First Contentful Paint", before: 11.6, after: 1.1, unit: "s" },
        { label: "Largest Contentful Paint", before: 22.1, after: 7.6, unit: "s" },
        { label: "Embedding memory", before: 78, after: 22, unit: "MB" },
      ],
    },
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "Mapify combines a media-heavy web experience with long-running AI streams and vector embeddings. Performance problems appeared at different layers: slow critical rendering, images competing for bandwidth, streaming responses retaining strings, and embeddings consuming far more memory than expected.",
          "Fixing one screenshot was not enough. Without runtime metrics, the same class of regression could return under a different workload.",
        ],
        evidence: [
          {
            src: "/images/articles/mapify/web-research.png",
            alt: "Mapify web research response with a weather question and a structured three-day answer",
            label: "The page that has to appear in pieces",
            caption:
              "This is one surface those separate measurements cover. The answer arrives as text first, with actions and later images. The first useful frame and the memory held by the stream are different problems.",
            fit: "contain",
            width: 1178,
            height: 1120,
          },
        ],
      },
      {
        title: "The decision",
        paragraphs: [
          "I split the work into user-perceived latency, process memory and operational visibility. Each layer needed its own measurement and smallest effective fix. I avoided one large ‘performance rewrite’ because that would make it difficult to prove which change moved which number.",
        ],
      },
      {
        title: "How I implemented it",
        paragraphs: [
          "On the web I prioritised the critical route, corrected image loading and preload behaviour, and removed work that blocked the first useful frame. In the streaming path I eliminated repeated string concatenation that retained large intermediate values. In the embedding path I changed how vectors were held so memory fell from 78 MB to 22 MB for the measured workload.",
          "I then added Prometheus monitoring with default process-memory metrics and product-specific signals. Speech-to-text gained retry and provider fallback so failures could be separated from slow or memory-constrained processing rather than appearing as one generic timeout.",
        ],
      },
      {
        title: "What improved",
        paragraphs: [
          "First Contentful Paint dropped from 11.6 seconds to 1.1 seconds and Largest Contentful Paint from 22.1 seconds to 7.6 seconds in the measured flow. Embedding memory fell by roughly 72%. More importantly, later regressions had telemetry: the team could inspect process memory and pipeline behaviour instead of waiting for a user report.",
        ],
      },
      {
        title: "What I learned",
        paragraphs: [
          "Performance work is strongest when the measurement survives the fix. A fast page without observability is a moment; a measured budget and visible runtime make it an engineering capability.",
        ],
      },
    ],
    takeaways: [
      "Separate rendering, memory and reliability measurements.",
      "Prefer small changes whose effect can be attributed.",
      "Keep the telemetry after the incident is over.",
    ],
  },
  {
    slug: "mapify-email-sending-platform",
    title: "Sending Mapify’s newsletters and notification emails",
    summary:
      "Newsletters and account notifications leave from two domains. Each language and audience has its own list, and a template engine replaced a day of hand-built email.",
    project: "Mapify",
    workPeriod: "June–September 2025",
    sortDate: "2025-08-05",
    publishedOn: "2025-08-05",
    readingTime: "9 min read",
    image: "/images/mapify.png",
    imageAlt: "Mapify product preview",
    tags: ["Email systems", "Mailing lists", "Templates"],
    projectHref: "/#project-mapify",
    primer: {
      title: "Mapify writes to people in more than one kind of email",
      paragraphs: [
        "Mapify is an AI app that turns documents, videos, recordings and web pages into visual mind maps.",
        "Some of those messages are newsletters: a language, an audience, and a send that many people receive together. Others are notifications about one account, including the code that binds an email address or deletes the account. A welcome, a payment, or a cancellation is a third kind: one person, one event.",
        "Those messages used to be written by hand. A new email took about a day of a developer’s time, and marketing had to explain the change through that conversation. The sending platform and the template engine are what replaced that.",
      ],
    },
    decisions: [
      {
        title: "Give newsletters and account codes different domains",
        detail:
          "Newsletters leave from mail.mapify.so. A verification code leaves from hi.mapify.so, with its own key, so a newsletter complaint stays off the domain that must deliver the code.",
      },
      {
        title: "Give each audience its own list",
        detail:
          "A person belongs to the list for their language and their relationship to Mapify: never subscribed, formerly subscribed, or currently subscribed. A language change moves them.",
      },
      {
        title: "Generate the email from one definition",
        detail:
          "The template engine produces the subject and the HTML for each language. A missing variable or translation fails before the send.",
      },
    ],
    visual: {
      type: "flow",
      title: "One message, two questions before it leaves",
      caption:
        "The domain decides which reputation carries the message. The list and the template decide who receives which language.",
      phases: [
        {
          label: "The domain",
          title: "Which sending domain should carry this?",
          detail:
            "A newsletter and an account code share a product. They do not share a domain.",
          nodes: [
            {
              title: "Send the newsletter from mail.mapify.so",
              detail:
                "Bulk newsletters, and the product messages that people can unsubscribe from, leave from this domain.",
            },
            {
              title: "Send the code from hi.mapify.so",
              detail:
                "The code that binds an email address, and the code that deletes an account, leave from the other domain and the other key.",
            },
            {
              title: "Switch them separately",
              detail:
                "Newsletter sending and notification sending each have their own switch, so one can pause while the other continues.",
            },
          ],
        },
        {
          label: "The message",
          title: "Who receives which version?",
          detail:
            "Language and audience pick the list. The template engine picks the words.",
          nodes: [
            {
              title: "Put them on the right list",
              detail:
                "Each language has its own lists for people who never subscribed, people who used to, and people who subscribe now.",
            },
            {
              title: "Render it from the template",
              detail:
                "One definition supplies the subject and the HTML. Marketing can change the message without waiting a day for a hand-built email.",
            },
            {
              title: "Send it on the same platform",
              detail:
                "A test send, open and click tracking, and unsubscribe all use the Mailgun path that the real send uses.",
            },
          ],
        },
      ],
    },
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "A newsletter and a notification email have to stay apart. People can ignore a newsletter, or mark it as something they did not ask for. The code that proves someone owns an email address, or that they mean to delete the account, still has to arrive. Putting both on one domain lets a newsletter complaint affect the mail that the account depends on. Mapify uses two domains for that reason: mail.mapify.so for newsletters, and hi.mapify.so for those account codes.",
          "The second problem is who the newsletter is for. Mapify writes in more than one language, and it writes to people in different relationships with the product. One shared list would send a Japanese newsletter to an English reader, or a subscriber’s note to someone who has never paid. Each combination needs its own mailing list.",
          "The third problem was producing the email. Before the template engine, a developer built each message by hand. That took about a day, and the brief had to pass back and forth between marketing and engineering. A small copy change waited on that conversation.",
        ],
      },
      {
        title: "The decision",
        paragraphs: [
          "I split the sending identity and the content. mail.mapify.so carries newsletters and the product messages a person can unsubscribe from, such as a welcome, a payment, or a cancellation. hi.mapify.so carries the verification codes, with a separate Mailgun key. Each side can be switched off on its own.",
          "A person is placed on the list named for their language and their status. Changing language takes them off the old lists and onto the lists for the new language. Unsubscribing removes them from the lists they were on.",
        ],
      },
      {
        title: "How I implemented it",
        paragraphs: [
          "The sending platform is Mailgun, with one sender for each domain. The template engine takes a template name, a locale, and the variables for that message, and it returns the subject and the HTML. The same engine renders a test send. Opens and clicks are tracked on the send, and an unsubscribe link is added to the messages that allow it.",
          "Lists live on mail.mapify.so. The newsletter lists are split by language and by whether the person has never subscribed, used to subscribe, or subscribes now. A dry run can walk the same path and record the send without delivering it. The saved conversation between marketing and engineering became a template change: the definition is the message, and a missing variable or language fails before anyone receives it.",
        ],
      },
      {
        title: "What improved",
        paragraphs: [
          "A newsletter complaint stays on mail.mapify.so. The account code still leaves from hi.mapify.so. A reader receives the list that matches their language and whether they subscribe. A new message is a template and a locale, so marketing can revise the words without booking a day of engineering time to assemble the email by hand.",
        ],
      },
      {
        title: "What I learned",
        paragraphs: [
          "The hard part of email is the sending identity and the audience. The template is what makes a change cheap. Once those three are separate, a newsletter, a verification code, and a translated product message can share one platform.",
        ],
      },
    ],
    takeaways: [
      "Send newsletters and account codes from different domains.",
      "Give each language and each audience its own mailing list.",
      "Generate the message from a template so a copy change does not take a day.",
    ],
  },
  {
    slug: "mapify-affiliate-settlement",
    title: "Settling Mapify affiliate payments from the contract",
    summary:
      "Partner commission comes from a stored contract and the real invoice, including a discount, a refund, or a downgrade.",
    project: "Mapify",
    workPeriod: "October–December 2025",
    sortDate: "2025-12-01",
    publishedOn: "2025-12-01",
    readingTime: "8 min read",
    image: "/images/mapify.png",
    imageAlt: "Mapify product preview",
    tags: ["Payments", "Affiliates", "Operations"],
    projectHref: "/#project-mapify",
    primer: {
      title: "A partner payment starts as a contract",
      paragraphs: [
        "Mapify is an AI app that turns documents, videos, recordings and web pages into visual mind maps.",
        "People can share Mapify and earn commission when someone they refer subscribes. That payment depends on a contract, a coupon, and the invoice the referred person actually paid.",
        "A discount, a refund, or a downgrade changes the amount owed. Settlement has to keep that adjustment with the payment, so the amount can be explained later.",
      ],
    },
    decisions: [
      {
        title: "Store the contract before any payment",
        detail:
          "A partner has a contract, a coupon, and a commission tier before a referred subscription is turned into an amount.",
      },
      {
        title: "Use the invoice total",
        detail:
          "Commission uses the amount on the invoice, including a discount, so the rate is applied to what was paid.",
      },
      {
        title: "Keep refunds inside the settlement",
        detail:
          "A refund or a downgrade changes the amount owed, and the settlement record keeps that change.",
      },
    ],
    visual: {
      type: "flow",
      title: "From a referred subscription to an amount owed",
      caption:
        "The signup is the public door. The amount comes from the contract and the invoice.",
      phases: [
        {
          label: "The agreement",
          title: "What was agreed with the partner?",
          detail:
            "The public page starts the relationship. The record is what settlement reads.",
          nodes: [
            {
              title: "Open with the signup",
              detail:
                "A partner joins from the public affiliate page. That page does not store the commission rules.",
            },
            {
              title: "Store the contract",
              detail:
                "The contract, the coupon, and the commission tier are saved before any invoice is read.",
            },
            {
              title: "Restrict who can change it",
              detail:
                "The dashboard that edits partners and contracts is limited to the people who operate the programme.",
            },
          ],
        },
        {
          label: "The amount",
          title: "What is the partner owed?",
          detail:
            "The invoice is the source. Later changes stay attached to the settlement.",
          nodes: [
            {
              title: "Read the invoice",
              detail:
                "Commission uses the invoice total, including a discount.",
            },
            {
              title: "Apply a refund or a downgrade",
              detail:
                "Either change reduces what is owed, and the adjustment is stored with the settlement.",
            },
            {
              title: "Settle in order",
              detail:
                "Settlement runs from those records, with country and channel available for the report.",
            },
          ],
        },
      ],
    },
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "A partner needs a contract and a coupon. A referred subscription creates commission. A refund, a downgrade, or a discounted invoice changes what is actually owed. Calculating the percentage from the list price, and correcting the refund in a spreadsheet afterwards, leaves an amount that the contract cannot explain.",
        ],
        evidence: [
          {
            src: "/images/articles/mapify/affiliate-entry.png",
            alt: "Mapify affiliate programme entry graphic with a start for free action",
            label: "The public door into the partner workflow",
            caption:
              "This is the screen a partner sees. The contract, the coupon, and the settlement rules sit behind this signup.",
            fit: "contain",
            width: 640,
            height: 480,
          },
        ],
      },
      {
        title: "The decision",
        paragraphs: [
          "I treated settlement as a record of the contract and the invoice. The dashboard is where an operator reviews that record. The amount is derived from the stored contract, the invoice total, and any refund or downgrade.",
        ],
      },
      {
        title: "How I implemented it",
        paragraphs: [
          "I added the database records, the backend endpoints, and a restricted dashboard for partners and contracts. A partner coupon is created in Stripe. Commission tiers read the discounted invoice total. A refund or a downgrade is stored as an adjustment, and settlement runs in order from those records. Country and channel stay on the report.",
        ],
        evidence: [
          {
            src: "/images/articles/mapify/affiliate-contract.png",
            alt: "Mapify affiliate contract illustration with a signed agreement and coins",
            label: "The contract is a record, not a picture",
            caption:
              "Commission is calculated from the stored contract and the invoice, including a refund or a downgrade.",
            fit: "contain",
            width: 640,
            height: 480,
          },
        ],
      },
      {
        title: "What improved",
        paragraphs: [
          "Operations can see the contract and the settlement in one place. A refund is part of the amount, so the payment can be traced back to the invoice and the adjustment.",
        ],
      },
      {
        title: "What I learned",
        paragraphs: [
          "The signup page is the invitation. The payment is only as clear as the contract and the invoice that produced it.",
        ],
      },
    ],
    takeaways: [
      "Store the contract before calculating a payment.",
      "Apply commission to the invoice total, including a discount.",
      "Keep a refund or a downgrade inside the settlement record.",
    ],
  },
  {
    slug: "mindmap-generation-without-the-browser",
    title: "Running Mapify mind-map generation without the browser",
    summary:
      "The mind-map generator lived in the browser. I moved that function into a shared package and gave the backend substitutes for the page, the canvas and the local storage, so a caller with no interface can still produce a map.",
    project: "Mapify",
    workPeriod: "January 2025",
    sortDate: "2025-01-17",
    publishedOn: "2025-01-17",
    readingTime: "12 min read",
    image: "/images/mapify.png",
    imageAlt: "Mapify AI mind map product preview",
    tags: ["Mind maps", "Node.js", "Shared packages"],
    projectHref: "/#project-mapify",
    primer: {
      title: "A mind map used to exist only while a browser tab was open",
      paragraphs: [
        "Mapify is an AI app that turns documents, videos, recordings and web pages into visual mind maps.",
        "In the product, that work happens on the page. The page holds the document, measures the text, fits the map to the screen, and saves a local copy while the model is still streaming.",
        "Zapier, an automation, or another service needs the same map when nobody has the page open. The first task was to make that browser generator run on the backend.",
      ],
    },
    decisions: [
      {
        title: "Keep one generator",
        detail:
          "The browser and the backend call the same generation function. The page-only pieces are arguments, so the two callers cannot grow two copies of the map.",
      },
      {
        title: "Replace the page, not the document",
        detail:
          "The backend holds the map in memory with the same document model the page uses. The on-screen viewer, the fit-to-window step and the browser save are empty stand-ins.",
      },
      {
        title: "Draw the picture with node-canvas",
        detail:
          "Text measurement and the PNG use node-canvas and a bundled font, because a server has no browser canvas.",
      },
    ],
    visual: {
      type: "flow",
      title: "The same generator, with the page taken out",
      caption:
        "The model call and the document stay. The screen, the browser storage and the live canvas are supplied by the caller.",
      phases: [
        {
          label: "The browser",
          title: "What did the browser own?",
          detail: "Generation was written against the open page.",
          nodes: [
            {
              title: "Hold the document on the page",
              detail:
                "The Vue page owned the map document, the active sheet and the viewer that drew it.",
            },
            {
              title: "Measure text in the browser",
              detail:
                "Layout asked the browser canvas how wide each line was, then fitted the map to the window.",
            },
            {
              title: "Save while it streamed",
              detail:
                "The local database and session storage kept the markdown and a local copy as topics arrived.",
            },
          ],
        },
        {
          label: "The backend",
          title: "What does the backend supply instead?",
          detail:
            "The same function runs in Node. The missing browser pieces are filled in.",
          nodes: [
            {
              title: "Hold the document in memory",
              detail:
                "A document is built with the same model. The viewer objects are empty, because nothing is on a screen.",
            },
            {
              title: "Measure text with node-canvas",
              detail:
                "A font store and node-canvas produce the line sizes, then paint the PNG.",
            },
            {
              title: "Ask the web model APIs",
              detail:
                "The language model, the website fetch and the saved file still go through Mapify’s web APIs. The page does not have to be open.",
            },
          ],
        },
      ],
    },
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "Mind-map generation had been written for the browser. It reached into the page for the document, the viewer, the settings, the chat session, the local database and session storage. It also fitted the finished map to the window. None of that exists when Zapier, a chat app, or another automation asks the backend for a map.",
          "Copying the generator into the backend would have made two maps. A change to layout, markers or the markdown parser would have had to land twice, and the picture from an automation could drift away from the picture on the website. The generator had to move, and the browser pieces had to become arguments.",
        ],
      },
      {
        title: "The decision",
        paragraphs: [
          "I extracted the generator into the shared mapify-common package. The function takes the content and a set of injectables: where the document lives, how to measure and fit it, where to write the markdown cache, and how to call the model. The website passes its Vue page. The backend passes memory and node-canvas.",
          "The model call stays on the web service. The backend asks Mapify’s private web APIs for the language, the summary and the saved file, then turns the returned markdown into a document and a PNG on the server.",
        ],
      },
      {
        title: "How I implemented it",
        paragraphs: [
          "On the website, the page still calls the shared function and passes the real page: the snowfish document and viewer, the mobile and settings stores, the chat session, the local database, session storage, and a fit-to-window step. Those are the same objects the generator used when it lived inside the page.",
          "On the backend, MindmapGenerator builds those objects without a window. The document is an in-memory snowmonster document. The sheet viewer and the sheet figure are empty values, because only the page draws into them. Writing to the local database does nothing. Session storage keeps the markdown when the generator writes its cache key. Fitting the map to a screen does nothing. Analytics calls are ignored. Two skeleton themes whose root background was transparent are left out, because that background did not paint correctly in the server renderer.",
          "The picture still has to be measured. viewer-kit’s layout engine needs the width and height of every line. The backend loads a font store and measures each line with a font layout routine, then node-canvas paints the shapes and the text into a PNG. A preview wider than 3,500 pixels is scaled down. A 440-pixel thumbnail is made with sharp for the saved file.",
          "A request can be a prompt, an AI search, a website, a YouTube link, or a GPT app. YouTube is accepted when the video already has subtitles. The caller is recorded as Zapier, MCP, Dify, an X bot, a GPT app, or n8n. The whole generation has a ten-minute limit. The website, the video transcript and the model stream come back through the web APIs. The backend then saves the document, the PNG and the thumbnail as the user’s file.",
        ],
      },
      {
        title: "What improved",
        paragraphs: [
          "An automation can ask for a mind map and receive the document, the markdown and a PNG without opening Mapify. The website still generates through the same function, so a layout or parsing change reaches both callers. The page-only steps stay on the page.",
        ],
      },
      {
        title: "What I learned",
        paragraphs: [
          "A browser feature moves to the server when the document and the algorithm are separated from the screen. The picture needs a real text measurement, so the backend measures fonts and paints with node-canvas. A caller with no window never sees the viewer, the fit-to-window step, or the browser’s local database, so those stand-ins do nothing.",
        ],
      },
    ],
    takeaways: [
      "Pass the page’s document, storage and canvas in as arguments.",
      "Run the same generator in the browser and on the backend.",
      "Measure and paint the map with node-canvas when there is no browser canvas.",
    ],
  },
  {
    slug: "one-summarisation-engine-across-mapify",
    title: "One summarisation engine across web, backend and automation",
    summary:
      "How I reworked Mapify’s summarisation and mind-map generation into a shared architecture so every entry point produced consistent results.",
    project: "Mapify",
    workPeriod: "January–March 2025",
    sortDate: "2025-03-24",
    publishedOn: "2025-01-27",
    readingTime: "8 min read",
    image: "/images/mapify.png",
    imageAlt: "Mapify AI summariser preview",
    tags: ["AI architecture", "Shared packages", "Workflow design"],
    projectHref: "/#project-mapify",
    primer: {
      title: "Summarisation is only one stage of producing a mind map",
      paragraphs: [
        "Mapify is an AI app that turns documents, videos, recordings and web pages into visual mind maps.",
        "Those sources arrive in very different shapes: documents, webpages, videos, audio transcripts, images and automation requests. Before a model can reason about them, each source must be fetched or decoded, normalised into a stable content form and associated with language, user and media context.",
        "The system then has to summarise the material, choose a useful root topic, build a hierarchy of nodes, attach any generated media and persist the same result shape for the web product, backend jobs and automation such as Zapier. If each entry point owns those stages independently, identical content can produce incompatible maps and failures become difficult to locate.",
      ],
    },
    decisions: [
      {
        title: "Normalise before generation",
        detail:
          "Files, web pages, transcripts and automation requests become one typed source with language, user and media context.",
      },
      {
        title: "Return one mind-map contract",
        detail:
          "Hierarchy, root topic and generated media references leave the shared package in the same shape for product and automation consumers.",
      },
      {
        title: "Bound expensive concurrency",
        detail:
          "Generation parallelism is constrained where memory use makes unbounded work unsafe, converting an outage mode into an explicit capacity decision.",
      },
    ],
    visual: {
      type: "flow",
      title: "Many ways in, one mind map out",
      caption:
        "A document, a video, a recording, a web page and an automation request arrive in different shapes. After they are turned into one source, they follow the same steps and come out as the same kind of mind map.",
      phases: [
        {
          label: "The input",
          title: "What comes in?",
          detail:
            "Each door into Mapify collects a different kind of material. The shared step does not start until that material has one shape.",
          nodes: [
            {
              title: "Accept the source",
              detail:
                "Someone uploads a document, opens a web page, or an automation such as Zapier sends a request.",
            },
            {
              title: "Turn it into one source",
              detail:
                "The text, the language, who asked, and any attached media are stored in the same form.",
            },
            {
              title: "Stop there if the source is unusable",
              detail:
                "A missing file or a failed transcript fails at this step. It does not become a different kind of map.",
            },
          ],
        },
        {
          label: "The output",
          title: "What comes out?",
          detail:
            "The website, backend jobs and automation all receive the same tree.",
          nodes: [
            {
              title: "Summarise and build the tree",
              detail:
                "One shared package chooses the root topic, the hierarchy and any generated images.",
            },
            {
              title: "Save one result shape",
              detail:
                "The product and Zapier persist that same tree. Automation does not get a reduced copy.",
            },
            {
              title: "Limit how many run at once",
              detail:
                "Generation is capped where unlimited parallel work ran out of memory. That cap is a product decision.",
            },
          ],
        },
      ],
    },
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "Mapify could create visual maps from multiple sources, including product uploads, web content and automation. As those entry points grew, summarisation and mind-map generation logic risked diverging: different prompts, persistence steps and media handling could produce different structures for the same source.",
          "Out-of-memory failures in concurrent generation also showed that orchestration was not just a prompt problem. Resource limits and persistence order were part of the product contract.",
        ],
        evidence: [
          {
            src: "/images/articles/mapify/source-formats.png",
            alt: "Mapify illustration of document, video, image and structured-source formats entering one pipeline",
            label: "Different sources, before they share a path",
            caption:
              "This is the input side. A document, a video, an image and a structured request do not look alike. The shared generation starts only after each one has been turned into the same kind of source.",
            fit: "contain",
            width: 1432,
            height: 508,
          },
        ],
      },
      {
        title: "The decision",
        paragraphs: [
          "I pulled generation into a shared package with a stable input and output contract. Entry points would normalise their source and user context, then call the same summarisation, hierarchy and persistence path. Provider-specific details stayed behind that boundary.",
        ],
      },
      {
        title: "How I implemented it",
        paragraphs: [
          "I reworked the mind-map generator, added web-search support and aligned Zapier generation with the product path, including root-topic images. The shared pipeline normalised content before generation and returned a consistent tree for persistence. Concurrency was bounded where generation memory made parallel work unsafe, turning a production out-of-memory failure into an explicit capacity choice.",
          "This structure also made later improvements—new media sources, image models and retry behaviour—changes to one generation contract rather than patches to every surface.",
        ],
      },
      {
        title: "What improved",
        paragraphs: [
          "Web, backend and automation flows produced the same shape of result and used the same persistence semantics. New entry points could focus on source acquisition rather than reimplementing AI orchestration. Failures became easier to locate because normalisation, generation and persistence had clear boundaries.",
        ],
        evidence: [
          {
            src: "/images/articles/mapify/automation-mind-map.png",
            alt: "A wide Mapify mind map generated through an automation workflow",
            label: "Automation gets the same tree",
            caption:
              "This is the output side. A map made through automation has the same hierarchy as one made in the product. It is not a smaller format invented for the integration.",
            fit: "contain",
            width: 1800,
            height: 708,
          },
        ],
      },
      {
        title: "What I learned",
        paragraphs: [
          "An AI feature becomes a product platform when its contract is broader than the model call. Input normalisation, resource limits, hierarchy rules and persistence deserve the same architectural attention as prompts.",
        ],
      },
    ],
    takeaways: [
      "Normalise inputs before asking the model to reason about them.",
      "Share the generation contract across product surfaces.",
      "Treat memory and concurrency limits as architecture, not incidental tuning.",
    ],
  },
  {
    slug: "cross-platform-generative-music-sdk",
    title: "Building a cross-platform generative-music SDK",
    summary:
      "How I led Aimi’s shared playback architecture, founded the Android team and improved startup performance while keeping quality measurable.",
    project: "Aimi",
    workPeriod: "June 2022–May 2024",
    sortDate: "2024-05-31",
    publishedOn: "2024-05",
    readingTime: "8 min read",
    image: "/images/aimi-player.png",
    imageAlt: "Aimi Player generative music application",
    tags: ["C++", "TypeScript", "Kotlin & Media3"],
    projectHref: "/#project-aimi",
    primer: {
      title: "A generative-music engine produces a changing performance, not a playlist",
      paragraphs: [
        "Aimi Player is a generative-music app. It creates an evolving performance from musical material and product rules, rather than playing a fixed playlist.",
        "The same underlying musical state must behave consistently when used by different products, while each platform still controls audio focus, background playback, interruptions, caching and its native interface.",
        "That creates three architectural layers. A portable C++ engine owns the generative behaviour; a product-facing TypeScript SDK exposes a stable integration boundary; and native clients such as Android use Kotlin and Media3 for platform lifecycle and playback. Sharing the engine avoids rewriting the musical rules, but sharing the entire player would make every platform less native.",
      ],
    },
    decisions: [
      {
        title: "Keep the engine portable",
        detail:
          "Core generative behaviour belongs in C++ so the musical product model can travel without copying it into every client.",
      },
      {
        title: "Use a product-facing SDK boundary",
        detail:
          "TypeScript and Node.js expose the shared engine to web and service integrations while keeping platform code outside the core.",
      },
      {
        title: "Keep playback native",
        detail:
          "Kotlin and Media3 own Android lifecycle, audio focus, background playback and interruption behaviour around the shared engine.",
      },
    ],
    visual: {
      type: "metrics",
      title: "Outcomes that travelled with the architecture",
      caption:
        "The available verified portfolio evidence covers these product outcomes; this article deliberately avoids inventing unavailable commit-level detail.",
      items: [
        {
          value: "52%",
          label: "faster startup",
          detail: "Reduced time before the music experience became useful.",
        },
        {
          value: "96%",
          label: "test coverage",
          detail: "Made cross-platform change safer and more reviewable.",
        },
        {
          value: "3 layers",
          label: "shared product architecture",
          detail: "C++ engine, TypeScript SDK and native Android playback.",
        },
      ],
    },
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "Generative music is not a playlist of fixed files. Playback has to coordinate an engine that can assemble and evolve music in real time, a product SDK used by multiple surfaces, and native audio behaviour that users expect to continue through interruptions, backgrounding and device changes.",
          "The engineering challenge was to share the musical product logic without reducing every platform to the lowest common denominator.",
        ],
      },
      {
        title: "The decision",
        paragraphs: [
          "I led a layered architecture: a C++ core for portable engine behaviour, a TypeScript and Node.js SDK for product integration, and a native Kotlin/Media3 Android application for lifecycle and playback. The boundary let each layer be tested independently while keeping one product model.",
        ],
      },
      {
        title: "How I implemented it",
        paragraphs: [
          "I led development of the cross-platform SDK and founded the Android team. The app used Kotlin, Jetpack Compose and Media3 around the shared engine, while web and service integrations used the TypeScript layer. Build and delivery work ran through AWS, Docker, Terraform and GitHub Actions so the same architecture could be exercised consistently from development to release.",
          "Startup became an explicit performance path rather than a side effect of initialising every dependency. Test-driven development and clearer module boundaries raised coverage to 96%, giving the team confidence to improve that path without destabilising playback.",
        ],
      },
      {
        title: "What improved",
        paragraphs: [
          "Startup time improved by 52%, and the shared engine could serve native and web-facing product surfaces without duplicating the core generative logic. The Android team gained a platform-appropriate playback stack and a testable integration boundary.",
        ],
      },
      {
        title: "What I learned",
        paragraphs: [
          "A cross-platform SDK succeeds when it makes the shared product idea portable while leaving lifecycle and user experience native. Performance and testability are architecture outcomes, not final polishing steps.",
        ],
      },
    ],
    takeaways: [
      "Share the engine, not the platform lifecycle.",
      "Treat startup as a measured product journey.",
      "Use testable boundaries to make cross-platform work safer.",
    ],
  },
];

export const articlesByProject = articles.reduce<
  Record<ArticleProject, Article[]>
>(
  (grouped, article) => {
    grouped[article.project].push(article);
    return grouped;
  },
  { AxIT: [], Henri: [], Mapify: [], Aimi: [] },
);

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

