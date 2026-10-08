export const SITE_NAME = "Ogalo Mercy Portfolio";
export const SITE_SHORT_NAME = "Mercy Ogalo";
export const DEFAULT_SITE_URL = "https://mercyogalo.dev";

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return fromEnv || DEFAULT_SITE_URL;
}
