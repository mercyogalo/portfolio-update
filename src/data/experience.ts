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
    role: "Full Stack Developer / Co-Instructor MERN Stack",
    company: "Power Learn Project",
    startDate: "2025-06",
    endDate: null,
    location: "Kenya",
    workType: "Remote",
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "MERN Stack",
      "Teaching",
      "Student Support",
    ],
    bullets: [],
  },
  {
    role: "Full Stack Developer",
    company: "Femicare Chat Agent",
    startDate: "2025-06",
    endDate: "2025-06",
    location: "Remote",
    workType: "Remote",
    skills: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "AI Integration",
      "CRUD Operations",
    ],
    bullets: [],
  },
  {
    role: "Web Developer Intern",
    company: "M-treat Organization",
    startDate: "2025-03",
    endDate: "2025-05",
    location: "Kenya",
    workType: "Remote",
    skills: ["Django", "React", "REST API", "Email Integration", "Newsletter"],
    bullets: [],
  },
  {
    role: "Web Developer & Designer",
    company: "Baobab Restaurant",
    startDate: "2025-04",
    endDate: "2025-05",
    location: "Kenya",
    workType: "Remote",
    skills: ["Django", "HTML5", "CSS3", "JavaScript", "Bootstrap", "UI/UX Design"],
    bullets: [],
  },
  {
    role: "Web Developer & Designer",
    company: "Jay Foundation",
    startDate: "2025-01",
    endDate: "2025-02",
    location: "Kenya",
    workType: "Remote",
    skills: ["Django", "JavaScript", "M-Pesa API", "Bootstrap", "Payment Integration"],
    bullets: [],
  },
  {
    role: "Web Developer & Designer",
    company: "AgriGrow Farms",
    startDate: "2024-12",
    endDate: "2024-12",
    location: "Kenya",
    workType: "Remote",
    skills: [
      "Django",
      "Python",
      "MySQL",
      "Bootstrap",
      "JavaScript",
      "Inventory Management",
    ],
    bullets: [],
  },
];
