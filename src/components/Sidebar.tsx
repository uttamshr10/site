
import { desktopApps, type AppId } from "../data/apps";
import AppIcon from "./AppIcon";
interface Props {
  openApps: AppId[];
  activeApp: AppId | null;
  onOpen: (id: AppId) => void;
}

export default function Sidebar({
  openApps,
  activeApp,
  onOpen,
}: Props) {
  return (
    <aside className="sidebar" aria-label="Application launcher">
      <div className="sidebar-apps">
        {desktopApps.map((app) => (
          <button
            key={app.id}
            className={`sidebar-item ${
              activeApp === app.id ? "active" : ""
            }`}
            onClick={() => onOpen(app.id)}
            title={app.name}
            aria-label={`Open ${app.name}`}
          >
            <AppIcon id={app.id} size={37} />

            {openApps.includes(app.id) && (
              <span className="sidebar-running" />
            )}
          </button>
        ))}
      </div>

      <div className="sidebar-bottom">
        <button
          className="sidebar-item"
          title="UttamOS"
          onClick={() => onOpen("about")}
        >
          <span className="sidebar-icon">◉</span>
        </button>
      </div>
    </aside>
  );
}
