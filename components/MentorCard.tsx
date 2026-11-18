import Image from "next/image";
import type { Mentor } from "@/data/mentors";

function Silhouette() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
      <rect width="120" height="120" fill="#fff1a8" />
      <circle cx="60" cy="48" r="22" fill="#c98d4f" />
      <path d="M20 120c4-26 20-40 40-40s36 14 40 40z" fill="#3e8e41" />
      <text x="60" y="56" textAnchor="middle" fontSize="26" fontWeight="800" fill="#fff8e7" fontFamily="system-ui">?</text>
    </svg>
  );
}

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span aria-hidden="true" className="flex h-full w-full items-center justify-center bg-leaf-dark font-display text-4xl text-lemon">
      {initials}
    </span>
  );
}

export function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl bg-white p-5 shadow-[0_6px_0_#5c3a1e] ring-2 ring-wood-dark ${
        mentor.placeholder ? "border-2 border-dashed border-leaf" : ""
      }`}
    >
      {mentor.placeholder ? (
        <span className="absolute right-4 top-4 rounded-full bg-lemon px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-ink">
          Open spot
        </span>
      ) : null}
      <div className="h-24 w-24 overflow-hidden rounded-full ring-4 ring-lemon">
        {mentor.photo ? (
          <Image src={mentor.photo} alt={`Photo of ${mentor.name}`} width={96} height={96} className="h-full w-full object-cover" />
        ) : mentor.placeholder ? (
          <Silhouette />
        ) : (
          <Initials name={mentor.name} />
        )}
      </div>
      <h3 className="mt-4 font-display text-2xl text-ink">
        {mentor.name}
        {mentor.placeholder ? <span className="text-ink-soft">: {mentor.title}</span> : null}
      </h3>
      {!mentor.placeholder ? <p className="font-bold text-ink-soft">{mentor.title}</p> : null}
      <p className="text-sm font-bold uppercase tracking-wide text-leaf-dark">
        {mentor.url ? (
          <a href={mentor.url} target="_blank" rel="noopener noreferrer" className="underline decoration-2 underline-offset-4 hover:text-leaf">
            {mentor.company}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          mentor.company
        )}
      </p>
      <p className="mt-3 text-ink-soft">{mentor.helpsWith}</p>
    </article>
  );
}
