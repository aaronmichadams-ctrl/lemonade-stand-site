import { mentorsSection, mailto } from "@/content/site";
import { mentors } from "@/data/mentors";
import { Button, Container, SectionHeading } from "@/components/ui";
import { MentorCard } from "@/components/MentorCard";

export function MentorRoles() {
  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {mentorsSection.roles.map((r) => (
        <li key={r.title} className="chalkboard rounded-2xl p-5">
          <h3 className="font-display text-2xl text-lemon">{r.title}</h3>
          <p className="mt-1">{r.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function MentorGrid() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {mentors.map((m, i) => (
        <li key={`${m.name}-${i}`}>
          <MentorCard mentor={m} />
        </li>
      ))}
    </ul>
  );
}

export function Mentors() {
  return (
    <section id="mentors" aria-labelledby="mentors-title" className="py-20 sm:py-24">
      <Container>
        <SectionHeading id="mentors-title" eyebrow={mentorsSection.eyebrow} title={mentorsSection.title} intro={mentorsSection.body} />
        <div className="mt-10">
          <MentorRoles />
        </div>
        <div className="mt-12">
          <MentorGrid />
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href={mailto(mentorsSection.cta.subject)}>{mentorsSection.cta.label}</Button>
          <Button href="/mentors" variant="ghost">
            {mentorsSection.seeAll}
          </Button>
        </div>
      </Container>
    </section>
  );
}
