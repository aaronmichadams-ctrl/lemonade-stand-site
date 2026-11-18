import Image from "next/image";
import { founder } from "@/content/site";
import { Container, SectionHeading } from "@/components/ui";

function MilestoneIcon({ kind }: { kind: "bowl" | "ball" }) {
  if (kind === "bowl") {
    return (
      <svg viewBox="0 0 48 48" className="h-12 w-12 shrink-0" aria-hidden="true">
        <circle cx="24" cy="24" r="23" fill="#ffd93b" />
        <path d="M24 9c-3 5-6 8-6 11a6 6 0 0 0 12 0c0-3-3-6-6-11z" fill="#7fc4e6" stroke="#2b2118" strokeWidth="2" />
        <path d="M9 27h30l-4 11H13z" fill="#fff8e7" stroke="#2b2118" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 31h20" stroke="#7fc4e6" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12 shrink-0" aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="#2b6a2f" />
      <circle cx="24" cy="24" r="14" fill="#fff" stroke="#2b2118" strokeWidth="2" />
      <path d="M24 17l6 4.4-2.3 7h-7.4l-2.3-7z" fill="#2b2118" />
      <path d="M24 17v-7M30 21.4l6.5-2M27.7 28.4l4 5.6M20.3 28.4l-4 5.6M18 21.4l-6.5-2" stroke="#2b2118" strokeWidth="1.8" />
    </svg>
  );
}

export function Founder() {
  return (
    <section id="founder" aria-labelledby="founder-title" className="bg-lemon-soft py-20 sm:py-24">
      <Container className="grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <figure className="relative mx-auto w-full max-w-[17rem] -rotate-2 rounded-sm bg-white p-3 pb-10 shadow-[0_14px_30px_rgba(43,33,24,0.2)] sm:max-w-sm">
          <span aria-hidden="true" className="absolute -top-3 left-1/2 z-10 h-7 w-24 -translate-x-1/2 rotate-3 bg-lemon/80" />
          <div className="relative aspect-[4/5] overflow-hidden bg-cream">
            {founder.photo ? (
              <Image
                src={founder.photo}
                alt={founder.photoAlt}
                fill
                sizes="(min-width: 768px) 384px, 272px"
                className="object-cover"
              />
            ) : (
              <div
                role="img"
                aria-label={`${founder.photoPlaceholder} (placeholder)`}
                className="flex h-full w-full items-center justify-center border-4 border-dashed border-wood/50 p-6 text-center font-display text-2xl text-wood-dark"
              >
                {founder.photoPlaceholder}
              </div>
            )}
          </div>
        </figure>

        <div>
          <SectionHeading id="founder-title" eyebrow={founder.eyebrow} title={founder.name} intro={founder.lead} />
          <p className="mt-2 font-bold text-leaf-dark">{founder.role}</p>
          <ol className="mt-8 space-y-5">
            {founder.milestones.map((m) => (
              <li key={m.title} className="flex gap-4 rounded-3xl bg-white p-5 shadow-[0_5px_0_#c99400] ring-2 ring-lemon-deep sm:p-6">
                <MilestoneIcon kind={m.icon} />
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-widest text-leaf-dark">{m.label}</p>
                  <h3 className="mt-0.5 font-display text-2xl leading-tight text-ink sm:text-3xl">{m.title}</h3>
                  <p className="mt-1.5 text-lg leading-relaxed text-ink-soft">{m.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
