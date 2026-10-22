import type { CartItem, CartTotals, Order } from "@/types";

export function createOrderId(): string {
  const date = new Date();
  const stamp = [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("");
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `BRM-${stamp}-${random}`;
}

export function buildOrder(input: {
  items: CartItem[];
  totals: CartTotals;
  customer: Order["customer"];
}): Order {
  return {
    id: createOrderId(),
    createdAt: new Date().toISOString(),
    items: input.items,
    totals: input.totals,
    customer: input.customer,
  };
}

export const orderStorageKey = "bruma.order.v1";

export function saveOrder(order: Order): void {
  try {
    sessionStorage.setItem(orderStorageKey, JSON.stringify(order));
  } catch {
    // Storage can be unavailable in private mode; the confirmation page
    // simply falls back to its empty state.
  }
}

export function loadOrder(): Order | null {
  try {
    const raw = sessionStorage.getItem(orderStorageKey);
    return raw ? (JSON.parse(raw) as Order) : null;
  } catch {
    return null;
  }
}
