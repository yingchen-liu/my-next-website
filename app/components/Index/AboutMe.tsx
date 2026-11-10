import NextImage from "next/image";

import { Section } from "./Section";

const qualities = [
  {
    number: "01",
    label: "Ambiguity → clarity",
    detail: "Outcomes, constraints, unknowns & acceptance",
  },
  {
    number: "02",
    label: "AI-assisted since 2025",
    detail: "Cursor → Claude Code → Codex agent teams",
  },
  {
    number: "03",
    label: "Curious since 2005",
    detail: "A school website, then football-playing & racing robots",
  },
];

function AboutMe() {
  return (
    <Section id="about" title="Behind the Work">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:gap-6">
        <article className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.075] via-white/[0.035] to-transparent p-6 sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-300/10 blur-3xl"
          />

          <div className="relative">
            <p className="font-sfmono text-xs uppercase tracking-[0.18em] text-blue-200/70">
              Engineer · systems thinker · team enabler
            </p>
            <h3 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              I turn messy problems into systems people can reason about.
            </h3>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-blue-100/75 sm:text-xl">
              I still love coding, but the highest-leverage work starts before
              the code: clarifying what success means, surfacing constraints,
              choosing trade-offs and giving the team a shared model for what
              to build and how to prove it. Since late 2025, I&apos;ve brought that
              approach to AI-assisted development: assistants can accelerate
              implementation, while sound system design keeps the speed pointed
              in the right direction.
            </p>

            <ul className="mt-9 grid gap-3 sm:grid-cols-3">
              {qualities.map((quality) => (
                <li
                  key={quality.number}
                  className="rounded-2xl border border-white/10 bg-gray-900/35 p-4"
                >
                  <span
                    aria-hidden="true"
                    className="font-sfmono text-xs text-blue-200/50"
                  >
                    {quality.number}
                  </span>
                  <span className="mt-3 block text-sm font-semibold text-white">
                    {quality.label}
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-blue-100/60">
                    {quality.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <aside className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-blue-200/10 to-white/[0.025]">
          <div className="relative aspect-[4/3] overflow-hidden">
            <NextImage
              src="/images/yingchen-about.jpg"
              alt="Yingchen Liu in a stone window"
              fill
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-gray-900/55 via-transparent to-transparent"
            />
          </div>
          <div className="p-6 sm:p-7">
            <p className="font-sfmono text-xs uppercase tracking-[0.18em] text-blue-200/60">
              Current chapter
            </p>
            <h3 className="mt-3 text-balance text-2xl font-semibold text-white">
              Building from the road.
            </h3>
            <p className="mt-3 text-pretty text-base leading-relaxed text-blue-100/70">
              Travelling around Australia in a caravan—still coding, learning
              and collecting new perspectives along the way.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}

export default AboutMe;
