
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Code2,
  ExternalLink,
  FileCode2,
  Folder,
  FolderOpen,
  Home,
  Search,
  X,
} from "lucide-react";
import {
  projectCategories,
  projects,
  type PortfolioProject,
} from "../data/projects";

type Location =
  | { type: "home" }
  | { type: "category"; name: string }
  | { type: "project"; project: PortfolioProject };

export default function ProjectsExplorer() {
  const [location, setLocation] = useState<Location>({
    type: "home",
  });

  const [search, setSearch] = useState("");
  const [previousLocation, setPreviousLocation] =
    useState<"home" | string>("home");

  const goHome = () => {
    setLocation({ type: "home" });
    setSearch("");
  };

  const openCategory = (name: string) => {
    setLocation({ type: "category", name });
    setSearch("");
  };

  const openProject = (project: PortfolioProject) => {
    setPreviousLocation(
      location.type === "category" ? location.name : "home"
    );

    setLocation({ type: "project", project });
  };

  const goBack = () => {
    if (location.type === "project") {
      if (previousLocation === "home") {
        setLocation({ type: "home" });
      } else {
        setLocation({
          type: "category",
          name: previousLocation,
        });
      }
    } else {
      goHome();
    }
  };

  const currentCategory =
    location.type === "category"
      ? location.name
      : location.type === "project"
        ? location.project.category
        : null;

  const visibleProjects = projects.filter((project) => {
    const matchesCategory =
      location.type !== "category" ||
      project.category === location.name;

    const query = search.trim().toLowerCase();

    const matchesSearch =
      !query ||
      [
        project.name,
        project.description,
        project.category,
        ...project.stack,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="projects-app">
      <div className="projects-toolbar">
        <div className="projects-navigation">
          <button
            type="button"
            onClick={goBack}
            disabled={location.type === "home"}
            aria-label="Go back"
          >
            <ArrowLeft size={17} />
          </button>

          <button
            type="button"
            onClick={goHome}
            aria-label="All projects"
          >
            <Home size={17} />
          </button>
        </div>

        <div className="projects-breadcrumb">
          <button type="button" onClick={goHome}>
            Projects
          </button>

          {currentCategory && (
            <>
              <ChevronRight size={14} />
              <button
                type="button"
                onClick={() => openCategory(currentCategory)}
              >
                {currentCategory}
              </button>
            </>
          )}

          {location.type === "project" && (
            <>
              <ChevronRight size={14} />
              <span>{location.project.name}</span>
            </>
          )}
        </div>
      </div>

      <div className="projects-layout">
        <aside className="projects-sidebar">
          <span className="projects-sidebar-label">
            LOCATIONS
          </span>

          <button
            type="button"
            className={
              location.type === "home" ? "active" : ""
            }
            onClick={goHome}
          >
            <Home size={16} />
            <span>All Projects</span>
            <span className="projects-sidebar-count">
              {projects.length}
            </span>
          </button>

          <span className="projects-sidebar-label projects-sidebar-section">
            CATEGORIES
          </span>

          {projectCategories.map((category) => {
            const count = projects.filter(
              (project) => project.category === category
            ).length;

            return (
              <button
                key={category}
                type="button"
                className={
                  currentCategory === category ? "active" : ""
                }
                onClick={() => openCategory(category)}
              >
                {currentCategory === category ? (
                  <FolderOpen size={16} />
                ) : (
                  <Folder size={16} />
                )}

                <span>{category}</span>

                <span className="projects-sidebar-count">
                  {count}
                </span>
              </button>
            );
          })}

          <div className="projects-sidebar-footer">
            <Code2 size={15} />
            UttamOS / Projects
          </div>
        </aside>

        <main className="projects-main">
          {location.type !== "project" ? (
            <>
              <header className="projects-header">
                <span className="projects-eyebrow">
                  PROJECTS.EXE
                </span>

                <h1>
                  {location.type === "home"
                    ? "Things I've built."
                    : location.name}
                </h1>

                <p>
                  {location.type === "home"
                    ? "Software systems, experiments, and ideas turned into working products."
                    : `Projects filed under ${location.name}.`}
                </p>
              </header>

              <div className="projects-list-toolbar">
                <span>
                  {visibleProjects.length}{" "}
                  {visibleProjects.length === 1
                    ? "project"
                    : "projects"}
                </span>

                <div className="projects-search">
                  <Search size={15} />

                  <input
                    type="search"
                    placeholder="Find a project..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Search projects"
                  />

                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      aria-label="Clear search"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              {visibleProjects.length > 0 ? (
                <div className="projects-grid">
                  {visibleProjects.map((project) => (
                    <button
                      key={project.id}
                      type="button"
                      className="projects-card"
                      onClick={() => openProject(project)}
                    >
                      <div className="projects-card-top">
                        <div className="projects-card-icon">
                          <FileCode2 size={23} />
                        </div>

                        <ArrowRight
                          className="projects-card-arrow"
                          size={18}
                        />
                      </div>

                      <span className="projects-card-category">
                        {project.category}
                      </span>

                      <h2>{project.name}</h2>

                      <p>{project.description}</p>

                      <div className="projects-card-stack">
                        {project.stack.slice(0, 3).map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}

                        {project.stack.length > 3 && (
                          <span>
                            +{project.stack.length - 3}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="projects-empty">
                  <Folder size={32} />
                  <h2>No projects found.</h2>
                  <p>
                    Try another search or select a different
                    category.
                  </p>
                </div>
              )}
            </>
          ) : (
            <article className="projects-detail">
              <button
                type="button"
                className="projects-back-link"
                onClick={goBack}
              >
                <ArrowLeft size={16} />
                Back to projects
              </button>

              <div className="projects-detail-heading">
                <div className="projects-detail-icon">
                  <FileCode2 size={30} />
                </div>

                <span className="projects-eyebrow">
                  {location.project.category}
                </span>

                <h1>{location.project.name}</h1>

                <p>{location.project.description}</p>
              </div>

              <section className="projects-detail-section">
                <h2>What I worked on</h2>

                <ul className="projects-highlights">
                  {location.project.highlights.map(
                    (highlight, index) => (
                      <li key={index}>
                        <span className="projects-highlight-marker">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{highlight}</span>
                      </li>
                    )
                  )}
                </ul>
              </section>

              <section className="projects-detail-section">
                <h2>Technologies</h2>

                <div className="projects-tech-list">
                  {location.project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </section>

              {(location.project.github ||
                location.project.demo) && (
                <div className="projects-detail-links">
                  {location.project.github && (
                    <a
                      href={location.project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View source
                      <ExternalLink size={15} />
                    </a>
                  )}

                  {location.project.demo && (
                    <a
                      href={location.project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live demo
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              )}
            </article>
          )}
        </main>
      </div>
    </div>
  );
}
