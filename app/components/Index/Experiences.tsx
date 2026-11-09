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
      <h3 className="text-xl font-bold text-blue-200">
        {position}
        {company && (
          <>
            {" "}@{" "}
            {companyHref ? <Link href={companyHref}>{company}</Link> : company}
          </>
        )}
      </h3>
      <div className="text-sm font-sfmono">
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
        Built AI products across discovery, architecture, frontend, backend,
        infrastructure, testing, and production release for{" "}
        <Link href="https://mapify.so/">Mapify</Link> and{" "}
        <Link href="https://hihenri.ai/">Henri</Link>
      </li>
      <li>
        Designed Mapify&apos;s mind-map search and S3-to-PostgreSQL index
        migration, including full-text data structures, fallback behaviour, and
        a user-transparent rollout path
      </li>
      <li>
        Reworked speech-to-text around orchestration, retries, local worker and
        media simulation, and provider fallbacks; diagnosed production memory
        leaks and added Prometheus monitoring
      </li>
      <li>
        Architected Mapify&apos;s multilingual newsletter and transactional-email
        platform with generated TypeScript renderers, dynamic mailing lists,
        click tracking, unified unsubscribe, one-ZIP locale imports, and
        dashboard sending
      </li>
      <li>
        Built affiliate operations and settlement for a product trusted by 5M+
        users, covering partner contracts, one-step Stripe coupons, 5–15%
        commission tiers, two-month settlement, and refund/downgrade adjustments
      </li>
      <li>
        Cut Mapify homepage FCP from 11.6s to 1.1s and LCP from 22.1s to 7.6s
      </li>
      <li>
        Architected Henri&apos;s personalised learning system across knowledge-tree
        streaming, syllabus generation, conversational chapters, adaptive
        quizzes, generated visuals, engagement loops, and production delivery
      </li>
      <li>
        Improved release safety, automated tests, GitHub security and CI, and
        coordinated AWS, S3, PostgreSQL, TestFlight, and production setup
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
        Work independently on connected product delivery and quality systems
        after Xmind, across three related AxIT products
      </li>
      <li>
        <b>AxIT iOS:</b> build and modernise{" "}
        <Link href="https://www.strengthbynumbers.com/software/">AxIT</Link>{" "}
        with Swift and SwiftUI, bringing its Bluetooth-connected assessment,
        session, sync, reporting, and release workflows to iPhone and iPad
      </li>
      <li>
        <b>AxITLib:</b> contribute shared Kotlin Multiplatform models and metrics
        that centralise test catalogues, device capabilities, sampling rules, and
        calculations so iOS and Android behave consistently
      </li>
      <li>
        <b>SBN Testing:</b> build a private exact-build QA workspace where teams
        coordinate plans, live progress, evidence, priorities, audited result
        history, and Slack-linked discussions without losing earlier work
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
        Worked independently between Aimi and Xmind, establishing the foundation
        for <Link href="https://www.strengthbynumbers.com/software/">AxIT</Link>{" "}
        on iPhone and iPad
      </li>
      <li>
        Built Swift and SwiftUI foundations for Bluetooth-connected assessment,
        client, session, test, local-data, cloud-sync, and reporting workflows
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
        Led a cross-platform generative music SDK in TypeScript, Node.js, and
        C++, reducing startup time by 52%
      </li>
      <li>
        Founded the Android team and built Aimi Player with Kotlin, Jetpack
        Compose, and Media3
      </li>
      <li>
        Built responsive React and Next.js applications and maintained AWS
        infrastructure with Docker, Terraform, and GitHub Actions
      </li>
      <li>Introduced test-driven development and achieved 96% code coverage</li>
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
        Led discovery, scope, interface contracts, solution design, budget,
        risk, and timeline with Optus stakeholders
      </li>
      <li>
        Led an Agile team of 3, facilitated team ceremonies, reviewed code, and
        mentored junior engineers
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
        Developed MLOps CI/CD pipelines for accelerated training and deployment
        of models
      </li>
      <li>
        Created a Dialogflow chatbot backend with Python and GCP Cloud Functions
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
        more than 200 physio and fitness centres
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
        Built React, Redux, Express.js, MongoDB, and Firebase web applications
      </li>
      <li>Developed an iOS app with Swift</li>
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
    label: "Servian",
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

const Experiences: React.FC = () => {
  const [activeItem, setActiveItem] = useState<MenuItem>(items[0]);

  useEffect(() => {
    const showLinkedExperience = () => {
      const hash = window.location.hash.slice(1);
      const linkedItem = items.find((item) => item.anchor === hash);

      if (!linkedItem) {
        return;
      }

      setActiveItem(linkedItem);
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

  return (
    <Section id="experiences" title="Where I've Worked" side="right">
      <div className="flex w-full md:w-5/6 flex-col md:flex-row">
        {/* Side Menu - only visible on medium and larger screens */}
        <div className="w-full md:w-1/4 px-5 hidden md:block">
          <ul>
            {items.map((item, i) => (
              <li
                key={Array.isArray(item.id) ? item.id.join(",") : item.id}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer border-l-2 border-blue-100 font-sfmono text-sm ${
                  activeItem.id === item.id ||
                  (Array.isArray(item.id) &&
                    item.id.includes(activeItem.id as number))
                    ? "text-white"
                    : "border-opacity-10 text-blue-200 text-opacity-50"
                } transition-all duration-500 ease-in-out`}
                onClick={() => {
                  const selectedItem = Array.isArray(item.id)
                    ? items[i + 1]
                    : item;
                  setActiveItem(selectedItem);
                  if (selectedItem.anchor) {
                    window.history.replaceState(
                      null,
                      "",
                      `#${selectedItem.anchor}`,
                    );
                  } else if (
                    window.location.hash.startsWith("#contract-after-")
                  ) {
                    window.history.replaceState(
                      null,
                      "",
                      `${window.location.pathname}${window.location.search}`,
                    );
                  }
                }}
              >
                <span className={item.indent ? "ml-4" : ""}>
                  <ExperienceMenuIcon item={item} />
                </span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-3/4 md:px-10">
          {/* Display all experiences on small screens */}
          <div className="block md:hidden">
            {items
              .filter((item) => item.content)
              .map((item) => (
                <div
                  key={Array.isArray(item.id) ? item.id.join(",") : item.id}
                  id={item.anchor}
                  className="scroll-mt-48"
                >
                  {item.content}
                </div>
              ))}
          </div>
          {/* Display only the active item on larger screens */}
          <div className="hidden md:block">{activeItem.content}</div>
        </div>
      </div>
    </Section>
  );
};

export default Experiences;
