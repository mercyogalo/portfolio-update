export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "JavaScript",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Typescript",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Django", "Python", "REST API"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "Git & GitHub", "XAMPP"],
  },
  {
    title: "Design",
    skills: ["Figma", "UI/UX Design", "Web Hosting"],
  },
];
