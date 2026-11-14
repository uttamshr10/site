import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { AppId } from "../data/apps";
import ProjectsExplorer from "./ProjectsExplorer";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";
import Blog from "./Blog";

interface Props {
  appId: AppId;
  openApp: (id: AppId) => void;
  closeApp?: (id: AppId) => void;
}

const APP_NAMES: AppId[] = [
  "about",
  "projects",
  "experience",
  "education",
  "blog",
  "terminal",
  "contact",
];

const COMMANDS = [
  "help",
  "whoami",
  "ls",
  "date",
  "clear",
  "exit",
  "open",
  "projects",
  "skills",
  "history",
  "hello world",
];

function Terminal({ openApp, closeApp }: Props) {
  const [input, setInput] = useState("");

  const [history, setHistory] = useState<string[]>([
    "Welcome to UttamOS Terminal",
    "Type 'help' to see available commands.",
  ]);

  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = historyRef.current;

    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [history]);

  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const draftRef = useRef("");
  const inputRef = useRef<HTMLInputElement>(null);

  const execute = (command: string) => {
    const trimmed = command.trim();
    const cmd = trimmed.toLowerCase().replace(/\s+/g, " ");

    if (!cmd) return;

    const nextCommandHistory = [...commandHistory, trimmed];

    setCommandHistory(nextCommandHistory);
    setHistoryIndex(-1);
    draftRef.current = "";

    if (cmd === "exit") {
      closeApp?.("terminal");
      return;
    }

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    let result = "";

    switch (cmd) {
      case "help":
        result = [
          "Available commands:",
          "",
          "help          Show available commands",
          "whoami        Display developer information",
          "ls            List applications",
          "date          Show current date and time",
          "projects      List featured projects",
          "skills        Display technical skills",
          "history       Show command history",
          "open [app]    Open an application",
          "clear         Clear terminal output",
          "exit          Close terminal",
          "",
          "Shortcuts: ↑ / ↓ history, Tab autocomplete, Ctrl+L clear",
        ].join("\n");
        break;

      case "whoami":
        result = "Uttam Shrestha — Software Development Lead";
        break;

      case "ls":
        result =
          "about/ projects/ experience/ education/ blog/ contact/";
        break;

      case "date":
        result = new Date().toLocaleString();
        break;

      case "projects":
        result = [
          "Featured Projects",
          "------------------------------",
          "01  Karkhana Internal Web System",
          "02  Pause — Burnout Intelligence Platform",
          "03  Live Photo Bridge",
          "04  UttamOS",
          "",
          "Type 'open projects' to explore.",
        ].join("\n");
        break;

      case "skills":
        result = [
          "Technical Toolkit",
          "------------------------------",
          "Frontend    React, TypeScript",
          "Backend     Python, Django REST Framework",
          "Database    PostgreSQL",
          "Cloud       AWS EC2, Lightsail",
          "DevOps      Docker, Nginx, Gunicorn",
          "Focus       System Architecture, AI Products",
        ].join("\n");
        break;

      case "history":
        result = nextCommandHistory
          .map((entry, index) =>
            `${String(index + 1).padStart(3, " ")}  ${entry}`
          )
          .join("\n");
        break;

      case "hello world":
        result = "Hello.";
        break;

      default:
        if (cmd.startsWith("open ")) {
          const target = cmd.slice(5).trim() as AppId;

          if (APP_NAMES.includes(target)) {
            openApp(target);
            result = `Opening ${target}...`;
          } else {
            result = `Application not found: ${target}`;
          }
        } else {
          result = `Command not found: ${cmd}`;
        }
    }

    setHistory((prev) => [...prev, `$ ${trimmed}`, result]);
    setInput("");
  };

  const handleKeyDown = (
      e: KeyboardEvent<HTMLInputElement>
    ) => {
    if (e.ctrlKey && e.key.toLowerCase() === "l") {
      e.preventDefault();
      setHistory([]);
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      if (commandHistory.length === 0) return;

      if (historyIndex === -1) {
        draftRef.current = input;
      }

      const nextIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();

      if (historyIndex === -1) return;

      const nextIndex = historyIndex + 1;

      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput(draftRef.current);
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }

      return;
    }

    if (e.key === "Tab") {
      e.preventDefault();

      const normalized = input.trimStart().toLowerCase();

      if (normalized.startsWith("open ")) {
        const partial = normalized.slice(5);
        const matches = APP_NAMES.filter((app) =>
          app.startsWith(partial)
        );

        if (matches.length === 1) {
          setInput(`open ${matches[0]}`);
          setHistoryIndex(-1);
        }

        return;
      }

      const matches = COMMANDS.filter((command) =>
        command.startsWith(normalized)
      );

      if (matches.length === 1) {
        setInput(matches[0]);
        setHistoryIndex(-1);
      }
    }
  };

  
  return (
    <div
      className="terminal"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="terminal-history" ref={historyRef}>
        {history.map((line, i) => (
          <div
            key={i}
            style={{ whiteSpace: "pre-wrap" }}
          >
            {line}
          </div>
        ))}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            execute(input);
          }}
          className="terminal-prompt"
        >
          <span>uttam@uttamos:~$</span>

          <input
            ref={inputRef}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setHistoryIndex(-1);
            }}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            aria-label="Terminal command"
          />
        </form>
      </div>
    </div>
  );

}

export default function AppContent({
  appId,
  openApp,
  closeApp,
}: Props) {
  switch (appId) {
    case "about":
        return <About openApp={openApp} />;

    case "projects":
        return <ProjectsExplorer />;

    case "terminal":
        return (
            <Terminal
            appId={appId}
            openApp={openApp}
            closeApp={closeApp}
            />
        );

    case "experience":
        return <Experience />;

    case "education":
        return <Education />;

    case "blog":
      return <Blog />;

    case "contact":
      return <Contact />;
  }
}
