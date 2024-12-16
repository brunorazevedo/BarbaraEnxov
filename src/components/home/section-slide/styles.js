import { styled } from "../../../styles";

// Estilos para SwiperContainer
export const SwiperContainer = styled("div", {
  position: "relative",
  width: "100%",
  height: "800px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  "@media (max-width: 558px)": {
    height: "600px",
  },
});

// Estilos para ImageWrapper com um fundo escuro
export const ImageWrapper = styled("div", {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Fundo escuro semi-transparente
    zIndex: 1,
  },
});

// Estilos para o Overlay
export const Overlay = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white", // Cor do texto e botão
  zIndex: 2,
  h1: {
    fontSize: "4.0rem",
    padding: "0 1.6rem",
    textAlign: "center",
    lineHeight: 1.3,
    "@media (max-width: 558px)": {
      fontSize: "3.2rem",
    },
  },
  h2: {
    textAlign: "center",
    padding: "0 2.6rem",
    fontSize: "1.8rem",
  },
});

// Estilos para o botão
export const Button = styled("button", {
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "$white",
  color: "$brownDark900",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$brownDark",
    color: "white",
  },
});
