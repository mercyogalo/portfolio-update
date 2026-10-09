export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "NestJS",
      "Django",
      "Tailwind CSS",
      "MUI",
    ],
  },
  {
    title: "Databases & Infra",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Git/GitHub", "Vercel", "AWS"],
  },
  {
    title: "Payments",
    skills: ["Stripe", "PayPal", "Flutterwave", "M-Pesa Daraja"],
  },
];
