import { styled } from '@stitches/react';

export const StyleCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '16px',
  position: 'relative', // Necessário para posicionamento do overlay

  '.image': {
    position: 'relative',
    width: '100%',
    maxWidth: '300px', // Largura máxima opcional para limitar o tamanho máximo da imagem
    height: '400px', // Altura automática para manter a proporção da imagem
    overflow: 'hidden', // Esconde qualquer conteúdo que ultrapasse o contêiner pai
    img: {
      objectFit: 'cover', // Mantém a proporção da imagem e cobre todo o espaço disponível
      width: '100%',
      height: '100%',
      maxWidth: '100%', // Garante que a imagem não ultrapasse o contêiner pai
      maxHeight: '100%', // Evita que a imagem ultrapasse o contêiner pai
      borderRadius: '.8rem',
    },
  },

  '.overlay': {
    position: 'absolute',
    bottom: '-20%', // Começa fora da imagem
    left: 0,
    width: '100%',
    height: '20%', // Altura inicial da tarja
    background: 'rgba(0, 0, 0, 0.6)', // Cor do overlay preto com transparência
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease, bottom 0.3s ease', // Transições suaves para opacity e bottom
    color: '#fff', // Cor do texto no overlay
    fontSize: '1.4rem',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: '.8rem',
    overflow: 'hidden', // Esconde qualquer conteúdo que ultrapasse o overlay

    span: {
      padding: '8px 16px',
    },
  },

  '&:hover .overlay': {
    bottom: 0, // Move a tarja para cima
    opacity: 1, // Torna o overlay visível
  },

  '.info': {
    width: '100%',
    textAlign: 'center',
    marginTop: '8px',
    h3: {
      fontSize: '1.6rem',
      fontWeight: 'bold',
      margin: 0,
      lineHeight: '1.2',
      color:"$brownDark900",
    },
  },
});
