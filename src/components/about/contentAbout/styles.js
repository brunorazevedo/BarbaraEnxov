import { styled } from "../../../styles";
import { Container } from "../../../styles/global";

export const StyledContentAbout = styled("section", {
  [`${Container}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (max-width: 840px)": {
      flexDirection: "column",
    },
  },
  marginTop: "6.4rem",

  ".text": {
    width: "50%",
    display: "flex",
    flexDirection: " column",
    "@media (max-width: 840px)": {
      width: "90%",
      marginBottom: "3.2rem",
    },

    h1: {
      fontSize: "2.4rem",
      textAlign: "center",
      marginBottom: " 1.6rem",
      color: "$brownDark",
    },
    gap: "1.6rem",
    p: {
      fontSize: " 1.6rem",
      lineHeight: "1.5",
      fontWeight: "500",
    },
  },

  ".image": {
    "@media (max-width: 840px)": {
      width: "100%",
      padding: "2.4rem",
      display: "flex",
      justifyContent: "center",
    },
  },
});
