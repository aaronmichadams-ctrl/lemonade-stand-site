import { whatWeDo } from "@/content/site";
import { Container, SectionHeading } from "@/components/ui";
import { LemonSlice } from "@/components/illustrations/Lemon";

export function WhatWeDo() {
  return (
    <section id="what-we-do" aria-labelledby="what-we-do-title" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading id="what-we-do-title" eyebrow={whatWeDo.eyebrow} title={whatWeDo.title} intro={whatWeDo.intro} />
          <ul className="flex flex-wrap gap-3" aria-label="Divisions">
            {whatWeDo.divisions.map((d) => (
              <li key={d.name} className="rounded-2xl bg-lemon px-5 py-3 text-ink shadow-[0_4px_0_#c99400]">
                <span className="block font-display text-2xl leading-none">{d.name}</span>
                <span className="text-sm font-bold">{d.grades}</span>
              </li>
            ))}
          </ul>
        </div>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {whatWeDo.points.map((p) => (
            <li key={p.title} className="chalkboard rounded-2xl p-6">
              <LemonSlice className="h-9 w-9" />
              <h3 className="mt-3 font-display text-2xl text-lemon">{p.title}</h3>
              <p className="mt-2 text-lg leading-relaxed">{p.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
