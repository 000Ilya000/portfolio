import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const dynamic = "force-static";
export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05060a",
          color: "#f2f4f8",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#3eefc8",
          }}
        >
          {site.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, lineHeight: 0.9, letterSpacing: -4 }}>
            {site.name}
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#b7bdcc", maxWidth: 860 }}>
            Интерфейсы сложных B2C- и B2B-продуктов
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#8b91a3",
          }}
        >
          <span>React · Next.js · TypeScript</span>
          <span>Открыт к проектам</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
