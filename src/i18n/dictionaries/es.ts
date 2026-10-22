import type { Dictionary } from "./en";

export const es: Dictionary = {
  meta: {
    home: {
      title: "Bruma — Café de especialidad de Bolivia",
      description:
        "Café de especialidad cultivado en el altiplano boliviano, tostado en pequeños lotes y enviado a todo el mundo. En grano o molido, siempre fresco.",
    },
    menu: {
      title: "Tienda — Bruma",
      description:
        "Café de origen, mezclas para espresso, descafeinado, equipo de preparación y regalos de Bruma.",
    },
    cart: { title: "Tu carrito — Bruma", description: "Revisa tu pedido de Bruma." },
    checkout: { title: "Pago — Bruma", description: "Completa tu pedido de Bruma." },
    order: { title: "Pedido confirmado — Bruma", description: "Tu pedido de Bruma está confirmado." },
    privacy: { title: "Privacidad — Bruma", description: "Cómo tratamos tus datos en Bruma." },
    terms: { title: "Términos — Bruma", description: "Condiciones de venta de Bruma." },
    notFound: { title: "Página no encontrada — Bruma", description: "Esta página no existe." },
  },
  common: {
    brand: "Bruma",
    tagline: "Café en pequeños lotes, mañanas grandes.",
    skip: "Ir al contenido",
    loading: "Cargando…",
    close: "Cerrar menú",
    from: "Desde",
    each: "c/u",
  },
  nav: {
    menu: "Tienda",
    story: "Nuestra historia",
    gifts: "Regalos",
    cart: "Carrito",
    language: "Idioma",
  },
  home: {
    hero: {
      eyebrow: "Tostado en La Paz · Envíos a todo el mundo",
      title: "Café con sentido de lugar.",
      subtitle:
        "Granos de altura de fincas familiares bolivianas, tostados en pequeños lotes cada semana. Dulces, brillantes y sin prisa.",
      cta: "Comprar café",
      secondary: "Leer nuestra historia",
      note: "Envío gratis desde $60 · Tostado a pedido",
      card: "Pequeños lotes, tostados cada semana",
    },
    categories: {
      title: "Encuentra tu taza",
      subtitle: "Cinco maneras de entrar en la misma obsesión: buen café, hecho con cuidado.",
    },
    featured: {
      title: "El tueste de la semana",
      subtitle: "Lo que estamos tomando ahora, directo de la tostaduría.",
      viewAll: "Ver todos los productos",
    },
    story: {
      eyebrow: "Nuestra historia",
      title: "Cultivado a 1.600 metros, tostado a mano.",
      altitude: "Altitud",
      body1:
        "Bruma nació en una cocina de Sopocachi con un tostador de tambor de segunda mano y una pregunta terca: por qué cuesta tanto encontrar el café boliviano en su mejor versión.",
      body2:
        "Hoy trabajamos directamente con cuatro fincas familiares de los Yungas y compramos cosechas completas, no sobras. Cada lote se cata, se puntúa y se tuesta con el perfil que pide.",
      points: [
        {
          title: "Comercio directo",
          text: "Pagamos por encima del precio justo y liquidamos con los productores antes de terminar la cosecha.",
        },
        {
          title: "Pequeños lotes",
          text: "Tostamos cada semana en lotes de 12 kg, sin acopiar y sin pasar el punto.",
        },
        {
          title: "Lotes trazables",
          text: "Cada bolsa indica la finca, la altitud y la fecha de cosecha.",
        },
      ],
      cta: "Conocer las fincas",
    },
    testimonials: {
      title: "Querido en cocinas y cafeterías",
      subtitle: "Algunas palabras de quienes compran cada mes.",
      items: [
        {
          quote:
            "El Yungas Reserve sabe a ciruela y cacao oscuro. Dejé de comprar café de supermercado.",
          author: "Daniela R.",
          location: "Madrid, España",
        },
        {
          quote:
            "Servimos Bruma en nuestra cafetería. Constante, dulce y noble en la máquina de espresso.",
          author: "Marcus L.",
          location: "Berlín, Alemania",
        },
        {
          quote:
            "Pedí el lunes, tostaron el martes y el viernes estaba en mi cocina en Tokio. Increíble.",
          author: "Aiko T.",
          location: "Tokio, Japón",
        },
      ],
    },
    newsletter: {
      title: "Un correo al mes, sin ruido.",
      subtitle: "Lotes nuevos, notas de preparación y acceso anticipado a cosechas limitadas.",
      placeholder: "tu@ejemplo.com",
      cta: "Suscribirme",
      success: "Listo. Revisa tu correo para el mensaje de bienvenida.",
      invalid: "Escribe un correo válido.",
      disclaimer: "Sin spam. Cancela cuando quieras.",
    },
  },
  menu: {
    title: "La tienda",
    subtitle: "Tostado a pedido, empacado la misma semana y enviado a todo el mundo.",
    all: "Todos los productos",
    results: "productos",
    resultOne: "producto",
    empty: "Aquí todavía no hay nada.",
    emptyCta: "Ver todos los productos",
    categories: {
      coffee: "Café",
      espresso: "Espresso",
      decaf: "Descafeinado",
      gear: "Equipo",
      gifts: "Regalos",
    },
  },
  product: {
    back: "Volver a la tienda",
    notes: "Notas de cata",
    origin: "Origen",
    roast: "Tueste",
    size: "Tamaño",
    grind: "Molienda",
    size250: "250 g",
    size500: "500 g",
    whole: "En grano",
    ground: "Molido",
    add: "Añadir al carrito",
    added: "Añadido al carrito",
    related: "También te puede gustar",
    shipping: "Se envía en 48 horas. Envío gratis desde $60.",
    roastLabels: {
      light: "Claro",
      medium: "Medio",
      dark: "Oscuro",
      none: "—",
    },
  },
  cart: {
    title: "Tu carrito",
    subtitle: "Una buena decisión, todavía editable.",
    empty: "Tu carrito está vacío.",
    emptyCta: "Empezar a comprar",
    remove: "Quitar",
    quantity: "Cantidad",
    subtotal: "Subtotal",
    discount: "Descuento",
    shipping: "Envío",
    free: "Gratis",
    total: "Total",
    checkout: "Continuar al pago",
    continue: "Seguir comprando",
    coupon: "Código de descuento",
    couponPlaceholder: "BRUMA10",
    apply: "Aplicar",
    couponOk: "Código aplicado.",
    couponBad: "Ese código no es válido.",
    clear: "Vaciar carrito",
    shippingNote: "El envío se calcula al pagar.",
  },
  checkout: {
    title: "Pago",
    subtitle: "Dos minutos y el café va en camino.",
    contact: "Contacto",
    name: "Nombre completo",
    email: "Correo",
    phone: "Teléfono",
    method: "Método de entrega",
    delivery: "Envío a domicilio",
    pickup: "Recoger en la tostaduría",
    address: "Dirección",
    city: "Ciudad",
    notes: "Notas (opcional)",
    payment: "Pago",
    paymentNote:
      "Este es un checkout de demostración. No se procesa ningún pago ni se guardan datos de tarjeta.",
    card: "Pago contra entrega",
    transfer: "Transferencia bancaria",
    summary: "Resumen del pedido",
    place: "Confirmar pedido",
    processing: "Confirmando…",
    required: "Este campo es obligatorio.",
    invalidEmail: "Escribe un correo válido.",
    back: "Volver al carrito",
    items: "artículos",
    itemOne: "artículo",
  },
  order: {
    title: "Gracias.",
    thanks: "Tu pedido está confirmado y la tostaduría ya fue notificada.",
    number: "Número de pedido",
    summary: "Resumen",
    next: "Qué pasa ahora",
    nextBody:
      "Tostamos el siguiente día hábil, empacamos tu pedido y enviamos un enlace de seguimiento por correo.",
    continue: "Seguir comprando",
    missing: "Pedido no encontrado",
    missingBody: "No encontramos este pedido en la sesión de este navegador.",
  },
  legal: {
    privacy: {
      title: "Política de privacidad",
      updated: "Última actualización: octubre 2026",
      sections: [
        {
          h: "Qué recopilamos",
          p: "Recopilamos el nombre, correo, teléfono y dirección de entrega que dejas al pagar, además de analítica básica sobre el uso del sitio.",
        },
        {
          h: "Para qué lo usamos",
          p: "Para procesar y enviar tu pedido, responder consultas y mejorar la tienda. No vendemos datos personales.",
        },
        {
          h: "Cookies",
          p: "Usamos una cookie de idioma y guardamos el carrito en tu navegador. No usamos cookies publicitarias.",
        },
        {
          h: "Tus derechos",
          p: "Puedes pedir una copia o la eliminación de tus datos escribiendo a hello@brumacafe.com. Respondemos en 30 días.",
        },
        {
          h: "Conservación",
          p: "Los registros de pedidos se guardan seis años por contabilidad. La analítica se agrega después de 14 meses.",
        },
      ],
    },
    terms: {
      title: "Condiciones de venta",
      updated: "Última actualización: octubre 2026",
      sections: [
        {
          h: "Pedidos",
          p: "Un pedido queda confirmado cuando ves la pantalla de confirmación y recibes el correo. Podemos cancelarlo si un lote se agota.",
        },
        {
          h: "Precios y envíos",
          p: "Los precios se muestran en dólares e incluyen impuestos aplicables salvo indicación contraria. El envío es gratis desde $60.",
        },
        {
          h: "Frescura",
          p: "El café se tuesta a pedido. Pequeñas variaciones de color y sabor entre lotes son normales y no son un defecto.",
        },
        {
          h: "Devoluciones",
          p: "El equipo sin abrir puede devolverse en 30 días. El café es un alimento y no se acepta devolución una vez abierto.",
        },
        {
          h: "Contacto",
          p: "Consultas sobre un pedido: hello@brumacafe.com. Esta tienda es operada por Bruma Coffee Co., La Paz, Bolivia.",
        },
      ],
    },
  },
  footer: {
    explore: "Explorar",
    help: "Ayuda",
    legal: "Legal",
    contact: "Contacto",
    shipping: "Envíos",
    privacy: "Privacidad",
    terms: "Términos",
    rights: "Todos los derechos reservados.",
    note: "Tostado en La Paz, Bolivia. Envíos a todo el mundo.",
  },
  notFound: {
    title: "Esta página se enfrió.",
    text: "Puede que el enlace sea viejo o que la página se haya movido.",
    cta: "Volver a la tienda",
  },
};
