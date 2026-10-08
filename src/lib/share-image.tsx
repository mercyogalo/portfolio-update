import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { BRAND_ORANGE } from "@/lib/brand-mark";
import { SITE_NAME } from "@/lib/site";

export const shareImageAlt = SITE_NAME;
export const shareImageSize = { width: 1200, height: 630 };
export const shareImageContentType = "image/png";

async function loadLocalFonts() {
  const fontsDir = join(process.cwd(), "src/app/fonts");
  const [interBold, interRegular] = await Promise.all([
    readFile(join(fontsDir, "Inter-Bold.ttf")),
    readFile(join(fontsDir, "Inter-Regular.ttf")),
  ]);

  return { interBold, interRegular };
}

export async function generateShareImage() {
  const { interBold, interRegular } = await loadLocalFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#000000",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -100,
            width: 520,
            height: 520,
            borderRadius: 260,
            backgroundColor: BRAND_ORANGE,
            opacity: 0.28,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -20,
            right: 80,
            width: 240,
            height: 240,
            borderRadius: 120,
            backgroundColor: BRAND_ORANGE,
            opacity: 0.16,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 88px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.05,
              fontFamily: "Inter",
            }}
          >
            Ogalo Mercy
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              color: BRAND_ORANGE,
              lineHeight: 1.05,
              marginBottom: 28,
              fontFamily: "Inter",
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#A3A3A3",
              marginBottom: 72,
              fontFamily: "Inter",
              fontWeight: 400,
            }}
          >
            Full-Stack Developer | Django, Node.js, React, Next.js
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#737373",
              fontFamily: "Inter",
              fontWeight: 400,
            }}
          >
            mercyogalo.dev
          </div>
        </div>
      </div>
    ),
    {
      ...shareImageSize,
      fonts: [
        { name: "Inter", data: interBold, style: "normal", weight: 700 },
        { name: "Inter", data: interRegular, style: "normal", weight: 400 },
      ],
    }
  );
}
