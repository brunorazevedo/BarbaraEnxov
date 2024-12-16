import React, { useState } from 'react';

import { AccordionContainer, AccordionContent, AccordionHeader, AccordionItem } from "./styles"


export function  Accordion ({ data }) {

  const sortedData = data.sort((a, b) => a.uid - b.uid);
 
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleItem = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <AccordionContainer>
      {
        sortedData.map( faq => {
          return(
            <AccordionItem key={faq.id}>
            <AccordionHeader
              onClick={() => toggleItem(faq)}
              aria-expanded={activeIndex === faq}
            >
              {faq.data.pergunta}
            </AccordionHeader>
            <AccordionContent aria-hidden={activeIndex !== faq}>
             {faq.data.resposta}
            </AccordionContent>
          </AccordionItem>
          )
        })
      }
    </AccordionContainer>
    );
  };
  