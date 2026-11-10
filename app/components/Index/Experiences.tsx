"use client";

import { useEffect, useState } from "react";
import { FaFileContract } from "react-icons/fa";
import { Link, Paragraph, Section } from "./Section";

// Define MenuItem with React elements as content
interface MenuItem {
  id: number | number[];
  label: string;
  content?: React.ReactNode; // This will hold React elements or JSX
  indent?: boolean;
  anchor?: string;
  logoSrc?: string;
  logoFit?: "contain" | "cover";
  logoPosition?: "center" | "left";
  logoTreatment?: "default" | "sbn-mark";
  lightIconBackground?: boolean;
  contractor?: boolean;
}

interface ExperienceProps {
  company?: string;
  companyHref?: string;
  position: string;
  from?: string;
  to?: string;
  dates?: string;
  children: React.ReactNode;
}

const Experience: React.FC<ExperienceProps> = ({
  company,
  companyHref,
  position,
  from,
  to,
  dates,
  children,
}) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-white">
        {position}
        {company && (
          <>
            {" "}@{" "}
            {companyHref ? <Link href={companyHref}>{company}</Link> : company}
          </>
        )}
      </h3>
      <div className="mt-1 text-sm font-sfmono text-blue-100/60">
        {dates ?? `${from} - ${to}`}
      </div>
      <Paragraph className="py-5">{children}</Paragraph>
    </div>
  );
};

const XmindExperience = () => (
  <Experience
    company="Xmind"
    companyHref="https://xmind.com/"
    position="Senior Full-Stack Engineer"
    from="Jan 2025"
    to="Jul 2026"
  >
    <ul className="list-disc ml-5">
      <li>
        Led development of <Link href="https://mapify.so/">Mapify</Link>,
        turning product requirements into system boundaries across search,
        summarisation, data migration, growth and release operations; matured
        vibe coding with Cursor and Claude Code into implementation inside
        documented architecture, review and release guardrails
      </li>
      <li>
        Designed full-text search and balanced migration speed against release
        risk with an S3-to-PostgreSQL index rollout, fallback behaviour and no
        hard cut-over
      </li>
      <li>
        Built its multilingual email and affiliate-settlement systems, and cut
        homepage FCP from 11.6s to 1.1s and LCP from 22.1s to 7.6s for a product
        trusted by 5M+ users
      </li>
      <li>
        Led development of <Link href="https://hihenri.ai/">Henri</Link>, turning
        the open-ended promise of teaching any topic into an AI product built
        using AI and a proving ground for engineered vibe coding, from
        behavioural specs and design rules through testing and production
      </li>
    </ul>
  </Experience>
);

const CurrentContractExperience = () => (
  <Experience
    position="Independent Software Contractor"
    from="Aug 2026"
    to="Present"
  >
    <ul className="list-disc ml-5">
      <li>
        <b>AxIT iOS:</b> through weekend contract work, build and modernise{" "}
        <Link href="https://www.strengthbynumbers.com/software/">AxIT</Link>{" "}
        with Swift and SwiftUI, bringing its Bluetooth-connected assessment,
        session, sync, reporting, and release workflows to iPhone and iPad
      </li>
      <li>
        <b>Cross-platform metrics:</b> contribute AxLib&apos;s shared calculation
        contract across iOS, Android, Connect web and backend services while
        keeping UI, Bluetooth and performance decisions platform-specific
      </li>
      <li>
        <b>AI-assisted metric review &amp; QA:</b> apply engineered vibe coding
        through Codex agent teams and isolated worktrees to evolve de-identified
        trace exploration and SBN Testing&apos;s exact-build workflows, separating
        algorithm review from app-behaviour testing with auditable evidence
      </li>
    </ul>
  </Experience>
);

const EarlierContractExperience = () => (
  <Experience
    position="Independent Software Contractor"
    from="Jun 2024"
    to="Dec 2024"
  >
    <ul className="list-disc ml-5">
      <li>
        Established the Swift and SwiftUI foundations for{" "}
        <Link href="https://www.strengthbynumbers.com/software/">AxIT</Link> on
        iPhone and iPad across Bluetooth assessment, sessions, sync and reporting
      </li>
      <li>
        Preserved compatibility with the established Android product and its
        Push-IT, Pull-IT, and Stomp-IT device ecosystem
      </li>
    </ul>
  </Experience>
);

const AimiExperience = () => (
  <Experience
    company="Aimi"
    companyHref="https://www.aimi.fm/"
    position="Senior Software Engineer"
    from="Jun 2022"
    to="May 2024"
  >
    <ul className="list-disc ml-5">
      <li>
        Led the system design and delivery of a portable C++ generative-music
        engine and cross-platform SDK, reducing startup time by 52%
      </li>
      <li>
        Founded the Android team and built Aimi Player with Kotlin, Jetpack
        Compose, and Media3
      </li>
      <li>
        Built React and Next.js products and maintained AWS delivery with
        Docker, Terraform and GitHub Actions, while achieving 96% test coverage
      </li>
    </ul>
  </Experience>
);

const OptusExperience = () => (
  <Experience
    company="Optus"
    companyHref="https://www.optus.com.au/"
    position="Engagement Lead"
    from="Jan"
    to="Jun 2022"
  >
    <ul className="list-disc ml-5">
      <li>
        Turned ambiguous stakeholder needs, security constraints, budget and
        risk into a clear architecture and delivery plan with an Agile team of
        three
      </li>
      <li>
        Designed and built a secure, highly available solution with Kotlin,
        Spring Boot, React, Redux, GCP Kubernetes, Docker, and Terraform
      </li>
    </ul>
  </Experience>
);

const AirtaskerExperience = () => (
  <Experience
    company="Airtasker"
    companyHref="https://www.airtasker.com/au/"
    position="Backend / Android Engineer"
    from="Sep 2021"
    to="Feb 2022"
  >
    <ul className="list-disc ml-5">
      <li>
        Built Kotlin and Spring Boot backend services that cut web and mobile
        load time by more than 50%
      </li>
      <li>
        Developed a dynamic Android workflow with Kotlin and Jetpack Compose,
        improving customer retention by 17%
      </li>
    </ul>
  </Experience>
);

const LendleaseExperience = () => (
  <Experience
    company="Lendlease"
    companyHref="https://www.lendlease.com/au/"
    position="Cloud Engineer"
    from="May"
    to="Oct 2021"
  >
    <ul className="list-disc ml-5">
      <li>
        Trained a Python and Pandas ticket-classification model on Vertex AI and
        integrated it with ServiceNow through GCP Pub/Sub, reducing manual
        classification work previously handled by 30 staff
      </li>
      <li>
        Built MLOps delivery and a Dialogflow backend using Python and GCP Cloud
        Functions
      </li>
    </ul>
  </Experience>
);

const SBNExperience = () => (
  <Experience
    company="Strength By Numbers"
    companyHref="https://www.strengthbynumbers.com/"
    position="Lead Full-Stack Developer"
    from="Jun 2018"
    to="Apr 2021"
  >
    <ul className="list-disc ml-5">
      <li>
        Designed and built the original AxIT Android app in Java, managing
        complex asynchronous Bluetooth operations with ReactiveX
      </li>
      <li>
        Built Spring Boot and MongoDB synchronisation services on AWS supporting
        more than 700 physio and fitness centres
      </li>
      <li>
        Developed React and Redux web applications and owned delivery from
        requirements and architecture through testing and deployment
      </li>
    </ul>
  </Experience>
);

const SensiLabExperience = () => (
  <Experience
    company="SensiLab"
    companyHref="https://sensilab.monash.edu/"
    position="Full-Stack Developer"
    from="Sep 2016"
    to="May 2018"
  >
    <ul className="list-disc ml-5">
      <li>
        Built React, Express.js, MongoDB and Firebase products, plus an iOS app
        in Swift
      </li>
      <li>Optimised WordPress performance and built custom themes and plugins</li>
    </ul>
  </Experience>
);

const companyLogos = {
  xmind: "https://xmind.com/hp/assets/9f74a.svg",
  aimi: "https://www.aimi.fm/assets/logo.svg",
  servian:
    "https://miro.medium.com/0%2AVAzDcWN5MPu3wjEG.jpg",
  optus: "https://www.google.com/s2/favicons?domain=optus.com.au&sz=128",
  airtasker: "https://www.airtasker.com/images/icon_196_2022.png",
  lendlease:
    "https://www.lendlease.com/globalassets/all-sites/logos/ll_a_corporate_horizontal_full-colour_grad_rgb-12.svg",
  strengthByNumbers:
    "https://www.strengthbynumbers.com/wp-content/uploads/2024/04/h6O3pQ1SBCyHddqVO8m3_SBN_Logo_COLOUR-300x44.webp",
  sensilab: "https://sensilab.monash.edu/favicon.ico",
};

const ExperienceMenuIcon: React.FC<{ item: MenuItem }> = ({ item }) => (
  <span
    className={`flex h-5 w-5 shrink-0 items-center overflow-hidden rounded-sm ${
      item.logoTreatment === "sbn-mark" ? "justify-start" : "justify-center"
    } ${item.contractor || item.lightIconBackground ? "bg-white" : ""}`}
    aria-hidden="true"
  >
    {item.contractor ? (
      <FaFileContract className="h-4 w-4 text-slate-800" />
    ) : (
      // Logos are intentionally small remote brand assets, not page content/LCP images.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={item.logoSrc}
        alt=""
        className={
          item.logoTreatment === "sbn-mark"
            ? "h-auto w-[50px] max-w-none shrink-0"
            : `h-5 w-5 ${
                item.logoFit === "cover" ? "object-cover" : "object-contain"
              } ${
                item.logoPosition === "left" ? "object-left" : "object-center"
              }`
        }
        loading="lazy"
      />
    )}
  </span>
);

// Array of menu items with corresponding React content
const items: MenuItem[] = [
  {
    id: 2,
    label: "Contract Work",
    contractor: true,
    anchor: "contract-after-xmind",
    content: <CurrentContractExperience />,
  },
  {
    id: 1,
    label: "Xmind",
    logoSrc: companyLogos.xmind,
    content: <XmindExperience />,
  },
  {
    id: 4,
    label: "Contract Work",
    contractor: true,
    anchor: "contract-after-aimi",
    content: <EarlierContractExperience />,
  },
  {
    id: 3,
    label: "Aimi",
    logoSrc: companyLogos.aimi,
    content: <AimiExperience />,
  },
  {
    id: [5, 6, 7],
    label: "Servian Consulting",
    logoSrc: companyLogos.servian,
    logoFit: "cover",
    lightIconBackground: true,
  },
  {
    id: 5,
    label: "Optus",
    indent: true,
    logoSrc: companyLogos.optus,
    content: <OptusExperience />,
  },
  {
    id: 6,
    label: "Airtasker",
    indent: true,
    logoSrc: companyLogos.airtasker,
    lightIconBackground: true,
    content: <AirtaskerExperience />,
  },
  {
    id: 7,
    label: "Lendlease",
    indent: true,
    logoSrc: companyLogos.lendlease,
    logoFit: "cover",
    logoPosition: "left",
    lightIconBackground: true,
    content: <LendleaseExperience />,
  },
  {
    id: 8,
    label: "Strength By Numbers",
    logoSrc: companyLogos.strengthByNumbers,
    logoTreatment: "sbn-mark",
    lightIconBackground: true,
    content: <SBNExperience />,
  },
  {
    id: 9,
    label: "SensiLab",
    logoSrc: companyLogos.sensilab,
    content: <SensiLabExperience />,
  },
];

const itemKey = (item: MenuItem) =>
  Array.isArray(item.id) ? item.id.join(",") : String(item.id);

const Experiences: React.FC = () => {
  const [activeItem, setActiveItem] = useState<MenuItem>(items[0]);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(
    itemKey(items[0]),
  );

  useEffect(() => {
    const showLinkedExperience = () => {
      const hash = window.location.hash.slice(1);
      const linkedItem = items.find((item) => item.anchor === hash);

      if (!linkedItem) {
        return;
      }

      setActiveItem(linkedItem);
      setOpenMobileItem(itemKey(linkedItem));
      requestAnimationFrame(() => {
        const target = window.matchMedia("(min-width: 768px)").matches
          ? document.getElementById("experiences")
          : document.getElementById(hash);
        target?.scrollIntoView({ block: "start" });
      });
    };

    showLinkedExperience();
    window.addEventListener("hashchange", showLinkedExperience);
    return () => window.removeEventListener("hashchange", showLinkedExperience);
  }, []);

  const selectDesktopItem = (item: MenuItem) => {
    setActiveItem(item);
    if (item.anchor) {
      window.history.replaceState(null, "", `#${item.anchor}`);
    } else if (window.location.hash.startsWith("#contract-after-")) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }
  };

  const renderDesktopItem = (item: MenuItem, nested = false) => {
    const isActive = activeItem.id === item.id;

    return (
      <li key={itemKey(item)}>
        <button
          type="button"
          className={`flex w-full items-center gap-3 px-4 py-3 text-left font-sfmono text-sm transition-all duration-500 ease-in-out ${
            nested
              ? isActive
                ? "rounded-r-md bg-white/[0.04] text-white"
                : "text-blue-200/50 hover:bg-white/[0.025] hover:text-blue-100"
              : isActive
                ? "border-l-2 border-blue-100 text-white"
                : "border-l-2 border-blue-100/10 text-blue-200/50 hover:border-blue-100/40 hover:text-blue-100"
          } ${nested ? "pl-3" : ""}`}
          onClick={() => selectDesktopItem(item)}
          aria-current={isActive ? "true" : undefined}
        >
          <ExperienceMenuIcon item={item} />
          <span>{item.label}</span>
        </button>
      </li>
    );
  };

  const renderMobileItem = (item: MenuItem, nested = false) => (
    <details
      key={itemKey(item)}
      id={item.anchor}
      open={openMobileItem === itemKey(item)}
      className={`group scroll-mt-20 border-b border-white/10 ${
        nested ? "last:border-b-0" : ""
      }`}
      onToggle={(event) => {
        const key = itemKey(item);
        if (event.currentTarget.open) {
          setOpenMobileItem(key);
        } else {
          setOpenMobileItem((current) => (current === key ? null : current));
        }
      }}
    >
      <summary className="flex cursor-pointer list-none items-center gap-3 py-5 font-sfmono text-sm text-blue-100 marker:content-none">
        <ExperienceMenuIcon item={item} />
        <span className="flex-1">{item.label}</span>
        <span
          aria-hidden="true"
          className="text-lg text-blue-200/60 transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="pb-6">{item.content}</div>
    </details>
  );

  return (
    <Section id="experiences" title="Where I've Worked" side="right">
      <div className="flex w-full md:w-5/6 flex-col md:flex-row">
        {/* Side Menu - only visible on medium and larger screens */}
        <div className="w-full md:w-1/4 px-5 hidden md:block">
          <ul>
            {items.map((item) => {
              if (item.indent) {
                return null;
              }

              if (Array.isArray(item.id)) {
                const groupIds = item.id;
                const clientItems = items.filter(
                  (clientItem) =>
                    clientItem.indent &&
                    !Array.isArray(clientItem.id) &&
                    groupIds.includes(clientItem.id),
                );
                const containsActiveItem = groupIds.includes(
                  activeItem.id as number,
                );

                return (
                  <li key={itemKey(item)} className="py-2">
                    <div
                      className={`flex items-center gap-3 px-4 py-2 font-sfmono text-sm ${
                        containsActiveItem
                          ? "text-blue-100"
                          : "text-blue-200/55"
                      }`}
                    >
                      <ExperienceMenuIcon item={item} />
                      <span>{item.label}</span>
                    </div>
                    <ul
                      aria-label={`${item.label} client engagements`}
                      className="ml-6 border-l border-blue-100/15 pl-3"
                    >
                      {clientItems.map((clientItem) =>
                        renderDesktopItem(clientItem, true),
                      )}
                    </ul>
                  </li>
                );
              }

              return renderDesktopItem(item);
            })}
          </ul>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-3/4 md:px-10">
          {/* Display all experiences on small screens */}
          <div className="block md:hidden">
            {items.map((item) => {
              if (item.indent) {
                return null;
              }

              if (Array.isArray(item.id)) {
                const groupIds = item.id;
                const clientItems = items.filter(
                  (clientItem) =>
                    clientItem.indent &&
                    !Array.isArray(clientItem.id) &&
                    groupIds.includes(clientItem.id),
                );

                return (
                  <div
                    key={itemKey(item)}
                    role="group"
                    aria-label={`${item.label} client engagements`}
                    className="border-b border-white/10 py-3"
                  >
                    <div className="flex items-center gap-3 py-3 font-sfmono text-sm font-medium text-blue-100">
                      <ExperienceMenuIcon item={item} />
                      <span>{item.label}</span>
                    </div>
                    <div className="ml-2 border-l border-blue-100/20 pl-5">
                      {clientItems.map((clientItem) =>
                        renderMobileItem(clientItem, true),
                      )}
                    </div>
                  </div>
                );
              }

              return item.content ? renderMobileItem(item) : null;
            })}
          </div>
          {/* Display only the active item on larger screens */}
          <div className="hidden md:block">{activeItem.content}</div>
        </div>
      </div>
    </Section>
  );
};

export default Experiences;
