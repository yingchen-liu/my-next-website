import { Button } from "./Section";

const proofPoints = [
  {
    value: "5M+",
    project: "Mapify",
    label: "users",
    href: "#project-mapify",
  },
  {
    value: "52%",
    project: "Aimi",
    label: "faster startup",
    href: "#project-aimi",
  },
  {
    value: "50%+",
    project: "Airtasker",
    label: "faster loading",
    href: "#project-airtasker",
  },
  {
    value: "96%",
    project: "Aimi",
    label: "test coverage",
    href: "#project-aimi",
  },
];

function Banner() {
  return (
    <section className="relative flex items-center overflow-hidden pb-14 pt-28 md:min-h-[760px] md:pb-20 md:pt-36">
      <div className="pointer-events-none absolute -right-48 top-28 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-48 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative w-full">
        <p className="mb-5 font-sfmono text-sm tracking-[0.14em] text-blue-200">
          <span aria-hidden="true">👋</span> Hi, I&apos;m Yingchen
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.06] text-white sm:text-5xl md:text-7xl">
          Senior full-stack engineer building{" "}
          <span className="bg-gradient-to-r from-blue-200 via-indigo-200 to-cyan-200 bg-clip-text text-transparent">
            AI and connected products.
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-blue-100/80 sm:text-lg md:mt-7 md:text-xl">
          {new Date().getFullYear() - 2016}+ years turning complex product ideas
          into fast, reliable systems at scale. I&apos;ve built software used by
          5M+ people, cut critical load times by up to 90%, founded an Android
          team and automated work previously handled by 30 staff.
        </p>

        <div className="mt-7 flex flex-wrap gap-3 md:mt-9 md:gap-4">
          <Button href="#projects">View selected work</Button>
          <Button href="/resume" reverse>
            Résumé
          </Button>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-4 md:gap-4">
          {proofPoints.map((proof) => (
            <li key={`${proof.project}-${proof.label}`}>
              <a
                href={proof.href}
                aria-label={`Jump to ${proof.project}: ${proof.value} ${proof.label}`}
                className="group block h-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 transition duration-300 hover:-translate-y-1 hover:border-blue-200/40 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200 md:px-5 md:py-4"
              >
                <span className="block text-2xl font-semibold text-white md:text-3xl">
                  {proof.value}
                </span>
                <span className="mt-1 block font-sfmono text-xs uppercase tracking-[0.12em] text-blue-100/55">
                  <span className="text-blue-100/85">{proof.project}</span>{" "}
                  {proof.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Banner;
