
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Layers3,
  MapPin,
  Heart,
} from "lucide-react";
import type { AppId } from "../data/apps";

interface AboutProps {
  openApp: (id: AppId) => void;
}

const technologies = [
  "Django",
  "React",
  "TypeScript",
  "PostgreSQL",
  "AWS EC2",
  "AWS Lightsail",
  "Docker",
  "System Architecture",
];

export default function About({ openApp }: AboutProps) {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-intro">
          <span className="about-eyebrow">HELLO, WORLD!</span>

          <h1>
            I'm Uttam <span>Shrestha.</span>
          </h1>

          <p className="about-role">
            Software Development Lead
            <span className="role-separator"> / </span>
            AI Product Explorer
          </p>

          <div className="about-location">
            <MapPin size={14} />
            Nepal
          </div>
        </div>
      </section>

      <section className="about-statement">
        <p>
          I turn <strong>complex operational problems</strong> into practical software. I enjoy understanding how systems work, designing their architecture and leading development from requirements to deployment.
        </p>
      </section>

      <div className="about-content-grid">
        <section className="about-section about-featured">
        <div className="about-section-heading">
            <Layers3 size={19} />
            <h2>What I bring to the table</h2>
        </div>

        <p>
            I work across the software development lifecycle,
            from understanding business requirements and designing
            system architecture to leading development, deployment
            and continuous improvement.
        </p>

        <p>
            At Karkhana, I led the development of an internal
            operations platform connecting Sales, Procurement,
            Inventory, Production and Dispatch into a unified
            workflow.
        </p>
        </section>

        <div className="about-right-column">
          <section className="about-section">
            <div className="about-section-heading">
              <Code2 size={19} />
              <h2>My toolkit</h2>
            </div>

            <p>
              Technologies I've worked with across development,
              architecture and deployment.
            </p>

            <div className="about-tech-list">
              {technologies.map((tech, index) => (
                <span key={tech}>
                  <span className="about-tech">{tech}</span>
                  {index < technologies.length - 1 && (
                    <span className="about-tech-divider"> / </span>
                  )}
                </span>
              ))}
            </div>
          </section>

          <section className="about-section">
            <div className="about-section-heading">
              <BrainCircuit size={19} />
              <h2>What I'm exploring</h2>
            </div>

            <p>
              Building AI-powered products and services that solve
              real enterprise pain points. My focus is on
              understanding the problem before choosing the technology.
            </p>
          </section>

          <section className="about-section">
            <div className="about-section-heading">
              <Heart size={19} />
              <h2>Beyond the screen</h2>
            </div>

            <p>
              I enjoy getting to the depth of problems, researching
              emerging AI technologies, reading, playing football
              and spending time with my family.
            </p>
          </section>
        </div>
      </div>

      <footer className="about-footer">
        <span>Curious about what I've built?</span>

        <button onClick={() => openApp("projects")}>
          View Projects <ArrowUpRight size={15} />
        </button>
      </footer>
    </div>
  );
}
