import { FaAppStoreIos } from "react-icons/fa6";
import { Image, Paragraph, Section } from "./Section";
import { FaGooglePlay } from "react-icons/fa";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-200 hover:text-white"
    >
      {children}
    </a>
  );
};

interface ProjectProps {
  title: string;
  titleHref: string;
  description: React.ReactNode;
  myRole: React.ReactNode;
  imgSrc: string;
  skills: string[];
  links?: LinkProps[];
  side?: "left" | "right";
}

const Project: React.FC<ProjectProps> = ({
  title,
  titleHref,
  description,
  myRole,
  imgSrc,
  skills,
  links = [],
  side = "left",
}) => {
  return (
    <div className="mb-20">
      <div
        className={`flex flex-col md:flex-row justify-between items-start max-w-5xl mx-auto ${
          side === "right" ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Box */}
        <div className="relative z-10 md:w-1/2">
          <h3
            className={`text-3xl font-bold mb-4 ${
              side === "right" ? "text-right" : ""
            }`}
          >
            <a
              href={titleHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white"
            >
              {title}
            </a>
          </h3>

          <div
            className={`bg-blue-950 p-5 ${
              side === "right" ? "md:ml-[-150px]" : "md:mr-[-150px]"
            } rounded-md shadow-lg`}
          >
            {description}
          </div>

          <div className={`mt-5 ${side === "right" ? "md:text-right" : ""}`}>
            <p className="mb-3 font-sfmono text-xs uppercase tracking-[0.18em] text-blue-200 text-opacity-70">
              Core skills
            </p>
            <ul
              aria-label={`${title} core skills`}
              className={`flex flex-wrap gap-2 ${
                side === "right" ? "md:justify-end" : ""
              }`}
            >
              {skills.map((skill) => (
                <li
                  key={`project-${title}-skill-${skill}`}
                  className="whitespace-nowrap rounded-full border border-blue-200 border-opacity-20 bg-blue-900 bg-opacity-40 px-3 py-1.5 font-sfmono text-sm text-blue-100"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <ul
            className={`mt-5 flex gap-4 ${
              side === "right" ? "md:justify-end" : ""
            }`}
          >
            {links.map((link, i) => (
              <li key={`project-${title}-link-${i}`}>
                <Link href={link.href}><span className="text-2xl">{link.children}</span></Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Box */}
        <div className="mt-8 md:mt-0 md:ml-6 relative z-0 md:w-1/2">
          <Image
            src={imgSrc}
            className="w-full h-auto rounded-lg"
            alt={title}
            width={1600}
            height={900}
          />
        </div>
      </div>

      <div className="justify-end flex">
        <div className="mt-10 md:w-5/6">{myRole}</div>
      </div>
    </div>
  );
};

function MapifyProject() {
  return (
    <Project
      title="Mapify"
      titleHref="https://mapify.so/"
      imgSrc="/images/mapify.png"
      skills={[
        "Search & Data Architecture",
        "AI Media Pipelines",
        "Production Observability",
        "Platform Reliability",
        "Revenue & Lifecycle Systems",
      ]}
      description={
        <Paragraph className="mb-0">
          <strong className="font-semibold text-white">
            Trusted by 5M+ users worldwide,
          </strong>{" "}
          Mapify is Xmind&apos;s AI knowledge platform for turning documents,
          articles, videos, audio, and web pages into clear visual maps.
        </Paragraph>
      }
      myRole={
        <>
          <Paragraph>
            I worked across Mapify&apos;s full-stack platform and production
            operations. I designed mind-map search and an S3-to-PostgreSQL
            indexing migration; strengthened speech-to-text with orchestration,
            retries, local-worker simulation, and fallback behaviour; and
            investigated production memory issues with new Prometheus
            monitoring. I also cut homepage FCP from 11.6s to 1.1s and LCP from
            22.1s to 7.6s.
          </Paragraph>
          <Paragraph>
            I architected a multilingual lifecycle-email platform shared by
            transactional and newsletter workloads. JSON-defined content
            automatically generated TypeScript renderers, while dynamic mailing
            lists, click tracking, unified unsubscribe, encrypted tokens,
            locale-aware links and images, one-ZIP imports, and dashboard
            sending removed duplicated template work and sharply reduced
            translation and campaign-production time.
          </Paragraph>
          <Paragraph>
            I also built Mapify&apos;s affiliate operations and settlement system:
            partner contracts, one-step Stripe coupon creation, conversion and
            commission accounting, 5–15% commission tiers, two-month settlement
            windows, and pre-settlement refund and downgrade adjustments. The
            dashboard replaced manual Stripe operations and made influencer
            partnerships scalable.
          </Paragraph>
        </>
      }
    />
  );
}

function HenriProject() {
  return (
    <Project
      title="Henri"
      titleHref="https://hihenri.ai/"
      imgSrc="/images/henri.png"
      skills={[
        "AI Product Architecture",
        "LLM Orchestration",
        "Streaming Systems",
        "Full-Stack TypeScript",
        "Cloud Delivery",
      ]}
      side="right"
      description={
        <Paragraph className="mb-0">
          Henri is a personal AI tutor that turns any topic into a tailored
          syllabus and teaches it through short, conversational lessons, active
          recall, quizzes, knowledge cards, and learning reminders.
        </Paragraph>
      }
      myRole={
        <>
          <Paragraph>
            I helped take Henri from architecture through beta and production,
            designing the full-stack foundations for personalised learning:
            knowledge trees, syllabus generation, conversational chapters,
            adaptive quizzes, generated visuals, study notes, reminders, and
            engagement loops.
          </Paragraph>
          <Paragraph>
            I owned reliability across real-time AI workflows, stabilising
            streamed knowledge-tree generation and image pipelines, upgrading
            the AI SDK, and expanding automated tests and internationalisation.
            I also coordinated AWS, S3, PostgreSQL, TestFlight, and production
            configuration, connecting product architecture to release.
          </Paragraph>
        </>
      }
    />
  );
}

function AxITProject() {
  return (
    <Project
      title="AxIT"
      titleHref="https://www.strengthbynumbers.com/software/"
      imgSrc="/images/axit-results.jpeg"
      skills={[
        "iOS & Android Architecture",
        "Bluetooth LE Systems",
        "Cross-Platform Metrics",
        "Traceable QA Systems",
        "Release Engineering",
      ]}
      description={
        <Paragraph className="mb-0">
          AxIT is Strength By Numbers&apos; strength and performance assessment
          platform. It connects Push-IT, Pull-IT, and Stomp-IT devices, guides
          practitioners through 100+ built-in and custom tests, and turns
          results into live feedback, trends, benchmarks, and reports.
        </Paragraph>
      }
      myRole={
        <>
          <Paragraph>
            I&apos;ve worked on AxIT across two chapters. At Strength By Numbers,
            I built the Android app, Bluetooth workflows, synchronisation
            services, and web tooling. Now, as an independent software
            contractor on weekend side projects, I contribute across AxIT iOS,
            AxITLib, and SBN Testing.
          </Paragraph>
          <Paragraph>
            AxIT iOS brings the connected assessment platform to iPhone and
            iPad with reliable Bluetooth, session, sync, reporting, and release
            workflows. AxITLib turns models, capabilities, sampling rules, and
            sports-science metrics into shared Kotlin Multiplatform contracts,
            reducing drift between iOS and Android. SBN Testing gives the team
            one exact-build workspace for collaborative plans, live progress,
            evidence, priorities, immutable result history, and discussions.
          </Paragraph>
        </>
      }
      links={[
        {
          href: "https://apps.apple.com/us/app/axit/id6747880631",
          children: <FaAppStoreIos />,
        },
        {
          href: "https://play.google.com/store/apps/details?id=com.strengthbynumbers.axit",
          children: <FaGooglePlay />,
        },
      ]}
    />
  );
}

function AimiProject() {
  return (
    <Project
      title="Aimi Player"
      titleHref="https://www.aimi.fm/"
      imgSrc="/images/aimi-player.png" 
      skills={[
        "Cross-Platform SDKs",
        "Android Product Engineering",
        "Real-Time Audio Systems",
        "TypeScript & C++",
        "Performance Optimisation",
      ]}
      side="right"
      description={
        <>
          <Paragraph className="mb-0">
            Aimi Player is designed to transform how users engage with music by
            offering real-time interaction with generative music. It allows
            users to craft personalised listening experiences that evolve
            dynamically based on their preferences.
          </Paragraph>
        </>
      }
      myRole={
        <>
          <Paragraph>
            I initially developed the Android app for the team using Kotlin and
            Jetpack Compose, integrating our AMOS music SDK with Android&apos;s
            Media3 framework to ensure seamless playback and interaction.
          </Paragraph>
          <Paragraph>
            Later, I transitioned to the team working on AMOS, our
            cross-platform generative music SDK. My role focused on
            modernising the service by migrating it to TypeScript and
            implementing a new architecture that improved scalability,
            performance, and maintainability.
          </Paragraph>
        </>
      }
      links={[
        {
          href: "https://apps.apple.com/us/app/aimi-player/id1470043312",
          children: <FaAppStoreIos />
        },
        {
          href: "https://play.google.com/store/apps/details?id=fm.aimi.android&hl=en",
          children: <FaGooglePlay />,
        },
      ]}
    ></Project>
  );
}

function OptuSafeProject() {
  return (
    <Project
      title="OptuSafe"
      titleHref="https://optus.com.au/"
      imgSrc="/images/optusafe.png"
      skills={[
        "Solution Architecture",
        "Secure Platform Design",
        "Distributed Backends",
        "Kubernetes & Cloud",
        "Technical Leadership",
      ]}
      description={
        <>
          <Paragraph className="mb-0">
            Optus needed to upgrade their ID verification service to meet
            stringent security standards and improve system efficiency. The
            challenge was to deliver a scalable, secure, and highly available
            solution while coordinating with multiple teams.
          </Paragraph>
        </>
      }
      myRole={
        <>
          <Paragraph>
            I managed the agile team, prioritising tasks to boost productivity.
            I facilitated meetings to gather requirements and ensure alignment
            with Optus stakeholders. As a solution architect, I designed a
            full-stack web solution using Java, Spring, and Google Cloud,
            addressing critical security needs.
          </Paragraph>
        </>
      }
    ></Project>
  );
}

function AirtaskerProject() {
  return (
    <Project
      title="Airtasker"
      titleHref="https://www.airtasker.com/au/"
      imgSrc="/images/airtasker.png"
      skills={[
        "Backend-for-Frontend",
        "Mobile Architecture",
        "Server-Driven UI",
        "Kotlin & Spring",
        "Performance Optimisation",
      ]}
      side="right"
      description={
        <Paragraph className="mb-0">
          The project aimed to revamp Airtasker&apos;s app to improve its performance
          and adaptability. This was achieved by developing a Backend for
          Frontend (BFF) service that consolidated backend interactions,
          allowing the app to make a single request per usage. Additionally, it
          enabled dynamic updates to the app&apos;s UI without needing app updates,
          enhancing flexibility.
        </Paragraph>
      }
      myRole={
        <>
          <Paragraph>
            I spearheaded the development of a BFF service using Kotlin and
            Spring, streamlining backend calls. I also contributed to the
            Android development of the &#34;Book Again&#34; workflow, leveraging my
            skills in Android engineering to enhance user experience and
            retention.
          </Paragraph>
        </>
      }
      links={[
        {
          href: "https://play.google.com/store/apps/details?id=au.com.airtasker&hl=en",
          children: <FaGooglePlay />,
        },
      ]}
    ></Project>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Some Things I've Built">
      <MapifyProject />
      <HenriProject />
      <AxITProject />
      <AimiProject />
      <OptuSafeProject />
      <AirtaskerProject />
    </Section>
  );
}

export default Projects;
