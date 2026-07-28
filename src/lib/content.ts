import {
  Zap,
  Monitor,
  MousePointer2,
  Palette,
  Pencil,
} from "lucide-react";

export const features = [
  {
    icon: MousePointer2,
    title: "Captura de Región",
    description:
      "Selecciona cualquier área de tu pantalla y edítala al instante con anotaciones inline. El editor aparece justo sobre la selección.",
    ez: false,
  },
  {
    icon: Zap,
    title: "EZ Región",
    description:
      "Selecciona una región y se copia al portapapeles sin pasos extra. Perfecto para compartir rápido en chats, tickets o documentación.",
    ez: true,
  },
  {
    icon: Monitor,
    title: "Pantalla Completa",
    description:
      "Captura toda tu pantalla con un editor flotante que incluye herramientas de rectángulo, flecha, texto, blur y numeración automática.",
    ez: false,
  },
  {
    icon: Zap,
    title: "EZ Pantalla Completa",
    description:
      "La pantalla completa va directo al portapapeles. Ideal para flujos ágiles donde cada segundo cuenta.",
    ez: true,
  },
  {
    icon: Palette,
    title: "Color Picker",
    description:
      "Selecciona cualquier color de tu pantalla y obtén sus valores HEX, RGB y HSB. Historial de hasta 10 colores recientes.",
    ez: false,
  },
  {
    icon: Pencil,
    title: "Editor de Anotaciones",
    description:
      "Rectángulos, flechas, líneas, texto, blur para censurar y numeración automática paso a paso. Todo con color y tamaño personalizables.",
    ez: false,
  },
];

export const steps = [
  {
    step: 1,
    title: "Activa desde la barra de menú",
    description:
      "Haz clic en el icono de EZShot en tu barra de menú o usa un atajo de teclado personalizado. La app está siempre a un clic de distancia.",
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
];

export const comparison = [
  {
    feature: "Captura de región",
    native: true,
    ezshot: true,
  },
  {
    feature: "Captura de pantalla completa",
    native: true,
    ezshot: true,
  },
  {
    feature: "Editor inline de anotaciones",
    native: false,
    ezshot: true,
  },
  {
    feature: "Herramienta de blur / censura",
    native: false,
    ezshot: true,
  },
  {
    feature: "Numeración automática",
    native: false,
    ezshot: true,
  },
  {
    feature: "Modo rápido al portapapeles",
    native: false,
    ezshot: true,
    highlight: true,
  },
  {
    feature: "Atajos de teclado personalizables",
    native: false,
    ezshot: true,
  },
  {
    feature: "Color picker integrado",
    native: false,
    ezshot: true,
  },
  {
    feature: "Soporte multi-monitor real",
    native: false,
    ezshot: true,
  },
  {
    feature: "Hotkeys configurables",
    native: false,
    ezshot: true,
  },
  {
    feature: "Tamaño de anotación configurable",
    native: false,
    ezshot: true,
  },
  {
    feature: "Precio",
    native: "Gratis (incluido)",
    ezshot: "$9.99 pago único",
  },
];

export const faqs = [
  {
    question: "¿En qué se diferencia EZShot de la captura nativa de macOS?",
    answer:
      "EZShot añade un editor de anotaciones inline directamente sobre tu captura, herramientas de blur para censurar, numeración automática para guías, modos 'EZ' ultrarrápidos que copian directo al portapapeles, y atajos de teclado 100% configurables. No necesitas abrir otra app para anotar tus capturas.",
  },
  {
    question: "¿Cuánto cuesta EZShot?",
    answer:
      "EZShot Pro cuesta $9.99 USD. Es un pago único, sin suscripciones. Lo compras una vez y es tuyo para siempre, con todas las actualizaciones incluidas.",
  },
  {
    question: "¿Hay versión de prueba?",
    answer:
      "Sí. Tienes 3 días de prueba gratuita con todas las funciones. Puedes usar EZShot sin limitaciones durante el período de prueba y decidir si comprarlo después.",
  },
  {
    question: "¿Qué versiones de macOS soporta?",
    answer:
      "EZShot funciona en macOS 14 (Sonoma) y versiones posteriores, incluyendo la última versión de macOS. Requiere Apple Silicon o Intel Mac.",
  },
  {
    question: "¿Las actualizaciones son gratuitas?",
    answer:
      "Sí. La compra de EZShot Pro incluye todas las actualizaciones futuras sin costo adicional. Pagas una vez y recibes las mejoras de por vida.",
  },
  {
    question: "¿Puedo usar la licencia en varios Macs?",
    answer:
      "Sí. Tu licencia de EZShot Pro es personal y puedes usarla en todos tus Macs personales vinculados a tu cuenta de Apple.",
  },
  {
    question: "¿Cómo funcionan los atajos de teclado?",
    answer:
      "Puedes asignar combinaciones de teclas personalizadas a cada acción de EZShot desde los ajustes. Los atajos funcionan en todo el sistema, incluso cuando la app no está en primer plano. Usa Command, Control, Option o Shift + cualquier tecla.",
  },
  {
    question: "¿Dónde se guardan las capturas?",
    answer:
      "Por defecto, las capturas se guardan en ~/Pictures/EZShot/. Puedes cambiar la carpeta de destino desde los ajustes de la app en cualquier momento.",
  },
];

export const pricingFeatures = [
  "Todos los modos de captura",
  "Editor de anotaciones completo",
  "Modos EZ ultrarrápidos",
  "Color picker integrado",
  "Atajos de teclado personalizables",
  "Guardado automático en carpeta",
  "Soporte multi-monitor",
  "Actualizaciones gratuitas de por vida",
];
