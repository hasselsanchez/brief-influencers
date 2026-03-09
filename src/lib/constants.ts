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
  stats: [
    { number: "+25,000", label: "tiendas" },
    { number: "+150M", label: "transacciones" },
    { number: "+40M", label: "de envíos" },
    { number: "86%", label: "aprobación" },
  ],
};

export const QUE_ES = {
  eyebrow: "01 — Qué es T1",
  titleLine1: "Todo en Uno.",
  titleLine2: "Bienvenido a la nueva era del",
  titleAccent: "comercio moderno.",
  descParts: [
    { text: "T1 es el ecosistema del comercio moderno 100% mexicano que conecta todo lo que un negocio necesita para operar: tienda en línea, pagos y envíos, " },
    { text: "desde un solo lugar.", red: true },
    { text: " Con " },
    { text: "la flexibilidad de usar cada solución por separado", red: true },
    { text: ", puedes elegir solo lo que necesitas, ya sea links de pago, hacer envíos o tu tienda en línea." },
  ],
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
      desc: "Llevamos más de 10 años entendiendo el comercio a profundidad para que vender, cobrar y enviar sea cada vez más fácil, accesible y eficiente para cualquier emprendedor, pyme o empresa.",
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
      title: "Curiosos digitales y nuevos vendedores",
      desc: "Quieren empezar a vender. No tienen conocimientos técnicos, pero sí curiosidad por la tecnología y buscan algo fácil, rápido y seguro.",
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
      desc: "Tiendas de ropa, accesorios, productos de belleza y cualquier negocio con uno o varios puntos de venta que quieran aceptar pagos digitales, vender en línea y coordinar envíos sin complicaciones.",
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
      subtitle:
        "La primera plataforma en el mundo que convierte un simple texto en una tienda en línea completamente funcional, lista para vender, cobrar y enviar el mismo día.",
      pairs: [
        {
          problem:
            "Quieres vender pero no sabes de diseño, no sabes programar y contratar una agencia cuesta miles de pesos.",
          example:
            "Ej: Haces joyería artesanal y la vendes por Instagram. Sabes que necesitas tu propia tienda pero no tienes idea de cómo hacerla y las agencias te cobran muchísimo.",
          solution:
            "Describe tu negocio en un texto y T1 crea tu tienda completa con inteligencia artificial en segundos con pagos y envíos integrados. Sin código, sin diseño, sin agencia.",
        },
        {
          problem:
            "No tienes tienda porque crees que necesitas invertir mucho dinero, o la que tienes no te deja cobrar ni enviar sin depender de otras herramientas.",
          example:
            "Ej: Un emprendedor de productos de skincare tiene su tienda en una plataforma, pero para cobrar tuvo que contratar una pasarela aparte y para enviar usa otra herramienta diferente. Tres herramientas separadas para llevar un solo negocio.",
          solution:
            "Tu tienda en T1 está lista para vender, cobrar y enviar a todo México desde el primer día, con pagos y envíos conectados sin configurar nada extra.",
        },
        {
          problem:
            "Vendes en varios canales (Amazon, Mercado Libre, TikTok Shop) y manejas todo por separado: pedidos, inventario y datos que no cuadran.",
          example:
            "Ej: Una marca de ropa vende en Mercado Libre y Amazon. Actualizan inventario a mano en cada plataforma y la semana pasada vendieron una talla que ya no tenían en stock por manejar cada canal por separado.",
          solution:
            "T1tienda centraliza todos tus canales de venta en un solo lugar. Conecta +10 marketplaces y administra inventario y pedidos sin brincar entre plataformas.",
        },
      ],
    },
    {
      name: "t1envios" as const,
      subtitle:
        "Cotiza, compara y envía con las mejores paqueterías de México en segundos. Elige por precio, tiempo de entrega o servicio, y monitorea cada paquete en tiempo real.",
      pairs: [
        {
          problem:
            "No todos los envíos necesitan lo mismo, pero siempre terminas mandando todo igual: con la misma paquetería, al mismo precio, sin poder elegir.",
          example:
            "Ej: Vendes artículos de piel personalizados. Un cliente necesita su pedido para mañana y otro no tiene prisa pero quiere el envío más barato. Hoy no tienes forma de darle a cada uno lo que necesita.",
          solution:
            "Con T1envíos eliges lo que importa en cada envío: precio, velocidad o servicio. Tú decides qué priorizar según lo que tu cliente necesita.",
        },
        {
          problem:
            "Cotizas con una sola paquetería sin comparar y terminas pagando de más o eligiendo un servicio que no cumple.",
          example:
            "Ej: Un negocio de accesorios para celular lleva un año enviando con la misma paquetería porque fue la primera que encontró. Nunca ha comparado y no sabe que por el mismo envío podría pagar menos.",
          solution:
            "T1envíos te muestra precios y tiempos de las mejores paqueterías en un solo lugar para que compares y elijas la mejor opción.",
        },
        {
          problem:
            "Cuando un envío tiene problemas, empiezan los correos, las llamadas y los días perdidos. Mientras tanto, tu cliente se desespera.",
          example:
            "Ej: Un paquete se quedó atorado en tránsito. Para darle seguimiento tienes que llamar a la paquetería, esperar, abrir un caso y repetir el proceso cada día. Mientras tanto, tu cliente no tiene idea de qué pasa con su pedido.",
          solution:
            "Desde el módulo de control de T1envíos gestionas incidencias, rastreos y seguimiento en un solo lugar, sin llamadas ni correos.",
        },
      ],
    },
    {
      name: "t1pagos" as const,
      subtitle:
        "Cobra en segundos con un link de pago. Tu cliente paga con SPEI o tarjetas (a una exhibición o a meses sin intereses), y tú recibes tu dinero al siguiente día hábil.",
      pairs: [
        {
          problem:
            "Cobras por transferencia, dependes de capturas de pantalla, no tienes otros métodos de pago y pierdes tiempo con seguimiento manual.",
          example:
            "Ej: Vendes productos de belleza por WhatsApp. En cada venta mandas tu CLABE, esperas la captura, verificas en tu banca, apuntas en un Excel. Con 10 pedidos al día ya no sabes quién te pagó y quién no.",
          solution:
            "Con T1pagos creas links de pago en segundos y ofreces múltiples métodos: tarjetas de débito/crédito, MSI y SPEI. Todo con visibilidad y seguimiento automático.",
        },
        {
          problem:
            "Cada pago rechazado es una venta cerrada que se te fue. Tu cliente quería pagar pero el proceso se lo complicó.",
          example:
            'Ej: Un cliente quiere comprarte un curso de $3,500 y te pregunta si puede pagar con tarjeta de crédito o a meses. Solo aceptas transferencia. "Ok, gracias", te dice. Nunca regresa.',
          solution:
            "T1pagos acepta diferentes métodos de pago con una tasa de aprobación del 86%.",
        },
        {
          problem:
            "Cobras con otra plataforma y tu dinero se queda atorado días o semanas antes de llegar a tu cuenta.",
          example:
            "Ej: Una tienda de accesorios de moda vendió un pedido grande el martes y necesita comprar material para surtirlo. Pero su plataforma de cobros retiene el dinero hasta el martes de la próxima semana.",
          solution:
            "Con T1pagos recibes tu dinero al siguiente día hábil, directo a tu cuenta, con visibilidad completa de cada transacción.",
        },
      ],
    },
  ],
};

export const HOOKS = {
  eyebrow: "06 — Banco de inspiración",
  title: "Hooks y ángulos para",
  titleAccent: "tu contenido",
  desc: "Estos hooks son inspiración, no guiones. Adáptalos a tu voz. Lo que mejor funciona es cuando suena a ti.",
  groups: [
    {
      product: "t1" as const,
      tag: "Overview · Aspiracional · Transformación",
      items: [
        "Todo tu negocio, en un solo lugar.",
        "¿Cuántas herramientas usas para vender, cobrar y enviar? ¿Y si todo estuviera en una sola?",
        "Antes tenía una herramienta para la tienda, otra para cobrar y otra para enviar. Ahora todo está en T1.",
        "Así es cómo transformé una simple idea en una tienda en línea con pagos y envíos integrados. En la misma tarde.",
        "¿Quieres vender pero no sabes cómo hacer la tienda, cómo cobrar ni cómo enviar? Te lo resuelvo en un solo video.",
        "Antes necesitabas un diseñador para la tienda, un sistema para cobrar y otro para enviar. Ahora solo necesitas T1.",
        "Si estabas buscando una señal para emprender: es este el momento\u2026",
        "Esta plataforma mexicana está cambiando cómo iniciar y hacer crecer un negocio.",
      ],
    },
    {
      product: "t1tienda" as const,
      tag: "Videos cortos · Demos · Tutoriales",
      items: [
        "Imagina crear tu tienda en línea con un simple texto, sin programar, sin saber de diseño, sin gastar miles de pesos.",
        "Crea tu propia tienda como siempre la imaginaste en menos de 1 minuto.",
        "Llevaba meses atrasando hacer mi tienda en línea, y hoy la hice en menos de 1 minuto.",
        "Te apuesto a que no sabías que puedes crear una tienda en línea lista para vender en menos de 30 segundos solo escribiendo lo que vendes.",
        "No puedo creer que la gente siga pagando miles de pesos por una tienda en línea cuando esto existe.",
        "Así conviertes una simple idea, en un negocio completamente funcional en un día",
        "Escribí un texto de lo que vendo. 30 segundos después tenía una tienda en línea lista para vender. Te enseño cómo.",
      ],
    },
    {
      product: "t1envios" as const,
      tag: "Informativos · Consejos · Storytime",
      items: [
        "Haz que cada entrega sea la razón por la que tus clientes vuelven.",
        "Si tu envío llega tarde, tu cliente no se queja. Simplemente no vuelve a comprar.",
        "Nadie te dirá esto, pero la razón por la que tus clientes no te vuelven a comprar probablemente no es tu producto\u2026 es tu envío.",
        "Así es como las grandes empresas manejan sus envíos. Y ahora tú también lo puedes hacer.",
        "Así ahorras cientos de pesos en tus envíos.",
        "Por meses estuve perdiendo dinero y clientes y no sabía la razón... hasta ahora",
      ],
    },
    {
      product: "t1pagos" as const,
      tag: "Tips · Demos rápidas · Educativo",
      items: [
        "Cada pago rechazado es una venta que ya tenías ganada y se fue.",
        "Si todavía le pides a tus clientes que te hagan una transferencia y te manden captura, necesitas ver esto.",
        "¿Sabías que puedes cobrar con tarjeta, SPEI y hasta meses sin intereses con un link?",
        "Pagar debe ser la experiencia más fácil de tu negocio.",
        "Así cobras como un profesional desde tu celular",
        "Ofrecer MSI en tu negocio es posible, te explico cómo",
        "Cobrar el envío y tu producto con un solo link",
      ],
    },
  ],
};

export const DOS_DONTS = {
  eyebrow: "07 — Do's & Don'ts",
  title: "Do's &",
  titleAccent: "Don'ts",
  dosHeading: "✅ Lo que sí",
  dontsHeading: "🚫 Lo que no",
  dos: [
    'Hablar de <strong>funciones reales de T1.</strong>',
    'Usar <strong>T1 <em>(te uno)</em>, T1tienda, T1pagos, T1envíos.</strong>',
    'Para la tienda en línea: Usar el término <strong>tienda en línea.</strong>',
    'Explicar que T1 conecta tienda, cobros y envíos, <strong>\u201CEl ecosistema del comercio moderno\u201D.</strong>',
    'Decir claramente <strong>qué problema resuelve T1.</strong>',
    'Tono natural, cercano y auténtico.',
    'Usar tecnicismos solo si están <strong>bien explicados.</strong>',
    'Hablar del valor de T1 <strong>sin comparativas directas.</strong>',
    'Beneficios <strong>reales y creíbles.</strong>',
  ],
  donts: [
    '<strong>Inventar</strong> funciones o resultados.',
    '<strong>Cambiar</strong> nombres o escribirlos <strong>diferente.</strong>',
    '<strong>No usar términos como</strong> página web, página, tienda online, sitio web, e-commerce, etc.',
    'Mostrar T1 como <strong>una sola herramienta.</strong>',
    'Mensajes <strong>ambiguos</strong> que <strong>no se entienden.</strong>',
    'Sobreventa <strong>agresiva o forzada.</strong>',
    'Explicar mal términos técnicos y <strong>causar confusión.</strong>',
    'Mencionar competidores por nombre <strong>para comparar o atacar.</strong>',
    'Promesas <strong>absolutas o no comprobables.</strong>',
  ],
  examplesTitle: "Ejemplos rápidos",
  examples: [
    {
      good: '✅ \u201CCreé mi tienda en línea en menos de un minuto, sin saber nada de diseño.\u201D',
      bad: '🚫 \u201CCreé mi página web con T1 y tripliqué mis ventas en una semana.\u201D',
    },
    {
      good: '✅ \u201CT1 conecta tu tienda, tus pagos y tus envíos en un solo lugar.\u201D',
      bad: '🚫 \u201CT1 solo sirve para hacer tiendas en línea.\u201D',
    },
    {
      good: '✅ \u201CMi tienda ya tiene pagos y envíos listos, no tuve que configurar nada extra.\u201D',
      bad: '🚫 \u201CT1 es la única plataforma que necesitas para hacerte millonario en segundos.\u201D',
    },
  ],
};

export const RECURSOS = {
  eyebrow: "08 — Recursos y materiales",
  title: "Recursos y",
  titleAccent: "materiales",
  cards: [
    {
      icon: "",
      title: "Videos de referencia",
      desc: "Videos de campaña para que veas el tono y estilo de comunicación de T1.",
      links: [
        {
          label: "T1",
          href: "https://youtu.be/ehFjB2ipwh0",
        },
        {
          label: "T1tienda",
          href: "https://youtu.be/ohzEVSQ41Gw",
        },
        {
          label: "T1pagos",
          href: "https://youtu.be/kEx6A_nlNmc",
        },
        { label: "T1envíos", href: "https://www.youtube.com/watch?v=HwhNbo4lxaY" },
      ],
    },
    {
      icon: "",
      title: "Plataforma",
      desc: "Explora T1 directamente. Crea una cuenta gratuita y prueba crear una tienda con IA.",
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
