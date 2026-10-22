import type { CategoryId, Localized } from "@/types";

export type Category = {
  id: CategoryId;
  image: string;
  name: Localized<string>;
  description: Localized<string>;
};

export const categories: Category[] = [
  {
    id: "coffee",
    image: "/images/category-coffee.svg",
    name: { en: "Coffee", es: "Café" },
    description: {
      en: "Single-origin lots and our house blend.",
      es: "Lotes de origen y nuestra mezcla de la casa.",
    },
  },
  {
    id: "espresso",
    image: "/images/category-espresso.svg",
    name: { en: "Espresso", es: "Espresso" },
    description: {
      en: "Darker profiles built for pressure.",
      es: "Perfiles más oscuros, pensados para la presión.",
    },
  },
  {
    id: "decaf",
    image: "/images/category-decaf.svg",
    name: { en: "Decaf", es: "Descafeinado" },
    description: {
      en: "All the flavor, none of the buzz.",
      es: "Todo el sabor, sin la cafeína.",
    },
  },
  {
    id: "gear",
    image: "/images/category-gear.svg",
    name: { en: "Brew gear", es: "Equipo" },
    description: {
      en: "Simple tools that last a lifetime.",
      es: "Herramientas simples que duran toda la vida.",
    },
  },
  {
    id: "gifts",
    image: "/images/category-gifts.svg",
    name: { en: "Gifts", es: "Regalos" },
    description: {
      en: "Boxes for the coffee people in your life.",
      es: "Cajas para la gente cafetera de tu vida.",
    },
  },
];
