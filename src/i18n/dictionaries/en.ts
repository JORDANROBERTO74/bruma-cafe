/**
 * English dictionary. This file is the source of truth for the copy shape:
 * every other locale must implement the same `Dictionary` type.
 */
export const en = {
  meta: {
    home: {
      title: "Bruma — Small-batch coffee from Bolivia",
      description:
        "Specialty coffee grown in the Bolivian highlands, roasted in small batches and shipped worldwide. Whole bean or ground, always fresh.",
    },
    menu: {
      title: "Shop — Bruma",
      description:
        "Single-origin coffee, espresso blends, decaf, brewing gear and gifts from Bruma.",
    },
    cart: { title: "Your cart — Bruma", description: "Review your Bruma order." },
    checkout: { title: "Checkout — Bruma", description: "Complete your Bruma order." },
    order: { title: "Order confirmed — Bruma", description: "Your Bruma order is confirmed." },
    privacy: { title: "Privacy — Bruma", description: "How Bruma handles your data." },
    terms: { title: "Terms — Bruma", description: "Terms of sale for Bruma." },
    notFound: { title: "Page not found — Bruma", description: "This page does not exist." },
  },
  common: {
    brand: "Bruma",
    tagline: "Small-batch coffee, big mornings.",
    skip: "Skip to content",
    loading: "Loading…",
    close: "Close menu",
    from: "From",
    each: "each",
  },
  nav: {
    menu: "Shop",
    story: "Our story",
    gifts: "Gifts",
    cart: "Cart",
    language: "Language",
  },
  home: {
    hero: {
      eyebrow: "Roasted in La Paz · Shipped worldwide",
      title: "Coffee with a sense of place.",
      subtitle:
        "High-altitude beans from Bolivian family farms, roasted in small batches every week. Bright, sweet and never rushed.",
      cta: "Shop the coffee",
      secondary: "Read our story",
      note: "Free shipping over $60 · Roasted to order",
      card: "Small batch, roasted weekly",
    },
    categories: {
      title: "Find your cup",
      subtitle: "Five ways into the same obsession: good coffee, made carefully.",
    },
    featured: {
      title: "This week's roast",
      subtitle: "What we are drinking right now, straight from the roastery.",
      viewAll: "See all products",
    },
    story: {
      eyebrow: "Our story",
      title: "Grown at 1,600 meters, roasted by hand.",
      altitude: "Altitude",
      body1:
        "Bruma began in a small Sopocachi kitchen with a second-hand drum roaster and a stubborn question: why is it so hard to find Bolivian coffee at its best?",
      body2:
        "Today we work directly with four family farms in the Yungas and buy whole harvests, not leftovers. Every lot is cupped, scored and roasted to the profile it asks for.",
      points: [
        {
          title: "Direct trade",
          text: "We pay above fair-trade prices and settle with farmers before the harvest ends.",
        },
        {
          title: "Small batches",
          text: "Roasted weekly in 12 kg batches, never stockpiled, never past its prime.",
        },
        {
          title: "Traceable lots",
          text: "Every bag names the farm, the altitude and the harvest date.",
        },
      ],
      cta: "Meet the farms",
    },
    testimonials: {
      title: "Loved in kitchens and cafés",
      subtitle: "A few words from the people who order every month.",
      items: [
        {
          quote:
            "The Yungas Reserve tastes like plum and dark cocoa. I stopped buying supermarket coffee entirely.",
          author: "Daniela R.",
          location: "Madrid, Spain",
        },
        {
          quote:
            "We serve Bruma in our café. Consistent, sweet and forgiving on the espresso machine.",
          author: "Marcus L.",
          location: "Berlin, Germany",
        },
        {
          quote:
            "Ordered on Monday, roasted on Tuesday, in my kitchen in Tokyo by Friday. That is wild.",
          author: "Aiko T.",
          location: "Tokyo, Japan",
        },
      ],
    },
    newsletter: {
      title: "One email a month, no noise.",
      subtitle: "New lots, brewing notes and early access to limited harvests.",
      placeholder: "you@example.com",
      cta: "Subscribe",
      success: "You are in. Check your inbox for a welcome note.",
      invalid: "Enter a valid email address.",
      disclaimer: "No spam. Unsubscribe anytime.",
    },
  },
  menu: {
    title: "The shop",
    subtitle: "Roasted to order, packed the same week and shipped worldwide.",
    all: "All products",
    results: "products",
    resultOne: "product",
    empty: "Nothing here yet.",
    emptyCta: "See all products",
    categories: {
      coffee: "Coffee",
      espresso: "Espresso",
      decaf: "Decaf",
      gear: "Brew gear",
      gifts: "Gifts",
    },
  },
  product: {
    back: "Back to shop",
    notes: "Tasting notes",
    origin: "Origin",
    roast: "Roast",
    size: "Size",
    grind: "Grind",
    size250: "250 g",
    size500: "500 g",
    whole: "Whole bean",
    ground: "Ground",
    add: "Add to cart",
    added: "Added to cart",
    related: "You may also like",
    shipping: "Ships within 48 hours. Free shipping over $60.",
    roastLabels: {
      light: "Light",
      medium: "Medium",
      dark: "Dark",
      none: "—",
    },
  },
  cart: {
    title: "Your cart",
    subtitle: "A good decision, still editable.",
    empty: "Your cart is empty.",
    emptyCta: "Start shopping",
    remove: "Remove",
    quantity: "Quantity",
    subtotal: "Subtotal",
    discount: "Discount",
    shipping: "Shipping",
    free: "Free",
    total: "Total",
    checkout: "Continue to checkout",
    continue: "Continue shopping",
    coupon: "Discount code",
    couponPlaceholder: "BRUMA10",
    apply: "Apply",
    couponOk: "Code applied.",
    couponBad: "That code is not valid.",
    clear: "Clear cart",
    shippingNote: "Shipping is calculated at checkout.",
  },
  checkout: {
    title: "Checkout",
    subtitle: "Two minutes and the coffee is on its way.",
    contact: "Contact",
    name: "Full name",
    email: "Email",
    phone: "Phone",
    method: "Delivery method",
    delivery: "Delivery",
    pickup: "Pickup at the roastery",
    address: "Address",
    city: "City",
    notes: "Notes (optional)",
    payment: "Payment",
    paymentNote:
      "This is a demo checkout. No payment is processed and no card data is stored.",
    card: "Card on delivery",
    transfer: "Bank transfer",
    summary: "Order summary",
    place: "Place order",
    processing: "Placing order…",
    required: "This field is required.",
    invalidEmail: "Enter a valid email address.",
    back: "Back to cart",
    items: "items",
    itemOne: "item",
  },
  order: {
    title: "Thank you.",
    thanks: "Your order is confirmed and the roastery has been notified.",
    number: "Order number",
    summary: "Summary",
    next: "What happens next",
    nextBody:
      "We roast on the next working day, pack your order and send a tracking link by email.",
    continue: "Continue shopping",
    missing: "Order not found",
    missingBody: "We could not find this order in this browser session.",
  },
  legal: {
    privacy: {
      title: "Privacy policy",
      updated: "Last updated: October 2026",
      sections: [
        {
          h: "What we collect",
          p: "We collect the name, email, phone and delivery address you provide at checkout, plus basic analytics about how the site is used.",
        },
        {
          h: "Why we collect it",
          p: "To process and ship your order, answer support requests and improve the store. We do not sell personal data.",
        },
        {
          h: "Cookies",
          p: "We use a language cookie and a local cart stored in your browser. No advertising cookies are set.",
        },
        {
          h: "Your rights",
          p: "You can request a copy or deletion of your data by writing to hello@brumacafe.com. We respond within 30 days.",
        },
        {
          h: "Retention",
          p: "Order records are kept for six years for accounting purposes. Analytics data is aggregated after 14 months.",
        },
      ],
    },
    terms: {
      title: "Terms of sale",
      updated: "Last updated: October 2026",
      sections: [
        {
          h: "Orders",
          p: "An order is confirmed when you receive the confirmation screen and email. We may cancel an order if a lot sells out.",
        },
        {
          h: "Prices and shipping",
          p: "Prices are shown in US dollars and include applicable taxes unless stated otherwise. Shipping is free over $60.",
        },
        {
          h: "Freshness",
          p: "Coffee is roasted to order. Small variations in color and flavor between lots are normal and not a defect.",
        },
        {
          h: "Returns",
          p: "Unopened gear can be returned within 30 days. Coffee is a food product and cannot be returned once opened.",
        },
        {
          h: "Contact",
          p: "Questions about an order: hello@brumacafe.com. This store is operated by Bruma Coffee Co., La Paz, Bolivia.",
        },
      ],
    },
  },
  footer: {
    explore: "Explore",
    help: "Help",
    legal: "Legal",
    contact: "Contact",
    shipping: "Shipping",
    privacy: "Privacy",
    terms: "Terms",
    rights: "All rights reserved.",
    note: "Roasted in La Paz, Bolivia. Shipped worldwide.",
  },
  notFound: {
    title: "This page went cold.",
    text: "The link may be old, or the page may have moved.",
    cta: "Back to the shop",
  },
};

export type Dictionary = typeof en;
