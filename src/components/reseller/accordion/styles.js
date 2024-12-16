
import { styled } from '@stitches/react';

export const AccordionContainer = styled('div', {
  width:"100%",  
  margin: '0 auto',
  borderRadius: '5px',
  overflow: 'hidden',
  marginBottom:"6.4rem",
  marginTop:"3.2rem",
});

export const AccordionItem = styled('div', {
  '&:last-of-type': {
    borderBottom: 'none',
  },
});

export const AccordionHeader = styled('button', {
  width: '100%',
  background: '#fff',
  border: 'none',
  padding: ' 1rem',
  textAlign: 'left',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize:"1.8rem",
  color:"$brownDark900",
  '&:hover': {
    background: '$brownLight100',
  },
  '&[aria-expanded="true"]': {
    background: '#f0f0f0',
  },
});

export const AccordionContent = styled('div', {
  padding: '1rem',
  display: 'none',
  fontSize:"1.6rem",
  color:"$gray",
  '&[aria-hidden="false"]': {
    display: 'block',
  },
});
