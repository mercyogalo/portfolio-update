"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { navLinks } from "@/data/nav";

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  const closeSidebar = () => setIsSidebarOpen(false);
  const isDark = resolvedTheme === "dark";

  return (
    <header>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-colors ${
          isScrolled
            ? "border-b border-border bg-background/80 backdrop-blur-md"
            : "bg-background/95"
        }`}
        aria-label="Primary"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#main-content" className="font-display text-xl font-bold tracking-tight">
            Mercy<span className="text-accent">.</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:text-accent"
              >
                {"shortName" in link ? link.shortName : link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:text-accent"
              aria-label="Toggle theme"
            >
              {mounted && isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-md lg:hidden"
              onClick={() => setIsSidebarOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={isSidebarOpen}
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      <div
        className={`fixed inset-y-0 right-0 z-[60] w-64 border-l border-border bg-background shadow-xl transition-transform duration-300 lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-6">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-display text-lg font-bold">Menu</span>
            <button type="button" onClick={closeSidebar} aria-label="Close menu">
              <X size={20} />
            </button>
          </div>
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeSidebar}
                className="block rounded-md px-4 py-3 font-medium hover:text-accent"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
