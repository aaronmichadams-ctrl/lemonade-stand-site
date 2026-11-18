type Props = { className?: string; title?: string };

/** A whole lemon with a leaf. Decorative unless a title is given. */
export function Lemon({ className, title }: Props) {
  return (
    <svg
      viewBox="0 0 48 40"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M4 22c0-8 8-14 19-14s19 6 19 14-8 13-19 13S4 30 4 22z"
        fill="#ffd93b"
        stroke="#c99400"
        strokeWidth="2"
      />
      <path d="M2 22c1-2 2-3 3-3M44 22c-1-2-2-3-3-3" stroke="#c99400" strokeWidth="2" strokeLinecap="round" fill="none" />
      <ellipse cx="17" cy="17" rx="6" ry="2.5" fill="#fff6c4" opacity="0.8" />
      <path d="M24 9c2-5 7-8 13-7-1 6-7 9-13 7z" fill="#3e8e41" stroke="#2b6a2f" strokeWidth="1.5" />
      <path d="M24 9c4-2 7-4 10-6" stroke="#2b6a2f" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

/** A lemon slice (cross section). */
export function LemonSlice({ className }: { className?: string }) {
  const segs = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="#f2b705" />
      <circle cx="20" cy="20" r="16.5" fill="#fff8e7" />
      <circle cx="20" cy="20" r="15" fill="#ffd93b" />
      {segs.map((a) => (
        <line
          key={a}
          x1="20"
          y1="20"
          x2={20 + 15 * Math.cos((a * Math.PI) / 180)}
          y2={20 + 15 * Math.sin((a * Math.PI) / 180)}
          stroke="#fff8e7"
          strokeWidth="1.6"
        />
      ))}
      <circle cx="20" cy="20" r="2" fill="#fff8e7" />
    </svg>
  );
}
