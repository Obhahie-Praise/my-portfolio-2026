export type ProjectStatus =
  | "completed"
  | "in-progress"
  | "coming-soon"
  | "paused";

export type ProjectType = "personal" | "team" | "client" | "school";

export type Project = {
  id: string;

  title: string;
  description: string;

  status: ProjectStatus;
  type: ProjectType;

  tags: string[];
  category: string;

  purpose: string;

  role: string[];

  ownership: string;
  team: string;
  timeline: string;

  techStack: string[];

  work: string;

  images: string[];

  links?: {
    live?: string;
    github?: string;
  };
};

export const projects: Project[] = [
  {
    id: "examinr-ai",
    title: "Examinr AI",
    description: "Examinr AI — AI-powered exam preparation platform.",

    status: "in-progress",
    type: "personal",

    tags: ["LEGACY PROJECT", "AI", "ED-TECH"],
    category: "Web",

    purpose:
      "Helping students prepare for major examinations through a more structured and personalized study experience.",

    role: [
      "Product direction / vision",
      "UI/UX design",
      "Fullstack development",
    ],

    ownership: "Personal",
    team: "Solo",
    timeline: "2026",

    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],

    work: "Examinr began as an exploration into how AI could make exam preparation more deliberate and personalized. I designed and built the product experience from the ground up, from its onboarding and study flows to the underlying application.",

    images: [
      "/projects/examinr-ai/01.svg",
    ],

    links: {
      live: "#",
      github: "#",
    },
  },

  {
    id: "overwatch",
    title: "Overwatch",
    description:
      "A smarter way to monitor and respond to school-related cyberbullying problems.",

    status: "completed",
    type: "personal",

    tags: ["DASHBOARD", "WEB APP", "REAL TIME"],
    category: "Web",

    purpose:
      "Creating a system that helps schools identify, monitor, and respond to cyberbullying incidents.",

    role: ["Product direction", "UI/UX design", "Frontend development"],

    ownership: "Personal",
    team: "Solo",
    timeline: "2025",

    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],

    work: "Designed the monitoring experience around making potentially complex incidents easier to identify and act on.",

    images: [
      "/projects/overwatch/01.svg",
    ],

    links: {
      live: "#",
      github: "#",
    },
  },

  {
    id: "rail",
    title: "Rail",
    description:
      "Designed to provide realtime locations of loved ones in crisis",

    status: "completed",
    type: "team",

    tags: ["TEAM PROJECT", "PRODUCT", "PRESENTATION"],
    category: "Design",

    purpose:
      "Exploring a practical solution to a transportation problem through product thinking and clear communication.",

    role: ["Product design", "UI/UX", "Presentation"],

    ownership: "Team",
    team: "Collaborative",
    timeline: "2025",

    techStack: ["Figma", "Product Design"],

    work: "Worked as part of a team to shape the product and translate the idea into a clear, compelling presentation.",

    images: ["/projects/rail/01.svg"],

    links: {
      live: "#",
    },
  },

  {
    id: "inventory",
    title: "Inventory",
    description:
      "A simple inventory management experience designed around clarity and control.",

    status: "completed",
    type: "personal",

    tags: ["WEB APP", "DASHBOARD", "PRODUCT"],
    category: "Web",

    purpose: "Simplifying inventory management and tracking.",

    role: ["Product design", "UI/UX design", "Development"],

    ownership: "Personal",
    team: "Solo",
    timeline: "2025",

    techStack: ["Next.js", "TypeScript"],

    work: "Focused on creating a straightforward interface for managing inventory without unnecessary complexity.",

    images: ["/projects/inventory/01.svg"],

    links: {
      github: "#",
    },
  },

  {
    id: "arrivd",
    title: "Arrivd",
    description: "Simplified & offline-first classroom attendance system",

    status: "completed",
    type: "personal",

    tags: ["PRODUCT", "MOBILE", "UX"],
    category: "UI/UX",

    purpose: "Exploring a simpler experience around arrival and movement.",

    role: ["Product thinking", "UI/UX design"],

    ownership: "Personal",
    team: "Solo",
    timeline: "2025",

    techStack: ["Figma", "Product Design"],

    work: "Designed the experience around reducing friction and making the core interaction feel immediate and intuitive.",

    images: ["/projects/arrivd/01.svg"],

    links: {
      live: "#",
    },
  },
];
