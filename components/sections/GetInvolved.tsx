import { getInvolved, mailto } from "@/content/site";
import { Button, Container, SectionHeading } from "@/components/ui";
import { Lemon } from "@/components/illustrations/Lemon";

export function GetInvolved() {
  const cards = [
    { ...getInvolved.schools, variant: "primary" as const, tone: "bg-white" },
    { ...getInvolved.sponsors, variant: "secondary" as const, tone: "bg-white" },
  ];
  return (
    <section id="get-involved" aria-labelledby="get-involved-title" className="py-20 sm:py-24">
      <Container>
        <SectionHeading id="get-involved-title" eyebrow={getInvolved.eyebrow} title={getInvolved.title} center />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {cards.map((c) => (
            <article
              key={c.id}
              id={c.id}
              aria-labelledby={`${c.id}-title`}
              className={`flex scroll-mt-24 flex-col overflow-hidden rounded-3xl ${c.tone} shadow-[0_8px_0_#5c3a1e] ring-2 ring-wood-dark`}
            >
              <div
                aria-hidden="true"
                className="h-6"
                style={{ background: "repeating-linear-gradient(90deg,#ffd93b 0 32px,#fff 32px 64px)", borderBottom: "2px solid #c99400" }}
              />
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 id={`${c.id}-title`} className="font-display text-4xl text-ink">
                  {c.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-ink-soft">{c.body}</p>
                <ul className="mt-5 space-y-2">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 font-bold text-ink">
                      <Lemon className="mt-0.5 h-5 w-6 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href={mailto(c.subject)} variant={c.variant}>
                    {c.cta}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
