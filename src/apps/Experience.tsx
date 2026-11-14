
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Users,
  Workflow,
} from "lucide-react";
import type { ReactNode } from "react";

interface Contribution {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  current: boolean;
  summary: string;
  contributions: Contribution[];
  technologies: string[];
  accent: "orange" | "purple";
}

const experiences: ExperienceEntry[] = [
  {
    id: "lead-engineer",
    role: "Lead Software Engineer",
    company: "Karkhana",
    period: "May 2026 – Present",
    current: true,
    accent: "orange",
    summary:
      "Leading the architecture, full-stack development and deployment of an internal web platform connecting operational workflows from Sales through Dispatch.",
    contributions: [
      {
        icon: <Layers3 size={17} />,
        title: "System Architecture",
        description:
          "Translated cross-functional requirements into application architecture, data models, APIs and connected workflows.",
      },
      {
        icon: <Code2 size={17} />,
        title: "Full-Stack Development",
        description:
          "Led frontend and backend development using React, TypeScript, Django REST Framework and PostgreSQL.",
      },
      {
        icon: <Cloud size={17} />,
        title: "Cloud & Deployment",
        description:
          "Worked on AWS infrastructure, deployment configuration, integration testing, troubleshooting and application performance.",
      },
      {
        icon: <Users size={17} />,
        title: "Technical Leadership",
        description:
          "Coordinated developers, planned implementation tasks, reviewed progress and worked with team-leads to validate requirements.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Django REST Framework",
      "PostgreSQL",
      "AWS",
      "REST APIs",
      "System Architecture",
    ],
  },
  {
    id: "data-architect",
    role: "Data & Web Architect",
    company: "Karkhana",
    period: "Nov 2024 – May 2026",
    current: false,
    accent: "purple",
    summary:
      "Designed data structures, digital workflows and reporting automations to simplify fragmented information and support data-driven decisions.",
    contributions: [
      {
        icon: <Database size={17} />,
        title: "Data Architecture",
        description:
          "Designed structured data models for interconnected organizational records, including schools, teachers, materials, vendors and interactions.",
      },
      {
        icon: <Workflow size={17} />,
        title: "Workflow Automation",
        description:
          "Developed Google Sheets and Apps Script automations for recurring reports, progress tracking and operational follow-ups.",
      },
      {
        icon: <GitBranch size={17} />,
        title: "Digital Architecture",
        description:
          "Helped shape the transition from disconnected spreadsheets toward more structured digital workflows and web-based systems.",
      },
      {
        icon: <Users size={17} />,
        title: "Cross-Functional Collaboration",
        description:
          "Worked with different teams to understand information needs and make operational data more accessible for decision-making.",
      },
    ],
    technologies: [
      "Data Modeling",
      "Google Sheets",
      "Google Apps Script",
      "Workflow Design",
      "React",
      "Django",
    ],
  },
];

function ExperienceItem({
  experience,
}: {
  experience: ExperienceEntry;
}) {
  return (
    <article
      className={`career-entry career-${experience.accent}`}
    >
      <div className="career-rail">
        <span className="career-node" />
        <span className="career-line" />
      </div>

      <div className="career-entry-content">
        <div className="career-meta">
          <span className="career-period">
            <CalendarDays size={13} />
            {experience.period}
          </span>

          {experience.current && (
            <span className="career-current">
              <span className="career-current-dot" />
              Current role
            </span>
          )}
        </div>

        <h2>{experience.role}</h2>

        <div className="career-company">
          <BriefcaseBusiness size={15} />
          <span>{experience.company}</span>
        </div>

        <p className="career-summary">
          {experience.summary}
        </p>

        <details className="career-details">
          <summary>
            <span>Technical contributions</span>
            <ChevronDown size={16} className="career-chevron" />
          </summary>

          <div className="career-details-content">
            <div className="career-contributions">
              {experience.contributions.map((item) => (
                <div className="career-contribution" key={item.title}>
                  <span className="career-contribution-icon">
                    {item.icon}
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="career-technologies">
              <h3>Technologies & Practices</h3>

              <div className="career-tech-list">
                {experience.technologies.map((tech, index) => (
                  <span key={tech}>
                    <span className="career-tech-name">{tech}</span>
                    {index < experience.technologies.length - 1 && (
                      <span className="career-tech-separator"> / </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </details>
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <div className="experience-page">
      <header className="experience-header">
        <div>
          <span className="experience-eyebrow">
            CAREER.LOG
          </span>

          <h1>Experience<span>.</span></h1>

          <p>
            From data architecture to software engineering
            leadership, building systems that solve real
            operational problems.
          </p>
        </div>

        <div className="experience-header-icon">
          <GitBranch size={30} />
        </div>
      </header>

      <section
        className="career-timeline"
        aria-label="Professional experience timeline"
      >
        {experiences.map((experience) => (
          <ExperienceItem
            key={experience.id}
            experience={experience}
          />
        ))}
      </section>

      <footer className="experience-footer">
        <div>
          <span className="experience-footer-label">
            THE NEXT CHAPTER
          </span>
          <h2>Building what's next.</h2>
          <p>
            Exploring AI-powered products and services
            that address real enterprise problems.
          </p>
        </div>

        <a
          href="https://www.linkedin.com/in/uttamshr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
          <ArrowUpRight size={16} />
        </a>
      </footer>
    </div>
  );
}
