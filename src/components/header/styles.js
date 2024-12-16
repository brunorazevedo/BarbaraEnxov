import { styled } from "../../styles";
import { Container } from "../../styles/global";

export const HeaderStyle = styled("header", {
  backgroundColor: "$brownLight100",

  [`${Container}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    "@media (max-width: 980px)": {
      padding: "0 1.4rem",
    },
  },
  ul: {
    display: "flex",
    gap: "1.6rem",
  },
  a: {
    fontSize: "1.8rem",
    fontWeight: "500",
    color: "$brownDark900",
  },
  ".logo": {
    padding: "1.2rem 0",
  },
  "@tablet": {
    ".links-menu": {
      display: "none",
    },
  },
});

export const MobileMenuIcon = styled("div", {
  display: "none",
  fontSize: "2.4rem",
  cursor: "pointer",
  "@tablet": {
    display: "block",
  },
});

export const MobileMenu = styled("div", {
  position: "absolute",
  top: "100%",
  right: 0,
  width: "100%",
  backgroundColor: "$brownLight100",
  zIndex: 10,
  maxHeight: 0,
  overflow: "hidden",
  transition: "max-height 0.3s ease-in-out",
  "&.is-open": {
    maxHeight: "300px", // Ajuste conforme necessário
  },
  "@tablet": {
    display: "block",
  },
});

export const MobileMenuLinks = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  padding: "1.6rem",
});
