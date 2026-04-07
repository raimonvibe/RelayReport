import { ImageResponse } from "next/og";

export const alt = "RelayReport — client reporting for agencies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background:
            "linear-gradient(to bottom right, #4F46E5, #7C3AED, #A855F7)",
          padding: 72,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Client reporting in hours, not weeks
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            fontWeight: 600,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          RelayReport — live client rooms, zero spreadsheet Sundays
        </div>
      </div>
    ),
    { ...size },
  );
}
