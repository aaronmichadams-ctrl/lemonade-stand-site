import { hero } from "@/content/site";
import { LemonadeStand } from "@/components/illustrations/LemonadeStand";
import { Button, Container } from "@/components/ui";

function Cloud({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 50" className={`pointer-events-none absolute ${className}`}>
      <g fill="#ffffff">
        <circle cx="38" cy="30" r="16" />
        <circle cx="62" cy="22" r="20" />
        <circle cx="86" cy="31" r="14" />
        <rect x="22" y="30" width="80" height="16" rx="8" />
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-gradient-to-b from-[#fff3c4] via-cream to-cream">
      <Cloud className="left-[3%] top-6 w-32 opacity-90 sm:w-40" />
      <Cloud className="right-[6%] top-[52%] hidden w-24 opacity-70 lg:block" />
      <Container className="relative grid items-center gap-8 pb-0 pt-4 sm:pt-10 lg:grid-cols-[1fr_1.1fr] lg:gap-6 lg:pt-16">
        <div className="relative z-10 order-2 pb-10 lg:order-1 lg:pb-16">
          <h1 id="hero-title" className="font-display text-[2.6rem] leading-[1.05] text-ink sm:text-6xl lg:text-[4.1rem]">
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">{hero.subhead}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
        <div className="relative order-1 -mx-2 sm:mx-0 lg:order-2">
          <LemonadeStand className="mx-auto h-auto w-full max-w-[640px]" />
        </div>
      </Container>
      <div aria-hidden="true" className="h-5 bg-leaf" />
      <div aria-hidden="true" className="h-2 bg-leaf-dark" />
    </section>
  );
}
