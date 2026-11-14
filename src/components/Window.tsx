
import { useState, type ReactNode } from "react";
import { Minus, Square, X } from "lucide-react";
interface WindowProps {
  title: string;
  icon: ReactNode;
  zIndex: number;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  children: ReactNode;
}

export default function Window({
  title,
  icon,
  zIndex,
  onClose,
  onMinimize,
  onFocus,
  children,
}: WindowProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [maximized, setMaximized] = useState(false);

  const handleDragStart = (event: React.PointerEvent<HTMLDivElement>) => {
    if (maximized || window.innerWidth < 768) return;

    const startX = event.clientX;
    const startY = event.clientY;
    const original = { ...position };
    const element = event.currentTarget;

    element.setPointerCapture(event.pointerId);

    const move = (e: PointerEvent) => {
      setPosition({
        x: original.x + e.clientX - startX,
        y: original.y + e.clientY - startY,
      });
    };

    const stop = () => {
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerup", stop);
      element.removeEventListener("pointercancel", stop);
    };

    element.addEventListener("pointermove", move);
    element.addEventListener("pointerup", stop);
    element.addEventListener("pointercancel", stop);
  };

  return (
    <section
      className={`os-window ${maximized ? "maximized" : ""}`}
      style={{
        zIndex,
        transform: maximized
          ? undefined
          : `translate(${position.x}px, ${position.y}px)`,
      }}
      onPointerDown={onFocus}
      aria-label={`${title} window`}
    >
      <div className="window-titlebar" onPointerDown={handleDragStart}>
        <div className="window-heading">
          <span>{icon}</span>
          <strong>{title}</strong>
        </div>

        <div className="window-controls">
          <button
            className="control minimize"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={onMinimize}
            aria-label="Minimize"
          >
            <Minus size={12} />
          </button>
          <button
            className="control maximize"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => setMaximized(!maximized)}
            aria-label="Maximize"
          >
            <Square size={10} />
          </button>
          <button
            className="control close"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={onClose}
            aria-label="Close"
          >
            <X size={12} />
          </button>
        </div>
      </div>

      <div className="window-content">{children}</div>
    </section>
  );
}
