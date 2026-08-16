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
  cta: {
    comingSoon: "Próximamente",
  },
  studio: {
    meta: {
      title: "Anomalit Team — Apps para Mac",
      description:
        "Estudio independiente de aplicaciones para el ecosistema de Apple. Herramientas cuidadas, sin suscripciones y con pago único.",
    },
    hero: {
      tagline: "Apps que hacen bien una cosa",
      description:
        "Somos un estudio independiente que crea herramientas para el ecosistema de Apple. Cuidadas hasta el detalle, sin suscripciones y con pago único.",
    },
    projects: {
      label: "Proyectos",
      title: "Lo que hemos construido",
      description:
        "Cada app nace de una necesidad propia y se pule hasta que la usamos a diario.",
    },
    comingSoon: "Próximamente",
    viewProject: "Ver proyecto",
    products: {
      eazyshot: {
        tagline: "Capturas de pantalla profesionales",
        description:
          "Captura, anota, censura y numera desde la barra de menús. Cinco modos y un editor completo sin salir de la captura.",
      },
    },
    nav: {
      projects: "Proyectos",
      support: "Soporte",
    },
  },
  hero: {
    tagline: "Capturas de pantalla profesionales en segundos",
    description:
      "EazyShot es la herramienta de captura de pantalla que todo usuario de Mac necesita. Anota, censura, numera y comparte capturas al instante desde la barra de menú.",
    cta: "Descargar prueba gratis",
    priceNote: "Pago único · $69 MXN · 3 días de prueba",
    image: "/images/eazyshot/hero.jpg",
    imageAlt:
      "EazyShot capturando una región de la pantalla, con la barra de anotaciones flotante y un texto y unas flechas dibujados sobre la captura",
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
        image: "/images/eazyshot/funcion-1.jpg",
      },
      {
        step: 2,
        title: "Selecciona o captura",
        description:
          "Arrastra para seleccionar una región o captura la pantalla completa. El overlay cubre todos tus monitores.",
        image: "/images/eazyshot/funcion-2.jpg",
      },
      {
        step: 3,
        title: "Anota si lo necesitas",
        description:
          "Añade rectángulos, flechas, texto, blur para ocultar información sensible, o numeración para guías paso a paso.",
        image: "/images/eazyshot/funcion-3.jpg",
      },
      {
        step: 4,
        title: "Copia o guarda",
        description:
          "Copia al portapapeles con Cmd+C o guarda como PNG en tu carpeta preferida. En modo EZ, va directo al portapapeles.",
        image: "/images/eazyshot/funcion-4.jpg",
      },
    ],
  },
  comparison: {
    label: "Comparativa",
    title: "EazyShot vs la competencia",
    description:
      "No tienes que creer en nuestra palabra. Aquí están las diferencias.",
    headers: {
      functionality: "Funcionalidad",
      macOS: "macOS",
      eazyShot: "EazyShot",
      competition: "Competencia",
    },
    rows: [
      { feature: "Captura de región", native: true, eazyshot: true, competition: true },
      { feature: "Captura de pantalla completa", native: true, eazyshot: true, competition: true },
      { feature: "Editor inline de anotaciones", native: false, eazyshot: true, competition: true },
      { feature: "Herramienta de blur / censura", native: false, eazyshot: true, competition: true },
      { feature: "Numeración automática", native: false, eazyshot: true, competition: true },
      {
        feature: "Modo rápido al portapapeles",
        native: false,
        eazyshot: true,
        competition: false,
        highlight: true,
      },
      { feature: "Atajos de teclado personalizables", native: false, eazyshot: true, competition: true },
      { feature: "Color picker integrado", native: false, eazyshot: true, competition: false },
      { feature: "Soporte multi-monitor real", native: false, eazyshot: true, competition: true },
      { feature: "Tamaño de anotación configurable", native: false, eazyshot: true, competition: true },
      {
        feature: "Precio",
        native: "Gratis (incluido)",
        eazyshot: "$69 MXN",
        competition: "~$499 MXN",
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
    price: "$69 MXN",
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
          "EazyShot Pro cuesta $69 MXN. Es un pago único, sin suscripciones. Lo compras una vez y es tuyo para siempre, con todas las actualizaciones incluidas.",
      },
      {
        question: "¿Hay versión de prueba?",
        answer:
          "Sí. Tienes 3 días de prueba gratuita con todas las funciones. Puedes usar EazyShot sin limitaciones durante el período de prueba y decidir si comprarlo después.",
      },
      {
        question: "¿Qué versiones de macOS soporta?",
        answer:
          "EazyShot requiere macOS 15.2 (Sequoia) o posterior, incluyendo la última versión de macOS. Funciona en Mac con Apple Silicon o Intel.",
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
          "Por defecto, las capturas se guardan en ~/Downloads/EazyShot/. Puedes cambiar la carpeta de destino desde los ajustes de la app en cualquier momento.",
      },
    ],
  },
  footer: {
    features: "Funciones",
    pricing: "Precio",
    faq: "FAQ",
    support: "Soporte",
    privacy: "Privacidad",
    oneTime: "Pago único. Sin suscripciones.",
  },
  privacy: {
    title: "Política de Privacidad",
    lastUpdated: "Última actualización: 28 de julio de 2026",
    sections: [
      {
        title: "Introducción",
        body: [
          "EazyShot es una aplicación de captura de pantalla para macOS desarrollada por Anomalit Team. Esta política de privacidad explica cómo manejamos tus datos y tus capturas de pantalla. Al usar EazyShot, aceptas las prácticas descritas en este documento.",
        ],
      },
      {
        title: "Datos que NO recolectamos",
        body: [
          "EazyShot es una aplicación 100% offline. No recolectamos, almacenamos ni transmitimos ningún dato personal a servidores externos. La aplicación no requiere registro, no utiliza cuentas de usuario y no envía información de ningún tipo a través de internet.",
          "No recolectamos datos de uso, estadísticas de funcionalidades, información del dispositivo, dirección IP, ubicación ni ningún otro tipo de dato personal o anónimo.",
        ],
      },
      {
        title: "Datos almacenados localmente",
        body: [
          "Todas tus preferencias y configuraciones se almacenan exclusivamente en tu Mac. Esto incluye:",
          "— Atajos de teclado personalizados",
          "— Preferencias de tema (claro/oscuro)",
          "— Carpeta de destino para guardar capturas",
          "— Historial de colores del Color Picker (últimos 10 colores)",
          "— Configuración de herramientas de anotación (color, tamaño)",
          "Estos datos nunca abandonan tu dispositivo y se almacenan en los mecanismos estándar de macOS (UserDefaults) dentro del sandbox de la aplicación.",
        ],
      },
      {
        title: "Capturas de pantalla",
        body: [
          "Las capturas de pantalla que realizas con EazyShot se guardan por defecto en la carpeta ~/Downloads/EazyShot/ de tu Mac. Puedes cambiar esta ubicación en cualquier momento desde los ajustes de la aplicación.",
          "EazyShot nunca accede, analiza, modifica ni transmite el contenido de tus capturas de pantalla. Tú tienes control total sobre qué haces con tus capturas: copiarlas al portapapeles, guardarlas como archivo PNG o compartirlas manualmente a través de otras aplicaciones.",
        ],
      },
      {
        title: "Permisos del sistema",
        body: [
          "Para funcionar correctamente, EazyShot solicita los siguientes permisos de macOS:",
          "— Permiso de Accesibilidad: necesario para capturar atajos de teclado globales y detectar eventos del sistema.",
          "— Permiso de Grabación de Pantalla: requerido por macOS para que la aplicación pueda realizar capturas de pantalla.",
          "Estos permisos son solicitados por el sistema operativo y son estrictamente necesarios para el funcionamiento básico de la aplicación. EazyShot no utiliza estos permisos para ningún otro propósito.",
        ],
      },
      {
        title: "Servicios de terceros",
        body: [
          "EazyShot no integra servicios de terceros. No utilizamos herramientas de analítica, publicidad, rastreo ni ningún SDK externo que pueda recolectar información. La aplicación funciona de manera completamente independiente en tu Mac.",
        ],
      },
      {
        title: "Compras y licencias",
        body: [
          "La compra de EazyShot Pro se procesa a través de la plataforma que elijas para adquirir la licencia. Anomalit Team no recolecta ni almacena información de pago. Los datos de tu transacción son manejados exclusivamente por el procesador de pagos correspondiente.",
        ],
      },
      {
        title: "Cambios a esta política",
        body: [
          "Si en el futuro se realizaran cambios a esta política de privacidad, la versión actualizada se publicará en esta misma página indicando la fecha de actualización. Te recomendamos revisar esta página periódicamente.",
          "En caso de que EazyShot incorporara funcionalidades que requieran conexión a internet (como verificación de licencias o actualizaciones automáticas), esta política se actualizará para reflejar dichos cambios antes de su implementación.",
        ],
      },
      {
        title: "Contacto",
        body: [
          "Si tienes preguntas sobre esta política de privacidad o sobre el manejo de tus datos en EazyShot, puedes contactarnos en:",
        ],
      },
    ],
    contact: "Para cualquier consulta sobre privacidad, escríbenos a:",
    contactEmail: "anomalitteam@gmail.com",
  },
  support: {
    title: "Soporte",
    intro: "¿Tienes problemas con EazyShot? Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible.",
    emailLabel: "Correo de soporte",
    email: "anomalitteam@gmail.com",
    infoTitle: "Para ayudarte más rápido, incluye esta información:",
    infoItems: [
      "Versión de macOS que estás usando",
      "Versión de EazyShot (disponible en Ajustes → Acerca de)",
      "Descripción detallada del problema",
      "Pasos para reproducir el error (si aplica)",
    ],
    responseTime: "Respondemos en un plazo de 24 a 48 horas.",
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
  cta: {
    comingSoon: "Coming soon",
  },
  studio: {
    meta: {
      title: "Anomalit Team — Mac Apps",
      description:
        "Independent studio building apps for the Apple ecosystem. Carefully crafted tools, no subscriptions, one-time payment.",
    },
    hero: {
      tagline: "Apps that do one thing well",
      description:
        "We're an independent studio building tools for the Apple ecosystem. Crafted down to the detail, no subscriptions, one-time payment.",
    },
    projects: {
      label: "Projects",
      title: "What we've built",
      description:
        "Every app starts from a need of our own and gets polished until we use it daily.",
    },
    comingSoon: "Coming soon",
    viewProject: "View project",
    products: {
      eazyshot: {
        tagline: "Professional screenshots",
        description:
          "Capture, annotate, censor, and number right from the menu bar. Five modes and a full editor without leaving the capture.",
      },
    },
    nav: {
      projects: "Projects",
      support: "Support",
    },
  },
  hero: {
    tagline: "Professional Screenshots in Seconds",
    description:
      "EazyShot is the screenshot tool every Mac user needs. Annotate, censor, number, and share screenshots instantly from the menu bar.",
    cta: "Download Free Trial",
    priceNote: "One-time · $2.99 USD · 3-day trial",
    image: "/images/eazyshot/hero.jpg",
    imageAlt:
      "EazyShot capturing a screen region, showing the floating annotation toolbar and text and arrows drawn over the capture",
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
        image: "/images/eazyshot/funcion-1.jpg",
      },
      {
        step: 2,
        title: "Select or capture",
        description:
          "Drag to select a region or capture the full screen. The overlay covers all your monitors.",
        image: "/images/eazyshot/funcion-2.jpg",
      },
      {
        step: 3,
        title: "Annotate if needed",
        description:
          "Add rectangles, arrows, text, blur to hide sensitive info, or numbering for step-by-step guides.",
        image: "/images/eazyshot/funcion-3.jpg",
      },
      {
        step: 4,
        title: "Copy or save",
        description:
          "Copy to clipboard with Cmd+C or save as PNG in your preferred folder. In EZ mode, it goes directly to clipboard.",
        image: "/images/eazyshot/funcion-4.jpg",
      },
    ],
  },
  comparison: {
    label: "Comparison",
    title: "EazyShot vs the Competition",
    description: "You don't have to take our word for it. Here are the differences.",
    headers: {
      functionality: "Feature",
      macOS: "macOS",
      eazyShot: "EazyShot",
      competition: "Competition",
    },
    rows: [
      { feature: "Region capture", native: true, eazyshot: true, competition: true },
      { feature: "Full screen capture", native: true, eazyshot: true, competition: true },
      { feature: "Inline annotation editor", native: false, eazyshot: true, competition: true },
      { feature: "Blur / censor tool", native: false, eazyshot: true, competition: true },
      { feature: "Auto-numbering", native: false, eazyshot: true, competition: true },
      {
        feature: "Quick clipboard mode",
        native: false,
        eazyshot: true,
        competition: false,
        highlight: true,
      },
      { feature: "Customizable keyboard shortcuts", native: false, eazyshot: true, competition: true },
      { feature: "Built-in color picker", native: false, eazyshot: true, competition: false },
      { feature: "Real multi-monitor support", native: false, eazyshot: true, competition: true },
      { feature: "Configurable annotation size", native: false, eazyshot: true, competition: true },
      {
        feature: "Price",
        native: "Free (included)",
        eazyshot: "$2.99 USD",
        competition: "~$29 USD",
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
    price: "$2.99 USD",
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
          "EazyShot Pro costs $2.99 USD. It's a one-time payment, no subscriptions. Buy it once and it's yours forever, with all updates included.",
      },
      {
        question: "Is there a trial version?",
        answer:
          "Yes. You get a 3-day free trial with all features. You can use EazyShot without limitations during the trial period and decide whether to buy it afterward.",
      },
      {
        question: "Which macOS versions are supported?",
        answer:
          "EazyShot requires macOS 15.2 (Sequoia) or later, including the latest macOS version. Works on Apple Silicon and Intel Macs.",
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
          "By default, screenshots are saved to ~/Downloads/EazyShot/. You can change the destination folder from the app's settings at any time.",
      },
    ],
  },
  footer: {
    features: "Features",
    pricing: "Pricing",
    faq: "FAQ",
    support: "Support",
    privacy: "Privacy",
    oneTime: "One-time payment. No subscriptions.",
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: July 28, 2026",
    sections: [
      {
        title: "Introduction",
        body: [
          "EazyShot is a screenshot application for macOS developed by Anomalit Team. This privacy policy explains how we handle your data and screenshots. By using EazyShot, you agree to the practices described in this document.",
        ],
      },
      {
        title: "Data We Do NOT Collect",
        body: [
          "EazyShot is a 100% offline application. We do not collect, store, or transmit any personal data to external servers. The application does not require registration, does not use user accounts, and does not send any information over the internet.",
          "We do not collect usage data, feature statistics, device information, IP addresses, location data, or any other type of personal or anonymous data.",
        ],
      },
      {
        title: "Locally Stored Data",
        body: [
          "All your preferences and settings are stored exclusively on your Mac. This includes:",
          "— Custom keyboard shortcuts",
          "— Theme preferences (light/dark)",
          "— Destination folder for saving screenshots",
          "— Color Picker history (last 10 colors)",
          "— Annotation tool settings (color, size)",
          "This data never leaves your device and is stored using standard macOS mechanisms (UserDefaults) within the application sandbox.",
        ],
      },
      {
        title: "Screenshots",
        body: [
          "Screenshots taken with EazyShot are saved by default in the ~/Downloads/EazyShot/ folder on your Mac. You can change this location at any time from the application settings.",
          "EazyShot never accesses, analyzes, modifies, or transmits the content of your screenshots. You have full control over what you do with your captures: copy them to the clipboard, save them as PNG files, or share them manually through other applications.",
        ],
      },
      {
        title: "System Permissions",
        body: [
          "To function properly, EazyShot requests the following macOS permissions:",
          "— Accessibility permission: required to capture global keyboard shortcuts and detect system events.",
          "— Screen Recording permission: required by macOS for the application to take screenshots.",
          "These permissions are requested by the operating system and are strictly necessary for the basic functionality of the application. EazyShot does not use these permissions for any other purpose.",
        ],
      },
      {
        title: "Third-Party Services",
        body: [
          "EazyShot does not integrate any third-party services. We do not use analytics tools, advertising, tracking, or any external SDKs that could collect information. The application runs entirely independently on your Mac.",
        ],
      },
      {
        title: "Purchases and Licenses",
        body: [
          "The purchase of EazyShot Pro is processed through the platform you choose to acquire the license. Anomalit Team does not collect or store payment information. Your transaction data is handled exclusively by the corresponding payment processor.",
        ],
      },
      {
        title: "Changes to This Policy",
        body: [
          "If changes are made to this privacy policy in the future, the updated version will be published on this same page with the update date indicated. We recommend checking this page periodically.",
          "If EazyShot were to incorporate features requiring an internet connection (such as license verification or automatic updates), this policy will be updated to reflect those changes before their implementation.",
        ],
      },
      {
        title: "Contact",
        body: [
          "If you have questions about this privacy policy or about how your data is handled in EazyShot, you can contact us at:",
        ],
      },
    ],
    contact: "For any privacy inquiries, reach out to us at:",
    contactEmail: "anomalitteam@gmail.com",
  },
  support: {
    title: "Support",
    intro: "Having issues with EazyShot? We're here to help. Reach out and we'll get back to you as soon as possible.",
    emailLabel: "Support email",
    email: "anomalitteam@gmail.com",
    infoTitle: "To help you faster, please include this information:",
    infoItems: [
      "macOS version you're using",
      "EazyShot version (available in Settings → About)",
      "Detailed description of the issue",
      "Steps to reproduce the error (if applicable)",
    ],
    responseTime: "We respond within 24 to 48 hours.",
  },
};

export const translations: Record<string, Translations> = { es, en };
