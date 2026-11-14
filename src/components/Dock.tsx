
import { desktopApps, type AppId } from "../data/apps";
import AppIcon from "./AppIcon";
interface Props {
  openApps: AppId[];
  activeApp: AppId | null;
  onOpen: (id: AppId) => void;
}

export default function Dock({ openApps, activeApp, onOpen }: Props) {
  return (
    <nav className="dock" aria-label="Application dock">
      {desktopApps.map((app) => (
        <button
          key={app.id}
          className={`dock-item ${activeApp === app.id ? "active" : ""}`}
          onClick={() => onOpen(app.id)}
          title={app.name}
          aria-label={`Open ${app.name}`}
        >
          <AppIcon id={app.id} size={35} />
          {openApps.includes(app.id) && <i className="running-indicator" />}
        </button>
      ))}
    </nav>
  );
}
