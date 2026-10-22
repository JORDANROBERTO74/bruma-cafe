import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { products } from "@/data/products";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/menu",
    "/cart",
    "/checkout",
    "/legal/privacy",
    "/legal/terms",
    ...products.map((product) => `/menu/${product.slug}`),
  ];

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${site.url}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route.includes("/menu/") ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : route.includes("/menu/") ? 0.8 : 0.6,
      alternates: {
        languages: Object.fromEntries(
          locales.map((code) => [code, `${site.url}/${code}${route}`]),
        ),
      },
    })),
  );
}
