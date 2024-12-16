// pages/404.tsx
import { styled, keyframes } from "@stitches/react";
import Link from "next/link";

// Animação para o número 404
const pulse = keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.05)" },
  "100%": { transform: "scale(1)" },
});

// Container centralizado
const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "linear-gradient(135deg, #1a1a1a, #121212)",
  color: "#fff",
  textAlign: "center",
  padding: "0 20px",
});

// Título com animação
const Title = styled("h1", {
  fontSize: "10rem",
  fontWeight: "bold",
  margin: "0",
  animation: `${pulse} 2s infinite ease-in-out`,
  letterSpacing: "10px",
  color: "$brownLight",
});

// Texto de apoio
const SubText = styled("p", {
  fontSize: "1.5rem",
  marginTop: "20px",
  color: "$brownLight",
});

// Botão estilizado
const BackButton = styled(Link, {
  marginTop: "40px",
  padding: "10px 20px",
  fontSize: "1.2rem",
  backgroundColor: "$brownDark",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "5px",
  transition: "background 0.3s ease",

  "&:hover": {
    backgroundColor: "$brownLight",
  },
});

export default function PageNotFound() {
  return (
    <Container>
      <Title>404</Title>
      <SubText>
        Oops... parece que essa página que você está acessando não existe.
      </SubText>
      <SubText>Vamos voltar para a página inicial?</SubText>
      <BackButton href="/">Voltar à Página Inicial</BackButton>
    </Container>
  );
}
