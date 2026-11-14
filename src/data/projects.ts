
export interface PortfolioProject {
  id: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  highlights: string[];
  github?: string;
  demo?: string;
}

export const projectCategories = [
  "Production Systems",
  "Experiments",
  "Web Applications",
  "Archive",
];

export const projects: PortfolioProject[] = [
  {
    id: "karkhana",
    name: "Karkhana Internal Web System",
    category: "Production Systems",
    description:
      "An internal operations platform connecting sales, procurement, production, inventory, and dispatch workflows.",
    stack: ["React", "TypeScript", "Django", "PostgreSQL", "AWS"],
    highlights: [
      "Designed full-stack application architecture",
      "Built connected operational workflows",
      "Worked on deployment and performance optimization",
    ],
  },
  {
    id: "live-photo",
    name: "Live Photo Bridge",
    category: "Experiments",
    description:
      "An experiment in transferring iPhone Live Photos to Android-compatible motion photo formats.",
    stack: ["Python", "FastAPI", "Media Processing"],
    highlights: [
      "Built a media conversion API",
      "Experimented with motion photo compatibility",
      "Connected mobile shortcuts to a conversion workflow",
    ],
  },
  {
    id: "uttamos",
    name: "UttamOS",
    category: "Web Applications",
    description:
      "A Linux-inspired interactive developer portfolio built entirely as a frontend application.",
    stack: ["React", "TypeScript", "Vite", "CSS"],
    highlights: [
      "Custom desktop environment",
      "Interactive application windows",
      "Terminal and project file explorer",
    ],
    github: "https://github.com/uttamshr10/site",
  },
];
