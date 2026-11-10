import { ImageResponse } from "next/og";
import { siteDescription, siteName, socialImageAlt } from "./site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = socialImageAlt;

const chips = [
  "System Design",
  "Problem Framing",
  "Architectural Trade-offs",
  "Cross-Platform Systems",
  "AI-Assisted Engineering",
];

export function generateSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "radial-gradient(circle at top left, rgba(103, 232, 249, 0.22), transparent 32%), linear-gradient(135deg, #111827 0%, #1f2937 48%, #0f172a 100%)",
          color: "#f8fafc",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.16)",
              borderRadius: "9999px",
              color: "rgba(191, 219, 254, 0.9)",
              display: "flex",
              fontSize: 24,
              letterSpacing: "0.3em",
              padding: "16px 24px",
              textTransform: "uppercase",
            }}
          >
            {siteName}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                display: "flex",
                fontSize: 84,
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              Senior Full-Stack Engineer
            </div>
            <div
              style={{
                color: "rgba(226, 232, 240, 0.86)",
                display: "flex",
                fontSize: 30,
                lineHeight: 1.4,
                maxWidth: 760,
              }}
            >
              {siteDescription}
            </div>
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {chips.map((chip) => (
              <div
                key={chip}
                style={{
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: "9999px",
                  color: "#bfdbfe",
                  display: "flex",
                  fontSize: 24,
                  padding: "14px 22px",
                }}
              >
                {chip}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            alignItems: "flex-end",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "22%",
          }}
        >
          <div
            style={{
              background: "rgba(59, 130, 246, 0.14)",
              border: "1px solid rgba(191, 219, 254, 0.24)",
              borderRadius: 32,
              color: "#dbeafe",
              display: "flex",
              fontSize: 28,
              fontWeight: 600,
              height: 160,
              justifyContent: "center",
              padding: "44px 36px",
              textAlign: "center",
              width: 160,
            }}
          >
            YL
          </div>

          <div
            style={{
              color: "rgba(191, 219, 254, 0.78)",
              display: "flex",
              fontSize: 24,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            yingchenliu.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
