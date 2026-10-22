import { region } from "@/config/region";
import type { CartItem, CartTotals, Product } from "@/types";

export type CartState = {
  items: CartItem[];
  coupon: string | null;
};

export type CartAction =
  | { type: "hydrate"; state: CartState }
  | { type: "add"; item: CartItem }
  | { type: "remove"; key: string }
  | { type: "setQuantity"; key: string; quantity: number }
  | { type: "applyCoupon"; code: string }
  | { type: "removeCoupon" }
  | { type: "clear" };

export const emptyCart: CartState = { items: [], coupon: null };

export function itemKey(
  productId: string,
  size: CartItem["size"],
  grind: CartItem["grind"],
): string {
  return `${productId}:${size}:${grind}`;
}

export function unitPriceFor(product: Product, size: CartItem["size"]): number {
  return size === "500g" ? Math.round(product.price * 1.8) : product.price;
}

export function buildCartItem(
  product: Product,
  options: { size: CartItem["size"]; grind: CartItem["grind"]; quantity: number },
): CartItem {
  return {
    key: itemKey(product.id, options.size, options.grind),
    productId: product.id,
    slug: product.slug,
    name: product.name,
    image: product.image,
    unitPrice: unitPriceFor(product, options.size),
    quantity: options.quantity,
    size: options.size,
    grind: options.grind,
  };
}

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "hydrate":
      return action.state;
    case "add": {
      const existing = state.items.find((item) => item.key === action.item.key);
      if (!existing) {
        return { ...state, items: [...state.items, action.item] };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.key === action.item.key
            ? {
                ...item,
                quantity: Math.min(20, item.quantity + action.item.quantity),
              }
            : item,
        ),
      };
    }
    case "remove":
      return { ...state, items: state.items.filter((item) => item.key !== action.key) };
    case "setQuantity":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.key === action.key
              ? { ...item, quantity: Math.min(20, Math.max(0, action.quantity)) }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };
    case "applyCoupon":
      return { ...state, coupon: action.code.trim().toUpperCase() };
    case "removeCoupon":
      return { ...state, coupon: null };
    case "clear":
      return emptyCart;
    default:
      return state;
  }
}

export function isCouponValid(code: string | null): boolean {
  return code === region.coupon.code;
}

export function calculateTotals(state: CartState): CartTotals {
  const subtotal = state.items.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0,
  );
  const discount = isCouponValid(state.coupon)
    ? Math.round((subtotal * region.coupon.percent) / 100)
    : 0;
  const discounted = subtotal - discount;
  const shipping =
    discounted === 0 || discounted >= region.freeShippingThreshold ? 0 : region.shippingFlat;

  return {
    subtotal,
    discount,
    shipping,
    total: discounted + shipping,
  };
}

export function cartCount(state: CartState): number {
  return state.items.reduce((sum, item) => sum + item.quantity, 0);
}
