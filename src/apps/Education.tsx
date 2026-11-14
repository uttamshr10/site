import {
  ArrowUpRight,
  BookOpen,
  Bot,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  GraduationCap,
  Lightbulb,
  Network,
  Sparkles,
} from "lucide-react";

const subjects = [
  { name: "Artificial Intelligence", icon: Bot },
  { name: "Software Engineering", icon: Code2 },
  { name: "Machine Learning", icon: Cpu },
  { name: "Cloud Computing", icon: Cloud },
  { name: "Distributed Systems", icon: Network },
];

const projectTechnologies = [
  "React",
  "TypeScript",
  "Python",
  "Django REST Framework",
  "PostgreSQL",
  "OpenAI API",
];

export default function Education() {
  return (
    <div className="education-page">
      <header className="education-header">
        <div>
          <span className="education-eyebrow">
            ACADEMIC.LOG
          </span>

          <h1>
            Education<span>.</span>
          </h1>

          <p>
            From curiosity about computers to understanding
            how software systems are designed and built.
          </p>
        </div>

        <GraduationCap
          className="education-header-icon"
          size={36}
          aria-hidden="true"
        />
      </header>

      <section className="education-degree">
        <div className="education-degree-icon">
          <GraduationCap size={24} />
        </div>

        <div className="education-degree-content">
          <span className="education-period">
            2022 — 2026
          </span>

          <h2>Bachelor of Computer Applications</h2>

          <p className="education-institution">
            Vedas College
            <span> / </span>
            Tribhuvan University
          </p>

          <div className="education-status">
            <CheckCircle2 size={14} />
            Degree requirements completed
          </div>
        </div>
      </section>

      <div className="education-content-grid">
        <div className="education-main-column">
          <section className="education-section">
            <div className="education-section-heading">
              <Code2 size={19} />
              <h2>Academic Project</h2>
            </div>

            <div className="education-project">
              <span className="education-project-type">
                FEATURED PROJECT
              </span>

              <h3>Pause<span>.</span></h3>

              <p className="education-project-subtitle">
                Burnout Intelligence Platform
              </p>

              <p>
                Developed a full-stack wellness monitoring
                application combining rule-based burnout
                assessment, machine learning algorithms
                and AI-assisted insights.
                </p>

                <p>
                Implemented Linear Regression, K-Means
                Clustering and K-Nearest Neighbors from
                scratch in Python for trend forecasting,
                behavioral pattern analysis and historical
                similarity classification.
                </p>

              <div className="education-project-tech">
                {projectTechnologies.map((tech, index) => (
                  <span key={tech}>
                    <span className="education-tech-name">
                      {tech}
                    </span>
                    {index < projectTechnologies.length - 1 && (
                      <span className="education-tech-divider">
                        {" / "}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="education-section">
            <div className="education-section-heading">
              <BookOpen size={19} />
              <h2>Areas of Interest</h2>
            </div>

            <div className="education-subjects">
              {subjects.map(({ name, icon: Icon }) => (
                <div
                  className="education-subject"
                  key={name}
                >
                  <Icon size={16} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="education-side-column">
          <section className="education-section">
            <div className="education-section-heading">
              <Lightbulb size={19} />
              <h2>Beyond the Classroom</h2>
            </div>

            <p>
              Much of my learning happens through
              experimentation, technical reading and
              working through challenging engineering
              problems.
            </p>

            <p>
              I'm particularly interested in AWS,
              software architecture and understanding
              not just how technology works, but when
              it is actually useful.
            </p>
          </section>

          <section className="education-section education-origin">
            <div className="education-section-heading">
                <Sparkles size={19} />
                <h2>Where It Started</h2>
            </div>

            <p>
                My curiosity about computers began around
                grades 5–6, when I spent time playing
                GTA: Vice City. Back then, computers were
                primarily a source of entertainment.
                Over time, that curiosity evolved into
                an interest in understanding how software
                works and eventually building applications
                of my own.
            </p>
            </section>
        </div>
      </div>

      <footer className="education-footer">
        <span>
          Learning doesn't stop at graduation.
        </span>

        <a
          href="https://www.linkedin.com/in/uttamshr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
          <ArrowUpRight size={15} />
        </a>
      </footer>
    </div>
  );
}
