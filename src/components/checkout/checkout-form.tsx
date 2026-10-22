"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState, type FormEvent } from "react";
import { z } from "zod";
import { ArrowRight, CartIcon } from "@/components/icons";
import { CartSummary } from "@/components/cart/cart-summary";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { buildOrder, saveOrder } from "@/lib/order";
import { useCart } from "@/providers/cart-provider";

type Method = "delivery" | "pickup";
type Payment = "card" | "transfer";

const fieldClass =
  "h-11 w-full rounded-xl border border-line bg-white/70 px-4 text-sm text-ink placeholder:text-ink-soft/60 focus-visible:border-accent";

export function CheckoutForm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const router = useRouter();
  const { state, totals, hydrated, clear } = useCart();

  const [method, setMethod] = useState<Method>("delivery");
  const [payment, setPayment] = useState<Payment>("card");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    notes: "",
  });

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(2, dict.checkout.required),
        email: z.string().trim().email(dict.checkout.invalidEmail),
        phone: z.string().trim().min(6, dict.checkout.required),
        address:
          method === "delivery"
            ? z.string().trim().min(4, dict.checkout.required)
            : z.string().trim(),
        city:
          method === "delivery"
            ? z.string().trim().min(2, dict.checkout.required)
            : z.string().trim(),
        notes: z.string().trim(),
      }),
    [method, dict],
  );

  function update(field: keyof typeof values, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = schema.safeParse(values);

    if (!parsed.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }

    setSubmitting(true);
    const order = buildOrder({
      items: state.items,
      totals,
      customer: {
        ...parsed.data,
        method,
        address: method === "delivery" ? parsed.data.address : "",
        city: method === "delivery" ? parsed.data.city : "",
      },
    });

    saveOrder(order);
    clear();
    router.push(`/${locale}/order/${order.id}`);
  }

  if (!hydrated) {
    return <div className="h-72 animate-pulse rounded-card bg-paper-deep/60" aria-hidden="true" />;
  }

  if (state.items.length === 0) {
    return (
      <div className="rounded-card border border-dashed border-line bg-paper-deep/40 px-6 py-16 text-center">
        <CartIcon className="mx-auto size-8 text-accent" />
        <p className="mt-4 font-display text-xl">{dict.cart.empty}</p>
        <Link
          href={`/${locale}/menu`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
        >
          {dict.cart.emptyCta}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
      <div className="space-y-8">
        <section className="rounded-card border border-line bg-paper p-6">
          <h2 className="font-display text-xl font-semibold">{dict.checkout.contact}</h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Field
              id="name"
              label={dict.checkout.name}
              value={values.name}
              error={errors.name}
              autoComplete="name"
              onChange={(value) => update("name", value)}
            />
            <Field
              id="email"
              label={dict.checkout.email}
              type="email"
              value={values.email}
              error={errors.email}
              autoComplete="email"
              onChange={(value) => update("email", value)}
            />
            <Field
              id="phone"
              label={dict.checkout.phone}
              type="tel"
              value={values.phone}
              error={errors.phone}
              autoComplete="tel"
              onChange={(value) => update("phone", value)}
            />
          </div>
        </section>

        <section className="rounded-card border border-line bg-paper p-6">
          <h2 className="font-display text-xl font-semibold">{dict.checkout.method}</h2>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {(
              [
                { value: "delivery", label: dict.checkout.delivery },
                { value: "pickup", label: dict.checkout.pickup },
              ] as const
            ).map((option) => (
              <label
                key={option.value}
                className="cursor-pointer rounded-xl border border-line bg-white/60 px-4 py-3 text-sm font-medium transition hover:border-ink/40 has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-paper"
              >
                <input
                  type="radio"
                  name="method"
                  value={option.value}
                  checked={method === option.value}
                  onChange={() => setMethod(option.value)}
                  className="sr-only"
                />
                {option.label}
              </label>
            ))}
          </div>

          {method === "delivery" ? (
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Field
                  id="address"
                  label={dict.checkout.address}
                  value={values.address}
                  error={errors.address}
                  autoComplete="street-address"
                  onChange={(value) => update("address", value)}
                />
              </div>
              <Field
                id="city"
                label={dict.checkout.city}
                value={values.city}
                error={errors.city}
                autoComplete="address-level2"
                onChange={(value) => update("city", value)}
              />
            </div>
          ) : (
            <p className="mt-4 rounded-xl bg-olive/10 px-4 py-3 text-sm text-ink-soft">
              {dict.checkout.pickup} · {dict.footer.contact}: hello@brumacafe.com
            </p>
          )}

          <div className="mt-5">
            <label htmlFor="notes" className="text-sm font-medium">
              {dict.checkout.notes}
            </label>
            <textarea
              id="notes"
              rows={3}
              value={values.notes}
              onChange={(event) => update("notes", event.target.value)}
              className="mt-1.5 w-full rounded-xl border border-line bg-white/70 px-4 py-3 text-sm focus-visible:border-accent"
            />
          </div>
        </section>

        <section className="rounded-card border border-line bg-paper p-6">
          <h2 className="font-display text-xl font-semibold">{dict.checkout.payment}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {(
              [
                { value: "card", label: dict.checkout.card },
                { value: "transfer", label: dict.checkout.transfer },
              ] as const
            ).map((option) => (
              <label
                key={option.value}
                className="cursor-pointer rounded-xl border border-line bg-white/60 px-4 py-3 text-sm font-medium transition hover:border-ink/40 has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-paper"
              >
                <input
                  type="radio"
                  name="payment"
                  value={option.value}
                  checked={payment === option.value}
                  onChange={() => setPayment(option.value)}
                  className="sr-only"
                />
                {option.label}
              </label>
            ))}
          </div>
          <p className="mt-4 text-xs text-ink-soft">{dict.checkout.paymentNote}</p>
        </section>
      </div>

      <div className="space-y-4 lg:sticky lg:top-24">
        <CartSummary totals={totals} dict={dict}>
          <p className="mb-3 text-xs text-ink-soft">
            {state.items.length} {state.items.length === 1 ? dict.checkout.itemOne : dict.checkout.items}
          </p>
          <Button type="submit" size="lg" className="w-full" disabled={submitting}>
            {submitting ? dict.checkout.processing : dict.checkout.place}
            <ArrowRight className="size-4" />
          </Button>
          <Link
            href={`/${locale}/cart`}
            className="mt-3 block text-center text-sm font-medium text-ink-soft hover:text-ink"
          >
            {dict.checkout.back}
          </Link>
        </CartSummary>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={fieldClass}
      />
      {error ? (
        <p id={errorId} className="mt-1 text-xs text-accent">
          {error}
        </p>
      ) : null}
    </div>
  );
}
