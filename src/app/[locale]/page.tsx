import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryGrid } from "@/components/home/category-grid";
import { FeaturedProducts } from "@/components/home/featured-products";
import { Hero } from "@/components/home/hero";
import { Newsletter } from "@/components/home/newsletter";
import { Story } from "@/components/home/story";
import { Testimonials } from "@/components/home/testimonials";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/config/site";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";

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
    title: dict.meta.home.title,
    description: dict.meta.home.description,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const store = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: site.legalName,
    url: `${site.url}/${locale}`,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressCountry: site.address.countryCode,
    },
  };

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <CategoryGrid locale={locale} dict={dict} />
      <FeaturedProducts locale={locale} dict={dict} />
      <Story locale={locale} dict={dict} />
      <Testimonials dict={dict} />
      <Newsletter dict={dict} />
      <JsonLd data={store} />
    </>
  );
}
