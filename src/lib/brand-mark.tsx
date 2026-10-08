/**
 * Brand mark used by generated icons and OG images.
 *
 * To swap in a real logo or headshot later:
 * 1. Drop the file at `public/brand/logo.png`
 * 2. Point `src/app/icon.tsx`, `src/app/apple-icon.tsx`,
 *    `src/app/manifest.ts`, `public/icons/*`, and `src/app/favicon.ico`
 *    at that asset instead of this initials mark.
 */
export const BRAND_ORANGE = "#FF6A00";
export const BRAND_BLACK = "#000000";
export const BRAND_WHITE = "#FFFFFF";
export const BRAND_LOGO_PATH = "/brand/logo.png";

export function BrandMark({
  size,
  fontSize,
  accent,
}: {
  size: number;
  fontSize: number;
  accent: number;
}) {
  const radius = Math.round(size * 0.22);
  const inset = Math.max(3, Math.round(size * 0.12));

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: BRAND_BLACK,
        borderRadius: radius,
        position: "relative",
      }}
    >
      <div
        style={{
          color: BRAND_WHITE,
          fontSize,
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: -1,
        }}
      >
        M
      </div>
      <div
        style={{
          position: "absolute",
          right: inset,
          bottom: inset,
          width: accent,
          height: accent,
          borderRadius: Math.ceil(accent / 2),
          background: BRAND_ORANGE,
        }}
      />
    </div>
  );
}
