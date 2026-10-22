export type CategoryId = "coffee" | "espresso" | "decaf" | "gear" | "gifts";

export type Localized<T> = Record<"en" | "es", T>;

export type Roast = "light" | "medium" | "dark" | "none";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: CategoryId;
  /** Price in minor units (cents). */
  price: number;
  image: string;
  origin: string;
  roast: Roast;
  featured: boolean;
  /** Coffee products accept grind and size options. */
  isCoffee: boolean;
  notes: Localized<string[]>;
  description: Localized<string>;
};

export type CartItem = {
  key: string;
  productId: string;
  slug: string;
  name: string;
  image: string;
  unitPrice: number;
  quantity: number;
  size: "250g" | "500g" | "one";
  grind: "whole" | "ground" | "none";
};

export type CartTotals = {
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
};

export type Order = {
  id: string;
  createdAt: string;
  items: CartItem[];
  totals: CartTotals;
  customer: {
    name: string;
    email: string;
    phone: string;
    method: "delivery" | "pickup";
    address: string;
    city: string;
    notes: string;
  };
};
