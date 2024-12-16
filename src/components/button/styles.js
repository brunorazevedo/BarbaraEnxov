import { styled } from "../../styles";

export const ContainerButton = styled("div", {
  display: "grid",
  placeItems: "center",
});

export const StyleButton = styled("button", {
  maxWidth: "25rem",
  padding: " 1.2rem 2.0rem",
  outline: "none",
  border: " none",
  backgroundColor: "$brownDark",
  color: "$brownLight100",
  fontSize: "1.6rem",
  fontWeight: 500,
  borderRadius: "0.4rem",
  display: "flex",
  alignContent: "center",
  gap: "1.6rem",
  "&:hover": {
    backgroundColor: "$brownLight",
    color: "$brownDark900",
    border: "1px solid ",
  },
});
