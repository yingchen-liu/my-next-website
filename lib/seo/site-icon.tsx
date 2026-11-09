import { ImageResponse } from "next/og";

export function generateSiteIcon(size: number) {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(145deg, #1e3a8a 0%, #1f2937 58%, #111827 100%)",
          color: "#dbeafe",
          display: "flex",
          fontSize: size * 0.34,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-0.05em",
          width: "100%",
        }}
      >
        YL<span style={{ color: "#93c5fd" }}>.</span>
      </div>
    ),
    { width: size, height: size },
  );
}
