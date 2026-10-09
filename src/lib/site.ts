export const SITE_NAME = "Ogalo Mercy Portfolio";
export const SITE_SHORT_NAME = "Mercy Ogalo";
export const PERSON_NAME = "Mercy Adhiambo Ogalo";
export const DEFAULT_SITE_URL = "https://mercyogalo.dev";

export const SITE_DESCRIPTION =
  "Portfolio of Mercy Ogalo, a full-stack developer in Nairobi building production web apps with Django, Node.js, React and Next.js, including APIs and payments.";

export const SITE_KEYWORDS = [
  "Mercy Ogalo",
  "full-stack developer Nairobi",
  "Django developer Kenya",
  "MERN stack developer",
  "Next.js developer",
  "backend developer",
  "M-Pesa integration",
  "Stripe integration",
];

export const SOCIAL_LINKS = {
  github: "https://github.com/mercyogalo",
  linkedin: "https://www.linkedin.com/in/mercy-ogalo-9a1b69272",
  email: "mailto:ogalomercy8@gmail.com",
};

export const CONTACT_EMAIL = "ogalomercy8@gmail.com";
export const CV_PDF_PATH = "/Mercy-Ogalo-CV.pdf";

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return fromEnv || DEFAULT_SITE_URL;
}
