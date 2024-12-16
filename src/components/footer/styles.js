import { styled } from "../../styles";

export const StyledFooter = styled("section", {
  padding: "0 .8rem",
});

export const StyledContentFooter = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  alignItems: "center",
  gap: "4.0rem",
  "@media (max-width: 768px)": {
    gridTemplateColumns: "1fr 1fr",
    marginTop: "6.4rem",
  },

  "@media (max-width: 600px)": {
    gridTemplateColumns: "1fr",
  },

  ".left ": {
    fontSize: "1.4rem",
    lineHeight: 1.5,
    display: "flex",
    flexDirection: "column",
    gap: "1.6rem",
    "@media (max-width: 600px)": {
      width: "300px",
    },
  },

  ".center": {
    fontSize: "1.4rem",
    display: "flex",
    flexDirection: "column",
    gap: "3.2rem",
    ".info": {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.5,
    },
  },

  ".right": {
    fontSize: "1.4rem",
    display: "flex",
    flexDirection: "column",
    gap: "3.2rem",
    ".info": {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.5,
      "@media (max-width: 768px)": {
        marginBottom: "6.4rem",
      },
    },
  },
});

export const StyledBorderFooter = styled("div", {
  width: "100%",
  height: "1px",
  backgroundColor: "#685A4F",
  marginTop: "3.2rem",
  "@media (max-width: 768px)": {},
});

export const StyledFooterContentCopy = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.6rem",
  padding: "1.6rem 0",
  p: {
    fontSize: "1.4rem",
    textAlign: "center",
    color: "#685A4F",
  },
  "@media (max-width: 768px)": {},
});
