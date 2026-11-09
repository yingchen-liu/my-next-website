import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Image, Paragraph, Section } from "./Section";

interface ProjectLink {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

interface ProjectHighlight {
  title: string;
  description: React.ReactNode;
}

interface FeaturedProjectProps {
  id: string;
  title: string;
  href: string;
  eyebrow: string;
  description: React.ReactNode;
  imgSrc: string;
  skills: string[];
  highlights: ProjectHighlight[];
  links?: ProjectLink[];
  side?: "left" | "right";
}

function ExternalLink({
  id,
  href,
  children,
  className = "",
}: {
  id?: string;
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      id={id}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

function FeaturedProject({
  id,
  title,
  href,
  eyebrow,
  description,
  imgSrc,
  skills,
  highlights,
  links = [],
  side = "left",
}: FeaturedProjectProps) {
  return (
    <article id={id} className="group mb-24 scroll-mt-24 last:mb-0">
      <div
        className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
          side === "right" ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <p className="mb-3 font-sfmono text-sm tracking-[0.12em] text-blue-200">
            {eyebrow}
          </p>
          <h3 className="text-3xl font-semibold text-white md:text-4xl">
            <ExternalLink
              href={href}
              className="inline-flex items-center gap-3 transition-colors hover:text-blue-200"
            >
              {title}
              <FaArrowUpRightFromSquare className="h-4 w-4 opacity-50" />
            </ExternalLink>
          </h3>
          <Paragraph className="mb-0 mt-5 text-lg leading-relaxed">
            {description}
          </Paragraph>
          <ul
            aria-label={`${title} core skills`}
            className="mt-6 flex flex-wrap gap-2"
          >
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-blue-200/20 bg-blue-900/30 px-3 py-1.5 font-sfmono text-xs text-blue-100/85"
              >
                {skill}
              </li>
            ))}
          </ul>
          {links.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <ExternalLink
                    href={link.href}
                    className="inline-flex items-center gap-2 font-sfmono text-sm text-blue-200 transition-colors hover:text-white"
                  >
                    {link.icon}
                    {link.label}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-blue-950 shadow-2xl shadow-black/20 transition duration-500 group-hover:-translate-y-1 group-hover:border-blue-200/30">
          <Image
            src={imgSrc}
            className="aspect-video w-full rounded-none transition duration-500 group-hover:scale-[1.02]"
            alt={title}
            width={1600}
            height={900}
          />
        </div>
      </div>

      <ul
        className={`mt-8 grid gap-3 ${
          highlights.length === 4 ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}
      >
        {highlights.map((highlight, index) => (
          <li
            key={highlight.title}
            className="rounded-xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200/30 hover:bg-white/[0.045]"
          >
            <span className="mb-3 block font-sfmono text-xs text-blue-200/60">
              0{index + 1}
            </span>
            <h4 className="text-lg font-semibold leading-snug text-white">
              {highlight.title}
            </h4>
            <p className="mt-3 text-[15px] leading-relaxed text-blue-100/75">
              {highlight.description}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}

const earlierWork = [
  {
    id: "project-aimi",
    title: "Aimi Player",
    href: "https://www.aimi.fm/",
    imgSrc: "/images/aimi-player.png",
    outcome:
      "Led a cross-platform generative-music SDK, founded the Android team and reduced startup time by 52%.",
    skills: "TypeScript · C++ · Kotlin · Media3",
  },
  {
    id: "project-optusafe",
    title: "OptuSafe",
    href: "https://www.optus.com.au/",
    imgSrc: "/images/optusafe.png",
    outcome:
      "Led discovery and delivery of a secure, highly available identity platform on GCP and Kubernetes.",
    skills: "Architecture · Spring · React · GCP",
  },
  {
    id: "project-airtasker",
    title: "Airtasker",
    href: "https://www.airtasker.com/au/",
    imgSrc: "/images/airtasker.png",
    outcome:
      "Built backend and Android workflows that cut loading by more than 50% and improved retention by 17%.",
    skills: "Kotlin · Spring · Compose · AWS",
  },
];

function Projects() {
  return (
    <Section id="projects" title="Selected Work">
      <FeaturedProject
        id="project-mapify"
        title="Mapify"
        href="https://mapify.so/"
        eyebrow="🧠 AI knowledge platform · 5M+ users"
        imgSrc="/images/mapify.png"
        skills={[
          "Search & Data Architecture",
          "Summarisation Architecture",
          "AI Media Pipelines",
          "Observability",
          "Revenue Systems",
        ]}
        description={
          <>
            Led development of Xmind&apos;s AI knowledge platform for turning
            documents, media and web pages into clear visual maps.
          </>
        }
        highlights={[
          {
            title: "Search built for scale",
            description: (
              <>
                Designed full-text mind-map search and a user-transparent
                S3-to-PostgreSQL index migration with fallback behaviour.
              </>
            ),
          },
          {
            title: "One summarisation engine, every surface",
            description: (
              <>
                Re-architected AI summarisation, mind-map generation and
                persistence into a shared package so web, backend and Zapier
                produced consistent results.
              </>
            ),
          },
          {
            title: "A multilingual growth engine",
            description: (
              <>
                Architected generated TypeScript email templates, dynamic
                lists, click tracking, unified unsubscribe and one-ZIP locale
                imports.
              </>
            ),
          },
          {
            title: "Revenue and speed, end to end",
            description: (
              <>
                Built affiliate contracts, one-step Stripe coupons, tiered
                commissions and refund-aware settlement; cut FCP from 11.6s to
                1.1s and LCP from 22.1s to 7.6s.
              </>
            ),
          },
        ]}
      />

      <FeaturedProject
        id="project-henri"
        title="Henri"
        href="https://hihenri.ai/"
        eyebrow="🎓 Personal AI tutor"
        imgSrc="/images/henri.png"
        side="right"
        skills={[
          "AI Product Architecture",
          "LLM Orchestration",
          "Streaming Systems",
          "Cloud Delivery",
        ]}
        description={
          <>
            Led development of a personal AI tutor that turns any topic into a
            tailored syllabus with conversational lessons, active recall and
            adaptive quizzes.
          </>
        }
        highlights={[
          {
            title: "From idea to learning system",
            description: (
              <>
                Designed knowledge trees, personalised syllabus generation,
                conversational chapters, active-recall quizzes and learning
                reminders.
              </>
            ),
          },
          {
            title: "Real-time AI that holds together",
            description: (
              <>
                Stabilised streamed LLM responses and generated-image pipelines
                while expanding automated coverage and internationalisation.
              </>
            ),
          },
          {
            title: "Architecture to production",
            description: (
              <>
                Delivered the production path across AWS, S3, PostgreSQL,
                iOS/TestFlight and release configuration.
              </>
            ),
          },
        ]}
        links={[
          {
            href: "https://apps.apple.com/us/app/henri-personal-ai-tutor/id6756479042",
            label: "App Store",
            icon: <FaAppStoreIos />,
          },
        ]}
      />

      <FeaturedProject
        id="project-axit"
        title="AxIT"
        href="https://www.strengthbynumbers.com/software/"
        eyebrow="📱 Connected strength assessment"
        imgSrc="/images/axit-results.jpeg"
        skills={[
          "iOS & Android",
          "Bluetooth LE",
          "Cross-Platform Metrics",
          "Release Quality",
        ]}
        description={
          <>
            Strength By Numbers&apos; connected assessment platform, turning
            Push-IT, Pull-IT and Stomp-IT data into live feedback, trends and
            reports.
          </>
        }
        highlights={[
          {
            title: "A platform supporting 700+ centres",
            description: (
              <>
                Built the original Android and Bluetooth foundation plus
                backend services for connected strength assessment.
              </>
            ),
          },
          {
            title: "One metric system across mobile, web and backend",
            description: (
              <>
                Now deliver AxIT iOS and the shared AxITLib calculation
                contract—models, capability rules, sampling and metrics—across
                iOS, Android, Connect web and backend services.
              </>
            ),
          },
          {
            title: "Metric review and testing, systematised",
            description: (
              <>
                Introduced AxLib and SBN Testing to review metric algorithms
                against de-identified traces, verify test cases and streamline
                exact-build internal testing with shared evidence and auditable
                results.
              </>
            ),
          },
        ]}
        links={[
          {
            href: "https://apps.apple.com/us/app/axit/id6747880631",
            label: "App Store",
            icon: <FaAppStoreIos />,
          },
          {
            href: "https://play.google.com/store/apps/details?id=com.strengthbynumbers.axit",
            label: "Google Play",
            icon: <FaGooglePlay />,
          },
        ]}
      />

      <div className="mt-28">
        <div className="mb-8">
          <p className="font-sfmono text-sm text-blue-200/70">Earlier work</p>
          <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
            More products, less scrolling
          </h3>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {earlierWork.map((work) => (
            <ExternalLink
              key={work.title}
              id={work.id}
              href={work.href}
              className="group scroll-mt-24 overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-blue-200/35 hover:bg-white/[0.05]"
            >
              <Image
                src={work.imgSrc}
                className="aspect-[16/9] w-full rounded-none bg-white transition duration-500 group-hover:scale-[1.02]"
                alt={`${work.title} product preview`}
                width={1305}
                height={865}
              />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-white">
                    {work.title}
                  </h4>
                  <FaArrowUpRightFromSquare className="h-3.5 w-3.5 text-blue-200/50 transition group-hover:text-blue-200" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-blue-100/75">
                  {work.outcome}
                </p>
                <p className="mt-4 font-sfmono text-xs text-blue-200/55">
                  {work.skills}
                </p>
              </div>
            </ExternalLink>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Projects;
