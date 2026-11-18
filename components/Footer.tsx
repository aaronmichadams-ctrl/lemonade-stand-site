import Link from "next/link";
import { CONTACT_EMAIL, footer, nav, site } from "@/content/site";
import { Logo } from "@/components/illustrations/Logo";
import { AwningEdge } from "@/components/ui";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark">
      <AwningEdge className="bg-cream" />
      <div className="wood-grain text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
          <div>
            <Link href="/" aria-label="Lemonade Stand home" className="inline-block">
              <Logo />
            </Link>
            <p className="mt-3 max-w-xs text-cream/90">{footer.blurb}</p>
            <p className="mt-3 font-bold">{site.location}</p>
          </div>
          <nav aria-label="Footer">
            <h2 className="font-display text-xl text-lemon">Explore</h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="underline-offset-4 hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="font-display text-xl text-lemon">Say hello</h2>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-3 inline-block break-all font-bold underline underline-offset-4">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
        <div className="border-t border-white/15">
          <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-cream/85 sm:px-6">
            © {year} {site.name}. {footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
