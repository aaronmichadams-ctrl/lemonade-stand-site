import { timeline } from "@/content/site";
import { Container, SectionHeading } from "@/components/ui";

export function Timeline() {
  return (
    <section id="timeline" aria-labelledby="timeline-title" className="bg-lemon-soft py-20 sm:py-24">
      <Container>
        <SectionHeading id="timeline-title" eyebrow={timeline.eyebrow} title={timeline.title} />
        <ol className="relative mt-12 grid gap-8 border-l-4 border-dashed border-wood/50 pl-8 md:grid-cols-3 md:border-l-0 md:border-t-4 md:pl-0 md:pt-10">
          {timeline.items.map((t, i) => (
            <li key={t.when} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[2.85rem] top-1 h-6 w-6 rounded-full ring-4 ring-lemon-soft md:-top-[3.2rem] md:left-0 ${
                  i === 0 ? "bg-leaf-dark" : "bg-wood"
                }`}
              />
              <p className="font-display text-3xl text-leaf-dark">{t.when}</p>
              <h3 className="mt-1 text-xl font-extrabold text-ink">{t.title}</h3>
              <p className="mt-2 text-lg leading-relaxed text-ink-soft">{t.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
