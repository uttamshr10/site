import {
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";

const EMAIL = "uttamshr10@gmail.com";

export default function Contact() {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <div>
          <span className="contact-eyebrow">
            CONNECT.EXE
          </span>

          <h1>
            Have something in mind<span>?</span>
          </h1>

          <p>
            I'm interested in meaningful engineering
            problems, AI-powered products and opportunities
            to build useful software.
          </p>
        </div>

        <Send
          className="contact-header-icon"
          size={34}
          aria-hidden="true"
        />
      </header>

      <section className="contact-primary">
        <div className="contact-primary-icon">
          <MessageSquare size={22} />
        </div>

        <div className="contact-primary-content">
          <span className="contact-section-label">
            START A CONVERSATION
          </span>

          <h2>Let's talk about your idea.</h2>

          <p>
            Reach out about a project, collaboration,
            or technical challenge.
          </p>

          {EMAIL ? (
            <a
              className="contact-email-button"
              href={`mailto:${EMAIL}`}
            >
              <Mail size={17} />
              Send an email
              <ArrowUpRight size={16} />
            </a>
          ) : (
            <p className="contact-email-note">
              Add your preferred email address to enable
              direct contact.
            </p>
          )}
        </div>
      </section>

      <section className="contact-social-section">
        <div className="contact-social-heading">
          <span className="contact-section-label">
            ELSEWHERE ON THE INTERNET
          </span>
        </div>

        <div className="contact-social-grid">
          <a
            className="contact-social-link"
            href="https://github.com/uttamshr10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-social-top">
              <Code2 size={23} />
              <ArrowUpRight size={17} />
            </div>

            <h3>GitHub</h3>
            <p>Code, projects & experiments</p>
          </a>

          <a
            className="contact-social-link"
            href="https://www.linkedin.com/in/uttamshr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-social-top">
              <BriefcaseBusiness size={23} />
              <ArrowUpRight size={17} />
            </div>

            <h3>LinkedIn</h3>
            <p>Experience & professional network</p>
          </a>
        </div>
      </section>
    </div>
  );
}
