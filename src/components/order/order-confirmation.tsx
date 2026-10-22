"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, CheckIcon } from "@/components/icons";
import { buttonStyles } from "@/components/ui/button";
import { Price } from "@/components/ui/price";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { formatDate, formatPrice } from "@/lib/format";
import { loadOrder } from "@/lib/order";
import type { Order } from "@/types";

export function OrderConfirmation({
  locale,
  dict,
  orderId,
}: {
  locale: Locale;
  dict: Dictionary;
  orderId: string;
}) {
  const [state, setState] = useState<{ order: Order | null; loaded: boolean }>({
    order: null,
    loaded: false,
  });

  useEffect(() => {
    const stored = loadOrder();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read from sessionStorage after hydration
    setState({ order: stored && stored.id === orderId ? stored : null, loaded: true });
  }, [orderId]);

  const { order, loaded } = state;

  if (!loaded) {
    return <div className="h-56 animate-pulse rounded-card bg-paper-deep/60" aria-hidden="true" />;
  }

  if (!order) {
    return (
      <div className="rounded-card border border-dashed border-line bg-paper-deep/40 px-6 py-16 text-center">
        <p className="font-display text-2xl">{dict.order.missing}</p>
        <p className="mt-2 text-ink-soft">{dict.order.missingBody}</p>
        <Link href={`/${locale}/menu`} className={buttonStyles({ className: "mt-6" })}>
          {dict.order.continue}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
      <div className="rounded-card border border-line bg-paper p-6 sm:p-8">
        <span className="grid size-12 place-items-center rounded-full bg-olive/15 text-olive">
          <CheckIcon className="size-6" />
        </span>
        <h2 className="display-md mt-4">{dict.order.title}</h2>
        <p className="mt-2 text-ink-soft">{dict.order.thanks}</p>

        <div className="mt-6 rounded-xl bg-paper-deep/70 px-4 py-3">
          <p className="eyebrow text-ink-soft">{dict.order.number}</p>
          <p className="mt-1 font-mono text-lg font-semibold">{order.id}</p>
          <p className="mt-1 text-xs text-ink-soft">{formatDate(order.createdAt)}</p>
        </div>

        <ul className="mt-6 divide-y divide-line">
          {order.items.map((item) => (
            <li key={item.key} className="flex items-center gap-4 py-3">
              <div className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-paper-deep">
                <Image src={item.image} alt={item.name} fill sizes="56px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{item.name}</p>
                <p className="text-xs text-ink-soft">
                  {item.quantity} ×{" "}
                  {[
                    item.size === "250g"
                      ? dict.product.size250
                      : item.size === "500g"
                        ? dict.product.size500
                        : "",
                    item.grind === "whole"
                      ? dict.product.whole
                      : item.grind === "ground"
                        ? dict.product.ground
                        : "",
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              </div>
              <Price value={item.unitPrice * item.quantity} size="sm" />
            </li>
          ))}
        </ul>

        <div className="mt-4 space-y-2 border-t border-line pt-4 text-sm">
          <div className="flex justify-between text-ink-soft">
            <span>{dict.cart.subtotal}</span>
            <span className="tabular-nums">{formatPrice(order.totals.subtotal)}</span>
          </div>
          {order.totals.discount > 0 ? (
            <div className="flex justify-between text-olive">
              <span>{dict.cart.discount}</span>
              <span className="tabular-nums">−{formatPrice(order.totals.discount)}</span>
            </div>
          ) : null}
          <div className="flex justify-between text-ink-soft">
            <span>{dict.cart.shipping}</span>
            <span className="tabular-nums">
              {order.totals.shipping === 0 ? dict.cart.free : formatPrice(order.totals.shipping)}
            </span>
          </div>
          <div className="flex justify-between border-t border-line pt-3 text-base font-semibold">
            <span>{dict.cart.total}</span>
            <Price value={order.totals.total} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-card border border-line bg-paper p-6">
          <h2 className="font-display text-lg font-semibold">{dict.order.next}</h2>
          <p className="mt-2 text-sm text-ink-soft">{dict.order.nextBody}</p>
          <p className="mt-4 text-sm">
            {order.customer.name}
            <br />
            {order.customer.email}
            <br />
            {order.customer.phone}
          </p>
          <p className="mt-3 text-sm text-ink-soft">
            {order.customer.method === "delivery"
              ? `${order.customer.address}, ${order.customer.city}`
              : dict.checkout.pickup}
          </p>
        </div>

        <Link href={`/${locale}/menu`} className={buttonStyles({ className: "w-full", size: "lg" })}>
          {dict.order.continue}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
