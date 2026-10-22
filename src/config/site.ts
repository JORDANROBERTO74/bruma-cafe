/**
 * Canonical origin for metadata, canonical links, hreflang, sitemap, robots and
 * Open Graph URLs. Set NEXT_PUBLIC_SITE_URL on the host (the Vercel production
 * domain, for example); the fallback keeps local builds pointing at the live site.
 */
const FALLBACK_URL = "https://brumacafe.com";

function resolveSiteUrl(): string {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return (value && value.length > 0 ? value : FALLBACK_URL).replace(/\/+$/, "");
}

export const site = {
  name: "Bruma",
  legalName: "Bruma Coffee Co.",
  domain: "brumacafe.com",
  url: resolveSiteUrl(),
  email: "hello@brumacafe.com",
  phone: "+591 2 555 0142",
  address: {
    street: "Calle 21, Sopocachi",
    city: "La Paz",
    country: "Bolivia",
    countryCode: "BO",
  },
  social: {
    instagram: "https://instagram.com/brumacafe",
    x: "https://x.com/brumacafe",
  },
  nav: [
    { key: "menu", href: "/menu" },
    { key: "story", href: "/#story" },
    { key: "gifts", href: "/menu?category=gifts" },
  ],
} as const;
