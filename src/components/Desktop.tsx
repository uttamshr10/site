import { desktopApps, type AppId } from "../data/apps";
import TopBar from "./TopBar";
import Dock from "./Dock";
import AppIcon from "./AppIcon";
import Window from "./Window";
import AppContent from "../apps/AppContent";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Desktop() {
  const [openApps, setOpenApps] = useState<AppId[]>([]);
  const [minimized, setMinimized] = useState<AppId[]>([]);
  const [activeApp, setActiveApp] = useState<AppId | null>(null);
  const [order, setOrder] = useState<AppId[]>(["about"]);

  const openApp = (id: AppId) => {
    setOpenApps((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
    setMinimized((prev) => prev.filter((app) => app !== id));
    setOrder((prev) => [...prev.filter((app) => app !== id), id]);
    setActiveApp(id);
  };

  const closeApp = (id: AppId) => {
    const remaining = order.filter((app) => app !== id);
    setOpenApps((prev) => prev.filter((app) => app !== id));
    setMinimized((prev) => prev.filter((app) => app !== id));
    setOrder(remaining);
    setActiveApp(remaining[remaining.length - 1] ?? null);
  };

  const minimizeApp = (id: AppId) => {
    setMinimized((prev) => [...new Set([...prev, id])]);
    const visible = order.filter(
      (app) => app !== id && !minimized.includes(app)
    );
    setActiveApp(visible[visible.length - 1] ?? null);
  };

  return (
    <main className="desktop">
      <TopBar />

      <div className="desktop-welcome">
        <span className="welcome-kicker">WELCOME TO MY WORKSPACE</span>
        <h1>Uttam<span>OS</span></h1>
        <p>Build. Experiment. Ship.</p>
        <p className="desktop-role">
        Software Development Lead
        <span> | </span>
        AI Product Explorer
        </p>
      </div>

      <Sidebar
        openApps={openApps}
        activeApp={activeApp}
        onOpen={openApp}
        />

      <div className="window-layer">
        {openApps
          .filter((id) => !minimized.includes(id))
          .map((id) => {
            const app = desktopApps.find((item) => item.id === id)!;

            return (
              <Window
                key={id}
                title={app.name}
                icon={<AppIcon id={id} size={22} />}
                zIndex={10 + order.indexOf(id)}
                onClose={() => closeApp(id)}
                onMinimize={() => minimizeApp(id)}
                onFocus={() => openApp(id)}
              >
                <AppContent
                    appId={id}
                    openApp={openApp}
                    closeApp={closeApp}
                    />
              </Window>
            );
          })}
      </div>

      <Dock
        openApps={openApps}
        activeApp={activeApp}
        onOpen={openApp}
      />
    </main>
  );
}
