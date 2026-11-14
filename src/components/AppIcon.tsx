
import type { AppId } from "../data/apps";

interface Props {
  id: AppId;
  size?: number;
  className?: string;
}

export default function AppIcon({
  id,
  size = 36,
  className,
}: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className,
    "aria-hidden": true as const,
  };

  switch (id) {
    case "about":
        return (
            <img
            src="/icons/uttam-avatar.png"
            width={size}
            height={size}
            alt=""
            className={className}
            style={{
                objectFit: "contain",
                borderRadius: "20%",
            }}
            />
        );

    case "projects":
      return (
        <svg {...common}>
          <path d="M7 17a6 6 0 0 1 6-6h14l6 7h18a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6H13a6 6 0 0 1-6-6Z" fill="#E38B31" />
          <path d="M7 27a6 6 0 0 1 6-6h38a6 6 0 0 1 6 6v21a6 6 0 0 1-6 6H13a6 6 0 0 1-6-6Z" fill="#FFC15B" />
          <path d="M15 33h34" stroke="#FFE5AA" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case "experience":
      return (
        <svg {...common}>
          <rect x="7" y="19" width="50" height="36" rx="7" fill="#7652BB" />
          <path d="M7 30h50v8c-16 9-34 9-50 0Z" fill="#A78BFA" />
          <path d="M24 19v-5a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v5" stroke="#D8C8FF" strokeWidth="4" />
          <rect x="28" y="32" width="8" height="11" rx="2" fill="#FFD166" />
        </svg>
      );

    case "education":
      return (
        <svg {...common}>
          <path d="M4 24 32 11l28 13-28 13Z" fill="#73C9B2" />
          <path d="M15 30v14c10 9 24 9 34 0V30L32 38Z" fill="#259D89" />
          <path d="M56 26v19" stroke="#FFE08A" strokeWidth="3" strokeLinecap="round" />
          <circle cx="56" cy="48" r="4" fill="#FFD166" />
        </svg>
      );

    case "blog":
      return (
        <svg {...common}>
          <rect x="13" y="5" width="38" height="54" rx="7" fill="#EC6685" />
          <path d="M21 5h23v54H21Z" fill="#FF8FAB" />
          <rect x="20" y="14" width="25" height="35" rx="3" fill="#FFF5F4" />
          <path d="M25 23h15M25 30h15M25 37h11" stroke="#E97A9A" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case "terminal":
      return (
        <svg {...common}>
          <rect x="5" y="9" width="54" height="46" rx="9" fill="#44445D" />
          <rect x="9" y="13" width="46" height="38" rx="5" fill="#171923" />
          <path d="m18 25 8 7-8 7" stroke="#6EE7B7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M31 40h13" stroke="#B6F5D3" strokeWidth="4" strokeLinecap="round" />
          <circle cx="14" cy="17" r="2" fill="#FF8B7A" />
        </svg>
      );

    case "contact":
      return (
        <svg {...common}>
          <rect x="6" y="14" width="52" height="38" rx="8" fill="#5B9CE5" />
          <path d="m7 21 25 19 25-19" fill="#D6EFFF" stroke="#D6EFFF" strokeWidth="3" strokeLinejoin="round" />
          <path d="m8 48 17-15M56 48 39 33" stroke="#A7D7FF" strokeWidth="3" />
        </svg>
      );
  }
}
