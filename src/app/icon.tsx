import { ImageResponse } from "next/og";
import { BrandMark } from "@/lib/brand-mark";

// Swap this generated mark for `public/brand/logo.png` when a real logo is ready.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <BrandMark size={32} fontSize={20} accent={6} />,
    { ...size }
  );
}
export const dynamic = "force-static";
