import React, { useState } from "react";
import {
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "./styles";
import Image from "next/image";

export function AccordionSizeBed({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AccordionContainer>
      <AccordionItem>
        <AccordionHeader onClick={() => toggleAccordion(0)}>
          Clique e conheça os tamanhos de cama
        </AccordionHeader>
        <AccordionContent isActive={activeIndex === 0}>
          {activeIndex === 0 && (
            <Image
              src={data.imagem_tamanho_camas.url}
              alt={data.nome_do_produto}
              width={12} // Defina a largura desejada
              height={12} // Defina a altura desejada
            />
          )}
        </AccordionContent>
      </AccordionItem>
    </AccordionContainer>
  );
}
