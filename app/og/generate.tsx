import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "../../content/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFile(...segments: string[]) {
  return readFile(join(process.cwd(), ...segments));
}

export async function generateSocialImage() {
  const [photo, unboundedCyrillic, unboundedLatin, manropeCyrillic, manropeLatin] =
    await Promise.all([
      loadFile("public/images/hero/closeup.jpg"),
      loadFile("app/og/fonts/unbounded-cyrillic-600.ttf"),
      loadFile("app/og/fonts/unbounded-latin-600.ttf"),
      loadFile("app/og/fonts/manrope-cyrillic-500.ttf"),
      loadFile("app/og/fonts/manrope-latin-500.ttf"),
    ]);

  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#05060a",
          color: "#f2f4f8",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            right: 80,
            width: 520,
            height: 520,
            borderRadius: 999,
            background: "rgba(62, 239, 200, 0.16)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -120,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "rgba(228, 199, 165, 0.12)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 28,
            borderRadius: 36,
            border: "1px solid rgba(255, 255, 255, 0.12)",
            background: "rgba(9, 12, 18, 0.55)",
            display: "flex",
            padding: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: 640,
              height: "100%",
              paddingRight: 36,
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 52,
                  height: 52,
                  marginRight: 16,
                  borderRadius: 16,
                  border: "1px solid rgba(62, 239, 200, 0.38)",
                  background: "#05060a",
                  color: "#3eefc8",
                  fontFamily: "Unbounded",
                  fontSize: 18,
                  letterSpacing: -1,
                }}
              >
                КИ
              </div>
              <div
                style={{
                  display: "flex",
                  fontFamily: "Manrope",
                  fontSize: 22,
                  letterSpacing: 3.2,
                  textTransform: "uppercase",
                  color: "#3eefc8",
                }}
              >
                {site.role}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontFamily: "Unbounded",
                  fontSize: 72,
                  lineHeight: 0.92,
                  letterSpacing: -3,
                  color: "#ffffff",
                }}
              >
                Курымшин
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 6,
                  fontFamily: "Unbounded",
                  fontSize: 72,
                  lineHeight: 0.92,
                  letterSpacing: -3,
                  color: "#3eefc8",
                }}
              >
                Илья
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 28,
                  maxWidth: 560,
                  fontFamily: "Manrope",
                  fontSize: 28,
                  lineHeight: 1.35,
                  color: "#c9cfdb",
                }}
              >
                Интерфейсы сложных B2C- и B2B-продуктов на React
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex" }}>
                {["React", "Next.js", "TypeScript"].map((item, index) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      marginRight: index === 2 ? 0 : 10,
                      padding: "8px 14px",
                      borderRadius: 999,
                      border: "1px solid rgba(255, 255, 255, 0.16)",
                      background: "rgba(5, 6, 10, 0.55)",
                      fontFamily: "Manrope",
                      fontSize: 18,
                      color: "#f2f4f8",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  fontFamily: "Manrope",
                  fontSize: 18,
                  color: "#8b91a3",
                }}
              >
                Открыт к проектам
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: 408,
              height: "100%",
              borderRadius: 28,
              overflow: "hidden",
              border: "1px solid rgba(62, 239, 200, 0.28)",
              background: "#10131c",
            }}
          >
            <img
              src={photoSrc}
              alt=""
              width={408}
              height={526}
              style={{
                width: 408,
                height: 526,
                objectFit: "cover",
                objectPosition: "50% 12%",
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Unbounded", data: unboundedCyrillic, weight: 600, style: "normal" },
        { name: "Unbounded", data: unboundedLatin, weight: 600, style: "normal" },
        { name: "Manrope", data: manropeCyrillic, weight: 500, style: "normal" },
        { name: "Manrope", data: manropeLatin, weight: 500, style: "normal" },
      ],
    },
  );
}
