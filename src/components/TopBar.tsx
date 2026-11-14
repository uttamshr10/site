
import { useEffect, useState } from "react";
import { BatteryFull, Wifi, Volume2 } from "lucide-react";

export default function TopBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="topbar">
      <div className="topbar-brand">
        <span className="brand-symbol">✦</span>
        <strong>UttamOS</strong>
      </div>

      <div className="topbar-clock">
        {time.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })}
        {" · "}
        {time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>

      <div className="topbar-status">
        <Wifi size={15} />
        <Volume2 size={15} />
        <BatteryFull size={17} />
      </div>
    </header>
  );
}
