export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="absolute left-4 top-4 z-[100] -translate-y-16 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background underline-offset-2 transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-accent"
    >
      Skip to content
    </a>
  );
}
