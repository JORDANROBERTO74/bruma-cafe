import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LeafIcon, CoffeeIcon, GlobeIcon } from "@/components/icons";
import { Container, Section } from "@/components/ui/layout";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

const icons = [LeafIcon, CoffeeIcon, GlobeIcon];

export function Story({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="story">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-paper-deep">
            <Image
              src="/images/origin.webp"
              alt={dict.home.story.title}
              fill
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-3 -top-3 hidden rounded-2xl border border-line bg-paper px-4 py-3 shadow-soft sm:block">
            <p className="font-display text-2xl leading-none">1,680 m</p>
            <p className="mt-1 text-xs text-ink-soft">{dict.home.story.altitude}</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow text-accent">{dict.home.story.eyebrow}</p>
          <h2 className="display-lg mt-4">{dict.home.story.title}</h2>
          <p className="mt-5 text-ink-soft">{dict.home.story.body1}</p>
          <p className="mt-3 text-ink-soft">{dict.home.story.body2}</p>

          <ul className="mt-8 space-y-5">
            {dict.home.story.points.map((point, index) => {
              const Icon = icons[index] ?? LeafIcon;
              return (
                <li key={point.title} className="flex gap-4">
                  <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{point.title}</p>
                    <p className="mt-1 text-sm text-ink-soft">{point.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <Link
            href={`/${locale}/menu?category=coffee`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            {dict.home.story.cta}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
