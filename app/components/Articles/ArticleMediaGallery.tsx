import Image from "next/image";
import type { ArticleMedia } from "@/lib/articles";

export default function ArticleMediaGallery({ media }: { media: ArticleMedia[] }) {
  return (
      <div
        className={`mt-7 grid gap-5 ${
          media.length > 1 ? "lg:grid-cols-2" : ""
        }`}
      >
        {media.map((item) => (
          <figure
            key={item.src}
            className={`overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] ${
              item.layout === "wide" ? "lg:col-span-2" : ""
            }`}
          >
            <div className="flex min-h-64 items-center justify-center overflow-hidden bg-[#f4f6fa]">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width ?? 1600}
                height={item.height ?? 1100}
                sizes={
                  item.layout === "wide"
                    ? "(min-width: 1024px) 92vw, 100vw"
                    : media.length > 1
                      ? "(min-width: 1024px) 46vw, 100vw"
                      : "100vw"
                }
                className={`mx-auto h-auto max-w-full ${
                  item.fit === "cover"
                    ? "aspect-[16/10] w-full object-cover"
                    : "w-full object-contain"
                }`}
                style={
                  item.fit === "cover" || !item.width
                    ? undefined
                    : { maxWidth: item.width }
                }
              />
            </div>
            <figcaption className="p-5 md:p-6">
              <p className="font-sfmono text-xs uppercase tracking-[0.14em] text-cyan-200/65">
                {item.label}
              </p>
              <p className="mt-3 text-[15px] leading-7 text-blue-100/75">
                {item.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
  );
}
