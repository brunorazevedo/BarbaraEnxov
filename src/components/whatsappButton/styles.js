import { styled } from '@stitches/react';

export const Button = styled('button', {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366',
    color: 'white',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    border: 'none',
    cursor: 'pointer',
    zIndex: 2000,
    '&:hover': {
      backgroundColor: '#128C7E',
    },
  });