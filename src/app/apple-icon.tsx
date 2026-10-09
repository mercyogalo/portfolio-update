import { ImageResponse } from "next/og";
import { BrandMark } from "@/lib/brand-mark";

// Swap this generated mark for `public/brand/logo.png` when a real logo is ready.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <BrandMark size={180} fontSize={112} accent={28} />,
    { ...size }
  );
}
export const dynamic = "force-static";