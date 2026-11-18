import type { Metadata } from "next";
import { hero, site } from "@/content/site";
import { LemonadeStand } from "@/components/illustrations/LemonadeStand";
import { LogoMark } from "@/components/illustrations/Logo";

// Internal page used by `npm run og` to render public/og.png (1200x630). Not indexed.
export const metadata: Metadata = { title: "Share card", robots: { index: false, follow: false } };

export default function ShareCard() {
  return (
    <div
      id="share-card"
      className="fixed inset-0 z-[100] flex h-[630px] w-[1200px] items-center gap-4 overflow-hidden bg-gradient-to-b from-[#fff3c4] to-cream px-12"
    >
      <div className="w-[460px] shrink-0">
        <div className="flex items-center gap-3">
          <LogoMark className="h-14 w-14" title="" />
          <span className="font-display text-4xl text-ink">{site.name}</span>
        </div>
        <p className="mt-6 font-display text-[60px] leading-[1.02] text-ink">{hero.headline}</p>
        <p className="mt-5 text-2xl font-bold text-leaf-dark">{site.location}</p>
      </div>
      <LemonadeStand decorative className="h-[540px] w-auto shrink-0" />
      <div className="absolute inset-x-0 bottom-0 h-5 bg-leaf" />
    </div>
  );
}
