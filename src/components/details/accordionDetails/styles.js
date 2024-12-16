import { styled } from '@stitches/react';

export const AccordionContainer = styled('div', {
  width: '100%',
  border: '1px solid #ccc',
  borderRadius: '4px',
  overflow: 'hidden',
  marginTop:"1.6rem",
  marginBottom:"1.6rem",
});

export const AccordionItem = styled('div', {
  borderBottom: '1px solid #ccc',

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
  variants: {
    isActive: {
      true: {
        maxHeight: '200px', // Ajuste conforme necessário
      },
    },
  },
  p: {
    padding: '6px',
    marginLeft: '8px',
    fontSize:"1.4rem",
    color:"$gray",
  },
});