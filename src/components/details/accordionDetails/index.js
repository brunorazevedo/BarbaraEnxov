import React, { useState } from 'react';
import { AccordionContainer, AccordionItem, AccordionHeader, AccordionContent } from './styles';

export function AccordionDetails({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const hasContent = (contentArray) => {
    return contentArray.some(value => value !== null && value !== '');
  };

  const accordionItems = [
    { title: data.titulo_especificacao_1, content: [data.descricao_especificacao_1, data.descricao_especificacao_2, data.descricao_especificacao_3] },
    { title: data.titulo_especificacao_2, content: [data.descricao_especificacao_2_1, data.descricao_especificacao_2_2, data.descricao_especificacao_2_3] },
    { title: data.titulo_especificacao_3, content: [data.descricao_especificacao_3_1, data.descricao_especificacao_3_2, data.descricao_especificacao_3_3] },
    { title: data.titulo_especificacao_4, content: [data.descricao_especificacao_4_1, data.descricao_especificacao_4_2, data.descricao_especificacao_4_3] },
    { title: data.titulo_especificacao_5, content: [data.descricao_especificacao_5_1, data.descricao_especificacao_5_2, data.descricao_especificacao_5_3] },
    { title: data.titulo_especificacao_6, content: [data.descricao_especificacao_6_1, data.descricao_especificacao_6_2, data.descricao_especificacao_6_3] },
    // Adicione mais itens conforme necessário
  ];

  return (
    <AccordionContainer>
      {accordionItems.map((item, index) => {
        if (item.title && hasContent(item.content)) {
          return (
            <AccordionItem key={index}>
              <AccordionHeader onClick={() => toggleAccordion(index)}>
                {item.title}
              </AccordionHeader>
              <AccordionContent isActive={activeIndex === index}>
                {item.content.map((desc, descIndex) => desc && <p key={descIndex}>{desc}</p>)}
              </AccordionContent>
            </AccordionItem>
          );
        }
        return null;
      })}
    </AccordionContainer>
  );
}