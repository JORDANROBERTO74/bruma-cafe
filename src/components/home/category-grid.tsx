import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/ui/layout";
import { categories } from "@/data/categories";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";

export function CategoryGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section className="pt-4 sm:pt-8">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="display-md">{dict.home.categories.title}</h2>
            <p className="mt-2 max-w-lg text-ink-soft">{dict.home.categories.subtitle}</p>
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {categories.map((category, index) => (
            <li key={category.id} className={index === 0 ? "col-span-2 lg:col-span-1" : ""}>
              <Link
                href={`/${locale}/menu?category=${category.id}`}
                className={cn(
                  "group relative block overflow-hidden rounded-card bg-paper-deep",
                  index === 0
                    ? "aspect-[16/9] lg:aspect-[4/5]"
                    : "aspect-square lg:aspect-[4/5]",
                )}
              >
                <Image
                  src={category.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-paper">
                  <p className="font-display text-lg font-semibold">{category.name[locale]}</p>
                  <p className="mt-1 hidden text-xs text-paper/80 sm:block">
                    {category.description[locale]}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
