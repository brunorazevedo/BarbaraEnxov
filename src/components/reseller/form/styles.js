import { styled } from '@stitches/react';

export const StyledFormContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  marginTop:"4.8rem",
  marginBottom:"4.8rem",
});

export const StyledFormWrapper = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: '1200px',
  flexDirection: 'row',
  gap:"3.2rem",
  '@media (max-width: 934px)': {
    flexDirection: 'column-reverse',
    alignItems:"center",
},
});

export const StyledForm = styled('form', {
  width: '100%',
  maxWidth: '600px',
  backgroundColor: '$brownLight',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});


export const StyledInput = styled('input', {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '4px',
  border: '1px solid $brownLight',
  fontSize: '16px',
  '&::placeholder': {
    color: '$brownLight',
    
  },
  '@media (max-width: 520px)': {
      fontSize:"1.4rem",
  },
});

export const StyledTextarea = styled('textarea', {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '4px',
  border: '1px solid $brownLight',
  fontSize: '16px',
  '&::placeholder': {
    color: '$brownLight',
  },
});

export const StyledButton = styled('button', {
  width: '100%',
  padding: '10px 20px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '$brownDark',
  color: '$white',
  fontSize: '16px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$brownDark900',
  },
});

export const StyledLabel = styled('label', {
  marginBottom: '5px',
  color: '$brownDark',
  fontSize: '14px',
  fontWeight: 'bold',
});

export const StyledFormRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
  '& > div': {
    flex: 1,
  },
});

export const StyledImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  maxWidth: '600px',
});

export const StyledTextOverlay = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  padding: '20px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '$white',
  textAlign: 'left',
  zIndex: 1,
  "h1": {
    fontSize: "3.2rem",
    '@media (max-width: 520px)': {
      fontSize:"2.4rem",
  },
  },
  "p": {
    fontSize: "1.6rem",
    '@media (max-width: 520px)': {
      fontSize:"1.4rem",
  },
  }
});

export const StyledPopup = styled('div', {
  position: 'fixed',
  top: '20px',
  right: '20px',
  backgroundColor: 'green', // Ou qualquer cor de sua escolha
  color: '$white',
  padding: '10px 20px',
  borderRadius: '4px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  zIndex: 1000,
  transition: 'opacity 0.5s',
  fontSize:"1.4rem",
});