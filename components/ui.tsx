import Link from "next/link";
import type { ReactNode } from "react";
import { Lemon } from "@/components/illustrations/Lemon";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <p
        className={`flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.18em] ${
          center ? "justify-center" : ""
        } ${dark ? "text-lemon" : "text-leaf-dark"}`}
      >
        <Lemon className="h-6 w-7" />
        {eyebrow}
      </p>
      <h2 id={id} className={`mt-2 font-display text-4xl leading-tight sm:text-5xl ${dark ? "text-cream" : "text-ink"}`}>
        {title}
      </h2>
      {intro ? (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-cream/90" : "text-ink-soft"}`}>{intro}</p>
      ) : null}
    </div>
  );
}

const base =
  "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-base font-extrabold transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const variants = {
  primary: "bg-leaf-dark text-white shadow-[0_5px_0_#1b4a1e] hover:bg-leaf",
  secondary: "bg-lemon text-ink shadow-[0_5px_0_#c99400] hover:bg-lemon-soft",
  ghost: "bg-cream text-ink ring-2 ring-ink shadow-[0_5px_0_#2b2118]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

/** A scalloped awning strip used as a section divider. */
export function AwningEdge({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`h-7 w-full ${className}`}
      style={{
        transform: flip ? "scaleY(-1)" : undefined,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='28'%3E%3Cpath d='M0 0h40v8a20 18 0 0 1-40 0z' fill='%23ffd93b' stroke='%23c99400' stroke-width='2'/%3E%3Cpath d='M40 0h40v8a20 18 0 0 1-40 0z' fill='%23ffffff' stroke='%23c99400' stroke-width='2'/%3E%3C/svg%3E\")",
        backgroundSize: "80px 28px",
        backgroundRepeat: "repeat-x",
      }}
    />
  );
}
