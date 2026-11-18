import { curriculum } from "@/content/site";
import { Container, SectionHeading } from "@/components/ui";

const accents = ["bg-lemon text-ink", "bg-leaf-dark text-white", "bg-wood-light text-ink", "bg-wood-dark text-lemon"];

export function Curriculum() {
  return (
    <section id="curriculum" aria-labelledby="curriculum-title" className="py-20 sm:py-24">
      <Container>
        <SectionHeading id="curriculum-title" eyebrow={curriculum.eyebrow} title={curriculum.title} intro={curriculum.intro} />
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Every lesson includes">
          {curriculum.lessonIncludes.map((x) => (
            <li key={x} className="rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-extrabold text-ink">
              {x}
            </li>
          ))}
        </ul>

        <div className="relative mt-14">
        <div
          aria-hidden="true"
          className="absolute left-[12%] right-[12%] top-7 hidden border-t-4 border-dashed border-wood/50 lg:block"
        />
        <ol className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {curriculum.phases.map((phase, i) => (
            <li key={phase.name} className="relative flex flex-col">
              <span
                className={`relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full font-display text-2xl shadow-[0_4px_0_#5c3a1e] ring-4 ring-cream ${accents[i]}`}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div className="chalkboard mt-5 flex-1 rounded-2xl p-6">
                <p className="text-sm font-extrabold uppercase tracking-widest text-lemon-soft">{phase.weeks}</p>
                <h3 className="font-display text-3xl text-lemon">
                  <span className="sr-only">Phase {i + 1}: </span>
                  {phase.name}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-2 leading-snug">
                      <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lemon" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        </div>
      </Container>
    </section>
  );
}
