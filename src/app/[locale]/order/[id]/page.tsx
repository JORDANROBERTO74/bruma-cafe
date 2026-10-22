import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OrderConfirmation } from "@/components/order/order-confirmation";
import { Container, Section } from "@/components/ui/layout";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    ...buildMetadata({
      locale,
      path: `/order/${id}`,
      title: dict.meta.order.title,
      description: dict.meta.order.description,
    }),
    robots: { index: false, follow: false },
  };
}

export default async function OrderPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <Section className="pt-10 sm:pt-14">
      <Container>
        <OrderConfirmation locale={locale} dict={dict} orderId={id} />
      </Container>
    </Section>
  );
}
