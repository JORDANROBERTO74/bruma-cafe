export const site = {
  name: "Bruma",
  legalName: "Bruma Coffee Co.",
  domain: "brumacafe.com",
  url: "https://brumacafe.com",
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
