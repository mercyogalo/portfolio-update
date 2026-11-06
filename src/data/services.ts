export const WHATSAPP_PHONE = "254743264872";
export const OPEN_WHATSAPP_EVENT = "open-whatsapp";

export function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_HREF = whatsappHref(
  "Hi Mercy! I'd like to talk about a project."
);

export const services = [
  {
    title: "Web Development",
    description:
      "Custom business websites and web applications that work on every device and are built around how your business operates.",
  },
  {
    title: "E-commerce Development (Shopify & WooCommerce)",
    description:
      "Online store setup, customization and configuration, from product catalog to checkout, so you can start selling online.",
  },
  {
    title: "Payment Integration (M-Pesa, Stripe, PayPal)",
    description:
      "Add M-Pesa (Daraja), Stripe, PayPal and Flutterwave to your website or app so customers can pay by mobile money or card.",
  },
  {
    title: "Website Design & UI/UX",
    description:
      "Clean, intuitive and visually engaging interfaces that make your site easy to use and turn visitors into customers.",
  },
  {
    title: "Website Maintenance & Support",
    description:
      "Ongoing updates, bug fixes, performance improvements and technical support for existing websites.",
  },
  {
    title: "Graphic Design",
    description:
      "Promotional posters, social media graphics and marketing materials that keep your brand consistent.",
  },
] as const;

export const workSteps = [
  {
    title: "Discovery",
    description:
      "Tell me about your project on WhatsApp or email. We talk through what you need, your timeline and your budget.",
  },
  {
    title: "Proposal and quote",
    description:
      "I send a clear scope, timeline and price, including any domain, hosting or third-party costs, so there are no surprises later.",
  },
  {
    title: "10% deposit to begin",
    description:
      "A 10% deposit confirms the project and secures your slot in my schedule.",
  },
  {
    title: "Build and updates",
    description:
      "I build in stages and share progress along the way, so you can give feedback before the project is finished.",
  },
  {
    title: "Review and revisions",
    description:
      "You review the finished work and I make the agreed revisions.",
  },
  {
    title: "Final payment and handover",
    description:
      "The remaining 90% is due when the work is complete. Once it\u2019s paid, I hand over the final files, deployment and access.",
  },
] as const;

export const separateCosts = [
  "Domain name (for example, yourbusiness.co.ke)",
  "Hosting or platform subscriptions (such as Vercel, Shopify or WooCommerce hosting)",
  "Paid themes, plugins or stock assets, if your project needs them",
] as const;
