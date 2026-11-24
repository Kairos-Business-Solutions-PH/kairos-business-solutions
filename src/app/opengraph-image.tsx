import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg,#0B1D36 0%,#0B1424 100%)",
          color: "#F7FAFC",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, color: "#38BDF8", fontWeight: 700 }}>
          BUSINESS SOLUTIONS
        </div>
        <div style={{ display: "flex", fontSize: 112, fontWeight: 800, marginTop: 16 }}>KAIROS</div>
        <div style={{ display: "flex", fontSize: 44, marginTop: 28, color: "#CBD5E1", maxWidth: 900 }}>
          {site.tagline}
        </div>
        <div style={{ display: "flex", marginTop: 56, height: 8, width: 160, background: "#38BDF8", borderRadius: 4 }} />
      </div>
    ),
    size,
  );
}
