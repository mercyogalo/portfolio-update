export type Company = {
  name: string;
  logo?: string;
  url?: string;
  role: string;
};

// TODO: add or remove company entries; works with 3 to 12 items.
export const companies: Company[] = [
  {
    name: "Global Policy House (GPH)",
    logo: "/logos/gph.svg",
    url: "https://globalpolicyhouse.com", // TODO: confirm URL
    role: "Junior Backend Developer",
  },
  {
    name: "Power Learn Project (PLP)",
    logo: "/logos/plp.svg",
    role: "MERN Stack Co-Instructor & Technical Support",
  },
  {
    name: "M-Treat Organization",
    logo: "/logos/m-treat.svg",
    role: "Web Developer Intern",
  },
];

export const clients: Company[] = [
  { name: "Jay Foundation", role: "Web Developer & Designer" },
  { name: "Baobab Restaurant", role: "Web Developer & Designer" },
  { name: "AgriGrow Farms", role: "Web Developer & Designer" },
  { name: "M-Treat Health Organization", role: "Web Developer Intern" },
];
