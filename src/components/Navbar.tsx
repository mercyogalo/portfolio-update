"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { navLinks, sectionIds } from "@/data/nav";
import { getPublishedTestimonials } from "@/data/testimonials";

const hasTestimonials = getPublishedTestimonials().length > 0;
const links = hasTestimonials
  ? navLinks
  : navLinks.filter((link) => link.href !== "#testimonials");
const observedIds = hasTestimonials
  ? sectionIds
  : sectionIds.filter((id) => id !== "testimonials");

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = observedIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isDark = resolvedTheme === "dark";

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 ${
        scrolled ? "text-foreground" : "text-white"
      }`}
    >
      <nav
        aria-label="Primary"
        className={`transition-colors ${
          scrolled
            ? "border-b border-border bg-background/75 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
          <a href="#home" className="font-display text-lg font-bold tracking-tight sm:text-xl">
            Mercy<span className="text-accent">.</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => {
              const id = link.href.slice(1);
              const label = "shortName" in link ? link.shortName : link.name;
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium ${
                    isActive
                      ? scrolled
                        ? "text-foreground"
                        : "text-white"
                      : scrolled
                        ? "text-muted hover:text-foreground"
                        : "text-white/70 hover:text-white"
                  }`}
                >
                  {label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-accent"
                    />
                  ) : null}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="flex h-10 w-10 items-center justify-center rounded-md hover:text-accent"
              aria-label="Toggle theme"
            >
              {mounted && isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-md lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-y-0 right-0 z-[60] w-72 border-l border-border bg-background p-6 shadow-xl lg:hidden"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-display text-lg font-bold">Menu</span>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={20} />
              </button>
            </div>
            <div className="space-y-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-3 text-base font-medium ${
                    active === link.href.slice(1) ? "text-accent" : "hover:text-accent"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
