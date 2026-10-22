/**
 * Single source of truth for the market this store serves.
 * Change this file to relocate the store: currency, formatting and
 * shipping rules follow automatically.
 */
export const region = {
  id: "us",
  /** ISO 4217 code used for pricing and formatting. */
  currency: "USD",
  /** BCP 47 locale used by Intl formatters. */
  locale: "en-US",
  /** Flat shipping fee in minor units (cents). */
  shippingFlat: 600,
  /** Order subtotal (minor units) from which shipping is free. */
  freeShippingThreshold: 6000,
  coupon: {
    code: "BRUMA10",
    percent: 10,
  },
} as const;

export type Region = typeof region;
