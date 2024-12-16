import { styled } from "../../styles";

export const StyleHeaderTitle = styled("div", {
  backgroundColor: "$brownDark",
  width: "100%",
  color: "$brownLight",
  paddingTop: "1.8rem",
  paddingBottom: "1.8rem",
  fontSize: "1.6rem",
  marginBottom: "6.4rem",
  "@media (max-width: 980px)": {
    padding: "1.8rem 1.6rem",
  },
});
