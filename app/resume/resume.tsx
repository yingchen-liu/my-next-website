"use client";

import { useState } from "react";

function Experience({
  title,
  href,
  type,
  time,
  company,
  children,
}: {
  title: string;
  href: string;
  type: string;
  time: string;
  company: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5">
      <div className="flex">
        <div className="flex-grow flex">
          <div className="font-semibold mr-2 text-[1.05rem]">{title}</div>
          <div className="text-sm mt-[2.5px]"> - {type}</div>
        </div>
        <div className="italic text-sm">{time}</div>
      </div>
      <Link href={href} className="font-light">
        {company}
      </Link>
      <ul className="list-disc ml-5 mt-1 text-[0.9rem] flex flex-col">
        {children}
      </ul>
    </div>
  );
}

function Link({
  href,
  onClick,
  className,
  children,
  invert = false,
}: {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  invert?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className={`${
        invert ? "text-white" : "text-blue-700"
      } hover:underline cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default function Resume() {
  const [title, setTitle] = useState("full-stack");

  return (
    <>
      <div className="container md:px-20 md:pt-20 pb-6 mt-10 mx-auto flex gap-6">
        <Link
          onClick={() => setTitle("full-stack")}
          className={`${title === "full-stack" && "font-bold"}`}
          invert={true}
        >
          Full Stack
        </Link>
        <Link
          onClick={() => setTitle("back-end")}
          className={`${title === "back-end" && "font-bold"}`}
          invert={true}
        >
          Back End
        </Link>
        <Link
          onClick={() => setTitle("mobile")}
          className={`${title === "mobile" && "font-bold"}`}
          invert={true}
        >
          Mobile
        </Link>
      </div>
      <div className="container md:px-20 md:pb-20 mx-auto">
        <div className="font-extralight text-gray-900 font-sans border-l-4 border-l-[#af0f00] p-8 shadow-md border-[0.5px] border-gray-50 bg-gray-100">
          <div className="mb-8">
            <div className="text-[#af0f00] font-bold text-[22px]">
              Yingchen Liu
            </div>
            <div className="font-[300]">
              Senior{" "}
              {title === "full-stack"
                ? "Full Stack"
                : title === "back-end"
                ? "Software"
                : title === "mobile"
                ? "Full Stack Mobile"
                : "Software"}{" "}
              Engineer
              <div className="inline-block px-2">•</div>8 years
              <div className="inline-block px-2">•</div>Web Front End, Back End,
              Mobile, Cloud
            </div>
            <div>
              <Link href="mailto:info@yingchenliu.com">
                info@yingchenliu.com
              </Link>
              <div className="inline-block px-2">•</div>
              <Link href="https://yingchenliu.com">
                https://yingchenliu.com
              </Link>
            </div>
          </div>

          <div>
            <div className="text-[#af0f00] font-bold pb-3 border-b-[1.5px] border-b-gray-200 mb-3">
              EXPERIENCE
            </div>
            <Experience
              title="Senior Software Engineer"
              type="Remote, AU"
              time="2022 - 2024"
              company="Aimi.fm"
              href="https://aimi.fm"
            >
              {title === "full-stack" && (
                <li className="order-1">
                  Led the development of a cross-platform music SDK/backend, a
                  core component of Aimi Player and Aimi Studio, in TypeScript
                  and Node.js, enhancing the interactive music experience and
                  reducing startup time by 52%.
                </li>
              )}
              {title === "back-end" && (
                <li className="order-1">
                  Led the development of a cross-platform music backend, a core
                  component of Aimi Player and Aimi Studio, in TypeScript and
                  Node.js, enhancing the interactive music experience and
                  reducing startup time by 52%.
                </li>
              )}
              {title === "mobile" && (
                <li className="order-2">
                  Led the development of a cross-platform music SDK for both
                  Android and iOS, a core component of Aimi Player and Aimi
                  Studio, built with TypeScript, Node.js and C++. Enhanced the
                  interactive music experience and reduced startup time by 52%.
                </li>
              )}

              <li className={`${title === "mobile" ? "order-1" : "order-2"}`}>
                Founded the Android team and built the Android app using Kotlin
                and JetPack Compose.
              </li>
              <li className="order-3">
                Engineered responsive web applications with TypeScript, React,
                and Next.js.
              </li>
              <li className="order-4">
                Deployed a scalable music streaming backend and maintained AWS
                infrastructure using Docker, Terraform, and GitHub Actions.
                Improved the build flow, reducing service build time by 30s.
              </li>
              <li className="order-5">
                Achieved 96% code coverage by implementing test-driven
                development within the team.
              </li>
            </Experience>

            <Experience
              title="Software Consultant"
              type="Hybrid, AU"
              time="2021 - 2022"
              company="Cognizant Servian"
              href="https://www.cognizant.com/au/en/servian"
            >
              <li>
                <b>Optus ID Verification System</b> (11 million users):
                <ul className="list-disc ml-5 mt-1">
                  <li>
                    Led a team through a critical phase to design and develop a
                    highly available and secure cloud solution for both backend
                    and frontend using Kotlin, Spring Boot, React and Redux;
                    deployed on GCP Kubernetes with Docker and Terraform.
                  </li>
                </ul>
              </li>
              <li>
                <b>Airtasker App</b> (5 million users):
                <ul className="list-disc ml-5 mt-1 flex flex-col">
                  <li
                    className={`${title === "mobile" ? "order-2" : "order-1"}`}
                  >
                    Engineered a new asynchronous backend in Kotlin and Spring
                    Boot, dramatically enhancing app responsiveness.
                  </li>
                  <li
                    className={`${title === "mobile" ? "order-1" : "order-2"}`}
                  >
                    Developed a dynamic Android UI leveraging Kotlin and JetPack
                    Compose; added a new flow to boost user retention by 17%.
                  </li>
                </ul>
              </li>
              <li>
                <b>Lendlease Ticket Classification System</b>:
                <ul className="list-disc ml-5 mt-1">
                  <li>
                    Trained a ticket classification model with Python and Pandas
                    on GCP Vertex AI, integrated with Lendlease&apos;s ServiceNow
                    using a Python backend and GCP Pub/Sub, reducing the need
                    for 30 staff members for manual classification tasks.
                  </li>
                  <li>
                    Created a chatbot backend using Python, GCP Cloud Functions,
                    and Dialogflow.
                  </li>
                </ul>
              </li>
            </Experience>

            <Experience
              title="Full Stack Developer"
              type="Hybrid, AU"
              time="2018 - 2021"
              company="Strength By Numbers"
              href="https://www.strengthbynumbers.com/"
            >
              <li className={`${title === "mobile" ? "order-1" : "order-2"}`}>
                Designed and developed the Android app in Java, handling complex
                multi-threading and asynchronous Bluetooth operations with
                ReactiveX.
              </li>
              <li className={`${title === "mobile" ? "order-1" : "order-2"}`}>
                Built a data synchronisation backend service using Spring Boot
                and MongoDB, deployed on AWS, supporting over 200 physio/fitness
                centers.
              </li>
              <li className="order-3">
                Developed web applications with React and Redux.
              </li>
            </Experience>

            <Experience
              title="Full Stack Developer"
              type="Part Time, Hybrid, AU"
              time="2016 - 2018"
              company="SensiLab"
              href="https://sensilab.monash.edu/"
            >
              <li className={`${title === "mobile" ? "order-2" : "order-1"}`}>
                Developed multiple web applications for both frontend and
                backend using React, Redux, Express.js, and MongoDB.
              </li>
              <li className={`${title === "mobile" ? "order-1" : "order-2"}`}>
                Developed an iOS app using Swift.
              </li>
              <li className="order-3">
                Optimized SensiLab&apos;s WordPress website and created custom themes
                and plugins.
              </li>
            </Experience>
          </div>

          <div className="text-[#af0f00] font-bold pb-3 border-b-[1.5px] border-b-gray-200 mb-3">
            EDUCATION
          </div>
          <Experience
            title="Master of Information Technology"
            type="Melbourne, AU"
            time=""
            company="Monash University (QS: 37)"
            href="https://www.monash.edu/"
          >
            <li>Dux of Postgraduate Information Technology (Top Student)</li>
            <li>
              Recipient of the International Merit Scholarship & Winter Research
              Scholarship
            </li>
            <li>Achieved the highest grade in four subjects</li>
          </Experience>

          <div className="text-[#af0f00] font-bold pb-3 border-b-[1.5px] border-b-gray-200 mb-3">
            SKILLS
          </div>
          <ul className="list-disc ml-5 mt-1 text-[0.9rem]">
            <li>
              <b>Languages:</b> JavaScript (ES6), TypeScript, Java, Kotlin,
              Swift, Python
            </li>
            <li>
              <b>Frameworks:</b> Spring Boot, React, Redux, Next.js, Node.js,
              Express.js
            </li>
            <li>
              <b>Databases:</b> MySQL, MongoDB, Neo4j, Redis
            </li>
            <li>
              <b>Mobile:</b> Android, JetPack, iOS
            </li>
            <li>
              <b>Cloud:</b> AWS, GCP, Kubernetes
            </li>
            <li>
              <b>Tools:</b> Docker, Terraform, Git, CI/CD, Jira, Bash
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
