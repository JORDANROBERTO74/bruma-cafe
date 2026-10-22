import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product/product-grid";
import { Container, Section } from "@/components/ui/layout";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { buildMetadata } from "@/lib/seo";
import type { CategoryId } from "@/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    path: "/menu",
    title: dict.meta.menu.title,
    description: dict.meta.menu.description,
  });
}

export default async function MenuPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const { category } = await searchParams;

  const active = categories.find((item) => item.id === category);
  const list = active ? products.filter((product) => product.category === active.id) : products;

  const filters: Array<{ id: CategoryId | "all"; label: string; href: string }> = [
    { id: "all", label: dict.menu.all, href: `/${locale}/menu` },
    ...categories.map((item) => ({
      id: item.id,
      label: dict.menu.categories[item.id],
      href: `/${locale}/menu?category=${item.id}`,
    })),
  ];

  return (
    <Section className="pt-10 sm:pt-14">
      <Container>
        <header className="max-w-2xl">
          <h1 className="display-lg">{dict.menu.title}</h1>
          <p className="mt-3 text-lg text-ink-soft">{dict.menu.subtitle}</p>
        </header>

        <nav aria-label={dict.menu.title} className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = filter.id === (active?.id ?? "all");
            return (
              <Link
                key={filter.id}
                href={filter.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "border-ink bg-ink text-paper"
                    : "border-line bg-white/50 text-ink-soft hover:border-ink/40 hover:text-ink",
                )}
              >
                {filter.label}
              </Link>
            );
          })}
        </nav>

        <p className="mt-6 text-sm text-ink-soft" aria-live="polite">
          {list.length} {list.length === 1 ? dict.menu.resultOne : dict.menu.results}
        </p>

        <div className="mt-6">
          {list.length > 0 ? (
            <ProductGrid products={list} locale={locale} />
          ) : (
            <div className="rounded-card border border-dashed border-line bg-paper-deep/40 px-6 py-16 text-center">
              <p className="font-display text-xl">{dict.menu.empty}</p>
              <Link
                href={`/${locale}/menu`}
                className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
              >
                {dict.menu.emptyCta}
              </Link>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
