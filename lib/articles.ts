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
  projectLabel?: string;
  relatedProjects?: ArticleProject[];
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
    slug: "engineering-vibe-coding-with-guardrails",
    title: "Engineering vibe coding: AI inside guardrails",
    summary:
      "How I moved from Cursor pairing to Claude Code and Codex agent teams by treating AI as a capable engineering team member: explicit behaviour, architecture, design rules, reusable workflows and evidence—not prompts alone.",
    project: "Henri",
    projectLabel: "Mapify · Henri · AxIT",
    relatedProjects: ["Mapify", "AxIT"],
    workPeriod: "December 2025–November 2026",
    sortDate: "2026-11-08",
    publishedOn: "2026-11-08",
    readingTime: "18 min read",
    image: "/images/henri.png",
    imageAlt: "Henri personal AI tutor artwork",
    tags: ["AI-assisted engineering", "System design", "Engineering workflow"],
    projectHref: "/#project-henri",
    primer: {
      title: "What I mean by engineered vibe coding",
      paragraphs: [
        "Vibe coding is the feeling of moving from an idea to working software at extraordinary speed with an AI coding assistant. Engineered vibe coding keeps that speed, but places it inside a system that makes the product maintainable, reviewable and safe to change.",
        "I developed this approach across Mapify, Henri and AxIT. Henri was the main proving ground: I was validating a personal AI tutor and, at the same time, validating whether AI could help build a serious production product rather than only a demo. Mapify extended the method across a mature web and backend estate. AxIT later added Codex agent teams, isolated worktrees and stricter evidence boundaries for mobile, shared calculations and release work.",
        "The principle is simple: I do not ask an agent to replace engineering judgement. I use it to amplify that judgement. I remain responsible for understanding the vague requirement, exposing the trade-offs, choosing the architecture, defining what evidence is sufficient and deciding when the result is ready.",
      ],
    },
    decisions: [
      {
        title: "Keep problem framing and architecture human-owned",
        detail:
          "The assistant can explore options and challenge a design, but I own the requirement, system boundaries, trade-offs, failure modes and acceptance level. Speed is useful only after the team is solving the right problem.",
      },
      {
        title: "Specify behaviour before asking for implementation",
        detail:
          "A vague request becomes a behavioural specification, state matrix, edge-case list, state machine, flow and data model. Product and engineering can review those artefacts before code makes an assumption expensive.",
      },
      {
        title: "Give every repository durable operating instructions",
        detail:
          "Project rules, architecture references, design tokens and critical constraints live with the code. The agent reads the same source of truth on every task instead of depending on a long prompt or my memory.",
      },
      {
        title: "Make uncertainty visible",
        detail:
          "The working agreement tells the assistant to ask when the evidence is missing rather than inventing a requirement, fallback or default. An explicit question is cheaper than a plausible but incorrect implementation.",
      },
      {
        title: "Separate implementation from proof",
        detail:
          "Code generation, tests, replay evidence, simulator behaviour, physical-device checks and release acceptance answer different questions. Agent output is a candidate change; it is never its own proof of correctness.",
      },
    ],
    visual: {
      type: "flow",
      title: "The operating system around the coding agent",
      caption:
        "The engineer leads the problem and the evidence. The agent accelerates the work inside explicit product, architecture and delivery guardrails.",
      phases: [
        {
          label: "Human judgement",
          title: "What does the engineer decide?",
          detail:
            "Turn an ambiguous request into a reviewable solution before optimising for implementation speed.",
          nodes: [
            {
              title: "Frame the real problem",
              detail:
                "Clarify the user outcome, current system, stakeholders, constraints and what is still unknown.",
            },
            {
              title: "Choose the boundaries",
              detail:
                "Compare architecture, security, performance, compatibility and technical-debt trade-offs.",
            },
            {
              title: "Define acceptable evidence",
              detail:
                "State which tests, environments and human decisions can prove each part of the change.",
            },
          ],
        },
        {
          label: "AI-assisted execution",
          title: "How does AI execute safely?",
          detail:
            "Give the agent durable context, a bounded plan, reusable workflows and a verification loop.",
          nodes: [
            {
              title: "Read the project rules",
              detail:
                "Load the behaviour spec, architecture, design system, critical rules and current status.",
            },
            {
              title: "Plan, build and ask",
              detail:
                "Propose the approach, implement within scope and stop to ask instead of silently guessing.",
            },
            {
              title: "Test, audit and record",
              detail:
                "Run the right checks, review the complete diff, preserve evidence and update the shared state.",
            },
          ],
        },
      ],
    },
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "The attraction of vibe coding is real: follow the idea, describe the next move and watch working software appear at a speed that used to feel impossible. The uncomfortable questions are equally real. Can another engineer maintain it? How is quality protected? Is the speed creating a backlog of hidden assumptions and technical debt?",
          "The old answer treated speed and quality as opposites. Move quickly for a demo, or slow down for serious engineering. Better models changed the size of that trade-off, but they did not remove engineering responsibility. An assistant can understand a large codebase, learn conventions and write strong code; it can also confidently optimise the wrong requirement, repeat an old mistake or hide uncertainty behind a convenient fallback.",
          "The useful question therefore became: how can I use AI for high-quality product development, not merely fast code generation? My answer was to let AI ‘vibe’ inside guardrails. The freedom remains inside the task; the product behaviour, architectural boundaries, review points and evidence stay explicit.",
        ],
      },
      {
        title: "A progression, not a tool switch",
        paragraphs: [
          "I started with Cursor as a close coding assistant: useful for exploring a code path, drafting a change and shortening the distance between a question and a working implementation. That improved code-level throughput, but the quality of the result still depended heavily on how much project context I could fit into the conversation.",
          "Claude Code changed the unit of collaboration from a code fragment to a repository. The first retained Henri commit containing its project instructions is from 5 December 2025; by January 2026 I had reorganised the supporting documentation and expanded the rules and reusable skills. The assistant could now start by reading how the product was supposed to behave, how the UI was designed, how the system was structured and how work should be verified.",
          "Codex agent teams extended the same operating model. On AxIT, isolated agents and worktrees can research, implement or verify different parts of a problem in parallel. That only works because ownership is explicit: each agent has a bounded task, repositories hold durable specifications, unrelated work is preserved and evidence is reported at the level it actually proves.",
        ],
      },
      {
        title: "Treat the assistant like a capable junior engineer",
        paragraphs: [
          "My most useful mental model is not autocomplete and not an autonomous replacement for a team. It is a highly capable junior engineer: fast, broadly knowledgeable, able to learn, and strong at implementation, but still short of the product history, organisational context and judgement that experienced engineers build by living with consequences.",
          "That changes how I communicate. I act as the lead and architect. I explain the goal and constraints, review the proposed approach, make the hard trade-offs and give feedback on recurring mistakes. I expect the assistant to participate in requirements discussions and technical design, not to receive an ambiguous ticket and quietly decide what the company meant.",
          "The comparison also explains why communication cost does not disappear. Faster implementation can reduce development cost dramatically, but alignment still matters. A product manager, domain expert and engineer still need to agree on behaviour. The difference is that AI can turn those conversations into precise, reviewable artefacts much faster.",
        ],
      },
      {
        title: "Teach the project before asking for code",
        paragraphs: [
          "Each repository needs a compact entry point—originally CLAUDE.md, and later agent guidance that works across tools. That file does not try to contain the whole project. It routes the assistant to the sources that own behaviour, architecture, design, release procedure and verification.",
          "The rules cover ordinary code quality, but also the things a generic model cannot infer safely. On Henri that included Apple Human Interface Guidelines, a design system with spacing, radius, typography and colour tokens, and a hierarchy of base and application components. A new screen could therefore reuse a coherent visual language even when no final design file existed.",
          "The system made detailed decisions reusable as well: semantic typography rather than one-off font sizes, consistent spacing and radius scales, explicit timestamp formats, multilingual search behaviour, theme colours and component states. Those are small decisions individually; together they stop an AI-generated interface from looking and behaving like unrelated screens.",
          "I also keep ‘critical rules’: concise records of mistakes that must not recur. During Henri's pre-release MVP, one rule rejected backwards-compatibility scaffolding that no real user needed; after launch, the production rule changed to preserve live data and behaviour. If a fallback once hid a configuration error, another rule can require failure to stay visible instead of inventing a default. If a component bypassed the spacing scale, the rule can point back to the token. This turns feedback from one task into training for every later task, while still allowing the rule to evolve with the product stage.",
        ],
      },
      {
        title: "Turn requirements into behaviour the team can review",
        paragraphs: [
          "A requirements document—often exported from a product workspace—is an input, not an implementation plan. I ask the assistant to rewrite it as a behavioural specification: what a person can do, what the system shows, which state changes, and what must happen when an operation fails.",
          "For combinatorial behaviour, the assistant drafts truth tables or state matrices so every meaningful combination has an explicit result. For workflows, it drafts state machines and flow diagrams. It enumerates edge cases, proposes the data model and lists deployment constraints that could make a locally correct design fail in production.",
          "The assistant does the writing and analysis; the product and engineering owners do the confirmation. That distinction matters. A junior engineer can propose a table structure, but the lead must confirm ownership, lifecycle, migration and privacy. A model can enumerate states, but the team must decide which transitions are valid. The artefact makes the disagreement visible before code buries it.",
        ],
        bullets: [
          "Truth tables expose what should happen for every meaningful combination of flags, roles or states.",
          "State machines make lifecycle and transition rules reviewable before UI logic spreads them across screens.",
          "Flow diagrams reveal service boundaries, retries and failure paths to non-specialist reviewers.",
          "Data models force an early decision about ownership, identity, retention and migration.",
          "Deployment constraints keep a design honest about production infrastructure, configuration and platform limits.",
        ],
      },
      {
        title: "Plan mode is the technical design review",
        paragraphs: [
          "Before a substantial change, I ask for a plan that identifies the current implementation, proposed boundaries, files that own the behaviour, alternatives, risks and verification. That makes the assistant show its reasoning at the level I need to review without requiring me to supervise every generated line.",
          "I can then challenge the approach: Should this rule live in the shared domain layer or the iOS app? Is a database migration reversible? Does a retry preserve idempotency? Which compatibility constraint is real, and which is only habit? Once those decisions are settled, implementation becomes faster because the agent is not discovering the architecture by accident.",
          "This is where experienced judgement has the highest leverage. I do not need to control every line of code. I need to control the solution, the interfaces, the failure behaviour and the feedback loop.",
        ],
      },
      {
        title: "Package the way of working into reusable skills",
        paragraphs: [
          "Repository skills turn repeated procedures into executable team knowledge. Instead of reminding an assistant how to investigate a bug, prepare a release or audit a feature every time, the project routes that task to a maintained workflow with the relevant checks and evidence requirements.",
          "The debugging workflows teach the assistant to collect the right signal: logs for runtime sequence, view hierarchy for UI ownership and performance exports for measured bottlenecks. The core instruction is to ask when the evidence is missing rather than make a plausible guess.",
          "Other workflows preserve coordination. An issue tracker records discoveries that do not belong in the current scope. A status document records what is complete, what is blocked and what remains. Audit skills remind the assistant to review the full change, not only the file it just edited. Research tasks can require reading multiple current sources, comparing them and writing a report before a recommendation changes the project.",
          "This is training and memory for an AI-enabled team. It reduces repeated explanation, keeps important steps from being forgotten and lets a new agent enter the project with the same working agreement as the previous one.",
        ],
      },
      {
        title: "How the method changed across three products",
        paragraphs: [
          "On Mapify, AI assistance accelerated work across TypeScript, backend services, data migration and operations, but system design still determined the result. Search needed a user-transparent S3-to-PostgreSQL migration, speech-to-text needed explicit retry and provider boundaries, and summarisation needed one contract across browser, workers and backend. The agent could help implement and investigate; I still had to define the cut-over, fallback, observability and production evidence.",
          "Henri was the deliberate proving ground. The product itself used AI to create knowledge trees, lessons, quizzes and images, while Claude Code helped build the product inside behavioural specifications, design tokens, component rules, plans and tests. That pairing was important: I was not only validating whether Henri could teach; I was validating whether an AI-assisted engineering process could carry a native app and cloud system to production without losing coherence.",
          "AxIT made the workflow more distributed. Codex agents can compare iOS, Android, web and backend behaviour, work in isolated checkouts and run targeted verification in parallel. The surrounding rules preserve the distinction between code evidence, replay evidence, simulator behaviour, physical hardware, generated reports and release approval. Parallelism increases speed; the evidence model prevents that speed from becoming overconfidence.",
        ],
      },
      {
        title: "The decision",
        paragraphs: [
          "I chose to make AI part of the engineering system rather than an optional editor feature. The repository carries product knowledge, the task begins with problem framing, substantial work begins with a reviewable plan, and repeated procedures become skills. Agents are expected to ask questions, preserve state and report exactly what they verified.",
          "This also defines the human role more clearly. I spend less time typing routine implementation and more time on requirements, system boundaries, cross-platform architecture, security, performance, technical debt and the way teams coordinate. AI expands the amount of work I can examine and execute; it does not outsource accountability.",
        ],
      },
      {
        title: "What improved",
        paragraphs: [
          "The immediate benefit is iteration speed, but the more valuable change is repeatability. The next task begins with the same project rules, design language and verification expectations. A solution does not depend on whether I remembered to paste the right paragraph into a new chat.",
          "Documentation becomes an active part of delivery rather than a report written afterwards. Behavioural specifications help product review; plans help technical review; skills help execution; status and issue records help coordination; audits help handover. The artefacts are useful to people and agents at the same time.",
          "The quality is good enough for serious production work because the workflow does not confuse generated code with a finished product. Tests, measurements, domain review, device checks and release decisions remain separate gates. The result is lower implementation cost without pretending that communication, judgement or evidence are free.",
        ],
      },
      {
        title: "What I learned",
        paragraphs: [
          "AI is an amplifier. It amplifies clear thinking, strong architecture and disciplined verification; it can also amplify weak assumptions, accidental complexity and false confidence. The difference between an engineer using vibe coding and a non-engineer using the same tool is not typing speed. It is sensitivity to security, performance, failure modes, maintainability and technical debt.",
          "The highest-leverage control point is the overall approach, not every line. When the behaviour, boundaries, interfaces and evidence are right, the assistant has room to work quickly. When those are vague, detailed code review arrives too late to rescue the design cheaply.",
          "Communication remains essential. AI changes the format: more decisions become specifications, matrices, plans and reusable workflows. That documentation is not bureaucracy added to fast coding; it is what makes fast coding safe enough to repeat across a team.",
          "Finally, the engineer’s role shifts rather than shrinks. I write less routine code by hand, but I do more system design, product clarification, review, training and coordination. The goal is not to make the AI imitate one developer. It is to make AI a dependable participant in how the whole team builds software.",
        ],
      },
    ],
    takeaways: [
      "Treat AI as a capable team member, with context, feedback and review—not as an authority.",
      "Convert vague requirements into behavioural specifications before implementation.",
      "Keep project rules, architecture and design decisions close to the code.",
      "Package repeated debugging, delivery and audit practices into reusable skills.",
      "Let agents accelerate execution while humans own trade-offs and acceptance.",
      "Control the solution and evidence loop rather than supervising every generated line.",
    ],
  },
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
    slug: "ai-debugging-from-plausible-patches-to-reproducible-evidence",
    title: "AI debugging: from plausible patches to reproducible evidence",
    summary:
      "How I evolved AI-assisted debugging from code inspection and likely fixes into a reproducible workflow: exact bug data, real product paths, layered observability, regression tests, computer-use verification and physical-device evidence where the boundary requires it.",
    project: "AxIT",
    projectLabel: "Mapify · Henri · AxIT",
    relatedProjects: ["Mapify", "Henri"],
    workPeriod: "January–September 2026",
    sortDate: "2026-09-16",
    publishedOn: "2026-09-16",
    readingTime: "17 min read",
    image: "/images/articles/axit/sbn-testing-dependency-map.png",
    imageAlt:
      "An exact-build testing dependency map connecting configurations and test cases",
    tags: ["AI debugging", "Real-device testing", "Evidence architecture"],
    projectHref: "/#project-axit",
    primer: {
      title: "What AI-assisted debugging means in practice",
      paragraphs: [
        "AI-assisted debugging is not asking a model to read an error and guess a patch. It is using an agent to accelerate a controlled investigation: preserve the reported case, reproduce it through the real product, observe the failing layer, fix the root cause and rerun the same case with evidence appropriate to that boundary.",
        "I developed this workflow across Mapify, Henri and AxIT. Mapify established disciplined source, database and migration investigation. Henri added bug categorisation, captured device and backend logs, screenshots, isolated test stacks, database verification and audit skills. AxIT made the evidence contract explicit across browser, simulator, physical device, Bluetooth hardware, shared calculations and human release acceptance.",
        "The aim is not to make every bug slow. It is to spend effort where uncertainty lives. A pure function may need a focused unit test. A layout regression needs the same screen, data and viewport before and after. A Bluetooth lifecycle bug needs the real app and hardware. The agent should know which claim each kind of evidence can—and cannot—support.",
      ],
    },
    decisions: [
      {
        title: "Write the reproduction contract before the fix",
        detail:
          "Record the source data, visible values, inferred values, route, selected state, build, environment, device or viewport and capture method. The after check must be able to rerun that contract instead of inventing a friendlier case.",
      },
      {
        title: "Observe the layer that owns the symptom",
        detail:
          "Use screenshots and hierarchy for layout, logs and state for lifecycle, network and backend logs for API behaviour, database reads for persistence, stack traces for crashes and Instruments traces for performance. Source inspection alone is not runtime evidence.",
      },
      {
        title: "Exercise the product; do not recreate the screenshot",
        detail:
          "Computer use navigates and inspects the real browser or app flow. A preview, generated page or screenshot-only view may explain a hypothesis, but it cannot prove that the shipped workflow works.",
      },
      {
        title: "Keep the device boundary honest",
        detail:
          "Simulator and emulator matrices provide repeatable UI and lifecycle coverage. Physical devices prove device-only behaviour such as Bluetooth, real performance or installation. One must never be reported as the other.",
      },
      {
        title: "Classify a failing test before changing it",
        detail:
          "A deterministic product failure, stale assertion, flaky shared state, overloaded simulator and unavailable backend need different responses. Patching the assertion before classification can turn a useful alarm into a false green build.",
      },
    ],
    visual: {
      type: "flow",
      title: "From a likely fix to a reproducible debugging loop",
      caption:
        "The earlier loop optimised for reaching a patch. The evolved loop preserves the exact case and makes each verification claim traceable to the evidence that supports it.",
      phases: [
        {
          label: "Before",
          title: "Why could a plausible patch still be wrong?",
          detail:
            "The agent could move quickly while missing the product state, failing layer or environment that produced the symptom.",
          nodes: [
            {
              title: "Read the description",
              detail:
                "Start from a screenshot, error message or short report without preserving its exact data and state.",
            },
            {
              title: "Inspect likely code",
              detail:
                "Search for the visible text or stack and form a hypothesis from the first plausible owner.",
            },
            {
              title: "Patch and run tests",
              detail:
                "A build or nearby test passes, but the original product path may never have been exercised.",
            },
          ],
        },
        {
          label: "After",
          title: "What makes the fix reproducible?",
          detail:
            "The investigation protects the failing case, tests the hypothesis at the right layer and closes the loop through the same product path.",
          nodes: [
            {
              title: "Capture the exact case",
              detail:
                "Save ticket or replay evidence, values, route, state, build, environment and before behaviour.",
            },
            {
              title: "Observe before guessing",
              detail:
                "Use the relevant logs, hierarchy, request, database row, trace or device state to locate the owner.",
            },
            {
              title: "Fix the root and regress it",
              detail:
                "Change the smallest complete boundary and add automation that fails for the original cause.",
            },
            {
              title: "Rerun the same real path",
              detail:
                "Use the same data, screen and viewport, then capture the evidence level the claim requires.",
            },
          ],
        },
      ],
    },
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "AI is extremely good at producing a coherent explanation for incomplete evidence. Give it a screenshot and a repository and it can often find a relevant view, identify a suspicious conditional and propose a patch within minutes. The danger is that coherence feels like causality. The visible screen may be downstream of stale state, an API contract, a database migration, a feature flag, a device capability or a race that never appears in the file the screenshot resembles.",
          "A green build creates a second trap. Compilation proves that the code can be assembled. A unit test proves the behaviour represented by that test. Neither proves that the app launches, that the user can reach the screen, that the backend returns the expected record, that the layout works on another device class or that Bluetooth reconnects after the app returns from the background.",
          "The debugging process therefore needed its own architecture. It had to make the agent collect ground truth before editing, choose observations by failure type, preserve the original case, and distinguish automated, simulated, physical-device and human acceptance evidence instead of compressing them into one word: tested.",
        ],
      },
      {
        title: "The early approach: useful evidence, a loose loop",
        paragraphs: [
          "On Mapify, the strongest early debugging tools were close to the system: inspect the PostgreSQL schema, query records, count migration states, read migration errors, check missing search vectors and compare backend logs with the code that wrote the data. That was already much better than editing from a symptom alone. Read operations were safe by default; any database write required a preview of affected records and explicit approval.",
          "The limitation was not the quality of those checks. It was that the loop was still mostly task-specific. A database investigation could be excellent without a reusable contract for the exact browser state, account, input file, feature flag and visible before/after behaviour. The next debugging session depended on remembering which evidence had mattered last time.",
          "That experience shaped the later system: keep the direct access to source, logs and data, but wrap it in a workflow that can be repeated by another agent and audited by another engineer.",
        ],
      },
      {
        title: "Henri: categorise before hypothesising",
        paragraphs: [
          "Henri's debugging skill begins by classifying the failure. A UI or layout problem starts with a device screenshot and view hierarchy. A data or state problem starts with captured logs, state and read-only database queries. An API problem adds network and backend logs. A crash starts with the stack trace. The category does not solve the bug; it selects the observations that can disprove the first theory.",
          "The workflow reuses captured artefacts before asking for another reproduction: iOS logs, backend logs, the current device screenshot and saved test results. If that evidence is insufficient, the agent instruments the suspected boundary and runs the case again. It is explicitly told not to guess. For visual ambiguity, temporary coloured borders can reveal which container owns unexpected spacing; for data ambiguity, a read-only query can show whether the wrong value was stored or merely rendered incorrectly.",
          "The fix also has to respect the surrounding system. A layout correction checks the shared component and design tokens before patching one screen. A schema or persisted-contract regression audits older onboarding, resume, library, dashboard and reset paths that read the same state. After implementation, the agent self-reviews for duplicated components, inconsistent neighbouring states and new constants that belong in the shared design system.",
        ],
      },
      {
        title: "Build an observation stack, not one giant log",
        paragraphs: [
          "Different evidence answers different questions. The visible screenshot says what the person saw. The view hierarchy says which element owned the geometry. Runtime logs show ordering and state transitions. A network trace separates a client timeout from a server error. A backend log follows the request beyond the mobile boundary. A database read shows what persisted. A crash stack locates the failing path. An Instruments trace aligns hangs, hitches, CPU work, signposts and application logs on one timeline.",
          "The agent's job is to connect those signals without treating them as interchangeable. If the database row is correct but the screen is wrong, changing the write path is noise. If a request fails before reaching the server, backend retry logic is not the first owner. If an Instruments trace shows the stall before a named log event, the investigation can focus on the preceding work rather than broadly ‘optimising SwiftUI’.",
          "This layered approach also produces better handovers. The root-cause explanation can point from observed symptom to state transition, request, record or hot path. Another engineer can challenge that chain instead of reviewing a patch whose only justification is that it appeared to work once.",
        ],
      },
      {
        title: "Preserve the exact bug before touching the code",
        paragraphs: [
          "For reported bugs, I now create a reproduction data contract before implementation: where the evidence came from, the exact visible values, any values inferred from them, the route and selected tab, the app build and backend, feature flags, locale, device or viewport, and how the evidence was captured.",
          "Original attachments or replay data are preferable to screenshots of a ticket page. Concrete values in a report should become the fixture or controlled test data; easier placeholder numbers can hide the calculation, formatting or threshold that caused the problem. If the report implies a value rather than stating it, the inference is recorded instead of silently becoming fact.",
          "This contract is what makes before and after meaningful. The pair is only comparable when it uses the same data, real screen, relevant state and viewport. If that exact rerun is impossible, the report says so and keeps the original ticket evidence separate instead of presenting mismatched pictures as proof.",
        ],
      },
      {
        title: "Use computer use to exercise the product, not fabricate proof",
        paragraphs: [
          "Computer use is valuable because the agent can operate the product as a person would: open the app or browser, navigate through the normal route, select the reported state, reproduce the interaction, inspect the visible result and repeat the path after the fix. It turns visual verification from ‘please check this manually later’ into part of the engineering loop.",
          "The boundary is important. A desktop screenshot of a Simulator window includes computer chrome and may hide or scale device pixels. A generated SwiftUI capture screen, preview wrapper, Storybook page or reconstructed HTML can resemble the product while bypassing navigation, state, native payload construction or backend behaviour. Those views are useful diagnostics; they are not authoritative evidence that the product path works.",
          "For final mobile evidence, the workflow captures the complete simulator or emulator framebuffer directly—`simctl` on iOS or the Android equivalent—then checks orientation and readability. Computer use drives the journey and inspects the result; the device capture records what the mobile runtime actually rendered. For browser products, the real browser route and loaded state remain the authoritative surface.",
        ],
      },
      {
        title: "Test in layers—and stop at the first hard failure",
        paragraphs: [
          "Henri's full test workflow makes the order explicit. First comes a compile gate. Launch-sensitive changes then require a launch smoke test because an app can compile and still crash while creating its first model or predicate. Unit tests run next because they are fast and isolate logic. Targeted UI tests verify the changed journey fresh. Full UI coverage can then run in isolated parallel shards, followed by a single-stack database verification pass when aggregate persisted state matters.",
          "Each UI-test stack owns its backend, PostgreSQL database, Redis, object storage, simulator and build output. Isolation matters because a green parallel run is meaningless if shards silently share a backend URL or skip database-backed cases. The runner checks enumerated tests against executed tests and cleans leaked containers and simulators after interrupted runs.",
          "A failure is classified before anything is edited. A deterministic failure that repeats in isolation may be a product defect or stale expectation. A failure that passes on retry may expose shared state or ordering. A multi-minute test may indicate an overloaded simulator or hung backend; its results are not trusted. A backend that never started is an environment failure, not evidence that the application regressed. The aim is to repair the right system, not simply return the dashboard to green.",
        ],
      },
      {
        title: "Simulators create repeatability; real devices prove the boundary",
        paragraphs: [
          "AxIT uses a managed simulator matrix rather than whichever device happens to be open: a small phone, a large phone and a representative iPad, with additional tablet coverage when the layout or resizable window requires it. The real app is installed, the affected screen is reached through normal navigation, and complete before/after framebuffers are inspected for clipping, safe areas, keyboard behaviour, Dynamic Type and readable hierarchy.",
          "That matrix is intentionally the default even when physical devices are nearby. Simulators are reproducible, resettable and suitable for parallel automated coverage. They do not prove Bluetooth discovery, connection ownership, sensor sampling, physical-device performance or an install on the target hardware.",
          "When the boundary is hardware-only, the claim stays pending until the exact signed build is installed and exercised on a paired device. The physical-device workflow records the model, bundle, marketing version and build, source revision, dirty state, installation path and launch result. Performance profiling also respects the boundary: some SwiftUI Instruments data is available only from a real device, while Simulator runs use the profiler lanes they can actually populate.",
        ],
      },
      {
        title: "The decision",
        paragraphs: [
          "I turned debugging into a repository-owned workflow rather than a conversational habit. Skills define intake, reproduction, observation, implementation, regression, same-path verification and cleanup. Feature specifications preserve corrected behaviour. Investigation and release records preserve the case, evidence and remaining risk. Shared test plans preserve human results instead of overwriting them on the next build.",
          "The workflow uses an evidence ladder. Source inspection and tests can prove code contracts. Real-app simulator or emulator runs can prove reachable UI and controlled lifecycle behaviour. Physical devices can prove hardware boundaries. Domain experts approve scientific or business meaning. Testers and release owners accept the exact build. The agent reports the highest rung actually reached; it never promotes one rung into the next.",
        ],
      },
      {
        title: "Close the loop with the same case",
        paragraphs: [
          "After the root-cause change and regression test, the agent reruns the original steps through the same real product path. It uses the saved data or fixture, account, environment, feature flags, selected state and viewport whenever possible. A multi-state bug repeats the same state matrix; a multi-step workflow captures every meaningful stage and the final persisted result.",
          "The resulting record separates what is visible from what proves the transition. A screenshot can show the corrected loaded state. A test or log can prove an invisible lifecycle event. A physical-device observation can prove Bluetooth behaviour. A human test result can approve the build. Keeping those claims separate makes the report more useful, not less confident.",
          "On AxIT, SBN Testing extends that loop across the team. Exact-build plans, dependency maps, shared evidence, live progress and questions let testers contribute in small windows while developers respond to failures before the whole pass ends. Existing results and private evidence are preserved when a plan changes; a new automated run never rewrites a person's acceptance history.",
        ],
        evidence: [
          {
            src: "/images/articles/axit/sbn-testing-live-results-focus.png",
            alt: "An exact-build testing view showing live case results and shared progress",
            label: "Shared verification record",
            caption:
              "Exact-build progress and evidence stay visible while testing continues. This coordinates the team; it does not replace simulator, physical-device, domain-expert or release evidence.",
            fit: "contain",
            width: 1264,
            height: 312,
          },
        ],
      },
      {
        title: "What improved",
        paragraphs: [
          "The largest improvement is not that the agent finds every bug immediately. It is that a wrong hypothesis becomes cheaper to reject. The case is preserved, the next observation is deliberate and the fix is measured against the original symptom rather than a convenient nearby test.",
          "The workflow reduces repeated explanation across sessions. A new agent can read the reproduction contract, owning specification, investigation, test result and remaining boundary. Parallel work becomes safer because each participant knows which artefacts it owns and which claims remain unverified.",
          "It also improves communication with non-engineers. A product owner can review corrected behaviour, a domain expert can focus on changed results, a tester can follow the exact build and a release owner can see what still requires hardware or human acceptance. Technical evidence becomes a coordination tool instead of an opaque collection of logs.",
        ],
      },
      {
        title: "What I learned",
        paragraphs: [
          "AI is strongest at breadth: searching multiple repositories, correlating logs and code, generating hypotheses, adding instrumentation and building a regression quickly. It is weakest where the ground truth is implicit. The workflow must force state, environment and evidence into the open before confidence rises.",
          "The most important debugging artefact is often not the patch. It is the reproducible case. A preserved case can reject regressions, compare platforms, expose a future architectural change and teach the next agent why the original solution exists.",
          "No single test surface is ‘real enough’ for every question. A database query, unit test, browser flow, simulator screenshot, physical-device run and human approval are complementary instruments. Mature debugging means choosing the cheapest instrument that can prove the claim—and explicitly stopping when the next boundary has not been crossed.",
          "Finally, good AI debugging is a team design problem. The agent becomes much more useful when the repository teaches it how to observe, when to ask, what not to destroy, how to preserve evidence and where human judgement enters the loop.",
        ],
      },
    ],
    takeaways: [
      "Preserve the exact failing case before editing implementation code.",
      "Choose screenshots, logs, requests, database reads and traces by failure type.",
      "Use computer use to drive the real workflow; capture final mobile evidence from the device framebuffer.",
      "Run targeted automation first, then broader isolated coverage and persistence checks.",
      "Treat Simulator and physical-device evidence as different acceptance levels.",
      "Rerun the same data, screen, state and viewport after the fix.",
      "Report the highest evidence level reached—and leave the next boundary pending.",
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
    title: "Designing Mapify’s automatic affiliate settlement",
    summary:
      "Affiliate settlement used to be a shared Excel sheet. I replaced it with four records and a job that settles a paid invoice after seven days, unless a staff member has already changed it.",
    project: "Mapify",
    workPeriod: "October–December 2025",
    sortDate: "2025-12-01",
    publishedOn: "2025-12-01",
    readingTime: "11 min read",
    image: "/images/mapify.png",
    imageAlt: "Mapify product preview",
    tags: ["Payments", "Affiliates", "Operations"],
    projectHref: "/#project-mapify",
    primer: {
      title: "Settlement used to be a spreadsheet",
      paragraphs: [
        "Mapify is an AI app that turns documents, videos, recordings and web pages into visual mind maps.",
        "A partner shares Mapify and earns commission when someone they refer pays with that partner’s coupon. The amount depends on the agreement, the discount, and the invoice.",
        "The team calculated that in Excel. I replaced the sheet with records and an automatic settlement, so the same invoice produces the same amount without someone retyping it.",
      ],
    },
    decisions: [
      {
        title: "Keep the partner, the agreement and the invoice apart",
        detail:
          "A partner can have more than one agreement. Each paid invoice belongs to one agreement, and the commission is calculated from that pair.",
      },
      {
        title: "Use the amount excluding tax",
        detail:
          "Commission is the invoice total excluding tax, times the agreement’s rate, and only while the invoice falls inside the agreement dates.",
      },
      {
        title: "Settle after seven days",
        detail:
          "A new invoice waits as pending. An automatic job then marks it completed, unless a staff member has already changed the status.",
      },
    ],
    visual: {
      type: "flow",
      title: "From a spreadsheet to a settlement record",
      caption:
        "The sheet had to name the partner, the agreement and the invoice. The system stores those as records and settles the invoice on its own.",
      phases: [
        {
          label: "The requirement",
          title: "What did the spreadsheet have to answer?",
          detail:
            "Every payment the team typed into Excel was an answer to one of these.",
          nodes: [
            {
              title: "Who is the partner?",
              detail:
                "Name, email, country, channel, who manages the account, and how they are paid.",
            },
            {
              title: "What did we agree?",
              detail:
                "The coupon, the customer’s discount, the commission rate, who pays the fees, and the start and end dates.",
            },
            {
              title: "Which invoice counts?",
              detail:
                "The invoice that used the coupon, the discount on it, and whether that payment had already been settled.",
            },
          ],
        },
        {
          label: "The system",
          title: "What does automatic settlement do?",
          detail:
            "The records answer the same questions, and a job moves the status.",
          nodes: [
            {
              title: "Attach the invoice to the agreement",
              detail:
                "A paid invoice that uses the coupon is stored against that agreement, starting as pending.",
            },
            {
              title: "Wait seven days, then settle",
              detail:
                "The job marks pending invoices completed. It runs one batch at a time, and only one server runs it.",
            },
            {
              title: "Leave a staff change alone",
              detail:
                "If a person has changed the status, the job skips that invoice. The change is kept in the history.",
            },
          ],
        },
      ],
    },
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "Affiliate settlement was a shared Excel sheet. It held the partner, the coupon, the discount, the commission rate, and a list of invoices someone had marked as paid. More than one person edited it. A second agreement for the same partner, a discounted invoice, or an invoice that arrived just after a coupon ended was easy to put on the wrong row, and the sheet did not record why a number had changed.",
          "The requirement was a system that could answer the same questions without a spreadsheet. Who is the partner? What was agreed: the coupon, the customer’s discount, the commission rate, who pays the fees, and the dates? Which paid invoice belongs to that agreement? Is that invoice still waiting, settled, or paid?",
          "The amount should not be treated as settled on the day the customer pays. It should wait, then settle on its own. A staff member still needs to correct a status, and that correction has to survive the next automatic run.",
        ],
      },
      {
        title: "The decision",
        paragraphs: [
          "I split the sheet into four records. A partner has many agreements. An agreement has many paid invoices. Each invoice has a history of status changes. Commission is not typed in. It is the invoice total excluding tax, times the agreement’s rate, while the invoice falls inside the start and end dates. Outside those dates the rate is zero. A stored rate of 100 means 1 percent.",
          "A new invoice starts as pending. Seven days later an automatic job marks it completed. If a staff member has already changed that invoice, the job leaves it. Staff can then mark a completed invoice paid. Every change records whether it came from the job or from a person.",
        ],
      },
      {
        title: "How the settlement runs",
        paragraphs: [
          "When Stripe reports a paid invoice that used a coupon, the backend finds the agreement for that coupon and writes the invoice as pending. An invoice up to seven days after the coupon ends is still attached to that agreement, so a trial that bills just late is not dropped between two agreements. The discount Stripe applied is stored on the invoice. Commission uses the total excluding tax.",
          "The settlement job wakes on a schedule. It takes a short lock, so a second server does not settle the same invoices. It selects pending invoices older than seven days that a staff member has not changed, and marks them completed in batches of 100. A staff change from the dashboard is stored with the person’s identity. The partner’s own view hides invoices whose commission is zero, and shows only the last digits of the invoice id.",
        ],
      },
      {
        title: "The data model",
        paragraphs: [
          "The four records are the model the job and the dashboard both read. The partner is the account. The agreement is the coupon and the rates. The paid invoice is one Stripe charge attached to one agreement. The status history is the audit of pending, completed and paid, and of who moved it.",
        ],
        evidence: [
          {
            src: "/images/articles/mapify/affiliate-data-model.png",
            alt: "Data model with Partner, Agreement, Paid invoice and Status history, each linked one to many",
            label: "The four records that replaced the spreadsheet",
            caption:
              "A partner has many agreements. An agreement has many paid invoices. Each invoice keeps a history of its status. Commission is calculated from the invoice and the agreement, not typed into a cell.",
            fit: "contain",
            width: 2466,
            height: 744,
          },
        ],
      },
      {
        title: "What improved",
        paragraphs: [
          "Operations no longer settle the programme from a spreadsheet. A paid invoice is attached to the agreement that owns the coupon, the commission follows the rate and the dates, and seven days later the invoice is settled unless someone has already changed it. The history shows whether the job or a person made that change.",
        ],
      },
      {
        title: "What I learned",
        paragraphs: [
          "The spreadsheet was the requirements list. Each column that people had to retype became a field, and each argument about a row became a relationship or a status. Automatic settlement is safe only when a person’s correction is stored separately and the job is told to leave it alone.",
        ],
      },
    ],
    takeaways: [
      "Record the partner, the agreement and the invoice as separate records.",
      "Calculate commission from the tax-exclusive total and the rate, inside the agreement dates.",
      "Settle automatically after seven days, and keep a history when a person changes the status.",
    ],
  },
  {
    slug: "one-summarisation-engine-across-mapify",
    title: "One summarisation engine across web, backend and automation",
    summary:
      "Mind-map generation lived in the browser page. I moved that work into one shared generator so the website, the backend and automation produce the same map, including when no page is open. The move took more than a month.",
    project: "Mapify",
    workPeriod: "January–March 2025",
    sortDate: "2025-03-24",
    publishedOn: "2025-02-13",
    readingTime: "14 min read",
    image: "/images/mapify.png",
    imageAlt: "Mapify AI summariser preview",
    tags: ["Mind maps", "Shared packages", "Workflow design"],
    projectHref: "/#project-mapify",
    primer: {
      title: "Summarisation is only one stage of producing a mind map",
      paragraphs: [
        "Mapify is an AI app that turns documents, videos, recordings and web pages into visual mind maps.",
        "Those sources arrive in very different shapes: documents, web pages, videos, audio transcripts, images and automation requests. Each one has to be fetched or decoded, turned into text, and tied to a language, a user and any attached media before a model can build a map.",
        "That work used to live on the open page. The website, the backend and Zapier all need the same map, including when nobody has the page open. Making one generator do that took more than a month. The generator was the page. Moving it meant taking the page apart, keeping the website’s maps unchanged, and rebuilding the parts a server does not have.",
      ],
    },
    decisions: [
      {
        title: "Turn every source into one shape",
        detail:
          "A file, a web page, a transcript and an automation request become one source: the text, the language, who asked, and any media.",
      },
      {
        title: "Return one mind map",
        detail:
          "The website and the backend call the same function. The tree, the root topic and the picture leave in the same shape for the product and for automation.",
      },
      {
        title: "Draw one map at a time",
        detail:
          "A server has no browser canvas. Fonts measure each line, and a server canvas paints the PNG. Two maps at once ran the process out of memory.",
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
                "Two pictures at once exhausted the server’s memory. One map is drawn at a time, and a busy account waits behind a new one.",
            },
          ],
        },
      ],
    },
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "Mapify could already make a map from an upload, a web page, or an automation such as Zapier. Those entry points were growing, and each one was close to owning its own prompts, its own save step and its own picture. The same document could then become a different tree on the website and in an automation.",
          "The generator that should have been shared was not a function waiting to be called. Markdown conversion, saving, themes, prompts, the model client and the chat log were mixed through the open page. It reached into that page for the document, the on-screen viewer, the settings, the chat session, the local database and session storage, then fitted the map to the window. An automation has none of those. Pulling one piece out changed the layout of maps the website already showed. Each cut had to be put back together before the next one, or the product’s own generation broke. That extraction, and the repairs after it, ran from January into March.",
          "Copying the generator into the backend would have made the drift permanent. A change to layout, markers or the markdown parser would have landed twice. The function had to move once, and the page-only pieces had to become arguments the caller fills in.",
          "Moving the function was still not enough. A server has no browser canvas, so the picture has to be measured and painted another way. Two maps drawn at once ran the process out of memory. The backend also could not reach the website’s model and file routes until those became private, authenticated calls. Publishing the shared package, so the website and the backend imported one build, failed on package access, the container build and broken imports. The same stretch of work was the cleanup: page helpers renamed into plain arguments, files reorganised, and the paths that only made sense in a browser removed.",
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
          "I extracted the generator into the shared package. A document, a web page, a transcript or an automation request is turned into one source first: the text, the language, who asked, and any attached media. The function then summarises that source, chooses the root topic, builds the tree and returns one result. The website passes the live page. The backend passes memory and a server canvas.",
          "The model call stays on the web service. The backend asks Mapify’s private APIs for the language, the summary and the saved file, then turns the returned markdown into a document and a PNG. One generation runs at a time. An account that already has a map waiting is placed behind a new account, so one caller cannot fill the queue.",
        ],
      },
      {
        title: "How I implemented it",
        paragraphs: [
          "On the website, the page still calls the shared function and passes the real page: the document and the on-screen viewer, the settings, the chat session, the local database, session storage, and the step that fits the map to the window. Those are the same pieces the generator used when it lived inside the page. The cleanup was making them arguments. They had been page hooks, named and shaped for the browser, and the shared package could not depend on the page.",
          "On the backend, those arguments are filled in without a window. The document is held in memory with the same document model the page uses. The on-screen viewer is an empty value, because only the page draws into it. Writing to the local database does nothing. Session storage keeps the markdown when the generator writes its cache. Fitting the map to a screen does nothing. Analytics calls are ignored. Two visual themes are left out, because the centre topic’s background was transparent and that background did not paint on the server.",
          "The picture is the part that has to be real. Layout still needs the width and height of every line, or topics overlap and the PNG is the wrong size. The backend loads the fonts and measures each line, then paints the shapes and the text into a PNG on a server canvas. A preview wider than 3,500 pixels is scaled down. A 440-pixel thumbnail is resized for the saved file. Drawing two of those pictures at once exhausted memory, so a queue runs one generation. The wait is logged, and a busy account’s next request gets a lower priority than a new account’s first request.",
          "A request can be a prompt, an AI search, a website, a YouTube link, or a GPT app. YouTube is accepted when the video already has subtitles. The caller is recorded as Zapier, MCP, Dify, an X bot, a GPT app, or n8n. The whole generation has a ten-minute limit. A long source does not hold the caller’s connection open: the backend accepts the request, generates, and calls back when the map is ready. That callback address has to be a public URL. A missing account and an account with no credits are rejected before a picture is drawn, and the generator’s own errors become different HTTP results. Web search and the image on the root topic follow the same path as a map made in the product.",
          "The website, the video transcript and the model stream come back through the private web APIs. Getting there took its own fixes. The backend could not reach the website until the internal address, the signing key and the private routes agreed. The shared package then had to be published so both apps imported the same generator. The publish pipeline failed on credentials, on the container build, and on import paths, and each of those had to be cleared before either side could ship. The backend then saves the document, the PNG and the thumbnail as the user’s file. A later source, image model or retry is a change to this one function, rather than a patch on every entry point.",
        ],
      },
      {
        title: "What improved",
        paragraphs: [
          "The website, the backend and automation produce the same tree, the same markdown and the same PNG. An automation can ask for that map when nobody has Mapify open. A new entry point collects the source. It does not rebuild summarisation, the hierarchy or the save step. One picture at a time keeps the server inside its memory, and a failure sits in the source step, the generation step, or the save step.",
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
          "One mind-map engine is the source, the generator and the save step, shared by the page and by every caller that has no page. The empty stand-ins for the viewer, the window fit and the local database are the small part. The month is the extraction that must not change the website’s maps, the picture that has to be measured for real, the memory limit of painting it, and the publishing and cleanup that let both apps share one build.",
        ],
      },
    ],
    takeaways: [
      "Turn every source into one text, language and user before generation.",
      "Keep the website and the backend on that same function.",
      "Measure and paint one map at a time when there is no browser canvas.",
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
    const projects = [article.project, ...(article.relatedProjects ?? [])];
    for (const project of projects) grouped[project].push(article);
    return grouped;
  },
  { AxIT: [], Henri: [], Mapify: [], Aimi: [] },
);

export function articleProjectLabel(article: Article) {
  return (
    article.projectLabel ??
    [article.project, ...(article.relatedProjects ?? [])].join(" · ")
  );
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

