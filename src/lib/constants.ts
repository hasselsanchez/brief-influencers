export const NAV_LINKS = [
  { label: "Ecosistema", href: "#que-es" },
  { label: "Objetivo", href: "#objetivo" },
  { label: "Soluciones", href: "#productos" },
  { label: "Hooks", href: "#hooks" },
  { label: "Do's & Don'ts", href: "#reglas" },
];

export const HERO = {
  badge: "Campaña Awareness 2026",
  title: "Brief de campaña para",
  titleAccent: "influencers",
  subtitle:
    "Tu guía completa para crear contenido que posicione a T1 como el ecosistema del comercio moderno en México.",
  ribbonStats:
    "25K+ negocios  ·  150M+ transacciones  ·  40M+ envíos  ·  86% aprobación",
};

export const QUE_ES = {
  eyebrow: "01 — Qué es T1",
  title: "Todo en Uno. Bienvenido a la nueva era del",
  titleAccent: "comercio moderno.",
  desc: "T1 es un ecosistema de comercio 100% mexicano que conecta todo lo que un negocio necesita para operar desde un solo lugar: tienda, pagos y envíos en una sola experiencia.",
  products: [
    {
      name: "t1tienda" as const,
      glowColor: "rgba(226,97,83,0.08)",
      intro: "Somos",
      introAccent: "la primera plataforma en el mundo",
      introEnd:
        "que convierte un texto en un negocio funcional en minutos.",
      desc: "Crea tu tienda en línea con inteligencia artificial. Describe tu negocio en un texto y obtén una tienda funcional en segundos.",
      features: [
        "Lista para vender, cobrar y enviar el mismo día",
        "Sin código, sin diseño, sin agencia",
        "En menos de 1 minuto",
      ],
    },
    {
      name: "t1pagos" as const,
      glowColor: "rgba(255,109,0,0.08)",
      intro: "",
      introAccent: "",
      introEnd: "",
      desc: "Cobra con links de pago en segundos de forma fácil y segura. Acepta tarjetas, MSI y SPEI sin terminal física.",
      features: [
        "Compártelos por mensaje en cualquier canal",
        "86% tasa de aprobación",
        "Seguro de contracargo",
      ],
    },
    {
      name: "t1envios" as const,
      glowColor: "rgba(79,193,83,0.08)",
      intro: "",
      introAccent: "",
      introEnd: "",
      desc: "Cotiza, compara y envía con múltiples paqueterías desde un solo lugar, con rastreo en tiempo real.",
      features: [
        "FedEx, DHL, UPS, 99 minutos y más",
        "Tarifas preferenciales",
        "Gestión de incidencias",
      ],
    },
  ],
  highlightStatement: {
    before: "Todo está conectado",
    middle:
      ": quien crea su tienda ya tiene pagos y envíos listos, ",
    after: "sin configurar herramientas extra.",
  },
};

export const DIFERENCIADORES = {
  eyebrow: "02 — Diferenciadores",
  title: "¿Por qué",
  titleAccent1: "T1",
  titleMid: "y no",
  titleAccent2: "cualquier otra",
  titleEnd: "plataforma?",
  desc: "Estos son los puntos importantes que hacen a T1 diferente y que puedes comunicar con confianza:",
  items: [
    {
      number: "01",
      title: "Todo conectado desde el primer día",
      desc: "Construimos un ecosistema donde tienda, pagos y envíos funcionan juntos desde el día uno sin integraciones complicadas.",
      accent: "#E26153",
      accentLight: "rgba(226,97,83,0.08)",
      accentBorder: "rgba(226,97,83,0.2)",
    },
    {
      number: "02",
      title: "Innovación desde el conocimiento",
      desc: "Llevamos más de 10 años entendiendo el comercio a profundidad para hacer que vender, cobrar y enviar sea cada vez más fácil, accesible y eficiente para cualquier emprendedor, pyme o empresa.",
      accent: "#8B5CF6",
      accentLight: "rgba(139,92,246,0.08)",
      accentBorder: "rgba(139,92,246,0.2)",
    },
    {
      number: "03",
      title: "De idea a negocio en minutos",
      desc: "Ninguna otra plataforma en el mundo te permite convertir un texto descriptivo a una tienda funcional con pagos y envíos listos para activar en ese mismo día.",
      accent: "#F59E0B",
      accentLight: "rgba(245,158,11,0.08)",
      accentBorder: "rgba(245,158,11,0.2)",
    },
    {
      number: "04",
      title: "Plataforma mexicana",
      desc: "Diseñada para el mercado mexicano: métodos de pago locales (SPEI, MSI), paqueterías nacionales y soporte en español.",
      accent: "#10B981",
      accentLight: "rgba(16,185,129,0.08)",
      accentBorder: "rgba(16,185,129,0.2)",
    },
    {
      number: "05",
      title: "Flexibilidad total",
      desc: "Puedes usar todo el ecosistema o solo la parte que necesites. Envíos, links de pago o tienda completa: tú decides.",
      accent: "#3B82F6",
      accentLight: "rgba(59,130,246,0.08)",
      accentBorder: "rgba(59,130,246,0.2)",
    },
  ],
};

export const OBJETIVO = {
  eyebrow: "03 — Objetivo de campaña",
  title: "Nuestro objetivo es llegar a",
  titleAccent: "todo México",
  desc: "Buscamos posicionar a T1 en la mente de tu audiencia como la solución para cualquier negocio que quiera vender, cobrar y enviar.",
  guidePhrase: {
    label: "Tu frase guía para crear",
    text: "\u201CTu contenido debe hacer que alguien que nunca ha escuchado de T1 entienda qué es y qué le resuelve.\u201D",
  },
  cards: [
    {
      title: "Descubrimiento",
      desc: "Que tu audiencia conozca T1.",
    },
    {
      title: "Relevancia",
      desc: "Que entienda por qué le conviene: ya sea que esté empezando un negocio o que ya venda.",
    },
    {
      title: "Consideración",
      desc: "Que considere T1 como solución: que visite t1.com y pueda crear su cuenta.",
    },
  ],
};

export const AUDIENCIA = {
  eyebrow: "04 — Audiencia objetivo",
  title: "¿A quién le habla",
  titleAccent: "T1",
  titleEnd: "?",
  desc: "Para que tu contenido conecte, es importante que sepas a quién le habla T1.",
  importante: {
    label: "IMPORTANTE:",
    text: "No aplica para negocios con productos perecederos (cafeterías, restaurantes, pastelerías, etc.), productos de tabaco y vapeo, ni negocios con productos ilegales o sustancias controladas.",
  },
  profiles: [
    {
      emoji: "🚀",
      title: "Emprendedores y creadores",
      desc: "Quieren vender por primera vez. No tienen conocimientos técnicos y buscan algo fácil y rápido.",
    },
    {
      emoji: "📱",
      title: "Vendedores de redes sociales",
      desc: "Ya venden por Instagram, Facebook, WhatsApp o TikTok pero no tienen tienda formal ni métodos de cobro profesionales.",
    },
    {
      emoji: "📈",
      title: "PyMEs en crecimiento",
      desc: "Ya operan pero usan múltiples herramientas desconectadas. Necesitan unificar y escalar.",
    },
    {
      emoji: "🌐",
      title: "Negocios multicanal",
      desc: "Venden en Amazon, Mercado Libre, TikTok Shop y su propia tienda. Necesitan centralizar todo.",
    },
    {
      emoji: "🏪",
      title: "Negocios físicos",
      desc: "Tiendas de ropa, accesorios, artesanías, productos de belleza y cualquier negocio con punto de venta que quiera empezar a vender.",
    },
  ],
};

export const PRODUCTOS = {
  eyebrow: "05 — Productos del ecosistema",
  title: "Antes y después de",
  titleAccent: "usar T1",
  desc: "Problemas reales que resuelve cada solución y sus datos de credibilidad.",
  blocks: [
    {
      name: "t1tienda" as const,
      subtitle: "Crea tu tienda en minutos con IA",
      pairs: [
        {
          problem:
            '"Quiero vender en línea pero no sé por dónde empezar, es muy caro o necesito a alguien que me ayude."',
          solution:
            "Describe tu negocio en un texto y T1 crea tu tienda completa con IA — lista para vender el mismo día.",
        },
        {
          problem:
            '"Necesito conectar mi tienda con marketplaces como Amazon o Mercado Libre pero es complicado."',
          solution:
            "Conecta y sincroniza inventario, pedidos y precios con los principales marketplaces desde un solo lugar.",
        },
        {
          problem:
            '"Ya vendo en redes sociales pero pierdo ventas porque no tengo un catálogo profesional ni métodos de pago formales."',
          solution:
            "Tu tienda T1 se conecta con WhatsApp, Instagram y redes sociales para que conviertas seguidores en clientes.",
        },
      ],
      badge:
        "T1tienda ha creado más de 25,000 tiendas en línea. La primera en el mundo que convierte un texto en un negocio funcional.",
    },
    {
      name: "t1envios" as const,
      subtitle: "Cotiza, compara y envía en un clic",
      pairs: [
        {
          problem:
            '"Enviar paquetes es caro y complicado. Cada paquetería tiene su propio sistema."',
          solution:
            "Cotiza y compara tarifas de FedEx, DHL, UPS, Estafeta, 99 Minutos y más, todo desde un solo lugar con descuentos preferenciales.",
        },
        {
          problem:
            '"Los clientes me preguntan constantemente \'¿dónde está mi paquete?\' y pierdo tiempo respondiendo."',
          solution:
            "Rastreo en tiempo real automático que mantiene a tus clientes informados sin que tú hagas nada.",
        },
        {
          problem:
            '"Cuando hay problemas con un envío (paquetes perdidos, dañados) no sé cómo resolverlo."',
          solution:
            "Gestión de incidencias integrada: reporta, rastrea y resuelve cualquier problema desde la plataforma.",
        },
      ],
      badge:
        "Más de 40 millones de envíos procesados con tarifas hasta 80% más económicas que las de mostrador.",
    },
    {
      name: "t1pagos" as const,
      subtitle: "Cobra fácil, seguro y sin terminal",
      pairs: [
        {
          problem:
            '"Quiero cobrar con tarjeta pero las terminales son caras y los trámites son complicados."',
          solution:
            "Crea links de pago en segundos y compártelos por WhatsApp, SMS, email o redes sociales. Sin terminal, sin trámites.",
        },
        {
          problem:
            '"Me preocupa que me hagan un contracargo y pierda mi dinero."',
          solution:
            "Seguro de contracargo incluido: si un cliente disputa un pago válido, T1 cubre la pérdida.",
        },
        {
          problem:
            '"Necesito ofrecer meses sin intereses pero los bancos piden muchos requisitos."',
          solution:
            "Ofrece MSI de 3, 6, 9 y 12 meses desde tu primer link de pago. Sin requisitos bancarios adicionales.",
        },
      ],
      badge:
        "86% de tasa de aprobación en transacciones — de las más altas del mercado mexicano. Más de 150 millones de transacciones procesadas.",
    },
  ],
};

export const HOOKS = {
  eyebrow: "06 — Hooks sugeridos",
  title: "Ideas de hooks para tu",
  titleAccent: "contenido",
  desc: "Puedes usar estos hooks tal cual o adaptarlos a tu estilo. Lo importante es que el mensaje central se mantenga.",
  groups: [
    {
      product: "t1tienda" as const,
      tag: "Tienda",
      items: [
        '"Le dije a una IA que quería vender playeras… y en 1 minuto ya tenía mi tienda online lista."',
        '"Si te dijera que puedes tener tu tienda en línea antes de que termine este video, ¿me creerías?"',
        '"Esto es todo lo que necesitas para abrir tu negocio online hoy" (mostrar el proceso en pantalla).',
        '"POV: Decidiste emprender y en 60 segundos ya estás vendiendo en internet."',
        '"3 cosas que necesitabas antes para vender online: programador, diseñador y miles de pesos. Hoy solo necesitas T1."',
        '"Le describí mi negocio en un párrafo a T1 y mira lo que creó..." (screenrecording del resultado).',
        '"Acabo de crear una tienda online en lo que tardas en pedir un café."',
      ],
    },
    {
      product: "t1envios" as const,
      tag: "Envíos",
      items: [
        '"¿Sabías que puedes enviar un paquete a cualquier parte de México pagando hasta 80% menos?"',
        '"Deja de ir a 5 páginas diferentes para cotizar envíos. Aquí comparas todas en un clic."',
        '"El secreto de las tiendas online que ofrecen envío barato" (mostrar T1envíos).',
        '"POV: Un cliente te compra desde Cancún y en 2 clics ya generaste su guía de envío."',
      ],
    },
    {
      product: "t1pagos" as const,
      tag: "Pagos",
      items: [
        '"Ya no necesitas terminal bancaria para cobrar con tarjeta. Te enseño cómo."',
        '"Cobré $15,000 con un link que creé en 10 segundos. Así funciona T1pagos."',
        '"¿Vendes por WhatsApp? Así puedes cobrar con tarjeta sin terminal ni complicaciones."',
        '"Ofrece meses sin intereses desde tu primer venta. Sin banco, sin trámites."',
      ],
    },
    {
      product: "t1" as const,
      tag: "General",
      items: [
        '"Si vendes (o quieres vender) en México, necesitas conocer T1."',
        '"El 90% de los negocios en México siguen cobrando por transferencia. Hay algo mejor."',
        '"Emprender en México en 2026 se ve así" (mostrar el ecosistema T1).',
        '"Todo lo que un negocio necesita en un solo lugar: tienda, pagos y envíos. Se llama T1."',
        '"POV: Descubres la plataforma que te faltaba para tu negocio."',
        '"3 herramientas que todo negocio en México debería usar" (T1tienda, T1pagos, T1envíos).',
        '"Esto hubiera cambiado mi negocio hace 2 años" (reacción descubriendo T1).',
        '"La app mexicana que está cambiando cómo vendemos en internet."',
      ],
    },
  ],
};

export const DOS_DONTS = {
  eyebrow: "07 — Reglas de contenido",
  title: "Do's &",
  titleAccent: "Don'ts",
  desc: "Para mantener la calidad y coherencia del mensaje, sigue estas guías:",
  dos: [
    { bold: "Sé auténtico:", text: "Usar tu propio estilo y voz." },
    {
      bold: "Habla desde la experiencia:",
      text: "Comparte lo que genuinamente te parece valioso.",
    },
    {
      bold: "Muestra, no solo cuentes:",
      text: "Muestra el proceso real — crea una tienda, genera un link, cotiza un envío.",
    },
    {
      bold: "Usa los datos:",
      text: "Menciona datos reales: 25K+ negocios, 86% aprobación, 40M+ envíos.",
    },
    {
      bold: "Incluye call to action:",
      text: "Invita a explorar t1.com o a crear su cuenta.",
    },
    {
      bold: "Comunica el ecosistema:",
      text: "Es una plataforma todo-en-uno para comercio, no solo una tienda online.",
    },
    {
      bold: "Respeta la marca:",
      text: "T1 se escribe siempre con T mayúscula y 1 (número), y sus productos son T1tienda, T1pagos y T1envíos.",
    },
    {
      bold: "Personaliza el mensaje:",
      text: "Adapta el mensaje a lo que le importa a tu audiencia específica.",
    },
  ],
  donts: [
    {
      bold: "No inventes:",
      text: "No inventes funcionalidades ni prometas cosas que no existen en la plataforma.",
    },
    {
      bold: "No exageres:",
      text: 'No digas que es "gratis" si no lo es. No exageres las capacidades.',
    },
    {
      bold: "No cambies el nombre:",
      text: 'No digas "T-uno" ni "te-uno". Evita "T1 Tienda" (es T1tienda, junto).',
    },
    {
      bold: "No compares directamente:",
      text: "No hables mal de Shopify, Mercado Libre, Stripe, etc. Enfócate en lo que T1 ofrece.",
    },
    {
      bold: "No prometas resultados:",
      text: "No prometas resultados de ventas específicos ni garantices ingresos.",
    },
    {
      bold: "No seas genérico:",
      text: 'No te limites a decir "es muy bueno" sin mostrar por qué.',
    },
    {
      bold: "No hagas infomercial:",
      text: "No hagas contenido que se sienta como comercial de TV. Debe sentirse natural.",
    },
    {
      bold: "No asumas que conocen T1:",
      text: "No uses T1 solo como tag sin explicar qué es.",
    },
  ],
  examplesTitle: "Ejemplos concretos",
  examples: [
    {
      good: '"Literal describí mi negocio y en un minuto ya tenía tienda, pagos y envíos listos. Se llama T1 y es mexicana."',
      bad: '"¡INCREÍBLE! ¡La mejor plataforma del MUNDO! ¡Hagan su tienda YA! Link en bio."',
    },
    {
      good: '"Si vendes por WhatsApp y sigues cobrando por transferencia, necesitas ver esto..." (muestra T1pagos).',
      bad: '"Con T1 vas a ganar millones de pesos vendiendo en línea, te lo garantizo."',
    },
    {
      good: '"Comparé precios de envío en 5 paqueterías en un solo clic. Las diferencias son increíbles." (screenrecording).',
      bad: '"T1 es mejor que Shopify, MercadoLibre y Amazon juntos."',
    },
  ],
};

export const RECURSOS = {
  eyebrow: "08 — Recursos",
  title: "Materiales de",
  titleAccent: "referencia",
  desc: "Todo lo que necesitas para crear tu contenido.",
  cards: [
    {
      icon: "🎬",
      title: "Videos de referencia",
      desc: "Mira estos videos para entender el tono y estilo que buscamos:",
      links: [
        {
          label: "Video T1 — Ecosistema",
          href: "https://www.youtube.com/watch?v=fxeJCpCx-1M",
        },
        {
          label: "Video T1tienda",
          href: "https://www.youtube.com/watch?v=n93KXvrk1p0",
        },
        {
          label: "Video T1pagos",
          href: "https://www.youtube.com/watch?v=RVtPR9mZb50",
        },
        { label: "Video T1envíos (próximamente)", href: "#" },
      ],
    },
    {
      icon: "🌐",
      title: "Plataforma",
      desc: "Explora la plataforma para que la conozcas de primera mano:",
      links: [{ label: "Visitar t1.com", href: "https://t1.com" }],
    },
  ],
};

export const FOOTER = {
  brand: {
    tagline: "— Todo en Uno",
    desc: "Ecosistema de comercio 100% mexicano.",
    version: "Versión 1.0 · Marzo 2026",
  },
  columns: [
    {
      title: "Soluciones",
      links: [
        { label: "T1tienda", href: "#" },
        { label: "T1pagos", href: "#" },
        { label: "T1envíos", href: "#" },
        { label: "T1score", href: "#" },
      ],
    },
    {
      title: "T1",
      links: [
        { label: "¿Qué es T1?", href: "https://t1.com" },
        { label: "Únete a T1", href: "https://t1.com" },
        { label: "Contacto", href: "#" },
      ],
    },
  ],
  bottom: {
    country: "🇲🇽 México (Español)",
    legal: [
      { label: "Términos y condiciones", href: "#" },
      { label: "Privacidad", href: "#" },
    ],
    copyright: "© 2026 T1 Pagos. Todos los derechos reservados.",
  },
};
