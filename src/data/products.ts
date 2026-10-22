import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "house-blend",
    slug: "house-blend",
    name: "Bruma House Blend",
    category: "coffee",
    price: 1600,
    image: "/images/product-house-blend.svg",
    origin: "Yungas, Bolivia",
    roast: "medium",
    featured: true,
    isCoffee: true,
    notes: {
      en: ["Milk chocolate", "Hazelnut", "Orange peel"],
      es: ["Chocolate con leche", "Avellana", "Cáscara de naranja"],
    },
    description: {
      en: "Our everyday blend: sweet, rounded and forgiving in any brewer. Two lots, roasted together until they taste like one.",
      es: "Nuestra mezcla de todos los días: dulce, redonda y noble en cualquier método. Dos lotes tostados juntos hasta sonar a uno.",
    },
  },
  {
    id: "finca-la-paz",
    slug: "finca-la-paz",
    name: "Finca La Paz",
    category: "coffee",
    price: 1900,
    image: "/images/product-finca-la-paz.svg",
    origin: "Caranavi, La Paz",
    roast: "light",
    featured: true,
    isCoffee: true,
    notes: {
      en: ["Jasmine", "Citrus", "Honey"],
      es: ["Jazmín", "Cítricos", "Miel"],
    },
    description: {
      en: "A washed Caturra from a single family farm at 1,680 m. Delicate, floral and bright without being sharp.",
      es: "Un Caturra lavado de una finca familiar a 1.680 m. Delicado, floral y brillante sin ser ácido.",
    },
  },
  {
    id: "yungas-reserve",
    slug: "yungas-reserve",
    name: "Yungas Reserve",
    category: "coffee",
    price: 2100,
    image: "/images/product-yungas-reserve.svg",
    origin: "Coripata, Yungas",
    roast: "medium",
    featured: true,
    isCoffee: true,
    notes: {
      en: ["Plum", "Dark cocoa", "Brown sugar"],
      es: ["Ciruela", "Cacao oscuro", "Azúcar morena"],
    },
    description: {
      en: "Our most complete cup: ripe fruit, deep cocoa and a long finish. Grown on steep terraces and hand-sorted twice.",
      es: "Nuestra taza más completa: fruta madura, cacao profundo y final largo. Cultivado en terrazas empinadas y seleccionado a mano dos veces.",
    },
  },
  {
    id: "espresso-nocturno",
    slug: "espresso-nocturno",
    name: "Espresso Nocturno",
    category: "espresso",
    price: 1700,
    image: "/images/product-espresso-nocturno.svg",
    origin: "Blend · Bolivia & Peru",
    roast: "dark",
    featured: true,
    isCoffee: true,
    notes: {
      en: ["Dark chocolate", "Almond", "Molasses"],
      es: ["Chocolate oscuro", "Almendra", "Melaza"],
    },
    description: {
      en: "Built for 9 bars: syrupy body, low acidity and a crema that holds. Pull it short or stretch it with milk.",
      es: "Pensado para 9 bares: cuerpo almibarado, acidez baja y una crema que aguanta. Tómalo corto o estíralo con leche.",
    },
  },
  {
    id: "decaf-sereno",
    slug: "decaf-sereno",
    name: "Decaf Sereno",
    category: "decaf",
    price: 1800,
    image: "/images/product-decaf-sereno.svg",
    origin: "Caranavi, La Paz",
    roast: "medium",
    featured: false,
    isCoffee: true,
    notes: {
      en: ["Caramel", "Red apple", "Cocoa"],
      es: ["Caramelo", "Manzana roja", "Cacao"],
    },
    description: {
      en: "Sugarcane-process decaf that tastes like coffee, not like a compromise. Same farm, same care, no caffeine.",
      es: "Descafeinado por proceso de caña que sabe a café, no a concesión. La misma finca, el mismo cuidado, sin cafeína.",
    },
  },
  {
    id: "pour-over-set",
    slug: "pour-over-set",
    name: "Ceramic Pour-Over Set",
    category: "gear",
    price: 3400,
    image: "/images/product-pour-over-set.svg",
    origin: "Made in Bolivia",
    roast: "none",
    featured: false,
    isCoffee: false,
    notes: {
      en: ["Stoneware", "Matte glaze", "Size 02"],
      es: ["Gres", "Esmalte mate", "Talla 02"],
    },
    description: {
      en: "A dripper and carafe in local stoneware, glazed in our house cream. Brews two cups, cleans in seconds.",
      es: "Un dripper y una jarra en gres local, esmaltados en nuestro crema de la casa. Prepara dos tazas y se limpia en segundos.",
    },
  },
  {
    id: "burr-grinder",
    slug: "burr-grinder",
    name: "Hand Burr Grinder",
    category: "gear",
    price: 6500,
    image: "/images/product-burr-grinder.svg",
    origin: "Stainless steel",
    roast: "none",
    featured: false,
    isCoffee: false,
    notes: {
      en: ["48 mm burrs", "40 clicks", "Travel case"],
      es: ["Muelas de 48 mm", "40 clics", "Estuche de viaje"],
    },
    description: {
      en: "Conical steel burrs, a silent crank and a grind range wide enough for espresso and French press. No electricity required.",
      es: "Muelas cónicas de acero, manivela silenciosa y un rango de molienda que cubre espresso y prensa francesa. Sin electricidad.",
    },
  },
  {
    id: "bruma-mug",
    slug: "bruma-mug",
    name: "Bruma Stoneware Mug",
    category: "gear",
    price: 1800,
    image: "/images/product-bruma-mug.svg",
    origin: "Made in Bolivia",
    roast: "none",
    featured: false,
    isCoffee: false,
    notes: {
      en: ["300 ml", "Dishwasher safe", "Matte finish"],
      es: ["300 ml", "Apta lavavajillas", "Acabado mate"],
    },
    description: {
      en: "A thick-walled mug that keeps coffee warm for the length of a conversation. Thrown and glazed in small runs.",
      es: "Una taza de pared gruesa que mantiene el café caliente lo que dura una conversación. Torneada y esmaltada en series cortas.",
    },
  },
  {
    id: "gift-box",
    slug: "gift-box",
    name: "Roaster's Gift Box",
    category: "gifts",
    price: 4200,
    image: "/images/product-gift-box.svg",
    origin: "Assembled in La Paz",
    roast: "none",
    featured: false,
    isCoffee: false,
    notes: {
      en: ["2 coffees", "Dripper", "Filters", "Card"],
      es: ["2 cafés", "Dripper", "Filtros", "Tarjeta"],
    },
    description: {
      en: "Two 250 g bags of our current favorites, a ceramic dripper, filters and a handwritten card. Ready to give.",
      es: "Dos bolsas de 250 g de nuestros favoritos del momento, un dripper de cerámica, filtros y una tarjeta escrita a mano. Listo para regalar.",
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  const sameCategory = products.filter(
    (candidate) => candidate.id !== product.id && candidate.category === product.category,
  );
  const rest = products.filter(
    (candidate) => candidate.id !== product.id && candidate.category !== product.category,
  );
  return [...sameCategory, ...rest].slice(0, limit);
}
