import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/contexts/ThemeContext";
import {
  CONTACT_EMAIL,
  PERSON_NAME,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SOCIAL_LINKS,
  getSiteUrl,
} from "@/lib/site";
import "./globals.css";

const siteUrl = getSiteUrl();
const googleVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_NAME,
    template: "%s | Ogalo Mercy",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: PERSON_NAME, url: siteUrl }],
  creator: PERSON_NAME,
  publisher: PERSON_NAME,
  keywords: SITE_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_KE",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.classList.add(t);}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark');}else{document.documentElement.classList.add('light');}}catch(e){}})();`;

function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: PERSON_NAME,
        alternateName: "Ogalo Mercy",
        jobTitle: "Full-Stack Developer",
        url: siteUrl,
        image: `${siteUrl}/opengraph-image`,
        email: `mailto:${CONTACT_EMAIL}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nairobi",
          addressCountry: "KE",
        },
        sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
        knowsAbout: [
          "Django",
          "Node.js",
          "React",
          "Next.js",
          "PostgreSQL",
          "MongoDB",
          "payment integrations",
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "JKUAT",
        },
      },
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: siteUrl,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <JsonLd />
        <ThemeProvider>{children}</ThemeProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W5DVJ7HMBJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-W5DVJ7HMBJ');`}
        </Script>
      </body>
    </html>
  );
}
