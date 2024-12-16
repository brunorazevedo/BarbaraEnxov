import { styled } from "@stitches/react";

export const StyledSectionTitleHome = styled("section", {
  padding: "40px 0",
  ".title": {
    textAlign: "center",
    marginBottom: "4.8rem",
    h2: {
      display: "block",
      fontSize: "3.2rem",
      fontWeight: "bold",
      color: "$brownDark900",
      lineHeigth: 0,
      "@media (max-width: 600px)": {
        fontSize: "2.4rem",
        padding: "0 1.6rem",
      },
    },
    p: {
      fontSize: "1.8rem",
      color: "$gray",
      "@media (max-width: 600px)": {
        fontSize: "1.6rem",
        padding: "0 1.6rem",
      },
    },
  },
});
