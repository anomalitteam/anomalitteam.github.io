"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

type AccordionProps = {
  question: string;
  answer: string;
};

export function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const questionId = useId();
  const answerId = useId();

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        id={questionId}
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left text-lg font-medium text-text-primary hover:text-accent transition-colors cursor-pointer"
      >
        <span className="pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-text-secondary transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/*
        El panel se queda montado aunque esté cerrado, colapsado a altura 0.
        Antes se desmontaba con AnimatePresence y eso dejaba el HTML exportado
        con ocho preguntas y ninguna respuesta: el texto solo existía tras
        hidratar, así que ningún buscador lo veía. `aria-hidden` evita que los
        lectores de pantalla anuncien lo que está colapsado.
      */}
      <motion.div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        aria-hidden={!isOpen}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-text-secondary leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}
