"use client";

import { useEffect, useState } from "react";
import { CheckIcon, PlusIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Price } from "@/components/ui/price";
import { QuantityStepper } from "@/components/ui/quantity-stepper";
import type { Dictionary } from "@/i18n/get-dictionary";
import { buildCartItem, unitPriceFor } from "@/lib/cart";
import { cn } from "@/lib/cn";
import { useCart } from "@/providers/cart-provider";
import type { CartItem, Product } from "@/types";

export function AddToCart({ product, dict }: { product: Product; dict: Dictionary }) {
  const { add } = useCart();
  const [size, setSize] = useState<CartItem["size"]>(product.isCoffee ? "250g" : "one");
  const [grind, setGrind] = useState<CartItem["grind"]>(
    product.isCoffee ? "whole" : "none",
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const timer = setTimeout(() => setAdded(false), 2200);
    return () => clearTimeout(timer);
  }, [added]);

  const price = product.isCoffee ? unitPriceFor(product, size) : product.price;

  function handleAdd() {
    add(buildCartItem(product, { size, grind, quantity }));
    setAdded(true);
  }

  const optionClass =
    "cursor-pointer rounded-full border border-line px-4 py-2 text-sm font-medium text-ink-soft transition hover:border-ink/40 has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-paper has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent";

  return (
    <div className="mt-7">
      <div className="flex items-baseline gap-3">
        <Price value={price} size="lg" />
        {product.isCoffee ? (
          <span className="text-sm text-ink-soft">/ {size === "500g" ? dict.product.size500 : dict.product.size250}</span>
        ) : null}
      </div>

      {product.isCoffee ? (
        <div className="mt-6 space-y-5">
          <fieldset>
            <legend className="eyebrow text-ink-soft">{dict.product.size}</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {(["250g", "500g"] as const).map((value) => (
                <label key={value} className={optionClass}>
                  <input
                    type="radio"
                    name="size"
                    value={value}
                    checked={size === value}
                    onChange={() => setSize(value)}
                    className="sr-only"
                  />
                  {value === "250g" ? dict.product.size250 : dict.product.size500}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="eyebrow text-ink-soft">{dict.product.grind}</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {(["whole", "ground"] as const).map((value) => (
                <label key={value} className={optionClass}>
                  <input
                    type="radio"
                    name="grind"
                    value={value}
                    checked={grind === value}
                    onChange={() => setGrind(value)}
                    className="sr-only"
                  />
                  {value === "whole" ? dict.product.whole : dict.product.ground}
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      ) : null}

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <QuantityStepper
          value={quantity}
          onChange={setQuantity}
          label={dict.cart.quantity}
        />
        <Button size="lg" onClick={handleAdd} className="min-w-44">
          {added ? (
            <>
              <CheckIcon className="size-4" />
              {dict.product.added}
            </>
          ) : (
            <>
              <PlusIcon className="size-4" />
              {dict.product.add}
            </>
          )}
        </Button>
      </div>

      <p
        aria-live="polite"
        className={cn(
          "mt-3 text-sm text-olive transition-opacity",
          added ? "opacity-100" : "opacity-0",
        )}
      >
        {added ? dict.product.added : ""}
      </p>

      <p className="mt-2 text-sm text-ink-soft">{dict.product.shipping}</p>
    </div>
  );
}
