import Image from "next/image";
import { founder } from "@/content/site";
import { Container, SectionHeading } from "@/components/ui";
import { Lemon } from "@/components/illustrations/Lemon";

export function Founder() {
  return (
    <section id="founder" aria-labelledby="founder-title" className="bg-lemon-soft py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <figure className="relative mx-auto w-full max-w-[17rem] -rotate-2 sm:max-w-sm rounded-sm bg-white p-4 pb-6 shadow-[0_14px_30px_rgba(43,33,24,0.2)]">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream">
            {founder.photo ? (
              <Image src={founder.photo} alt={founder.photoAlt} fill sizes="(min-width: 1024px) 380px, 90vw" className="object-cover" />
            ) : (
              <div
                role="img"
                aria-label={`${founder.photoPlaceholder} (placeholder)`}
                className="flex h-full w-full flex-col items-center justify-center gap-3 border-4 border-dashed border-wood/50 p-6 text-center"
              >
                <svg viewBox="0 0 64 64" className="h-16 w-16 text-wood" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3">
                  <rect x="6" y="14" width="52" height="40" rx="6" />
                  <circle cx="32" cy="34" r="11" />
                  <path d="M22 14l4-6h12l4 6" />
                </svg>
                <span className="font-display text-2xl text-wood-dark">{founder.photoPlaceholder}</span>
              </div>
            )}
          </div>
          <figcaption className="mt-4 text-center font-display text-2xl text-ink">
            {founder.name}
            <span className="block font-sans text-sm font-bold text-ink-soft">{founder.role}</span>
          </figcaption>
          <span aria-hidden="true" className="absolute -top-3 left-1/2 h-7 w-24 -translate-x-1/2 rotate-3 bg-lemon/80" />
        </figure>

        <div>
          <SectionHeading id="founder-title" eyebrow={founder.eyebrow} title={founder.name} intro={founder.lead} />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            {founder.story.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {founder.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 rounded-2xl bg-white p-4 font-bold text-ink shadow-[0_4px_0_#c99400]">
                <Lemon className="mt-0.5 h-5 w-6 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
