import type { Translations } from "./types";

const es: Translations = {
  meta: {
    title: "EazyShot — Capturas de pantalla profesionales en segundos",
    description:
      "EazyShot es la herramienta de captura de pantalla que todo usuario de Mac necesita. Anota, censura, numera y comparte capturas al instante desde la barra de menú.",
  },
  nav: {
    features: "Funciones",
    howItWorks: "Cómo funciona",
    comparison: "Comparativa",
    pricing: "Precio",
    faq: "FAQ",
    download: "Descargar gratis",
  },
  hero: {
    tagline: "Capturas de pantalla profesionales en segundos",
    description:
      "EazyShot es la herramienta de captura de pantalla que todo usuario de Mac necesita. Anota, censura, numera y comparte capturas al instante desde la barra de menú.",
    cta: "Descargar prueba gratis",
    priceNote: "Pago único · $79 MXN · 3 días de prueba",
  },
  features: {
    label: "Funciones",
    title: "Todo lo que necesitas para tus capturas",
    description:
      "Cinco modos de captura más un editor de anotaciones completo. Todo integrado en la barra de menú de tu Mac.",
    items: [
      {
        icon: "MousePointer2",
        title: "Captura de Región",
        description:
          "Selecciona cualquier área de tu pantalla y edítala al instante con anotaciones inline. El editor aparece justo sobre la selección.",
        ez: false,
      },
      {
        icon: "Zap",
        title: "EZ Región",
        description:
          "Selecciona una región y se copia al portapapeles sin pasos extra. Perfecto para compartir rápido en chats, tickets o documentación.",
        ez: true,
      },
      {
        icon: "Monitor",
        title: "Pantalla Completa",
        description:
          "Captura toda tu pantalla con un editor flotante que incluye herramientas de rectángulo, flecha, texto, blur y numeración automática.",
        ez: false,
      },
      {
        icon: "Zap",
        title: "EZ Pantalla Completa",
        description:
          "La pantalla completa va directo al portapapeles. Ideal para flujos ágiles donde cada segundo cuenta.",
        ez: true,
      },
      {
        icon: "Palette",
        title: "Color Picker",
        description:
          "Selecciona cualquier color de tu pantalla y obtén sus valores HEX, RGB y HSB. Historial de hasta 10 colores recientes.",
        ez: false,
      },
      {
        icon: "Pencil",
        title: "Editor de Anotaciones",
        description:
          "Rectángulos, flechas, líneas, texto, blur para censurar y numeración automática paso a paso. Todo con color y tamaño personalizables.",
        ez: false,
      },
    ],
  },
  howItWorks: {
    label: "Cómo funciona",
    title: "Cuatro pasos. Sin complicaciones.",
    description:
      "EazyShot está diseñado para ser rápido e intuitivo. Así es como funciona.",
    items: [
      {
        step: 1,
        title: "Activa desde la barra de menú",
        description:
          "Haz clic en el icono de EazyShot en tu barra de menú o usa un atajo de teclado personalizado. La app está siempre a un clic de distancia.",
      },
      {
        step: 2,
        title: "Selecciona o captura",
        description:
          "Arrastra para seleccionar una región o captura la pantalla completa. El overlay cubre todos tus monitores.",
      },
      {
        step: 3,
        title: "Anota si lo necesitas",
        description:
          "Añade rectángulos, flechas, texto, blur para ocultar información sensible, o numeración para guías paso a paso.",
      },
      {
        step: 4,
        title: "Copia o guarda",
        description:
          "Copia al portapapeles con Cmd+C o guarda como PNG en tu carpeta preferida. En modo EZ, va directo al portapapeles.",
      },
    ],
  },
  comparison: {
    label: "Comparativa",
    title: "EazyShot vs Captura nativa de macOS",
    description:
      "No tienes que creer en nuestra palabra. Aquí están las diferencias.",
    headers: {
      functionality: "Funcionalidad",
      macOS: "macOS",
      eazyShot: "EazyShot",
    },
    rows: [
      { feature: "Captura de región", native: true, eazyshot: true },
      { feature: "Captura de pantalla completa", native: true, eazyshot: true },
      { feature: "Editor inline de anotaciones", native: false, eazyshot: true },
      { feature: "Herramienta de blur / censura", native: false, eazyshot: true },
      { feature: "Numeración automática", native: false, eazyshot: true },
      {
        feature: "Modo rápido al portapapeles",
        native: false,
        eazyshot: true,
        highlight: true,
      },
      { feature: "Atajos de teclado personalizables", native: false, eazyshot: true },
      { feature: "Color picker integrado", native: false, eazyshot: true },
      { feature: "Soporte multi-monitor real", native: false, eazyshot: true },
      { feature: "Hotkeys configurables", native: false, eazyshot: true },
      { feature: "Tamaño de anotación configurable", native: false, eazyshot: true },
      {
        feature: "Precio",
        native: "Gratis (incluido)",
        eazyshot: "$79 MXN pago único",
      },
    ],
  },
  pricing: {
    label: "Precio",
    title: "Pago único. Sin vueltas.",
    description:
      "Sin suscripciones. Sin pagos recurrentes. Lo compras una vez y es tuyo.",
    badge: "Pago único",
    planName: "EazyShot Pro",
    price: "$79 MXN",
    cta: "Descargar prueba gratis",
    trial: "3 días de prueba gratuita con todas las funciones",
    includesTitle: "Todo incluido",
    features: [
      "Todos los modos de captura",
      "Editor de anotaciones completo",
      "Modos EZ ultrarrápidos",
      "Color picker integrado",
      "Atajos de teclado personalizables",
      "Guardado automático en carpeta",
      "Soporte multi-monitor",
      "Actualizaciones gratuitas de por vida",
    ],
  },
  faq: {
    label: "FAQ",
    title: "Preguntas frecuentes",
    description:
      "Respuestas directas a las dudas más comunes sobre EazyShot.",
    items: [
      {
        question:
          "¿En qué se diferencia EazyShot de la captura nativa de macOS?",
        answer:
          "EazyShot añade un editor de anotaciones inline directamente sobre tu captura, herramientas de blur para censurar, numeración automática para guías, modos 'EZ' ultrarrápidos que copian directo al portapapeles, y atajos de teclado 100% configurables. No necesitas abrir otra app para anotar tus capturas.",
      },
      {
        question: "¿Cuánto cuesta EazyShot?",
        answer:
          "EazyShot Pro cuesta $79 MXN. Es un pago único, sin suscripciones. Lo compras una vez y es tuyo para siempre, con todas las actualizaciones incluidas.",
      },
      {
        question: "¿Hay versión de prueba?",
        answer:
          "Sí. Tienes 3 días de prueba gratuita con todas las funciones. Puedes usar EazyShot sin limitaciones durante el período de prueba y decidir si comprarlo después.",
      },
      {
        question: "¿Qué versiones de macOS soporta?",
        answer:
          "EazyShot funciona en macOS 14 (Sonoma) y versiones posteriores, incluyendo la última versión de macOS. Requiere Apple Silicon o Intel Mac.",
      },
      {
        question: "¿Las actualizaciones son gratuitas?",
        answer:
          "Sí. La compra de EazyShot Pro incluye todas las actualizaciones futuras sin costo adicional. Pagas una vez y recibes las mejoras de por vida.",
      },
      {
        question: "¿Puedo usar la licencia en varios Macs?",
        answer:
          "Sí. Tu licencia de EazyShot Pro es personal y puedes usarla en todos tus Macs personales vinculados a tu cuenta de Apple.",
      },
      {
        question: "¿Cómo funcionan los atajos de teclado?",
        answer:
          "Puedes asignar combinaciones de teclas personalizadas a cada acción de EazyShot desde los ajustes. Los atajos funcionan en todo el sistema, incluso cuando la app no está en primer plano. Usa Command, Control, Option o Shift + cualquier tecla.",
      },
      {
        question: "¿Dónde se guardan las capturas?",
        answer:
          "Por defecto, las capturas se guardan en ~/Pictures/EazyShot/. Puedes cambiar la carpeta de destino desde los ajustes de la app en cualquier momento.",
      },
    ],
  },
  footer: {
    features: "Funciones",
    pricing: "Precio",
    faq: "FAQ",
    support: "Soporte",
    privacy: "Privacidad",
    copyright: "Hecho para macOS.",
    oneTime: "Pago único. Sin suscripciones.",
  },
};

const en: Translations = {
  meta: {
    title: "EazyShot — Professional Screenshots in Seconds",
    description:
      "EazyShot is the screenshot tool every Mac user needs. Annotate, censor, number, and share screenshots instantly from the menu bar.",
  },
  nav: {
    features: "Features",
    howItWorks: "How It Works",
    comparison: "Comparison",
    pricing: "Pricing",
    faq: "FAQ",
    download: "Download Free",
  },
  hero: {
    tagline: "Professional Screenshots in Seconds",
    description:
      "EazyShot is the screenshot tool every Mac user needs. Annotate, censor, number, and share screenshots instantly from the menu bar.",
    cta: "Download Free Trial",
    priceNote: "One-time · $3.99 USD · 3-day trial",
  },
  features: {
    label: "Features",
    title: "Everything You Need for Your Screenshots",
    description:
      "Five capture modes plus a full annotation editor. All integrated into your Mac's menu bar.",
    items: [
      {
        icon: "MousePointer2",
        title: "Region Capture",
        description:
          "Select any area of your screen and edit it instantly with inline annotations. The editor appears right over the selection.",
        ez: false,
      },
      {
        icon: "Zap",
        title: "EZ Region",
        description:
          "Select a region and it's copied to clipboard with no extra steps. Perfect for quick sharing in chats, tickets, or documentation.",
        ez: true,
      },
      {
        icon: "Monitor",
        title: "Full Screen",
        description:
          "Capture your full screen with a floating editor that includes rectangle, arrow, text, blur, and auto-numbering tools.",
        ez: false,
      },
      {
        icon: "Zap",
        title: "EZ Full Screen",
        description:
          "Full screen goes straight to the clipboard. Ideal for fast workflows where every second counts.",
        ez: true,
      },
      {
        icon: "Palette",
        title: "Color Picker",
        description:
          "Pick any color from your screen and get its HEX, RGB, and HSB values. History of up to 10 recent colors.",
        ez: false,
      },
      {
        icon: "Pencil",
        title: "Annotation Editor",
        description:
          "Rectangles, arrows, lines, text, blur for censoring, and step-by-step auto-numbering. All with customizable color and size.",
        ez: false,
      },
    ],
  },
  howItWorks: {
    label: "How It Works",
    title: "Four Steps. No Hassle.",
    description:
      "EazyShot is designed to be fast and intuitive. Here's how it works.",
    items: [
      {
        step: 1,
        title: "Activate from the menu bar",
        description:
          "Click the EazyShot icon in your menu bar or use a custom keyboard shortcut. The app is always one click away.",
      },
      {
        step: 2,
        title: "Select or capture",
        description:
          "Drag to select a region or capture the full screen. The overlay covers all your monitors.",
      },
      {
        step: 3,
        title: "Annotate if needed",
        description:
          "Add rectangles, arrows, text, blur to hide sensitive info, or numbering for step-by-step guides.",
      },
      {
        step: 4,
        title: "Copy or save",
        description:
          "Copy to clipboard with Cmd+C or save as PNG in your preferred folder. In EZ mode, it goes directly to clipboard.",
      },
    ],
  },
  comparison: {
    label: "Comparison",
    title: "EazyShot vs macOS Native Screenshot",
    description: "You don't have to take our word for it. Here are the differences.",
    headers: {
      functionality: "Feature",
      macOS: "macOS",
      eazyShot: "EazyShot",
    },
    rows: [
      { feature: "Region capture", native: true, eazyshot: true },
      { feature: "Full screen capture", native: true, eazyshot: true },
      { feature: "Inline annotation editor", native: false, eazyshot: true },
      { feature: "Blur / censor tool", native: false, eazyshot: true },
      { feature: "Auto-numbering", native: false, eazyshot: true },
      {
        feature: "Quick clipboard mode",
        native: false,
        eazyshot: true,
        highlight: true,
      },
      { feature: "Customizable keyboard shortcuts", native: false, eazyshot: true },
      { feature: "Built-in color picker", native: false, eazyshot: true },
      { feature: "Real multi-monitor support", native: false, eazyshot: true },
      { feature: "Configurable hotkeys", native: false, eazyshot: true },
      { feature: "Configurable annotation size", native: false, eazyshot: true },
      {
        feature: "Price",
        native: "Free (included)",
        eazyshot: "$3.99 one-time",
      },
    ],
  },
  pricing: {
    label: "Pricing",
    title: "One-Time Payment. No Strings.",
    description:
      "No subscriptions. No recurring payments. Buy it once and it's yours.",
    badge: "One-Time",
    planName: "EazyShot Pro",
    price: "$3.99 USD",
    cta: "Download Free Trial",
    trial: "3-day free trial with all features",
    includesTitle: "Everything Included",
    features: [
      "All capture modes",
      "Full annotation editor",
      "Ultra-fast EZ modes",
      "Built-in color picker",
      "Customizable keyboard shortcuts",
      "Automatic save to folder",
      "Multi-monitor support",
      "Free lifetime updates",
    ],
  },
  faq: {
    label: "FAQ",
    title: "Frequently Asked Questions",
    description:
      "Straight answers to the most common questions about EazyShot.",
    items: [
      {
        question:
          "How is EazyShot different from the macOS native screenshot?",
        answer:
          "EazyShot adds an inline annotation editor directly on top of your capture, blur tools for censoring, auto-numbering for guides, ultra-fast 'EZ' modes that copy directly to clipboard, and 100% customizable keyboard shortcuts. You don't need to open another app to annotate your screenshots.",
      },
      {
        question: "How much does EazyShot cost?",
        answer:
          "EazyShot Pro costs $3.99 USD. It's a one-time payment, no subscriptions. Buy it once and it's yours forever, with all updates included.",
      },
      {
        question: "Is there a trial version?",
        answer:
          "Yes. You get a 3-day free trial with all features. You can use EazyShot without limitations during the trial period and decide whether to buy it afterward.",
      },
      {
        question: "Which macOS versions are supported?",
        answer:
          "EazyShot works on macOS 14 (Sonoma) and later, including the latest macOS version. Requires Apple Silicon or Intel Mac.",
      },
      {
        question: "Are updates free?",
        answer:
          "Yes. Your EazyShot Pro purchase includes all future updates at no additional cost. Pay once and receive lifetime improvements.",
      },
      {
        question: "Can I use the license on multiple Macs?",
        answer:
          "Yes. Your EazyShot Pro license is personal and you can use it on all your personal Macs linked to your Apple account.",
      },
      {
        question: "How do keyboard shortcuts work?",
        answer:
          "You can assign custom key combinations to each EazyShot action from the settings. Shortcuts work system-wide, even when the app is not in the foreground. Use Command, Control, Option, or Shift + any key.",
      },
      {
        question: "Where are screenshots saved?",
        answer:
          "By default, screenshots are saved to ~/Pictures/EazyShot/. You can change the destination folder from the app's settings at any time.",
      },
    ],
  },
  footer: {
    features: "Features",
    pricing: "Pricing",
    faq: "FAQ",
    support: "Support",
    privacy: "Privacy",
    copyright: "Made for macOS.",
    oneTime: "One-time payment. No subscriptions.",
  },
};

export const translations: Record<string, Translations> = { es, en };
