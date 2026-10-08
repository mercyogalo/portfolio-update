"use client";

import { useEffect } from "react";

function focusHashTarget() {
  const id = window.location.hash.replace(/^#/, "");
  if (!id) return;

  const el = document.getElementById(id);
  if (!(el instanceof HTMLElement)) return;

  if (!el.hasAttribute("tabindex")) {
    el.setAttribute("tabindex", "-1");
  }

  el.focus({ preventScroll: true });
}

export default function HashFocus() {
  useEffect(() => {
    focusHashTarget();
    window.addEventListener("hashchange", focusHashTarget);
    return () => window.removeEventListener("hashchange", focusHashTarget);
  }, []);

  return null;
}
