type Props = { className?: string; title?: string };

/** Logo mark: a lemon slice under a little striped stand awning. */
export function LogoMark({ className, title = "Lemonade Stand logo" }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
    >
      <rect x="2" y="2" width="60" height="60" rx="14" fill="#fff8e7" />
      {/* awning */}
      <path d="M6 10h52v12H6z" fill="#ffd93b" />
      <path d="M14.7 10h8.6v12h-8.6zM32 10h8.6v12H32zM49.3 10H58v12h-8.7z" fill="#fff" />
      <path
        d="M6 22a4.33 4.33 0 0 0 8.66 0 4.33 4.33 0 0 0 8.66 0 4.33 4.33 0 0 0 8.66 0 4.33 4.33 0 0 0 8.66 0 4.33 4.33 0 0 0 8.66 0 4.33 4.33 0 0 0 8.66 0"
        fill="#ffd93b"
        stroke="#c99400"
        strokeWidth="1.5"
      />
      <path d="M5 8h54" stroke="#5c3a1e" strokeWidth="4" strokeLinecap="round" />
      {/* posts */}
      <path d="M8 24v32M56 24v32" stroke="#a0672f" strokeWidth="4" strokeLinecap="round" />
      {/* lemon slice */}
      <circle cx="32" cy="42" r="15" fill="#f2b705" />
      <circle cx="32" cy="42" r="12.8" fill="#fff8e7" />
      <circle cx="32" cy="42" r="11.4" fill="#ffd93b" />
      <g stroke="#fff8e7" strokeWidth="1.6">
        <path d="M32 30.6v22.8M20.6 42h22.8M23.9 33.9l16.2 16.2M40.1 33.9 23.9 50.1" />
      </g>
      <circle cx="32" cy="42" r="2" fill="#fff8e7" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className="h-10 w-10 shrink-0" title="" />
      <span className="font-display text-2xl leading-none tracking-wide">Lemonade Stand</span>
    </span>
  );
}
