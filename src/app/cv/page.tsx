import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { CV_PDF_PATH, PERSON_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "CV",
  description: `Curriculum vitae of ${PERSON_NAME}, full-stack developer in Nairobi.`,
  alternates: { canonical: "/cv" },
};

const CV_SRC = CV_PDF_PATH;

export default function CVPage() {
  return (
    <div id="main-content" tabIndex={-1} className="flex h-svh flex-col bg-black text-white outline-none">
      <header className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-accent"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to portfolio
        </Link>
        <p className="hidden font-display text-sm font-semibold sm:block">
          {PERSON_NAME}
        </p>
        <a
          href={CV_SRC}
          download
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black hover:bg-accent-hover"
        >
          <Download size={16} aria-hidden="true" />
          Download
        </a>
      </header>
      <iframe
        title={`${PERSON_NAME} curriculum vitae`}
        src={`${CV_SRC}#view=FitH`}
        className="min-h-0 w-full flex-1 bg-neutral-900"
      />
    </div>
  );
}
