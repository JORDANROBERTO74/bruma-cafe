import { region } from "@/config/region";

export function formatPrice(minorUnits: number): string {
  return new Intl.NumberFormat(region.locale, {
    style: "currency",
    currency: region.currency,
    minimumFractionDigits: 2,
  }).format(minorUnits / 100);
}

export function formatPercent(value: number): string {
  return new Intl.NumberFormat(region.locale, {
    style: "percent",
    maximumFractionDigits: 0,
  }).format(value / 100);
}

export function formatDate(value: string): string {
  return new Intl.DateTimeFormat(region.locale, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}
