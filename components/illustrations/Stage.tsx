import { finalPitch } from "@/content/site";

const CHAIRS = [70, 190, 320, 450, 570];

export function Stage({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 420" className={className} role="img" aria-label={finalPitch.illustrationAlt}>
      <defs>
        <linearGradient id="st-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff1a8" stopOpacity="0.75" />
          <stop offset="1" stopColor="#ffd93b" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id="st-curtain" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#245a28" />
          <stop offset="0.5" stopColor="#2f7333" />
          <stop offset="1" stopColor="#1d4a21" />
        </linearGradient>
        <radialGradient id="st-pool" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffe877" stopOpacity="0.85" />
          <stop offset="1" stopColor="#ffe877" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Back wall */}
      <rect x="0" y="0" width="640" height="320" fill="#1e1712" />

      {/* Curtains */}
      {[0, 1, 2, 3].map((i) => (
        <rect key={`l${i}`} x={i * 28} y="30" width="28" height="280" fill="url(#st-curtain)" />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <rect key={`r${i}`} x={528 + i * 28} y="30" width="28" height="280" fill="url(#st-curtain)" />
      ))}
      <path d="M112 30 Q 130 180 104 310 L 112 310 Z" fill="#1d4a21" />
      <path d="M528 30 Q 510 180 536 310 L 528 310 Z" fill="#1d4a21" />

      {/* Striped valance */}
      {Array.from({ length: 16 }, (_, i) => {
        const fill = i % 2 === 0 ? "#ffd93b" : "#ffffff";
        return (
          <g key={i}>
            <rect x={i * 40} y="0" width="40" height="36" fill={fill} />
            <path d={`M${i * 40} 35.5 a20 16 0 0 0 40 0 Z`} fill={fill} />
          </g>
        );
      })}
      <rect x="0" y="0" width="640" height="8" fill="#5c3a1e" />

      {/* Lights */}
      {[180, 320, 460].map((x) => (
        <g key={x}>
          <rect x={x - 12} y="44" width="24" height="16" rx="4" fill="#54463a" />
          <circle cx={x} cy="62" r="6" fill="#fff1a8" />
        </g>
      ))}

      {/* Spotlight beam */}
      <g className="anim-spot">
        <path d="M308 62 L 332 62 L 450 318 L 190 318 Z" fill="url(#st-beam)" />
        <ellipse cx="320" cy="314" rx="150" ry="26" fill="url(#st-pool)" />
      </g>

      {/* Stage floor */}
      <path d="M40 300 L 600 300 L 640 352 L 0 352 Z" fill="#a0672f" />
      <g stroke="#5c3a1e" strokeWidth="1.5" opacity="0.6">
        <path d="M30 313 H 610 M20 326 H 620 M10 339 H 630" />
      </g>
      <rect x="0" y="352" width="640" height="18" fill="#5c3a1e" />
      <ellipse cx="320" cy="312" rx="120" ry="16" fill="#ffe877" opacity="0.35" />

      {/* Podium with lemon emblem */}
      <g>
        <path d="M288 222 L 352 222 L 346 306 L 294 306 Z" fill="#fff8e7" stroke="#5c3a1e" strokeWidth="3" strokeLinejoin="round" />
        <rect x="282" y="214" width="76" height="12" rx="3" fill="#5c3a1e" />
        <circle cx="320" cy="262" r="20" fill="#f2b705" />
        <circle cx="320" cy="262" r="16" fill="#ffd93b" />
        <path d="M320 246 V 278 M304 262 H 336 M309 251 L 331 273 M331 251 L 309 273" stroke="#fff8e7" strokeWidth="2" />
        <path d="M336 214 L 346 186" stroke="#2b2118" strokeWidth="3" strokeLinecap="round" />
        <rect x="341" y="174" width="12" height="16" rx="6" fill="#2b2118" transform="rotate(20 347 182)" />
      </g>

      {/* Confetti */}
      <g fill="#ffd93b">
        <circle cx="210" cy="120" r="4" className="anim-bob" />
        <circle cx="440" cy="140" r="3" />
        <circle cx="380" cy="100" r="3.5" className="anim-bob" />
        <rect x="250" y="160" width="8" height="4" rx="1" transform="rotate(30 254 162)" />
        <rect x="410" y="190" width="8" height="4" rx="1" fill="#ffffff" transform="rotate(-20 414 192)" />
      </g>

      {/* Judges' table */}
      <rect x="40" y="370" width="560" height="50" fill="#3a2d22" />
      <rect x="40" y="366" width="560" height="10" rx="3" fill="#54463a" />

      {/* Judges' chairs (backs to us) */}
      {CHAIRS.map((x) => (
        <g key={x}>
          <path
            d={`M${x - 38} 420 L ${x - 38} 356 Q ${x - 38} 326 ${x} 324 Q ${x + 38} 326 ${x + 38} 356 L ${x + 38} 420 Z`}
            fill="#14100c"
            stroke="#ffd93b"
            strokeWidth="2.5"
          />
          <path
            d={`M${x - 26} 420 L ${x - 26} 360 Q ${x - 26} 340 ${x} 338 Q ${x + 26} 340 ${x + 26} 360 L ${x + 26} 420`}
            fill="none"
            stroke="#ffd93b"
            strokeOpacity="0.25"
            strokeWidth="2"
          />
        </g>
      ))}
    </svg>
  );
}
