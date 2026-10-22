import Link from "next/link";
import { CoffeeIcon, LeafIcon, TruckIcon } from "@/components/icons";
import { Container } from "@/components/ui/layout";
import { site } from "@/config/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-line bg-paper-deep/60">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold">
            bruma<span className="text-accent">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-ink-soft">{dict.common.tagline}</p>
          <p className="mt-4 text-sm text-ink-soft">{site.address.street}</p>
          <p className="text-sm text-ink-soft">
            {site.address.city}, {site.address.country}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 inline-block text-sm font-medium text-accent hover:underline"
          >
            {site.email}
          </a>
        </div>

        <nav aria-label={dict.footer.explore}>
          <h2 className="eyebrow text-ink-soft">{dict.footer.explore}</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href={`/${locale}/menu`} className="text-ink hover:text-accent">
                {dict.nav.menu}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/menu?category=gifts`} className="text-ink hover:text-accent">
                {dict.nav.gifts}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/#story`} className="text-ink hover:text-accent">
                {dict.nav.story}
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label={dict.footer.help}>
          <h2 className="eyebrow text-ink-soft">{dict.footer.help}</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link
                href={`/${locale}/legal/terms`}
                className="flex items-center gap-2 text-ink hover:text-accent"
              >
                <TruckIcon className="size-4 text-accent" />
                {dict.footer.shipping}
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-ink hover:text-accent"
              >
                <CoffeeIcon className="size-4 text-accent" />
                {dict.footer.contact}
              </a>
            </li>
            <li>
              <Link
                href={`/${locale}/#story`}
                className="flex items-center gap-2 text-ink hover:text-accent"
              >
                <LeafIcon className="size-4 text-olive" />
                {dict.product.origin}
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label={dict.footer.legal}>
          <h2 className="eyebrow text-ink-soft">{dict.footer.legal}</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href={`/${locale}/legal/privacy`} className="text-ink hover:text-accent">
                {dict.footer.privacy}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/legal/terms`} className="text-ink hover:text-accent">
                {dict.footer.terms}
              </Link>
            </li>
          </ul>
        </nav>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-line py-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.legalName}. {dict.footer.rights}
        </p>
        <p>{dict.footer.note}</p>
      </Container>
    </footer>
  );
}
