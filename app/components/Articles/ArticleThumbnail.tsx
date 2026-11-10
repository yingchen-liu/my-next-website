import type { Article } from "@/lib/articles";

const projectThemes = {
  AxIT: {
    shell: "from-cyan-400/16 via-blue-500/10 to-slate-950",
    glow: "bg-cyan-300/20",
    accent: "text-cyan-200",
    line: "bg-cyan-200/35",
    tile: "border-cyan-200/20 bg-cyan-200/[0.07]",
  },
  Henri: {
    shell: "from-amber-300/16 via-orange-300/8 to-slate-950",
    glow: "bg-amber-200/20",
    accent: "text-amber-100",
    line: "bg-amber-100/35",
    tile: "border-amber-100/20 bg-amber-100/[0.07]",
  },
  Mapify: {
    shell: "from-violet-400/18 via-blue-500/10 to-slate-950",
    glow: "bg-violet-300/20",
    accent: "text-violet-200",
    line: "bg-violet-200/35",
    tile: "border-violet-200/20 bg-violet-200/[0.07]",
  },
  Aimi: {
    shell: "from-fuchsia-400/16 via-purple-500/10 to-slate-950",
    glow: "bg-fuchsia-300/20",
    accent: "text-fuchsia-200",
    line: "bg-fuchsia-200/35",
    tile: "border-fuchsia-200/20 bg-fuchsia-200/[0.07]",
  },
} as const;

const flowVariants: Record<string, 0 | 1 | 2> = {
  "reviewable-metrics-from-algorithm-to-exact-build-qa": 0,
  "one-metric-contract-across-ios-android-web-and-backend": 1,
  "how-henri-calls-a-model": 1,
  "mapify-search-postgresql-migration": 2,
  "mapify-email-sending-platform": 1,
  "mapify-affiliate-settlement": 2,
  "mindmap-generation-without-the-browser": 0,
  "one-summarisation-engine-across-mapify": 0,
};

function FlowThumbnail({ article }: { article: Article }) {
  if (article.visual.type !== "flow") return null;

  const theme = projectThemes[article.project];
  const nodes = (
    "phases" in article.visual ? article.visual.phases : article.visual.nodes
  ).slice(0, 4);
  const variant = flowVariants[article.slug] ?? 0;

  if (variant === 1) {
    return (
      <div className="relative mt-5 grid flex-1 grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="grid gap-3">
          {nodes.slice(0, 2).map((node) => (
            <ThumbnailNode key={node.title} label={node.title} tile={theme.tile} />
          ))}
        </div>
        <div className={`h-px w-7 ${theme.line}`} />
        <div className="grid gap-3">
          {nodes.slice(2).map((node) => (
            <ThumbnailNode key={node.title} label={node.title} tile={theme.tile} />
          ))}
        </div>
      </div>
    );
  }

  if (variant === 2) {
    return (
      <div className="relative mt-5 grid flex-1 grid-cols-2 gap-3">
        {nodes.map((node, index) => (
          <div key={node.title} className="relative flex items-center gap-3">
            <span className={`font-sfmono text-[10px] ${theme.accent}`}>
              0{index + 1}
            </span>
            <ThumbnailNode label={node.title} tile={theme.tile} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative mt-5 flex flex-1 items-center">
      {nodes.map((node, index) => (
        <div key={node.title} className="contents">
          <ThumbnailNode label={node.title} tile={theme.tile} compact />
          {index < nodes.length - 1 && (
            <div className={`h-px min-w-3 flex-1 ${theme.line}`} />
          )}
        </div>
      ))}
    </div>
  );
}

function ThumbnailNode({
  label,
  tile,
  compact = false,
}: {
  label: string;
  tile: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex min-h-12 items-center rounded-lg border px-3 py-2 text-[10px] font-medium leading-tight text-white/85 ${tile} ${compact ? "max-w-28" : "w-full"}`}
    >
      {label}
    </div>
  );
}

function ComparisonThumbnail({ article }: { article: Article }) {
  if (article.visual.type !== "comparison") return null;

  const theme = projectThemes[article.project];

  return (
    <div className="mt-5 grid flex-1 content-center gap-3">
      {article.visual.items.slice(0, 3).map((item) => {
        const afterWidth = Math.max((item.after / item.before) * 100, 5);

        return (
          <div key={item.label} className="grid grid-cols-[7rem_1fr_auto] items-center gap-3">
            <span className="truncate text-[10px] text-blue-100/65">{item.label}</span>
            <div className="relative h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${theme.shell}`}
                style={{ width: `${afterWidth}%` }}
              />
            </div>
            <span className={`font-sfmono text-[10px] ${theme.accent}`}>
              {item.after}{item.unit}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function MetricsThumbnail({ article }: { article: Article }) {
  if (article.visual.type !== "metrics") return null;

  const theme = projectThemes[article.project];

  return (
    <div className="mt-5 grid flex-1 grid-cols-3 gap-3">
      {article.visual.items.slice(0, 3).map((item) => (
        <div
          key={item.label}
          className={`flex flex-col justify-center rounded-xl border p-3 ${theme.tile}`}
        >
          <span className="text-lg font-semibold text-white">{item.value}</span>
          <span className="mt-1 text-[9px] uppercase tracking-[0.12em] text-blue-100/55">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ArticleThumbnail({ article }: { article: Article }) {
  const theme = projectThemes[article.project];
  const visualLabel =
    article.visual.type === "comparison"
      ? "Measured change"
      : article.visual.type === "metrics"
        ? "Outcome snapshot"
        : "Architecture map";

  return (
    <div
      role="img"
      aria-label={`${article.title}: ${article.visual.title}`}
      className={`relative flex aspect-[16/9] w-full flex-col overflow-hidden bg-gradient-to-br p-5 ${theme.shell}`}
    >
      <div
        aria-hidden="true"
        className={`absolute -right-12 -top-16 h-52 w-52 rounded-full blur-3xl ${theme.glow}`}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className={`font-sfmono text-[10px] uppercase tracking-[0.18em] ${theme.accent}`}>
            {article.project} · {visualLabel}
          </p>
          <p className="mt-2 line-clamp-2 max-w-md text-sm font-semibold leading-snug text-white/90">
            {article.visual.title}
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-white/10 bg-black/15 px-2.5 py-1 font-sfmono text-[9px] uppercase tracking-[0.12em] text-blue-100/55">
          Case study
        </span>
      </div>

      <FlowThumbnail article={article} />
      <ComparisonThumbnail article={article} />
      <MetricsThumbnail article={article} />
    </div>
  );
}
