import { styled } from '@stitches/react';

// Estilização usando Stitches
export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.6rem',
    padding: '20px 1rem',
    borderRadius: '8px',
  });
  
  export const Item = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  });
  
  export const Icon = styled('div', {
    color: '#5c3d2e', // A cor dos ícones
  });
  
  export const Text = styled('span', {
    fontSize: '16px',
    color: '#333',
  });