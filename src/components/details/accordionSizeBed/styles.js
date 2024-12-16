

import { styled } from '@stitches/react';

export const AccordionContainer = styled('div', {
  width: '100%',
  border: '1px solid #ccc',
  borderRadius: '4px',
  overflow: 'hidden',
  marginTop:"1.6rem",
  marginBottom:"3.2rem",
});

export const AccordionItem = styled('div', {

  '&:last-child': {
    borderBottom: 'none',
  },
});

export const AccordionHeader = styled('div', {
  padding: '15px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#e1e1e1',
  },
});

export const AccordionContent = styled('div', {
  maxHeight: '0',
  overflow: 'hidden',
  transition: 'max-height 0.3s ease',
  paddingLeft:"2.4rem",
  paddingTop:"1.6rem",
  paddingBottom:"1.6rem",
  variants: {
    isActive: {
      true: {
        maxHeight: '200px', // Ajuste conforme necessário
      },
    },
  },
});