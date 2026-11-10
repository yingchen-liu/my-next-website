import type { ArticleVisual as ArticleVisualData } from "@/lib/articles";

export default function ArticleVisual({ visual }: { visual: ArticleVisualData }) {
  if (visual.type === "comparison") {
    return (
      <figure className="mt-8 rounded-2xl border border-white/10 bg-blue-950/35 p-6 md:p-8">
        <figcaption>
          <p className="font-sfmono text-xs uppercase tracking-[0.18em] text-blue-200/65">
            Before → after
          </p>
          <p className="mt-3 text-sm leading-relaxed text-blue-100/70">
            {visual.caption}
          </p>
        </figcaption>
        <div className="mt-8 grid gap-7">
          {visual.items.map((item) => {
            const afterWidth = Math.max((item.after / item.before) * 100, 4);

            return (
              <div key={item.label}>
                <div className="mb-3 flex items-end justify-between gap-4">
                  <h3 className="font-medium text-white">{item.label}</h3>
                  <span className="font-sfmono text-xs text-blue-200/65">
                    {item.before}
                    {item.unit} → {item.after}
                    {item.unit}
                  </span>
                </div>
                <div
                  className="grid gap-2"
                  role="img"
                  aria-label={`${item.label} reduced from ${item.before}${item.unit} to ${item.after}${item.unit}`}
                >
                  <div className="h-3 w-full rounded-full bg-slate-500/45" />
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-blue-300 to-cyan-300"
                    style={{ width: `${afterWidth}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </figure>
    );
  }

  if (visual.type === "metrics") {
    return (
      <figure className="mt-8 rounded-2xl border border-white/10 bg-blue-950/35 p-6 md:p-8">
        <figcaption>
          <p className="font-sfmono text-xs uppercase tracking-[0.18em] text-blue-200/65">
            Outcome snapshot
          </p>
          <p className="mt-3 text-sm leading-relaxed text-blue-100/70">
            {visual.caption}
          </p>
        </figcaption>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {visual.items.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-blue-200/15 bg-white/[0.035] p-5"
            >
              <p className="text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-1 font-sfmono text-xs uppercase tracking-[0.14em] text-blue-200/70">
                {item.label}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-blue-100/70">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </figure>
    );
  }

  if ("phases" in visual) {
    return (
      <figure className="mt-8 rounded-2xl border border-white/10 bg-blue-950/35 p-6 md:p-8">
        <figcaption>
          <p className="font-sfmono text-xs uppercase tracking-[0.18em] text-blue-200/65">
            Architecture
          </p>
          <p className="mt-3 text-sm leading-relaxed text-blue-100/70">
            {visual.caption}
          </p>
        </figcaption>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {visual.phases.map((phase) => (
            <section
              key={phase.label}
              aria-label={phase.label}
              className="rounded-xl border border-blue-200/20 bg-white/[0.035] p-5"
            >
              <p className="font-sfmono text-xs uppercase tracking-[0.16em] text-cyan-200/80">
                {phase.label}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {phase.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-blue-100/75">
                {phase.detail}
              </p>
              <ol className="mt-5 grid gap-4">
                {phase.nodes.map((node, index) => (
                  <li
                    key={node.title}
                    className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-2"
                  >
                    <span className="font-sfmono text-xs text-blue-200/55">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="font-semibold leading-snug text-white">
                        {node.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-blue-100/70">
                        {node.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </figure>
    );
  }

  return (
    <figure className="mt-8 rounded-2xl border border-white/10 bg-blue-950/35 p-6 md:p-8">
      <figcaption>
        <p className="font-sfmono text-xs uppercase tracking-[0.18em] text-blue-200/65">
          Architecture
        </p>
        <p className="mt-3 text-sm leading-relaxed text-blue-100/70">
          {visual.caption}
        </p>
      </figcaption>
      <ol
        className="mt-8 grid gap-3 md:grid-cols-5"
        aria-label={visual.title}
      >
        {visual.nodes.map((node, index) => (
          <li
            key={node.title}
            className="relative rounded-xl border border-blue-200/15 bg-white/[0.035] p-4 md:min-h-44"
          >
            <span className="font-sfmono text-xs text-blue-200/55">
              0{index + 1}
            </span>
            <h3 className="mt-4 font-semibold leading-snug text-white">
              {node.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-100/65">
              {node.detail}
            </p>
            {index < visual.nodes.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute -bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gray-800 px-2 font-sfmono text-blue-200/60 md:-right-3 md:bottom-auto md:left-auto md:top-1/2 md:translate-x-0 md:-translate-y-1/2"
              >
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}

