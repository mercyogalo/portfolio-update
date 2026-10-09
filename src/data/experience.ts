export type Experience = {
  role: string;
  company: string;
  startDate: string;
  endDate: string | null;
  location: string;
  workType: string;
  skills: string[];
  bullets: string[];
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatMonthYear(isoMonth: string) {
  const [year, month] = isoMonth.split("-").map(Number);
  return `${monthNames[month - 1]} ${year}`;
}

export function formatDateRange(startDate: string, endDate: string | null) {
  const start = formatMonthYear(startDate);
  const end = endDate ? formatMonthYear(endDate) : "Present";
  return `${start} – ${end}`;
}

export const experiences: Experience[] = [
  {
    role: "Junior Backend Developer",
    company: "Global Policy House (GPH)",
    startDate: "2026-02",
    endDate: "2026-09",
    location: "Nairobi, Kenya",
    workType: "On-site",
    skills: [
      "Django",
      "PostgreSQL",
      "Node.js",
      "Express",
      "Celery",
      "Resend",
      "Stripe",
      "PayPal",
      "Flutterwave",
    ],
    bullets: [
      "Built Django/PostgreSQL backends for Kingdom of Kush, the GPH website and the Zambia International Investment Summit, with separate registration and approval workflows for VVIPs, standard delegates and press.",
      "Delivered a Node.js/Express/PostgreSQL backend for the GSDA Summit covering 467 registrations across 3 delegate tiers, automated check-in and transactional emails.",
      "Shipped an admin dashboard with live analytics and bulk VVIP approval, plus Stripe, PayPal and Flutterwave integrations.",
      "Ran Celery background tasks and Resend transactional email.",
    ],
  },
  {
    role: "Volunteer MERN Stack Co-Instructor & Technical Support",
    company: "Power Learn Project (PLP)",
    startDate: "2025-06",
    endDate: "2026-07",
    location: "Nairobi, Kenya",
    workType: "Hybrid",
    skills: ["React", "Node.js", "Express", "MongoDB", "Teaching", "Code Review"],
    bullets: [
      "Co-instructed the MERN Stack course and contributed to course content.",
      "Ran extra coding and revision sessions for learners.",
      "Reviewed learner projects and gave code-review feedback.",
      "Handled technical support for the cohort.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Femicare Chat Agent",
    startDate: "2025-06",
    endDate: "2025-06",
    location: "Remote",
    workType: "Remote",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "AI Integration", "CRUD Operations"],
    bullets: [
      "Built CRUD flows for the chat agent on the MERN stack.",
      "Integrated AI-assisted responses into the product.",
    ],
  },
  {
    role: "Web Developer & Designer",
    company: "Baobab Restaurant",
    startDate: "2025-04",
    endDate: "2025-05",
    location: "Kenya",
    workType: "Remote",
    skills: ["Django", "HTML5", "CSS3", "JavaScript", "Bootstrap", "UI/UX Design"],
    bullets: [
      "Designed and built a responsive restaurant website for Kenyan cuisine.",
      "Added contact and reservation forms with backend integration.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "M-Treat Organization",
    startDate: "2025-03",
    endDate: "2025-05",
    location: "Kenya",
    workType: "Remote",
    skills: ["Django", "React", "REST API", "Email Integration", "Newsletter"],
    bullets: [
      "Built the Django backend for the contact form and newsletter, including email notifications.",
      "Connected the React frontend to the API with error handling.",
    ],
  },
  {
    role: "Web Developer & Designer",
    company: "Jay Foundation",
    startDate: "2025-01",
    endDate: "2025-02",
    location: "Kenya",
    workType: "Remote",
    skills: ["Django", "JavaScript", "M-Pesa API", "Bootstrap", "Payment Integration"],
    bullets: [
      "Shipped a charity website with M-Pesa donations.",
      "Added automated email responses and a responsive layout.",
    ],
  },
  {
    role: "Web Developer & Designer",
    company: "AgriGrow Farms",
    startDate: "2024-12",
    endDate: "2024-12",
    location: "Kenya",
    workType: "Remote",
    skills: ["Django", "Python", "MySQL", "Bootstrap", "JavaScript", "Inventory Management"],
    bullets: [
      "Built an inventory management system with role-based authentication.",
      "Added dashboard analytics for stock and operations.",
    ],
  },
];
