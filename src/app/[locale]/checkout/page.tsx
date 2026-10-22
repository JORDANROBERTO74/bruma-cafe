import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckoutForm } from "@/components/checkout/checkout-form";
import { Container, Section } from "@/components/ui/layout";
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
    path: "/checkout",
    title: dict.meta.checkout.title,
    description: dict.meta.checkout.description,
  });
}

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <Section className="pt-10 sm:pt-14">
      <Container>
        <header className="max-w-2xl">
          <h1 className="display-lg">{dict.checkout.title}</h1>
          <p className="mt-3 text-ink-soft">{dict.checkout.subtitle}</p>
        </header>
        <div className="mt-8">
          <CheckoutForm locale={locale} dict={dict} />
        </div>
      </Container>
    </Section>
  );
}
