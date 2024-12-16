import { styled } from '@stitches/react';

export const StyledSectionProducts = styled('section', {

  marginBottom: "4rem",
});

export const StyledListProducts = styled('div', {
  display: 'grid',
  gap: '16px',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // Mínimo de 300px por coluna
  '.product-card': {
    maxWidth: '100%', // Garante que cada card ocupe a largura máxima disponível na coluna
  },
  '.product-image': {
    maxWidth: '100%', // A imagem não deve ultrapassar o tamanho do contêiner pai
    height: '80px', // Altura ajustada automaticamente para manter a proporção
    display: 'block', // Garante que a imagem se comporte corretamente dentro do layout
  },

  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    padding: "0 1.2rem", // Dois cards por linha quando a tela for igual ou menor que 768px
  },

  '@media (max-width: 530px)': {
    gridTemplateColumns: '1fr 1fr',
    padding: "0 1.2rem",
  },

  '@media (max-width: 480px)': {
    gridTemplateColumns: '1fr',
    padding: "0 1.2rem",
  },

  '@media (max-width: 630px)': {
    '.product-image': {
      width: '50%',
    },
  },
});