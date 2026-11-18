import type { Metadata } from "next";
import { mentorsSection, mailto } from "@/content/site";
import { Button, Container, SectionHeading } from "@/components/ui";
import { MentorGrid, MentorRoles } from "@/components/sections/Mentors";
import { LemonSlice } from "@/components/illustrations/Lemon";

const page = mentorsSection.page;

export const metadata: Metadata = {
  title: page.title,
  description: mentorsSection.body,
  alternates: { canonical: "/mentors" },
  openGraph: { title: `${page.title} | Lemonade Stand`, description: mentorsSection.body, url: "/mentors" },
};

export default function MentorsPage() {
  return (
    <>
      <section aria-labelledby="mentors-page-title" className="bg-gradient-to-b from-[#fff3c4] to-cream pb-12 pt-14 sm:pt-20">
        <Container className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-leaf-dark">{mentorsSection.eyebrow}</p>
            <h1 id="mentors-page-title" className="mt-2 font-display text-5xl leading-tight text-ink sm:text-6xl">
              {page.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft sm:text-xl">{page.intro}</p>
            <p className="mt-4 inline-block rounded-full bg-lemon px-4 py-1.5 font-extrabold text-ink">{mentorsSection.commitment}</p>
            <div className="mt-8">
              <Button href={mailto(mentorsSection.cta.subject)}>{mentorsSection.cta.label}</Button>
            </div>
          </div>
          <LemonSlice className="anim-bob mx-auto hidden h-48 w-48 md:block" />
        </Container>
      </section>

      <section aria-labelledby="mentor-roles-title" className="py-12">
        <Container>
          <h2 id="mentor-roles-title" className="sr-only">
            Ways to help
          </h2>
          <MentorRoles />
        </Container>
      </section>

      <section aria-labelledby="mentor-grid-title" className="py-12">
        <Container>
          <SectionHeading id="mentor-grid-title" eyebrow={mentorsSection.eyebrow} title={page.gridTitle} />
          <div className="mt-10">
            <MentorGrid />
          </div>
        </Container>
      </section>

      <section aria-labelledby="mentor-faq-title" className="bg-lemon-soft py-16">
        <Container>
          <h2 id="mentor-faq-title" className="font-display text-4xl text-ink">
            {page.faqTitle}
          </h2>
          <dl className="mt-8 grid gap-6 md:grid-cols-3">
            {page.faqs.map((f) => (
              <div key={f.q} className="rounded-2xl bg-white p-6 shadow-[0_4px_0_#c99400]">
                <dt className="text-xl font-extrabold text-ink">{f.q}</dt>
                <dd className="mt-2 text-lg leading-relaxed text-ink-soft">{f.a}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10">
            <Button href={mailto(mentorsSection.cta.subject)}>{mentorsSection.cta.label}</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
