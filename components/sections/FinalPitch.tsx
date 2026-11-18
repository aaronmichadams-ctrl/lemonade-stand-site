import { finalPitch } from "@/content/site";
import { Container, SectionHeading } from "@/components/ui";
import { Stage } from "@/components/illustrations/Stage";

export function FinalPitch() {
  return (
    <section id="final-pitch" aria-labelledby="final-pitch-title" className="on-dark relative overflow-hidden bg-ink py-20 text-cream sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-lemon/10 blur-3xl"
      />
      <Container className="relative">
        <SectionHeading id="final-pitch-title" eyebrow={finalPitch.eyebrow} title={finalPitch.title} intro={finalPitch.body} dark />
        <ul className="mt-6 flex flex-wrap gap-3" aria-label="Winners earn">
          {finalPitch.prizes.map((p) => (
            <li key={p} className="rounded-full bg-lemon px-5 py-2 font-extrabold text-ink">
              {p}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.25fr_1fr]">
          <div className="overflow-hidden rounded-3xl ring-4 ring-wood">
            <Stage className="block h-auto w-full" />
          </div>

          <div className="chalkboard rounded-2xl p-6 sm:p-8">
            <h3 className="font-display text-3xl text-lemon">{finalPitch.rubricTitle}</h3>
            <p className="mt-1 text-chalk-line/85">Out of {finalPitch.rubricTotal} points</p>
            <ul className="mt-6 space-y-4">
              {finalPitch.rubric.map((r) => (
                <li key={r.label}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-bold">{r.label}</span>
                    <span className="font-display text-2xl text-lemon">
                      {r.points}
                      <span className="sr-only"> points</span>
                    </span>
                  </div>
                  <div aria-hidden="true" className="mt-1.5 h-3 rounded-full bg-white/10">
                    <div className="h-3 rounded-full bg-lemon" style={{ width: `${(r.points / 35) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
