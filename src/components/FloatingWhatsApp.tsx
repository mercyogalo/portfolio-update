"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { OPEN_WHATSAPP_EVENT, WHATSAPP_PHONE } from "@/data/services";
import "./floating-whatsapp.css";

const OPTIONS = [
  {
    label: "Web Development",
    message: "I'd like help with a website or web application.",
  },
  {
    label: "E-commerce (Shopify / WooCommerce)",
    message: "I'd like help setting up an online store.",
  },
  {
    label: "Payment Integration",
    message: "I'd like help integrating M-Pesa, Stripe or PayPal payments.",
  },
  {
    label: "Website Design & UI/UX",
    message: "I'd like help with website design and UI/UX.",
  },
  {
    label: "Website Maintenance",
    message: "I need maintenance and support for my website.",
  },
  {
    label: "Graphic Design",
    message: "I'd like help with graphic design.",
  },
  {
    label: "Hire you for a gig or contract",
    message: "I'd like to engage you for a gig or contract project.",
  },
  {
    label: "Job opportunity",
    message: "I'd like to talk to you about a full-time or part-time role.",
  },
  {
    label: "Something else",
    message: "I'd like to talk about something else.",
  },
];

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_WHATSAPP_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_WHATSAPP_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (message: string) => {
    const text = encodeURIComponent(`Hi Mercy! ${message}`);
    window.open(
      `https://wa.me/${WHATSAPP_PHONE}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
    setOpen(false);
  };

  return (
    <div className="wa-float">
      {open ? (
        <div className="wa-panel" role="dialog" aria-labelledby="wa-title">
          <div className="wa-panel-head">
            <div>
              <h3 id="wa-title">Chat with Mercy</h3>
              <p>What can I help you with?</p>
            </div>
            <button type="button" aria-label="Close" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>
          <ul>
            {OPTIONS.map((option) => (
              <li key={option.label}>
                <button type="button" onClick={() => go(option.message)}>
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <button
        type="button"
        className="wa-fab"
        aria-label="Chat with me on WhatsApp"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <FaWhatsapp size={30} />
      </button>
    </div>
  );
}
