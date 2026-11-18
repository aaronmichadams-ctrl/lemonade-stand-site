import { progression } from "@/content/site";
import { Container, SectionHeading } from "@/components/ui";
import { Lemon } from "@/components/illustrations/Lemon";

const heights = ["lg:h-24", "lg:h-44", "lg:h-64"];
const offsets = ["ml-0", "ml-6", "ml-12"];

export function Progression() {
  return (
    <section id="progression" aria-labelledby="progression-title" className="bg-[#eaf4e4] py-20 sm:py-24">
      <Container>
        <SectionHeading id="progression-title" eyebrow={progression.eyebrow} title={progression.title} intro={progression.intro} />

        <ol className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-end lg:gap-0">
          {progression.steps.map((step, i) => (
            <li key={step.name} className={`${offsets[i]} lg:ml-0 lg:flex lg:flex-col lg:justify-end`}>
              <div className="relative rounded-2xl bg-white p-5 shadow-[0_6px_0_#2b6a2f] ring-2 ring-leaf-dark lg:mx-3">
                <Lemon className={`absolute -top-6 right-5 h-10 w-12 ${i === 2 ? "anim-bob" : ""}`} />
                <p className="text-sm font-extrabold uppercase tracking-widest text-leaf-dark">
                  Step {i + 1} · {step.when}
                </p>
                <h3 className="mt-1 font-display text-3xl text-ink">{step.name}</h3>
                <p className="mt-2 text-lg leading-relaxed text-ink-soft">{step.body}</p>
              </div>
              <div
                aria-hidden="true"
                className={`wood-grain mt-4 hidden rounded-t-md border-x-2 border-t-2 border-wood-dark lg:block ${heights[i]}`}
              >
                <span className="block pt-3 text-center font-display text-4xl text-lemon">{i + 1}</span>
              </div>
            </li>
          ))}
        </ol>
        <div aria-hidden="true" className="hidden h-3 rounded-b bg-wood-dark lg:block" />

        <div className="mt-16 rounded-3xl bg-white p-6 ring-2 ring-leaf-dark sm:p-8">
          <h3 className="font-display text-3xl text-ink">{progression.visionTitle}</h3>
          <p className="mt-2 text-lg text-ink-soft">{progression.visionNote}</p>
          <ol className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {progression.vision.map((v, i) => (
              <li key={v} className="flex items-center gap-3">
                <span className={`rounded-full px-5 py-2 font-extrabold ${i === 0 ? "bg-leaf-dark text-white" : "bg-lemon-soft text-ink"}`}>
                  {v}
                </span>
                {i < progression.vision.length - 1 ? (
                  <svg viewBox="0 0 24 24" className="h-6 w-6 rotate-90 text-leaf-dark sm:rotate-0" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h15M13 6l6 6-6 6" />
                  </svg>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
