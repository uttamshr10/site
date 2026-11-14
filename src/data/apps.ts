export type AppId =
  | "about"
  | "projects"
  | "experience"
  | "education"
  | "blog"
  | "terminal"
  | "contact";

export interface DesktopApp {
  id: AppId;
  name: string;
  icon: string;
  color: string;
}

export const desktopApps: DesktopApp[] = [
  { id: "about", name: "About Me", icon: "👨‍💻", color: "#ffb86c" },
  { id: "projects", name: "Projects", icon: "📁", color: "#ffcc66" },
  { id: "experience", name: "Experience", icon: "💼", color: "#b794f4" },
  { id: "education", name: "Education", icon: "🎓", color: "#6ee7b7" },
  { id: "blog", name: "Blog", icon: "📖", color: "#fb7185" },
  { id: "terminal", name: "Terminal", icon: "⌨️", color: "#94a3b8" },
  { id: "contact", name: "Contact", icon: "✉️", color: "#7dd3fc" },
];